#!/usr/bin/env python3
"""
Full Try It audit: probe every method's canonical example payload against
the docs-demo endpoint and catalog failures.

For each generated OpenRPC spec under content/api-specs/{chains,alchemy/json-rpc}/:
  1. Pick the primary mainnet server URL (substituting {apiKey} -> docs-demo).
  2. For each method with an example, build the JSON-RPC body (paramStructure-aware).
  3. POST live with Origin / Referer headers.
  4. Classify response.

Output:
  /root/audit/results.json   - raw probe results
  /root/audit/report.md      - categorized markdown report
"""

import asyncio
import json
import re
import sys
import time
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse

import httpx

REPO = Path("/root/docs-repo")
SPECS_DIR = REPO / "content/api-specs"
OUT_DIR = Path("/root/audit")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Endpoint selection.
# For Alchemy product specs (debug, trace, etc.) the server list contains 40+
# networks. We probe each method on the FIRST eth-mainnet-like server, which
# is the canonical target for those products. For solana-das / solana-photon
# we probe on solana-mainnet.
PRODUCT_SERVERS = {
    "debug": "https://eth-mainnet.g.alchemy.com/v2",
    "trace": "https://eth-mainnet.g.alchemy.com/v2",
    "transfers": "https://eth-mainnet.g.alchemy.com/v2",
    "transactions-receipt": "https://eth-mainnet.g.alchemy.com/v2",
    "transaction-simulation": "https://eth-mainnet.g.alchemy.com/v2",
    "bundler": "https://eth-mainnet.g.alchemy.com/v2",
    "userop-sim": "https://eth-mainnet.g.alchemy.com/v2",
    "gas-manager-coverage": "https://eth-mainnet.g.alchemy.com/v2",
    "token": "https://eth-mainnet.g.alchemy.com/v2",
    "wallet-api": "https://api.g.alchemy.com/v2",
    "solana-das": "https://solana-mainnet.g.alchemy.com/v2",
    "solana-photon": "https://solana-mainnet.g.alchemy.com/v2",
}

# Patterns to skip when picking the "primary mainnet" server for chain specs.
TESTNET_HINTS = (
    "beacon", "sepolia", "hoodi", "fuji", "testnet", "bepolia", "curtis",
    "amoy", "holesky", "devnet", "tatara", "blaze", "katla", "linea-sepolia",
    "alfajores", "chapel", "shibuya", "shasta",  "nile", "sonic-blaze",
    "rapture", "babylon", "muster",
)

# We do not test these methods over HTTP. They are subscription/WebSocket only
# or otherwise inherently non-testable from a stateless POST.
NON_HTTP_METHODS = {
    "eth_subscribe", "eth_unsubscribe",
    "accountSubscribe", "accountUnsubscribe",
    "logsSubscribe", "logsUnsubscribe",
    "programSubscribe", "programUnsubscribe",
    "rootSubscribe", "rootUnsubscribe",
    "signatureSubscribe", "signatureUnsubscribe",
    "slotSubscribe", "slotUnsubscribe",
    "slotsUpdatesSubscribe", "slotsUpdatesUnsubscribe",
    "voteSubscribe", "voteUnsubscribe",
    "blockSubscribe", "blockUnsubscribe",
}

# Hardware send / signing methods that would mutate state. We probe them, but
# expect them to fail with a logical error (insufficient funds, bad sig) which
# is OK — flag separately.
WRITE_METHODS_PATTERN = re.compile(
    r"^(eth_sendRawTransaction|eth_sendTransaction|eth_sendBundle|"
    r"sendTransaction|sendRawTransaction|eth_signTransaction|"
    r"personal_sign|eth_sign|eth_signTypedData.*|"
    r"alchemy_simulateExecution|alchemy_sendUserOperation|"
    r"eth_sendUserOperation|wallet_sendCalls|wallet_sendPreparedCalls)$"
)


def pick_mainnet_server(servers, spec_name):
    """Pick the canonical mainnet endpoint for this spec."""
    # Override for product specs
    if spec_name in PRODUCT_SERVERS:
        return PRODUCT_SERVERS[spec_name]
    # For chain specs: first server whose URL has 'mainnet' in it
    # and isn't a beacon/testnet variant.
    candidates = []
    for s in servers:
        url = s.get("url", "")
        if not url:
            continue
        low = url.lower()
        if any(h in low for h in TESTNET_HINTS):
            continue
        candidates.append(s)
    if candidates:
        # prefer ones containing 'mainnet'
        mn = [s for s in candidates if "mainnet" in s.get("url", "").lower()]
        if mn:
            return mn[0]["url"]
        return candidates[0]["url"]
    # fall back to first server
    if servers:
        return servers[0].get("url", "")
    return None


def build_params(method):
    """Convert OpenRPC example['params'] to JSON-RPC request params."""
    examples = method.get("examples") or []
    if not examples:
        return None, "no example"

    # Pick first example. Some are wrapped under {"$ref": ...} but the
    # generator should have dereferenced.
    ex = examples[0]
    if not isinstance(ex, dict):
        return None, "example not object"

    ex_params = ex.get("params")
    if ex_params is None:
        return None, "example missing params"

    # by-name -> object {name: value}; by-position -> list of values
    ps = method.get("paramStructure", "by-position")

    if ps == "by-name":
        out = {}
        for p in ex_params:
            if not isinstance(p, dict):
                continue
            name = p.get("name")
            if name is None:
                continue
            if "value" in p:
                out[name] = p["value"]
        return out, None
    else:
        # by-position: each entry has 'value'
        out = []
        for p in ex_params:
            if isinstance(p, dict) and "value" in p:
                out.append(p["value"])
            else:
                # malformed
                out.append(p)
        return out, None


