#!/usr/bin/env tsx
/**
 * Formats a Lychee JSON report as a Slack message and posts it via
 * chat.postMessage. The summary goes to the channel; the per-link error
 * breakdown is posted as a threaded reply so it stays collapsed by default.
 *
 * Used by the scheduled link-check workflow
 * (.github/workflows/link-check-scheduled.yml).
 *
 * Usage: tsx scripts/link-check-slack.ts <path-to-report.json>
 * Env:   SLACK_API_KEY (required), RUN_URL, LYCHEE_STATUS
 */

import { existsSync, readFileSync } from "node:fs";

interface LycheeStatus {
  code?: number | string;
  text?: string;
}

interface LycheeError {
  url: string;
  status?: LycheeStatus;
}

interface LycheeReport {
  total?: number;
  successful?: number;
  timeouts?: number;
  redirects?: number;
  excludes?: number;
  unknown?: number;
  errors?: number;
  unsupported?: number;
  error_map?: Record<string, LycheeError[]>;
}

interface SlackPostMessageResponse {
  ok: boolean;
  channel?: string;
  ts?: string;
  error?: string;
}

const SUMMARY_ROWS: ReadonlyArray<[string, keyof LycheeReport]> = [
  ["🔍 Total", "total"],
  ["✅ Successful", "successful"],
  ["⏳ Timeouts", "timeouts"],
  ["🔀 Redirected", "redirects"],
  ["👻 Excluded", "excludes"],
  ["❓ Unknown", "unknown"],
  ["🚫 Errors", "errors"],
  ["⛔ Unsupported", "unsupported"],
];

const SLACK_CHANNEL = "#dx-developer-relations";
const SLACK_API = "https://slack.com/api/chat.postMessage";

// Slack hard-caps chat.postMessage text at 40k chars. Stay well under so the
// payload fits with the surrounding JSON envelope.
const MAX_THREAD_CHARS = 30_000;

/**
 * Shortens a URL for display: hostname (sans www.) plus the last path
 * segment, with "/.../" in between when there's intermediate path to elide.
 */
const shortenUrl = (url: string): string => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    const segments = u.pathname.split("/").filter(Boolean);
    if (segments.length === 0) return host;
    if (segments.length === 1) return `${host}/${segments[0]}`;
    return `${host}/.../${segments[segments.length - 1]}`;
  } catch {
    return url;
  }
};

const formatSummary = (stats: LycheeReport): string =>
  SUMMARY_ROWS.map(
    ([label, key]) => `• *${label}:* ${stats[key] ?? 0}`,
  ).join("\n");

/**
 * Nested-bullet error list. Top-level bullet is the source file; indented
 * sub-bullets are the broken links inside it, with the bracketed status code
 * folded into the Slack link label so each line stays compact.
 */
const formatErrorLines = (
  errorMap: Record<string, LycheeError[]>,
): string => {
  const lines: string[] = [];
  let truncated = false;
  let charBudget = MAX_THREAD_CHARS;

  const push = (line: string): boolean => {
    if (charBudget - line.length < 0) {
      truncated = true;
      return false;
    }
    lines.push(line);
    charBudget -= line.length + 1;
    return true;
  };

  for (const [input, errors] of Object.entries(errorMap)) {
    const file = input.replace(/^\.\//, "");
    if (!push(`• \`${file}\``)) break;
    for (const error of errors) {
      const code = error.status?.code ?? "ERR";
      const label = `[${code}] ${shortenUrl(error.url)}`;
      if (!push(`    ◦ <${error.url}|${label}>`)) break;
    }
    if (truncated) break;
  }

  if (truncated) {
    lines.push("");
    lines.push(
      "_…output truncated. See the workflow artifact for the full report._",
    );
  }
  return lines.join("\n");
};

const getStatus = ({
  errorCount,
  lycheeStatus,
}: {
  errorCount: number;
  lycheeStatus?: string;
}): string => {
  if (lycheeStatus === "cancelled") return "⚠️ Cancelled";
  if (lycheeStatus === "failure" || errorCount > 0) return "❌ Failed";
  return "✅ Passed";
};

const buildSummaryMessage = ({
  report,
  runUrl,
  lycheeStatus,
  errorCount,
}: {
  report: LycheeReport;
  runUrl?: string;
  lycheeStatus?: string;
  errorCount: number;
}): string => {
  const status = getStatus({ errorCount, lycheeStatus });
  const sections = [
    `*🔍 Weekly Link Check* — ${status}`,
    "",
    "*Summary*",
    formatSummary(report),
  ];

  if (errorCount === 0) {
    sections.push("", "No broken links found ✅");
  } else {
    sections.push(
      "",
      `_Broken links (${errorCount}) listed in thread reply._`,
    );
  }

  if (runUrl) {
    sections.push("", `<${runUrl}|View workflow run>`);
  }

  return sections.join("\n");
};

const postToSlack = async (
  token: string,
  payload: Record<string, unknown>,
): Promise<SlackPostMessageResponse> => {
  const res = await fetch(SLACK_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  // Slack returns HTTP 200 even on logical errors — check `ok` in the body.
  const body = (await res
    .json()
    .catch(() => ({}))) as SlackPostMessageResponse;
  if (!res.ok || !body.ok) {
    throw new Error(
      `chat.postMessage failed: HTTP ${res.status} ${res.statusText} — ${JSON.stringify(body)}`,
    );
  }
  return body;
};

const main = async (): Promise<void> => {
  const reportPath = process.argv[2];
  if (!reportPath) {
    console.error("Usage: link-check-slack.ts <path-to-report.json>");
    process.exit(1);
  }
  const token = process.env.SLACK_API_KEY;
  if (!token) {
    console.error("SLACK_API_KEY is not set");
    process.exit(1);
  }

  const report: LycheeReport = existsSync(reportPath)
    ? (JSON.parse(readFileSync(reportPath, "utf8")) as LycheeReport)
    : {};
  const errorCount = Number(report.errors ?? 0);

  const summaryText = buildSummaryMessage({
    report,
    runUrl: process.env.RUN_URL,
    lycheeStatus: process.env.LYCHEE_STATUS,
    errorCount,
  });

  const summary = await postToSlack(token, {
    channel: SLACK_CHANNEL,
    text: summaryText,
    mrkdwn: true,
    unfurl_links: false,
    unfurl_media: false,
  });

  if (errorCount > 0) {
    const threadText = formatErrorLines(report.error_map ?? {});
    if (threadText) {
      await postToSlack(token, {
        channel: summary.channel,
        thread_ts: summary.ts,
        text: threadText,
        mrkdwn: true,
        unfurl_links: false,
        unfurl_media: false,
      });
    }
  }

  console.info(`Posted link-check summary to ${SLACK_CHANNEL}.`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
