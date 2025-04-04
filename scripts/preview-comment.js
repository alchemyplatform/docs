// Typescript not supported in actions/github-script@v7
// https://github.com/actions/github-script/issues/294
const commentTitle = "🌿 Documentation Preview";

/**
 * Generates the body of a PR comment for a documentation preview
 * @param {string} status - The outcome of the preview step - `success`, `failure`, `building`, `cancelled`, or `skipped`
 * @param {string} previewUrl - The URL of the documentation preview
 * @param {string} previousUrl - The URL of the previous successful preview build
 */
const getCommentBody = (status = "success", previewUrl = "") => {
  const timeUTC = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const statusDisplay = {
    success: "✅ Ready",
    failure: "❌ Failed",
    building: "⌛ In Progress",
    cancelled: "⚠️ Cancelled",
    skipped: "⏭️ Skipped",
  };

  const previewDisplay = {
    success: `[🔗 Visit Preview](${previewUrl})`,
    failure: "",
    building: "🏗️ Building...",
    cancelled: "",
    skipped: "",
  };

  const statusMessage = statusDisplay[status];
  const previewLink = previewDisplay[status];

  const headerRow = `## ${commentTitle}\n\n`;
  const tableHeader = `| Name | Status | Preview | Updated (UTC) |\n`;
  const tableDivider = `| :--- | :------ | :------ | :------ |\n`;
  const tableContent = `| **Alchemy Docs** | ${statusMessage} | ${previewLink} | ${timeUTC} |\n\n>`;
  const commentBody = headerRow + tableHeader + tableDivider + tableContent;

  return commentBody;
};

/**
 * Updates or creates a comment on a GitHub pull request with a documentation preview link
 * @param {object} params - The parameters object
 * @param {object} params.github - The GitHub API client instance
 * @param {object} params.context - The GitHub Actions context object
 * @param {string} params.previewUrl - The URL of the documentation preview
 * @param {string} params.status - The outcome of the preview step - `success`, `failure`, `building`, `cancelled`, or `skipped`
 */
const updatePreviewComment = async ({
  github,
  context,
  status = "success",
  previewUrl,
}) => {
  const { repo, issue } = context;

  const allComments = await github.rest.issues.listComments({
    owner: repo.owner,
    repo: repo.repo,
    issue_number: issue.number,
  });

  const existingComment = allComments.data.find((comment) =>
    comment.body.includes(commentTitle),
  );

  const commentBody = getCommentBody(status, previewUrl);

  if (existingComment) {
    await github.rest.issues.updateComment({
      owner: repo.owner,
      repo: repo.repo,
      comment_id: existingComment.id,
      body: commentBody,
    });
  } else {
    await github.rest.issues.createComment({
      owner: repo.owner,
      repo: repo.repo,
      issue_number: issue.number,
      body: commentBody,
    });
  }
};

export { updatePreviewComment };
