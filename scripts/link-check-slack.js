// Formats a Lychee JSON report as a Slack mrkdwn message and posts it via
// chat.postMessage. Used by the scheduled link-check workflow
// (.github/workflows/link-check-scheduled.yml).

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

const SLACK_CHANNEL = "#dx-developer-relations";

// Slack hard-caps chat.postMessage text at 40k chars. Stay well under so the
// payload fits with the surrounding JSON envelope.
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

const getStatus = ({ errorCount, lycheeStatus }) => {
  if (lycheeStatus === "cancelled") return "⚠️ Cancelled";
  if (lycheeStatus === "failure" || errorCount > 0) return "❌ Failed";
  return "✅ Passed";
};

const buildMessage = ({ report, runUrl, lycheeStatus }) => {
  const errorCount = Number(report?.errors ?? 0);
  const status = getStatus({ errorCount, lycheeStatus });

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
  const token = process.env.SLACK_API_KEY;
  if (!token) {
    console.error("SLACK_API_KEY is not set");
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

  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL,
      text,
      mrkdwn: true,
      unfurl_links: false,
      unfurl_media: false,
    }),
  });

  // Slack returns HTTP 200 even on logical errors — check `ok` in the body.
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.ok) {
    console.error(
      `chat.postMessage failed: HTTP ${res.status} ${res.statusText} — ${JSON.stringify(body)}`,
    );
    process.exit(1);
  }
  console.info(`Posted link-check summary to ${SLACK_CHANNEL}.`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
