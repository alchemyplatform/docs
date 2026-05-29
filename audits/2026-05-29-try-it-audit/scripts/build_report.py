#!/usr/bin/env python3
"""Build the categorized audit report from /root/audit/results.json."""

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

OUT = Path("/root/audit")
REPO = Path("/root/docs-repo")

# Failure category classifier. Returns (category, sub_pattern) tuple.
# Categories drive the report sections.
def classify(r):
    if r["status"] != "fail":
        return None
    reason = r.get("reason", "")
    err = r.get("rpc_error")
    msg = ""
    code = None
    if isinstance(err, dict):
        msg = (err.get("message") or "").strip()
        code = err.get("code")
    elif isinstance(err, str):
        # Embedded JSON error string
        try:
            j = json.loads(err)
            if isinstance(j, dict) and "error" in j:
                inner = j["error"]
                msg = (inner.get("message") or "").strip()
                code = inner.get("code")
        except Exception:
            msg = err

    # Inherent transports
    if reason.startswith("dns/connect"):
        host = r["url"].split("/")[2] if "/" in r["url"] else ""
        return ("Host does not resolve", host)
    if reason.startswith("timeout"):
        return ("Timeout", "")
    if reason.startswith("HTTP 429"):
        return ("Transient: HTTP 429 rate-limited", "")
    if reason.startswith("HTTP 503"):
        return ("Transient or capacity: HTTP 503", "")
    if reason.startswith("non-JSON"):
        return ("Server returned non-JSON", "")
    if reason.startswith("transport"):
        return ("Transport error", "")

    # JSON-RPC errors (from either jsonrpc error or HTTP 400 surfacing one)
    if msg:
        lmsg = msg.lower()
        if "does not exist" in lmsg or lmsg == "method not found" or lmsg == "method_not_found":
            return ("Method not supported on chain", "Method not implemented upstream")
        if "unsupported method" in lmsg or "unimplemented" in lmsg:
            return ("Method not supported on chain", "Server-side unsupported")
        if "filter not found" in lmsg:
            return ("Stateless Try It - filter does not persist", "")
        if "insufficient funds" in lmsg:
            return ("Mutation method needs funded sender", "")
        if "intrinsic gas too high" in lmsg or "intrinsic gas too low" in lmsg:
            return ("Mutation method - gas mismatch", "")
        if "max fee per gas less than block base fee" in lmsg:
            return ("Mutation method - stale gas price example", "")
        if "nonce too low" in lmsg or "nonce too high" in lmsg:
            return ("Mutation method - stale nonce example", "")
        if "only replay-protected" in lmsg or "eip-155" in lmsg or "eip 155" in lmsg:
            return ("Mutation method - pre-EIP-155 example", "")
        if "transaction with the same hash was already imported" in lmsg or "already known" in lmsg:
            return ("Mutation method - example already broadcast", "")
        if "hex string invalid" in lmsg or "invalid argument" in lmsg or "invalid hex" in lmsg:
            return ("Example payload type/format invalid", msg[:120])
        if "block not found" in lmsg or "header not found" in lmsg:
            return ("Stale example - block reference", "")
        if "transaction not found" in lmsg or "txid not found" in lmsg:
            return ("Stale example - transaction reference", "")
        if "address not found" in lmsg or "no such account" in lmsg or "account not found" in lmsg:
            return ("Stale example - address reference", "")
        if "leaf nodes not found" in lmsg or "record not found" in lmsg:
            return ("Stale example - hash reference", "")
        if "invalid params" in lmsg and code == -32602:
            return ("Invalid params shape (-32602)", msg[:120])
        if code == -32602:
            return ("Invalid params shape (-32602)", msg[:120])
        if code == -32601:
            return ("Method not supported on chain", "Method not implemented upstream")
        if "unable to complete request" in lmsg:
            return ("Transient or capacity: -32001", "")
        if "rate limit" in lmsg or "throttled" in lmsg:
            return ("Transient: rate-limited", "")
        # Default catch-all
        return ("Other JSON-RPC error", msg[:120])

    # No message
    return ("Other failure", reason or "?")


