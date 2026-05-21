/**
 * Backfills `x-compute-units` and `x-rate-limit-cus` onto every RPC method
 * definition under `src/openrpc/`, using `chain-config/topconfig.yml` as the
 * source of truth and the standalone CU costs page as a fallback.
 *
 * Usage:
 *   pnpm sync:cu                # writes changes in place
 *   pnpm sync:cu:check          # exits non-zero if any file would change
 *   tsx scripts/sync-method-cu.ts --help
 *
 * Implementation note: parses YAML to locate insertion points, then mutates
 * the source string directly so untouched fields (block scalars, flow arrays,
 * comments, indentation choices) are preserved verbatim.
 *
 * See CU_MIGRATION_PLAN.md for context.
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { parseArgs } from "util";
import { Document, Pair, Scalar, YAMLMap, YAMLSeq, parseDocument } from "yaml";

import { findFilesOfType } from "../src/utils/findFilesOfType.ts";

interface CuEntry {
  computeUnits: number;
  rateLimitCus?: number;
  source: "topconfig" | "cu-page";
}

type CuMap = Map<string, CuEntry>;

const OPENRPC_ROOT = "src/openrpc";
const DEFAULT_TOPCONFIG = resolve(
  "../chain-config/src/main/resources/configs/chainconfig/topconfig/topconfig.yml",
);
const DEFAULT_CU_PAGE = resolve(
  "content/api-reference/pricing-resources/pricing/compute-unit-costs.mdx",
);

/* ---------- source parsing ---------- */

const parseTopconfig = (path: string): CuMap => {
  const doc = parseDocument(readFileSync(path, "utf8"));
  const methods = doc.get("methods");
  if (!(methods instanceof YAMLMap)) {
    throw new Error(`topconfig.yml: expected 'methods' to be a map`);
  }
  const map: CuMap = new Map();
  for (const pair of methods.items as Pair<Scalar, YAMLMap>[]) {
    const name = pair.key?.value;
    if (typeof name !== "string") continue;
    const cu = pair.value?.get("computeUnits");
    const rl = pair.value?.get("rateLimitComputeUnits");
    if (typeof cu !== "number") continue;
    map.set(name, {
      computeUnits: cu,
      rateLimitCus: typeof rl === "number" ? rl : undefined,
      source: "topconfig",
    });
  }
  return map;
};

/**
 * Parses tables out of compute-unit-costs.mdx. Tables look like:
 *
 *     | Method | CU | Throughput CU |
 *     | ------ | -- | ------------- |
 *     | foo    | 10 | 20            |
 *
 * Method names may be escaped as `foo\_bar`. Throughput column is optional.
 */
