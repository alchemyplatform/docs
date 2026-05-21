// Formats a Lychee JSON report as a Slack mrkdwn message and POSTs it to
// $SLACK_WEBHOOK_URL. Mirrors the layout of scripts/link-check-comment.js,
// adapted for Slack (no tables, no <details>). Used by the scheduled
// link-check workflow (.github/workflows/link-check-scheduled.yml).

import { readFileSync, existsSync } from "node:fs";

const SUMMARY_ROWS = [
  ["🔍 Total", "total"],
  ["✅ Successful", "successful"],
  ["⏳ Timeouts", "timeouts"],
  ["🔀 Redirected", "redirects"],
  ["👻 Excluded", "excludes"],
  ["❓ Unknown", "unknown"],
  ["🚫 Errors", "errors"],
  ["⛔ Unsupported", "unsupported"],
];

// Slack hard-caps message text at 40k chars. Stay well under so the payload
// fits with the surrounding JSON envelope.
const MAX_ERRORS_SECTION_CHARS = 30_000;

const formatSummary = (stats) =>
  SUMMARY_ROWS.map(([label, key]) => `• *${label}:* ${stats[key] ?? 0}`).join(
    "\n",
  );

const formatErrors = (errorMap = {}) => {
  const entries = Object.entries(errorMap);
  if (entries.length === 0) return "";

  const lines = ["*Errors per input*", ""];
  let truncated = false;
  let charBudget = MAX_ERRORS_SECTION_CHARS;

  for (const [input, errors] of entries) {
    const heading = `*Errors in ${input}*`;
    if (charBudget - heading.length < 0) {
      truncated = true;
      break;
    }
    lines.push(heading);
    charBudget -= heading.length + 1;

    for (const error of errors) {
      const code = error?.status?.code ?? "ERR";
      const statusText = error?.status?.text ?? "Unknown error";
      const line = `• [${code}] <${error.url}> — ${statusText}`;
      if (charBudget - line.length < 0) {
        truncated = true;
        break;
      }
      lines.push(line);
      charBudget -= line.length + 1;
    }
    if (truncated) break;
    lines.push("");
    charBudget -= 1;
  }

  if (truncated) {
    lines.push("");
    lines.push("_…output truncated. See the workflow artifact for the full report._");
  }
  return lines.join("\n").trim();
};

const buildMessage = ({ report, runUrl, lycheeStatus }) => {
  const errorCount = Number(report?.errors ?? 0);
  const lycheeFailed = lycheeStatus === "failure";
  const status =
    lycheeStatus === "cancelled"
      ? "⚠️ Cancelled"
      : errorCount === 0 && !lycheeFailed
        ? "✅ Passed"
        : "❌ Failed";

  const sections = [
    `*🔍 Weekly Link Check* — ${status}`,
    "",
    "*Summary*",
    formatSummary(report ?? {}),
  ];

  if (errorCount === 0) {
    sections.push("", "No broken links found ✅");
  } else {
    const errors = formatErrors(report?.error_map ?? {});
    if (errors) sections.push("", errors);
  }

  if (runUrl) {
    sections.push("", `<${runUrl}|View workflow run>`);
  }

  return sections.join("\n");
};

const main = async () => {
  const reportPath = process.argv[2];
  if (!reportPath) {
    console.error("Usage: link-check-slack.js <path-to-report.json>");
    process.exit(1);
  }
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not set");
    process.exit(1);
  }

  const report = existsSync(reportPath)
    ? JSON.parse(readFileSync(reportPath, "utf8"))
    : null;

  const text = buildMessage({
    report,
    runUrl: process.env.RUN_URL,
    lycheeStatus: process.env.LYCHEE_STATUS,
  });

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, mrkdwn: true }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Slack webhook failed: ${res.status} ${res.statusText} — ${body}`);
    process.exit(1);
  }
  console.log("Posted link-check summary to Slack.");
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