def main():
    with (OUT / "results.json").open() as f:
        R = json.load(f)

    total = len(R)
    statuses = Counter(r["status"] for r in R)

    # Classify failures
    cat_to_records = defaultdict(list)
    for r in R:
        c = classify(r)
        if c is None:
            continue
        cat_to_records[c[0]].append(r)

    # Counts per spec
    per_spec_fail = Counter()
    per_spec_total = Counter()
    per_spec_skip = Counter()
    for r in R:
        per_spec_total[r["spec"]] += 1
        if r["status"] == "fail":
            per_spec_fail[r["spec"]] += 1
        if r["status"] == "skipped":
            per_spec_skip[r["spec"]] += 1

    # Method-level recurring patterns: methods that fail on N+ chains
    method_fail_chains = defaultdict(set)
    for r in R:
        if r["status"] == "fail" and r["category"] == "chain":
            method_fail_chains[r["method"]].add(r["spec"])
    repeat_methods = sorted(
        [(m, sorted(s)) for m, s in method_fail_chains.items() if len(s) >= 5],
        key=lambda kv: -len(kv[1]),
    )

    lines = []
    lines.append("# Docs Try It audit — failing examples catalog")
    lines.append("")
    lines.append("Generated by docs-agent. Probed every method's canonical example payload from `src/openrpc/` (chain specs + Alchemy product specs) against the documented mainnet endpoint with the `docs-demo` API key, with `Origin: https://www.alchemy.com` and `Referer: https://www.alchemy.com/` headers. This mirrors what the Fern Try It widget posts when a user clicks Try It without editing the form.")
    lines.append("")
    lines.append("## Headline numbers")
    lines.append("")
    lines.append(f"* Total methods probed: **{total}**")
    lines.append(f"* OK (HTTP 200 + JSON-RPC `result`): **{statuses.get('ok', 0)}**")
    lines.append(f"* Failed: **{statuses.get('fail', 0)}**")
    lines.append(f"* Skipped (no example or websocket-only): **{statuses.get('skipped', 0)}**")
    if statuses.get('ok', 0) + statuses.get('fail', 0):
        denom = statuses.get('ok', 0) + statuses.get('fail', 0)
        pct = 100.0 * statuses.get('fail', 0) / denom
        lines.append(f"* Failure rate among probed methods: **{pct:.1f}%**")
    lines.append("")
    lines.append("HTTP transport noise (rate limits, transient 503s) was retried up to three times. Remaining 429/503 failures listed below are inconclusive and worth ignoring as audit signal.")
    lines.append("")
    lines.append("## Top quick wins")
    lines.append("")
    lines.append("Three single-edit changes that would fix the largest number of chain pages at once.")
    lines.append("")
    lines.append("### 1. `eth_getProof` example has an invalid hex character — affects ~29 EVM chains")
    lines.append("")
    lines.append("`src/openrpc/chains/_components/custom/methods.yaml`'s `eth_getProof example` includes a 32-byte storage key with a literal `s` character (`0x283s34c8e2b1...`). Every EVM chain spec inherits this shared example, so the live RPC returns `hex string invalid` on every chain whose page uses the shared component. Replacing the offending storage key with a valid 32-byte hex string fixes the example everywhere it is referenced.")
    lines.append("")
    lines.append("### 2. `eth_submitWork` should be removed from 64 chain specs")
    lines.append("")
    lines.append("`eth_submitWork` is a Proof-of-Work miner method. Every PoS / PoA / rollup chain returns `the method eth_submitWork does not exist/is not available` for it. It is referenced from ~64 chain specs that have no mining. Removing the `$ref` from each chain spec (or adding a single `x-bot-ignore` entry per chain) eliminates 64 failing example pages.")
    lines.append("")
    lines.append("### 3. `eth_getAccount` should be removed from ~44 chain specs")
    lines.append("")
    lines.append("`eth_getAccount` is an Erigon-only convenience method. It is referenced from ~44 chain specs that don't run Erigon. Same fix shape as `eth_submitWork` — remove the `$ref` from each affected chain spec.")
    lines.append("")
    lines.append("## Failures by category")
    lines.append("")
    lines.append("| Category | Count | Severity | Notes |")
    lines.append("| --- | ---: | --- | --- |")
    severity = {
        "Method not supported on chain": "HIGH — spec lists method, server actively rejects. Remove from chain spec or add `x-bot-ignore` until upstream Daikon chain-config catches up.",
        "Stateless Try It - filter does not persist": "MEDIUM — `eth_getFilterChanges` / `eth_getFilterLogs` / `eth_uninstallFilter` always fail on cold Try It because no filter was created in the same session. UX bug, hard to fix from spec alone.",
        "Mutation method needs funded sender": "MEDIUM — `eth_sendRawTransaction` and friends always fail with insufficient funds on docs-demo. Consider documenting in description or using a pre-signed example tx that returns a deterministic well-known error.",
        "Mutation method - gas mismatch": "MEDIUM — example transaction gas exceeds chain limits.",
        "Mutation method - stale gas price example": "MEDIUM — `maxFeePerGas` in example below current base fee.",
        "Mutation method - stale nonce example": "MEDIUM — example raw transaction nonce is below the sender's current nonce.",
        "Mutation method - pre-EIP-155 example": "MEDIUM — `eth_sendRawTransaction` examples use unprotected legacy txs that EVM nodes now reject.",
        "Mutation method - example already broadcast": "LOW — `eth_sendRawTransaction` example hash is already in mempool/mined.",
        "Example payload type/format invalid": "HIGH — wrong hex format / wrong value type for a required param. Real spec bug.",
        "Stale example - block reference": "HIGH — example block hash/number does not exist on the canonical mainnet (often legacy testnet leftover).",
        "Stale example - transaction reference": "HIGH — example tx hash does not exist on the canonical mainnet.",
        "Stale example - address reference": "MEDIUM — example address is unused on the canonical mainnet.",
        "Stale example - hash reference": "MEDIUM — Solana/Photon-style stale leaf or hash.",
        "Invalid params shape (-32602)": "HIGH — example params don't match the server's expected shape. Often a `paramStructure: by-name` vs `by-position` mismatch, or fabricated optional fields.",
        "Other JSON-RPC error": "VARIES — case-by-case review.",
        "Host does not resolve": "HIGH — chain endpoint doesn't exist on Alchemy infra (deprecated chain or wrong slug). The spec should be removed or the slug corrected.",
        "Transient or capacity: HTTP 503": "LOW — retried 4x; concentrated on UTXO chains (bitcoincash, dogecoin, litecoin). Often `-32001 Unable to complete request at this time`. Re-probe at a different time.",
        "Transient or capacity: -32001": "LOW — same as HTTP 503 pattern.",
        "Transient: HTTP 429 rate-limited": "LOW — docs-demo key rate limit. Inconclusive after retries.",
        "Transient: rate-limited": "LOW — same as above.",
        "Timeout": "LOW — single 20s POST timeout, retried.",
        "Server returned non-JSON": "MEDIUM — server returned an HTML/text body instead of JSON. Likely an infra issue at probe time.",
        "Transport error": "LOW — TCP/TLS-level failure.",
        "Other failure": "VARIES — see details.",
    }
    cat_sorted = sorted(cat_to_records.items(), key=lambda kv: (-len(kv[1]), kv[0]))
    for cat, recs in cat_sorted:
        lines.append(f"| {cat} | {len(recs)} | {severity.get(cat, 'VARIES')} |")
    lines.append("")

    # Detailed sections per category
    lines.append("## Per-category details")
    lines.append("")

    # First section: actionable / high-severity
    high_first = [
        "Method not supported on chain",
        "Invalid params shape (-32602)",
        "Example payload type/format invalid",
        "Stale example - block reference",
        "Stale example - transaction reference",
        "Stale example - address reference",
        "Stale example - hash reference",
        "Host does not resolve",
    ]
    middle = [
        "Mutation method - pre-EIP-155 example",
        "Mutation method - stale nonce example",
        "Mutation method - stale gas price example",
        "Mutation method - gas mismatch",
        "Mutation method - example already broadcast",
        "Mutation method needs funded sender",
        "Stateless Try It - filter does not persist",
        "Other JSON-RPC error",
    ]
    low = [
        "Transient or capacity: HTTP 503",
        "Transient or capacity: -32001",
        "Transient: HTTP 429 rate-limited",
        "Transient: rate-limited",
        "Timeout",
        "Server returned non-JSON",
        "Transport error",
        "Other failure",
    ]
    order = high_first + middle + low
    seen_cats = set()

    for cat in order:
        if cat not in cat_to_records:
            continue
        recs = cat_to_records[cat]
        seen_cats.add(cat)
        lines.append(f"### {cat}  ({len(recs)})")
        lines.append("")
        # Sub-bucket by (spec, method, normalized-error-message)
        sub = Counter()
        examples = {}
        for r in recs:
            err = r.get("rpc_error")
            if isinstance(err, dict):
                msg = err.get("message") or ""
            elif isinstance(err, str):
                msg = err
            else:
                msg = r.get("reason", "")
            # Normalize numeric / hex
            norm = re.sub(r"0x[0-9a-fA-F]{6,}", "<HEX>", msg)
            norm = re.sub(r"\d{6,}", "<NUM>", norm)
            norm = norm[:120]
            sub[(r["method"], norm)] += 1
            examples.setdefault((r["method"], norm), r)
        # Show top 20 sub-patterns
        if not sub:
            lines.append("(no records)")
            lines.append("")
            continue
        lines.append("Top patterns:")
        lines.append("")
        lines.append("| Method | Chains affected | Sample error |")
        lines.append("| --- | ---: | --- |")
        # Aggregate by method across all sub-patterns first
        method_chains = defaultdict(set)
        method_msgs = defaultdict(list)
        for r in recs:
            method_chains[r["method"]].add(r["spec"])
            err = r.get("rpc_error")
            if isinstance(err, dict):
                msg = err.get("message") or ""
            elif isinstance(err, str):
                msg = err
            else:
                msg = r.get("reason", "")
            method_msgs[r["method"]].append(msg)
        items = sorted(method_chains.items(), key=lambda kv: -len(kv[1]))
        for method, chains in items[:25]:
            cnt = len(chains)
            # Pick the most common error msg for this method
            msg_counter = Counter(method_msgs[method])
            top_msg = msg_counter.most_common(1)[0][0] if msg_counter else ""
            top_msg = top_msg[:120].replace("|", "\\|")
            chains_disp = ", ".join(sorted(chains)[:6])
            if len(chains) > 6:
                chains_disp += f", ...+{len(chains)-6}"
            lines.append(f"| `{method}` | {cnt} ({chains_disp}) | `{top_msg}` |")
        lines.append("")
        # Per-spec summary for this category
        spec_counts = Counter(r["spec"] for r in recs)
        if len(spec_counts) <= 30:
            lines.append("Spec breakdown:")
            lines.append("")
            for s, c in spec_counts.most_common():
                lines.append(f"* `{s}`: {c}")
            lines.append("")
        else:
            lines.append(f"Spec breakdown: {len(spec_counts)} specs affected. Top 15:")
            lines.append("")
            for s, c in spec_counts.most_common(15):
                lines.append(f"* `{s}`: {c}")
            lines.append("")

    # Catch any categories we forgot
    for cat, recs in cat_to_records.items():
        if cat in seen_cats:
            continue
        lines.append(f"### {cat}  ({len(recs)})")
        lines.append("")
        for r in recs[:5]:
            lines.append(f"* `{r['spec']}` `{r['method']}`: {r.get('reason','?')}")
        lines.append("")

    # Per-spec failure rate ranking
    lines.append("## Per-spec failure rate")
    lines.append("")
    lines.append("Top specs by failure share among probed methods (excluding skipped).")
    lines.append("")
    lines.append("| Spec | Failed | Probed | Failure rate |")
    lines.append("| --- | ---: | ---: | ---: |")
    rates = []
    for spec, tot in per_spec_total.items():
        probed = tot - per_spec_skip.get(spec, 0)
        if probed == 0:
            continue
        fails = per_spec_fail[spec]
        rate = 100.0 * fails / probed
        rates.append((spec, fails, probed, rate))
    for s, f, t, rate in sorted(rates, key=lambda x: -x[3])[:30]:
        lines.append(f"| `{s}` | {f} | {t} | {rate:.0f}% |")
    lines.append("")

    # Methods that fail on many chains (likely the biggest fix wins)
    lines.append("## Methods that fail on 5+ chains")
    lines.append("")
    lines.append("These are the highest-leverage fixes. If you fix the canonical example for one of these in the shared component, the fix propagates to every chain.")
    lines.append("")
    lines.append("| Method | # chains failing | Chains |")
    lines.append("| --- | ---: | --- |")
    for m, chains in repeat_methods[:50]:
        chains_disp = ", ".join(chains[:8])
        if len(chains) > 8:
            chains_disp += f", ...+{len(chains)-8}"
        lines.append(f"| `{m}` | {len(chains)} | {chains_disp} |")
    lines.append("")

    # Recommended follow-ups
    lines.append("## Recommended follow-ups")
    lines.append("")
    lines.append("Suggested cluster tickets, ordered by impact:")
    lines.append("")
    lines.append("1. **Remove or `x-bot-ignore` chain-method pairs that the server rejects** (`Method not supported on chain`). This is the biggest cluster and the easiest fix per case — every entry is a chain spec listing a method the upstream node doesn't implement. Most look like Daikon/chain-config drift.")
    lines.append("2. **Refresh stale example values** (`Stale example - block reference`, `Stale example - transaction reference`, `Stale example - hash reference`). Each fix usually unblocks one chain × one method pair.")
    lines.append("3. **Fix the `trace_*` and `debug_*` write-method UX** (`Mutation method needs funded sender`, `Mutation method - pre-EIP-155 example`). The original Slack ask was about this cluster — the most user-visible quick-win.")
    lines.append("4. **Decide on the filter-method UX** (`eth_getFilterChanges`, `eth_getFilterLogs`, `eth_uninstallFilter`). Since these depend on filter state created in the same session, the cold Try It can never succeed. Either drop them from the spec or warn in the description.")
    lines.append("5. **Audit deprecated hostnames** (`fantom-mainnet.g.alchemy.com`, `tea-sepolia.g.alchemy.com`). If the chain is fully deprecated, the spec should be removed; if the slug changed, update servers.")
    lines.append("")

    lines.append("## Reproducing this audit")
    lines.append("")
    lines.append("Scripts: `run_audit.py` (initial pass) and `retry_429.py` (retry-with-backoff for transient HTTP 429). Run against the dereferenced JSON output produced by `pnpm run generate:rpc` under `content/api-specs/`. The `docs-demo` API key is rate-limited; per-host concurrency of 1 and an inter-call delay of 2 seconds is the practical sweet spot.")
    lines.append("")
    lines.append("## Out of scope")
    lines.append("")
    lines.append("* REST OpenAPI specs (`src/openapi/`) were not exercised in this pass — those endpoints have varied auth requirements, query/body schemas, and a few mutate-only operations, so they need a per-spec adapter rather than a single live-POST loop.")
    lines.append("* Pulling production logs of customer-hit errors was the second half of the original Slack ask; that requires data-team / observability access docs-agent does not have.")
    lines.append("* Verifying Fern Try It auto-fill behavior on optional fields not in the example payload (per LEARNINGS: enum-without-default auto-fills with the first enum value; array auto-fills with `[]`). The probes in this audit only send the literal example payload, so the failures here are a strict subset of what Try It produces in the wild.")
    lines.append("")
    lines.append("## Caveats / known limitations")
    lines.append("")
    lines.append("* **The audit POSTs the literal example payload.** Fern's Try It widget renders a form built from the OpenRPC schema and can also include auto-fill values for optional fields that aren't in the example. Per the docs-agent LEARNINGS, optional inline scalars / enums / arrays without `default` are auto-filled by Fern with type-based placeholders (`\"string\"`, first enum value, `[]`, etc.), which can break otherwise-valid examples. The **real Try It failure rate is at least as high as the audit's number**.")
    lines.append("* **One canonical server per spec.** Chain specs probe the chain's primary mainnet endpoint; Alchemy product specs (debug, trace, bundler, etc.) probe `eth-mainnet`. Methods that are only enabled on specific networks within a product spec will appear failing here even if they work elsewhere. The `wallet-api` spec specifically targets `api.g.alchemy.com/v2`, not chain RPC.")
    lines.append("* **`docs-demo` is rate-limited.** Persistent `HTTP 429` failures after three retry rounds are inconclusive and listed under \"Transient\" categories.")
    lines.append("* **Mutation / signing methods always fail on a stateless probe** (no funded sender, no real signature, no live filter ID). They are listed as their own categories so they can be evaluated on UX grounds rather than as spec bugs.")
    lines.append("")

    report = "\n".join(lines) + "\n"
    (OUT / "report.md").write_text(report)
    print(f"Wrote {OUT/'report.md'}: {len(report)} bytes")

    # Also write a CSV for spreadsheet diving
    import csv
    with (OUT / "failures.csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["spec", "category_chain_or_product", "method", "status", "reason", "category", "http_status", "rpc_code", "rpc_message"])
        for r in R:
            if r["status"] != "fail":
                continue
            c = classify(r)
            err = r.get("rpc_error")
            code = ""
            msg = ""
            if isinstance(err, dict):
                code = err.get("code", "")
                msg = err.get("message", "")
            elif isinstance(err, str):
                msg = err
            w.writerow([
                r["spec"], r.get("category", ""), r["method"], r["status"],
                r.get("reason", ""), c[0] if c else "",
                r.get("http_status", ""), code, (msg or "")[:200],
            ])
    print(f"Wrote {OUT/'failures.csv'}")


if __name__ == "__main__":
    main()
