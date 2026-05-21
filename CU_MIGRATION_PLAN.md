# Plan: Migrate CU + Throughput CU onto RPC method specs

Linear: [DX-2945](https://linear.app/alchemyapi/issue/DX-2945/render-cu-cost-and-throughput-cu-inline-on-rpc-method-docs-pages)

## Goal

Render each method's compute-unit cost and throughput-CU cost inline on its docs page
instead of forcing users to look them up on the standalone `compute-unit-costs` page.

This plan covers the **docs repo** half:

1. Extend the OpenRPC method spec format with custom CU fields.
2. Backfill those fields for every method via a script (no hand entry).
3. Add CI guards so new methods can't be added without CU values.
4. Eventually remove the standalone CU costs page (after docs-site renderer lands).

The docs-site renderer changes are tracked separately and are not in scope here.

## Source of truth

**Primary:** `chain-config/src/main/resources/configs/chainconfig/topconfig/topconfig.yml`

This file defines every method served by meta-rpc and includes:

- `computeUnits` (int) — billable CU per call (171 method entries today)
- `rateLimitComputeUnits` (int, optional) — throughput CU; defaults to `computeUnits`
  when missing (194 methods have it set explicitly)

Coverage in `topconfig.yml` includes EVM, Solana, Solana Photon/DAS, NFT, Token,
Trace, Debug, Simulate, Bundler/Gas Manager, Signer, Prices, Transactions History,
Polygon PoS/zkEVM, Linea, Citrea, etc. — i.e. effectively everything billed
through meta-rpc.

**Fallback:** `content/api-reference/pricing-resources/pricing/compute-unit-costs.mdx`

Used only for methods that are documented but not present in `topconfig.yml`
(e.g. REST surfaces that don't go through meta-rpc, or legacy/aliased names).
We scrape the markdown tables and merge by method name, preferring `topconfig.yml`
on conflict.

We will explicitly log every "fallback used" case so we can review whether the
discrepancy is a docs bug, a topconfig gap, or a real REST-only surface.

## Spec schema additions

OpenRPC 1.2.4 allows custom extension fields. We add two fields on each method
in `src/openrpc/**/*.yaml`:

```yaml
eth_blockNumber:
  name: eth_blockNumber
  description: Returns the number of the most recent block.
  x-compute-units: 10
  x-rate-limit-cus: 10   # omitted when equal to x-compute-units
  params: []
  result: ...
```

Naming rationale:

- `x-` prefix follows the OpenRPC/OpenAPI convention for vendor extensions, so
  validators and tooling won't reject it.
- `x-rate-limit-cus` is omitted when it equals `x-compute-units`, matching the
  topconfig convention and keeping diffs small. The renderer treats absence as
  "same as compute units."

These propagate through `generate-rpc.ts` into `content/api-specs/**/*.json`
unchanged (the generator is a deref + copy; no allowlist filter on fields).
Verified by spot-checking `generateOpenRpcSpec` behavior before writing.

## Script: `scripts/sync-method-cu.ts`

New script, sibling to `generate-rpc.ts` and `validate-rpc.ts`. Runs locally and
in CI. Reads topconfig + CU mdx fallback, walks every method definition under
`src/openrpc/`, writes/updates `x-compute-units` and `x-rate-limit-cus` in place.

### Inputs

- `--topconfig <path>` (default: `../chain-config/src/main/resources/configs/chainconfig/topconfig/topconfig.yml`)
- `--cu-page <path>` (default: `content/api-reference/pricing-resources/pricing/compute-unit-costs.mdx`)
- `--check` (CI mode: exit non-zero if any file would change, print diff)
- `--allow-missing` (initial run only: don't fail when a method has no CU source;
  log it instead so we can audit)

### Algorithm

1. Parse `topconfig.yml` → `Map<methodName, { computeUnits, rateLimitComputeUnits? }>`.
2. Parse the CU mdx → `Map<methodName, { cu, throughputCu? }>` per section
   (so we can disambiguate by API surface where needed).
3. Discover every method definition file under `src/openrpc/`. The interesting
   files are:
   - `src/openrpc/chains/_components/<group>/methods.yaml` (EVM, custom, solana, etc.)
   - `src/openrpc/alchemy/<api>/...` (Alchemy JSON-RPC APIs)
4. For each method node, look up CU values by method name:
   - Prefer topconfig.
   - Fall back to CU mdx.
   - If absent in both: under `--allow-missing`, log; otherwise fail.
5. Edit the YAML in place using a comment-preserving YAML library (e.g. `yaml`
   with `parseDocument`, which preserves comments and ordering). Insert
   `x-compute-units` (and `x-rate-limit-cus` when it differs) immediately below
   `description:` for a consistent reading order.
6. Idempotent: re-running with no source changes produces no diff.

### Outputs / verification

- Modified `*.yaml` files under `src/openrpc/`.
- A run summary written to stdout: counts per group, list of methods that fell
  back to the CU page, list of methods missing entirely.
- A separate `--verify` mode cross-checks generated `content/api-specs/**.json`
  against `topconfig.yml` (post-`generate-rpc.ts`) to catch drift.

### Integration

- Add `pnpm sync:cu` and `pnpm sync:cu:check` scripts to `package.json`.
- Wire `pnpm sync:cu:check` into CI alongside the existing `validate-rpc`.
- Document in `CONTRIBUTING.md` that authors add `x-compute-units` on new methods
  or run `pnpm sync:cu` after adding them to topconfig.

## Rollout

1. **Land the schema + script** (this PR). Run `pnpm sync:cu` once; review the
   diff carefully (will touch every method file). Land with `--allow-missing`
   tolerated so we don't block on REST surface gaps.
2. **Audit fallback / missing list.** For each "fallback used" or "missing"
   method, decide: fix topconfig upstream, hand-annotate the spec, or drop the
   method from docs. Flip CI to strict (`--check`, no `--allow-missing`).
3. **Renderer ships in docs-site.** Out of scope here; tracked by the same
   Linear ticket.
4. **Retire the standalone CU page.** Once the inline renderer is live and we've
   confirmed parity for every method, delete
   `content/api-reference/pricing-resources/pricing/compute-unit-costs.mdx` and
   redirect `/reference/compute-unit-costs` to `/reference/compute-units` (or
   to a short explainer that links to method pages).

## Open questions

- Should `x-rate-limit-cus` always be written, or omitted when equal to
  `x-compute-units`? Current plan: omit (smaller diffs, matches topconfig). Flip
  if the renderer prefers an explicit value.
- For methods that vary by network (e.g. some chains charge differently), does
  topconfig capture per-network CU? A quick scan of topconfig didn't show
  per-network CU overrides — confirm before declaring the migration complete.
- A handful of methods in the CU mdx don't appear in topconfig (Tron HTTP,
  Aptos REST, Beacon HTTP, some webhooks). Decide per surface whether they
  belong in the OpenRPC specs at all, or whether their CU rendering happens
  elsewhere.
