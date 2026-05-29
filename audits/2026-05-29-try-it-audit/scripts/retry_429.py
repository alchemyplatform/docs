#!/usr/bin/env python3
"""Retry pass for probes that returned HTTP 429 (rate-limited).

Slower per-host rate (1 RPS each) with exponential backoff on repeated 429s.
Replaces matching entries in results.json with the retry outcome.
"""

import asyncio
import json
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import httpx

OUT = Path("/root/audit")


class HostLimiter:
    def __init__(self, min_interval=1.0):
        self._sems = {}
        self._last = {}
        self._lock = asyncio.Lock()
        self.min_interval = min_interval

    def sem(self, host):
        if host not in self._sems:
            self._sems[host] = asyncio.Semaphore(1)  # serial per host
        return self._sems[host]

    async def wait(self, host):
        async with self._lock:
            last = self._last.get(host, 0)
            now = time.monotonic()
            delta = now - last
            if delta < self.min_interval:
                await asyncio.sleep(self.min_interval - delta)
            self._last[host] = time.monotonic()


async def one(client, limiter, probe, max_retries=4):
    if "skipped" in probe:
        return {**probe, "status": "skipped"}
    host = urlparse(probe["url"]).hostname
    sem = limiter.sem(host)
    body = {
        "jsonrpc": "2.0", "id": 1,
        "method": probe["method"], "params": probe["params"],
    }
    headers = {
        "Content-Type": "application/json",
        "Origin": "https://www.alchemy.com",
        "Referer": "https://www.alchemy.com/",
    }
    backoff = 4.0
    for attempt in range(max_retries):
        async with sem:
            await limiter.wait(host)
            try:
                r = await client.post(probe["url"], json=body, headers=headers, timeout=30.0)
            except httpx.TimeoutException:
                return {**probe, "status": "fail", "reason": "timeout", "http_status": None, "rpc_error": None}
            except httpx.ConnectError as e:
                return {**probe, "status": "fail", "reason": "dns/connect", "http_status": None, "rpc_error": str(e)[:200]}
            except Exception as e:
                return {**probe, "status": "fail", "reason": f"transport {type(e).__name__}", "http_status": None, "rpc_error": str(e)[:200]}
        if r.status_code == 429:
            if attempt < max_retries - 1:
                await asyncio.sleep(backoff)
                backoff *= 1.8
                continue
            return {**probe, "status": "fail", "reason": "HTTP 429 after retry", "http_status": 429, "rpc_error": (r.text or "")[:200]}
        if r.status_code != 200:
            return {**probe, "status": "fail", "reason": f"HTTP {r.status_code}", "http_status": r.status_code, "rpc_error": (r.text or "")[:300]}
        try:
            j = r.json()
        except Exception:
            return {**probe, "status": "fail", "reason": "non-JSON response", "http_status": 200, "rpc_error": (r.text or "")[:300]}
        if "error" in j and j["error"] is not None:
            err = j["error"]
            return {**probe, "status": "fail", "reason": "jsonrpc error", "http_status": 200, "rpc_error": {
                "code": err.get("code") if isinstance(err, dict) else None,
                "message": (err.get("message") if isinstance(err, dict) else str(err))[:300],
                "data": (str(err.get("data"))[:300] if isinstance(err, dict) and err.get("data") is not None else None),
            }}
        if "result" in j:
            return {**probe, "status": "ok", "http_status": 200}
        return {**probe, "status": "fail", "reason": "no result, no error", "http_status": 200, "rpc_error": (r.text or "")[:300]}


def select_targets(results, modes):
    """Filter the indices of the results entries that match modes (list of reasons)."""
    idxs = []
    for i, r in enumerate(results):
        if r.get("status") == "fail" and r.get("reason") in modes:
            idxs.append(i)
    return idxs


async def main(modes):
    with (OUT / "results.json").open() as f:
        results = json.load(f)
    target_idxs = select_targets(results, modes)
    print(f"Retry targets: {len(target_idxs)} of {len(results)}", file=sys.stderr)

    limiter = HostLimiter(min_interval=2.0)
    limits = httpx.Limits(max_connections=120, max_keepalive_connections=60)

    async with httpx.AsyncClient(limits=limits) as client:
        # Build fresh probes for these (need to reconstruct the original dict
        # since the run_audit results carry the relevant fields already).
        sem_global = asyncio.Semaphore(60)
        async def worker(idx):
            async with sem_global:
                probe = {
                    "spec": results[idx]["spec"],
                    "category": results[idx]["category"],
                    "method": results[idx]["method"],
                    "params": results[idx]["params"],
                    "paramStructure": results[idx].get("paramStructure"),
                    "url": results[idx]["url"],
                }
                outcome = await one(client, limiter, probe)
                results[idx] = outcome
                return idx

        tasks = [asyncio.create_task(worker(i)) for i in target_idxs]
        done = 0
        total = len(tasks)
        for fut in asyncio.as_completed(tasks):
            await fut
            done += 1
            if done % 200 == 0 or done == total:
                print(f"  {done}/{total}", file=sys.stderr)

    with (OUT / "results.json").open("w") as f:
        json.dump(results, f, indent=2)
    print(f"Updated {OUT/'results.json'}", file=sys.stderr)


if __name__ == "__main__":
    modes = sys.argv[1:] or ["HTTP 429"]
    asyncio.run(main(modes))
