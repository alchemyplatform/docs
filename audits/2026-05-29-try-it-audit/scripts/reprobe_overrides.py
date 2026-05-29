#!/usr/bin/env python3
"""Re-probe specific specs with a corrected server override and merge back into results.json."""
import asyncio
import json
import sys
import time
from pathlib import Path
from urllib.parse import urlparse
import httpx

REPO = Path("/root/docs-repo")
OUT = Path("/root/audit")
SPECS_DIR = REPO / "content/api-specs"

OVERRIDES = {
    "wallet-api": "https://api.g.alchemy.com/v2",
}


def build_params(method):
    examples = method.get("examples") or []
    if not examples:
        return None, "no example"
    ex = examples[0]
    if not isinstance(ex, dict):
        return None, "example not object"
    ex_params = ex.get("params")
    if ex_params is None:
        return None, "example missing params"
    ps = method.get("paramStructure", "by-position")
    if ps == "by-name":
        out = {}
        for p in ex_params:
            if isinstance(p, dict) and "value" in p and p.get("name") is not None:
                out[p["name"]] = p["value"]
        return out, None
    else:
        out = [p["value"] if (isinstance(p, dict) and "value" in p) else p for p in ex_params]
        return out, None


async def main():
    with (OUT / "results.json").open() as f:
        R = json.load(f)

    # Build re-probe list from spec
    new_probes = []
    for spec_name, server_url in OVERRIDES.items():
        # Try both alchemy/json-rpc and chains paths
        candidates = [
            SPECS_DIR / f"alchemy/json-rpc/{spec_name}.json",
            SPECS_DIR / f"chains/{spec_name}.json",
        ]
        spec_path = next((p for p in candidates if p.exists()), None)
        if not spec_path:
            print(f"spec not found: {spec_name}", file=sys.stderr)
            continue
        with spec_path.open() as f:
            d = json.load(f)
        url = server_url.rstrip("/") + "/docs-demo"
        for method in d.get("methods", []):
            name = method.get("name")
            if not name:
                continue
            params, err = build_params(method)
            new_probes.append({
                "spec": spec_name,
                "method": name,
                "params": params,
                "paramStructure": method.get("paramStructure", "by-position"),
                "url": url,
                "skipped_reason": err,
            })

    print(f"Re-probing {len(new_probes)} methods on overridden endpoints", file=sys.stderr)

    async def one(client, p):
        if p["skipped_reason"]:
            return None  # leave existing entry alone
        body = {"jsonrpc": "2.0", "id": 1, "method": p["method"], "params": p["params"]}
        headers = {
            "Content-Type": "application/json",
            "Origin": "https://www.alchemy.com",
            "Referer": "https://www.alchemy.com/",
        }
        backoff = 3.0
        for attempt in range(4):
            try:
                r = await client.post(p["url"], json=body, headers=headers, timeout=30.0)
            except Exception as e:
                return {"status": "fail", "reason": f"transport {type(e).__name__}", "rpc_error": str(e)[:200], "http_status": None}
            if r.status_code == 429 and attempt < 3:
                await asyncio.sleep(backoff)
                backoff *= 1.8
                continue
            if r.status_code != 200:
                return {"status": "fail", "reason": f"HTTP {r.status_code}", "http_status": r.status_code, "rpc_error": (r.text or "")[:300]}
            try:
                j = r.json()
            except Exception:
                return {"status": "fail", "reason": "non-JSON response", "http_status": 200, "rpc_error": (r.text or "")[:300]}
            if "error" in j and j["error"] is not None:
                e = j["error"]
                return {"status": "fail", "reason": "jsonrpc error", "http_status": 200, "rpc_error": {
                    "code": e.get("code") if isinstance(e, dict) else None,
                    "message": (e.get("message") if isinstance(e, dict) else str(e))[:300],
                    "data": (str(e.get("data"))[:300] if isinstance(e, dict) and e.get("data") is not None else None),
                }}
            if "result" in j:
                return {"status": "ok", "http_status": 200}
            return {"status": "fail", "reason": "no result, no error", "http_status": 200, "rpc_error": (r.text or "")[:300]}
        return {"status": "fail", "reason": "HTTP 429 after retry", "http_status": 429, "rpc_error": ""}

    async with httpx.AsyncClient() as client:
        sem = asyncio.Semaphore(2)
        async def worker(p):
            async with sem:
                await asyncio.sleep(0.6)  # gentle pacing
                return await one(client, p)
        outcomes = await asyncio.gather(*(worker(p) for p in new_probes))

    # Merge: update entries in R matching (spec, method)
    by_key = {(r["spec"], r["method"]): i for i, r in enumerate(R)}
    updates = 0
    for p, outcome in zip(new_probes, outcomes):
        if outcome is None:
            continue
        key = (p["spec"], p["method"])
        idx = by_key.get(key)
        if idx is None:
            continue
        existing = R[idx]
        # Update URL too, since we changed the target
        existing.update({k: outcome[k] for k in outcome})
        existing["url"] = p["url"]
        existing["params"] = p["params"]
        existing["paramStructure"] = p["paramStructure"]
        # Clear conflicting old fields
        if outcome.get("status") == "ok":
            existing.pop("reason", None)
            existing.pop("rpc_error", None)
        updates += 1

    with (OUT / "results.json").open("w") as f:
        json.dump(R, f, indent=2)
    print(f"Updated {updates} entries", file=sys.stderr)


if __name__ == "__main__":
    asyncio.run(main())
