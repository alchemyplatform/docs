# Try It audit — May 2026

Full automated audit of every method's canonical example payload across the OpenRPC specs in `src/openrpc/`. Probes each example live against the documented mainnet endpoint with the `docs-demo` API key (using the same `Origin` / `Referer` headers Fern's Try It widget sends) and catalogs every failure.

* [report.md](./report.md) — full categorized report with per-category breakdown, per-spec failure rates, and top quick-win recommendations.
* [failures.csv](./failures.csv) — every failed probe as a row (`spec`, `method`, `category`, `http_status`, `rpc_code`, `rpc_message`) for spreadsheet pivot analysis.
* [scripts/](./scripts) — the Python scripts that produced the report. Reproducible from a fresh `pnpm install && pnpm run generate:rpc` checkout.

## Headline numbers

* Probed: **3,749** methods (chain specs + Alchemy product specs)
* OK: **2,604**
* Failed: **842** (24.4%)
* Skipped (websocket-only or no example in the spec): **303**

## Reproducing

```
pnpm install
pnpm run generate:rpc                  # produces content/api-specs/
python3 scripts/run_audit.py            # initial pass; writes results.json
python3 scripts/retry_429.py "HTTP 429" # retry rate-limited probes
python3 scripts/build_report.py         # rebuilds report.md and failures.csv
```

`docs-demo` is aggressively rate-limited; the retry script paces requests serially per host.

## Out of scope

* OpenAPI REST specs (`src/openapi/`). Each REST spec needs a per-spec adapter (path params, query params, auth, body shapes vary). Worth a follow-up audit.
* Production logs of customer-hit errors. Needs data-team observability access.
* Fern Try It auto-fill on optional fields not in the example. The audit only sends the literal example payload, so the failure count here is a lower bound on what users actually see in the widget.
