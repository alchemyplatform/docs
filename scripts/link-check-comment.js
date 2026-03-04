// Typescript not supported in actions/github-script@v7
// https://github.com/actions/github-script/issues/294
const commentMarker = "<!-- docs-link-check-comment -->";
const commentTitle = "🔍 Link Check";

const formatSummaryTable = (stats) => {
  const rows = [
    ["🔍 Total", stats.total ?? 0],
    ["✅ Successful", stats.successful ?? 0],
    ["⏳ Timeouts", stats.timeouts ?? 0],
    ["🔀 Redirected", stats.redirects ?? 0],
    ["👻 Excluded", stats.excludes ?? 0],
    ["❓ Unknown", stats.unknown ?? 0],
    ["🚫 Errors", stats.errors ?? 0],
    ["⛔ Unsupported", stats.unsupported ?? 0],
  ];

  const body = rows
    .map(([label, value]) => `| ${label} | ${value} |`)
    .join("\n");
  return ["| Status | Count |", "|---|---:|", body].join("\n");
};

const formatErrorsSection = (errorMap = {}) => {
  const entries = Object.entries(errorMap);
  if (entries.length === 0) return "";

  const lines = ["## Errors per input", ""];
  for (const [input, errors] of entries) {
    lines.push(`### Errors in ${input}`);
    for (const error of errors) {
      const code = error?.status?.code ?? "ERR";
      const statusText = error?.status?.text ?? "Unknown error";
      lines.push(`* [${code}] <${error.url}> | ${statusText}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
};

const parseJsonReport = (jsonContent = "") => {
  if (!jsonContent.trim()) {
    return { summary: "_No summary found._", errorsSection: "", errorCount: 0 };
  }

  const parsed = JSON.parse(jsonContent);
  const summary = formatSummaryTable(parsed);
  const errorsSection = formatErrorsSection(parsed.error_map ?? {});
  const errorCount = Number(parsed.errors ?? 0);

  return { summary, errorsSection, errorCount };
};

const getStatusDisplay = ({ hasContentChanges, lycheeStatus, errorCount }) => {
  if (!hasContentChanges) return "⏭️ Skipped (no content changes)";
  if (lycheeStatus === "success" && errorCount === 0) return "✅ Passed";
  if (lycheeStatus === "failure" || errorCount > 0) return "❌ Failed";
  if (lycheeStatus === "cancelled") return "⚠️ Cancelled";
  return "⌛ In Progress";
};

const getCommentBody = ({
  hasContentChanges,
  lycheeStatus,
  reportJsonContent,
  runUrl,
}) => {
  const { summary, errorsSection, errorCount } =
    parseJsonReport(reportJsonContent);
  const status = getStatusDisplay({
    hasContentChanges,
    lycheeStatus,
    errorCount,
  });

  const lines = [
    commentMarker,
    `## ${commentTitle}`,
    "",
    `**Status:** ${status}`,
    "",
    "### Summary",
    summary,
    "",
  ];

  if (!hasContentChanges) {
    lines.push("No markdown content files changed in this PR.");
    lines.push("");
  } else if (errorCount === 0) {
    lines.push("No broken links found ✅");
    lines.push("");
  } else if (errorsSection) {
    lines.push("<details>");
    lines.push(
      `<summary>Broken links (${errorCount}) — click to expand</summary>`,
    );
    lines.push("");
    lines.push(errorsSection);
    lines.push("");
    lines.push("</details>");
    lines.push("");
  }

  if (runUrl) {
    lines.push(`[View workflow run](${runUrl})`);
    lines.push("");
  }

  return lines.join("\n");
};

const updateLinkCheckComment = async ({
  github,
  context,
  hasContentChanges,
  lycheeStatus,
  reportJsonContent,
  runUrl,
}) => {
  const { repo, issue } = context;
  const allComments = await github.rest.issues.listComments({
    owner: repo.owner,
    repo: repo.repo,
    issue_number: issue.number,
  });

  const existingComment = allComments.data.find((comment) =>
    comment.body.includes(commentMarker),
  );

  const body = getCommentBody({
    hasContentChanges,
    lycheeStatus,
    reportJsonContent,
    runUrl,
  });

  if (existingComment) {
    await github.rest.issues.updateComment({
      owner: repo.owner,
      repo: repo.repo,
      comment_id: existingComment.id,
      body,
    });
  } else {
    await github.rest.issues.createComment({
      owner: repo.owner,
      repo: repo.repo,
      issue_number: issue.number,
      body,
    });
  }
};

export { updateLinkCheckComment };