const parseCuPage = (path: string): CuMap => {
  const map: CuMap = new Map();
  const text = readFileSync(path, "utf8");
  for (const line of text.split("\n")) {
    if (!line.startsWith("|")) continue;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 2) continue;
    const rawName = cells[0].replace(/\\_/g, "_").replace(/`/g, "").trim();
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(rawName)) continue;
    const cu = parseInt(cells[1], 10);
    if (!Number.isFinite(cu)) continue;
    const rl =
      cells.length >= 3 && cells[2] !== "" ? parseInt(cells[2], 10) : undefined;
    if (map.has(rawName)) continue; // first occurrence wins
    map.set(rawName, {
      computeUnits: cu,
      rateLimitCus: Number.isFinite(rl as number) ? (rl as number) : undefined,
      source: "cu-page",
    });
  }
  return map;
};

/* ---------- method discovery ---------- */

interface MethodNode {
  node: YAMLMap;
  name: string;
}

/**
 * Finds every method definition in a parsed OpenRPC document. Handles both:
 *  1. Top-level `methods:` as a sequence (alchemy/*.yaml).
 *  2. `components.methods.<name>:` as a map (chains/_components/GROUP/methods.yaml).
 */
const collectMethodNodes = (doc: Document): MethodNode[] => {
  const out: MethodNode[] = [];

  const topMethods = doc.get("methods");
  if (topMethods instanceof YAMLSeq) {
    for (const item of topMethods.items) {
      if (!(item instanceof YAMLMap)) continue;
      const name = item.get("name");
      if (typeof name !== "string") continue;
      out.push({ node: item, name });
    }
  }

  const components = doc.get("components");
  if (components instanceof YAMLMap) {
    const compMethods = components.get("methods");
    if (compMethods instanceof YAMLMap) {
      for (const pair of compMethods.items as Pair<Scalar, YAMLMap>[]) {
        const key = pair.key?.value;
        if (typeof key !== "string" || !(pair.value instanceof YAMLMap))
          continue;
        const nameField = pair.value.get("name");
        out.push({
          node: pair.value,
          name: typeof nameField === "string" ? nameField : key,
        });
      }
    }
  }

  return out;
};

/* ---------- source mutation ---------- */

interface Edit {
  start: number;
  end: number;
  replacement: string;
}

/** Returns the column (0-indexed) of `offset` within its line in `src`. */
const columnAt = (src: string, offset: number): number => {
  let i = offset;
  while (i > 0 && src[i - 1] !== "\n") i--;
  return offset - i;
};

const keyOf = (p: Pair): string | undefined => {
  if (typeof p.key === "string") return p.key;
  if (p.key instanceof Scalar && typeof p.key.value === "string")
    return p.key.value;
  return undefined;
};

const findPair = (node: YAMLMap, key: string): Pair | undefined =>
  node.items.find((p) => keyOf(p as Pair) === key) as Pair | undefined;

/**
 * Computes edits needed to bring the method node's CU fields into line with
 * `entry`. Edits are byte ranges in the original source, suitable for
 * applying in reverse order.
 */
const planMethodEdits = (
  src: string,
  node: YAMLMap,
  entry: CuEntry,
): Edit[] => {
  const desired: Array<[string, number | undefined]> = [
    ["x-compute-units", entry.computeUnits],
    [
      "x-rate-limit-cus",
      entry.rateLimitCus !== undefined &&
      entry.rateLimitCus !== entry.computeUnits
        ? entry.rateLimitCus
        : undefined,
    ],
  ];

  const edits: Edit[] = [];

  // Find anchor: insert after the last existing x-* field, else after description.
  // Both are computed from the original source positions.
  let anchorEnd: number | null = null;
  let anchorCol: number | null = null;

  const setAnchor = (pair: Pair) => {
    // value.range[2] = position immediately after the value (incl. trailing newline)
    const valueRange = (pair.value as { range?: [number, number, number] })
      ?.range;
    const keyRange = (pair.key as { range?: [number, number, number] })?.range;
    if (!valueRange || !keyRange) return;
    anchorEnd = valueRange[2];
    anchorCol = columnAt(src, keyRange[0]);
  };

  const descPair = findPair(node, "description");
  if (descPair) setAnchor(descPair);

  for (const p of node.items as Pair[]) {
    const k = keyOf(p);
    if (k && k.startsWith("x-")) setAnchor(p);
  }

  const newLines: string[] = [];

  for (const [key, value] of desired) {
    const existing = findPair(node, key);

    if (value === undefined) {
      if (existing) {
        // Delete the entire pair line(s).
        const r = (existing as { range?: [number, number, number] }).range;
        const kr = (existing.key as { range?: [number, number, number] })
          ?.range;
        const vr = (existing.value as { range?: [number, number, number] })
          ?.range;
        const start = kr?.[0] ?? r?.[0];
        const end = vr?.[2] ?? r?.[2];
        if (start !== undefined && end !== undefined) {
          // Extend start back to beginning of line so we drop indentation too.
          let s = start;
          while (s > 0 && src[s - 1] !== "\n") s--;
          edits.push({ start: s, end, replacement: "" });
        }
      }
      continue;
    }

    if (existing) {
      const existingVal = (existing.value as Scalar)?.value;
      if (existingVal === value) continue;
      const vr = (existing.value as { range?: [number, number, number] })
        ?.range;
      if (vr) {
        edits.push({
          start: vr[0],
          end: vr[1],
          replacement: String(value),
        });
      }
      continue;
    }

    if (anchorEnd === null || anchorCol === null) continue; // no description to anchor to
    const indent = " ".repeat(anchorCol);
    newLines.push(`${indent}${key}: ${value}\n`);
  }

  if (newLines.length > 0 && anchorEnd !== null) {
    edits.push({
      start: anchorEnd,
      end: anchorEnd,
      replacement: newLines.join(""),
    });
  }

  return edits;
};

/* ---------- file processing ---------- */

interface FileResult {
  file: string;
  changed: boolean;
  methods: number;
  missing: string[];
  usedFallback: string[];
}

const applyEdits = (src: string, edits: Edit[]): string => {
  // Apply in descending start order so earlier offsets remain valid.
  const sorted = [...edits].sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of sorted) {
    out = out.slice(0, e.start) + e.replacement + out.slice(e.end);
  }
  return out;
};

const processFile = (
  file: string,
  topconfig: CuMap,
  cuPage: CuMap,
): FileResult => {
  const src = readFileSync(file, "utf8");
  const doc = parseDocument(src);
  const methods = collectMethodNodes(doc);

  const result: FileResult = {
    file,
    changed: false,
    methods: methods.length,
    missing: [],
    usedFallback: [],
  };

  const edits: Edit[] = [];
  for (const { node, name } of methods) {
    const fromTopconfig = topconfig.get(name);
    const fromCuPage = cuPage.get(name);
    const entry = fromTopconfig ?? fromCuPage;
    if (!entry) {
      result.missing.push(name);
      continue;
    }
    if (!fromTopconfig && fromCuPage) result.usedFallback.push(name);
    edits.push(...planMethodEdits(src, node, entry));
  }

  if (edits.length === 0) return result;
  const next = applyEdits(src, edits);
  if (next !== src) {
    writeFileSync(file, next);
    result.changed = true;
  }
  return result;
};

/* ---------- entry point ---------- */

const main = async () => {
  const { values } = parseArgs({
    options: {
      topconfig: { type: "string", default: DEFAULT_TOPCONFIG },
      "cu-page": { type: "string", default: DEFAULT_CU_PAGE },
      check: { type: "boolean", default: false },
      "allow-missing": { type: "boolean", default: false },
      help: { type: "boolean", default: false },
    },
  });

  if (values.help) {
    console.info(
      [
        "Usage: tsx scripts/sync-method-cu.ts [options]",
        "",
        "  --topconfig <path>     Path to chain-config topconfig.yml",
        "  --cu-page <path>       Path to compute-unit-costs.mdx (fallback source)",
        "  --check                Exit non-zero if any file would be modified",
        "  --allow-missing        Don't fail when a method has no CU source",
      ].join("\n"),
    );
    return;
  }

  const topconfig = parseTopconfig(values.topconfig as string);
  const cuPage = parseCuPage(values["cu-page"] as string);
  console.info(
    `Loaded ${topconfig.size} methods from topconfig, ${cuPage.size} from CU page.`,
  );

  const files = findFilesOfType(OPENRPC_ROOT, /\.ya?ml$/);

  const allMissing: { file: string; methods: string[] }[] = [];
  const allFallback: { file: string; methods: string[] }[] = [];
  const changedFiles: string[] = [];

  for (const file of files) {
    const r = processFile(file, topconfig, cuPage);
    if (r.changed) changedFiles.push(file);
    if (r.missing.length) allMissing.push({ file, methods: r.missing });
    if (r.usedFallback.length)
      allFallback.push({ file, methods: r.usedFallback });
  }

  if (allFallback.length) {
    console.warn(`\n⚠ Used CU-page fallback for some methods:`);
    for (const { file, methods } of allFallback) {
      console.warn(`  ${file}`);
      for (const m of methods) console.warn(`    - ${m}`);
    }
  }
  if (allMissing.length) {
    console.warn(`\n⚠ No CU data found for some methods:`);
    for (const { file, methods } of allMissing) {
      console.warn(`  ${file}`);
      for (const m of methods) console.warn(`    - ${m}`);
    }
  }

  console.info(
    `\n${changedFiles.length} file(s) ${values.check ? "would be changed" : "updated"} out of ${files.length} scanned.`,
  );

  if (values.check && changedFiles.length > 0) {
    console.error(
      `\n❌ --check failed: run \`pnpm sync:cu\` and commit the result.`,
    );
    process.exit(1);
  }

  const missingCount = allMissing.reduce((n, m) => n + m.methods.length, 0);
  if (!values["allow-missing"] && missingCount > 0) {
    console.error(
      `\n❌ ${missingCount} method(s) missing CU data. Re-run with --allow-missing to ignore, or backfill the source.`,
    );
    process.exit(1);
  }
};

main().catch((err) => {
  console.error("sync-method-cu failed:", err);
  process.exit(1);
});