def collect_probes():
    """Walk all spec JSON files, build list of probe definitions."""
    probes = []
    for spec_path in sorted(SPECS_DIR.glob("**/*.json")):
        rel = spec_path.relative_to(SPECS_DIR)
        spec_name = spec_path.stem
        # Determine spec category
        if str(rel).startswith("chains/"):
            category = "chain"
        elif str(rel).startswith("alchemy/"):
            category = "product"
        else:
            category = "other"

        with spec_path.open() as f:
            d = json.load(f)

        servers = d.get("servers", [])
        server_url = pick_mainnet_server(servers, spec_name)
        if not server_url:
            continue
        # Substitute apiKey
        if "{apiKey}" in server_url:
            url = server_url.replace("{apiKey}", "docs-demo")
        elif server_url.endswith("/v2"):
            url = server_url + "/docs-demo"
        else:
            url = server_url.rstrip("/") + "/docs-demo"

        for method in d.get("methods", []):
            name = method.get("name")
            if not name:
                continue
            if name in NON_HTTP_METHODS:
                probes.append({
                    "spec": spec_name,
                    "category": category,
                    "method": name,
                    "skipped": "websocket only",
                    "url": url,
                })
                continue

            params, err = build_params(method)
            if err:
                probes.append({
                    "spec": spec_name,
                    "category": category,
                    "method": name,
                    "skipped": err,
                    "url": url,
                })
                continue

            probes.append({
                "spec": spec_name,
                "category": category,
                "method": name,
                "params": params,
                "paramStructure": method.get("paramStructure", "by-position"),
                "url": url,
            })
    return probes


# Per-host rate limiting via async semaphores keyed off host
class HostLimiter:
    def __init__(self, per_host_concurrency=4, min_interval=0.10):
        self._semaphores = {}
        self._last_call = {}
        self._lock = asyncio.Lock()
        self.per_host_concurrency = per_host_concurrency
        self.min_interval = min_interval

    def get_sem(self, host):
        if host not in self._semaphores:
            self._semaphores[host] = asyncio.Semaphore(self.per_host_concurrency)
        return self._semaphores[host]

    async def wait_throttle(self, host):
        async with self._lock:
            last = self._last_call.get(host, 0)
            now = time.monotonic()
            delta = now - last
            if delta < self.min_interval:
                await asyncio.sleep(self.min_interval - delta)
            self._last_call[host] = time.monotonic()


async def probe_one(client, limiter, probe):
    """Send a single JSON-RPC request and classify the response."""
    if "skipped" in probe:
        return {**probe, "status": "skipped"}

    host = urlparse(probe["url"]).hostname
    sem = limiter.get_sem(host)

    body = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": probe["method"],
        "params": probe["params"],
    }

    headers = {
        "Content-Type": "application/json",
        "Origin": "https://www.alchemy.com",
        "Referer": "https://www.alchemy.com/",
    }

    async with sem:
        await limiter.wait_throttle(host)
        try:
            r = await client.post(probe["url"], json=body, headers=headers, timeout=20.0)
        except httpx.TimeoutException:
            return {**probe, "status": "fail", "reason": "timeout", "http_status": None, "rpc_error": None}
        except httpx.ConnectError as e:
            return {**probe, "status": "fail", "reason": "dns/connect", "http_status": None, "rpc_error": str(e)[:200]}
        except Exception as e:
            return {**probe, "status": "fail", "reason": f"transport {type(e).__name__}", "http_status": None, "rpc_error": str(e)[:200]}

    http_status = r.status_code
    text = r.text or ""
    # Try parse JSON
    try:
        j = r.json()
    except Exception:
        j = None

    if http_status != 200:
        return {
            **probe,
            "status": "fail",
            "reason": f"HTTP {http_status}",
            "http_status": http_status,
            "rpc_error": text[:300],
        }

    if j is None:
        return {
            **probe,
            "status": "fail",
            "reason": "non-JSON response",
            "http_status": http_status,
            "rpc_error": text[:300],
        }

    if "error" in j and j["error"] is not None:
        err = j["error"]
        return {
            **probe,
            "status": "fail",
            "reason": "jsonrpc error",
            "http_status": http_status,
            "rpc_error": {
                "code": err.get("code") if isinstance(err, dict) else None,
                "message": (err.get("message") if isinstance(err, dict) else str(err))[:300],
                "data": (str(err.get("data"))[:300] if isinstance(err, dict) and err.get("data") is not None else None),
            },
        }

    if "result" in j:
        return {**probe, "status": "ok", "http_status": http_status}

    return {
        **probe,
        "status": "fail",
        "reason": "no result, no error",
        "http_status": http_status,
        "rpc_error": text[:300],
    }


async def main():
    print(f"Collecting probes from {SPECS_DIR} ...", file=sys.stderr)
    probes = collect_probes()
    print(f"Collected {len(probes)} probes", file=sys.stderr)

    limiter = HostLimiter(per_host_concurrency=4, min_interval=0.12)

    limits = httpx.Limits(max_connections=200, max_keepalive_connections=80)
    async with httpx.AsyncClient(limits=limits, http2=False) as client:
        tasks = [probe_one(client, limiter, p) for p in probes]
        results = []
        for i, coro in enumerate(asyncio.as_completed(tasks), 1):
            r = await coro
            results.append(r)
            if i % 200 == 0:
                print(f"  {i}/{len(probes)} done", file=sys.stderr)
        print(f"  {len(results)}/{len(probes)} done", file=sys.stderr)

    # Persist raw results
    with (OUT_DIR / "results.json").open("w") as f:
        json.dump(results, f, indent=2)
    print(f"Wrote {OUT_DIR/'results.json'}", file=sys.stderr)

    return results


if __name__ == "__main__":
    asyncio.run(main())
