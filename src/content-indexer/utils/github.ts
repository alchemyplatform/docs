import { Octokit, RequestError } from "octokit";

type GetContentResponse = Awaited<
  ReturnType<InstanceType<typeof Octokit>["rest"]["repos"]["getContent"]>
>;
type GetContentData = GetContentResponse["data"];

type ContentDirectoryItem = Extract<GetContentData, Array<unknown>>[number];

// ============================================================================
// Repository Configuration
// ============================================================================

export interface RepoConfig {
  owner: string;
  repo: string;
  branch: string;
  docsPrefix: string; // "fern" or "docs" - folder where MDX files are stored
  stripPathPrefix?: string; // Optional prefix to strip from paths in docs.yml (e.g., "wallets/")
}

export const DOCS_REPO: RepoConfig = {
  owner: "alchemyplatform",
  repo: "docs",
  branch: "main",
  docsPrefix: "fern",
};

export const WALLET_REPO: RepoConfig = {
  owner: "alchemyplatform",
  repo: "aa-sdk",
  branch: "main",
  docsPrefix: "docs",
  stripPathPrefix: "wallets/", // aa-sdk docs.yml uses "wallets/pages/..." but actual files are at "docs/pages/..."
};

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

function isRequestError(error: unknown): error is RequestError {
  return error instanceof RequestError;
}

/**
 * Fetch a single file's text content from GitHub
 */
export async function fetchFileFromGitHub(
  filePath: string,
  repoConfig: RepoConfig = DOCS_REPO,
): Promise<string | null> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: repoConfig.owner,
      repo: repoConfig.repo,
      path: filePath,
      ref: repoConfig.branch,
      mediaType: {
        format: "raw",
      },
    });

    // When using raw format, data is a string
    return data as unknown as string;
  } catch (error: unknown) {
    if (isRequestError(error) && error.status === 404) {
      return null; // File doesn't exist
    }
    console.error(`Error fetching ${filePath} from ${repoConfig.repo}:`, error);
    return null;
  }
}

/**
 * Fetch directory contents from GitHub (non-recursive)
 */
export async function fetchGitHubDirectory(
  dirPath: string,
  repoConfig: RepoConfig = DOCS_REPO,
): Promise<ContentDirectoryItem[]> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: repoConfig.owner,
      repo: repoConfig.repo,
      path: dirPath,
      ref: repoConfig.branch,
    });

    // GitHub API returns array for directories, object for files
    if (!Array.isArray(data)) {
      throw new Error(`Expected directory but got file: ${dirPath}`);
    }

    return data;
  } catch (error) {
    console.error(
      `Error fetching directory ${dirPath} from ${repoConfig.repo}:`,
      error,
    );
    throw error;
  }
}

/**
 * Check if a file exists on GitHub
 */
export async function fileExistsOnGitHub(
  filePath: string,
  repoConfig: RepoConfig = DOCS_REPO,
): Promise<boolean> {
  try {
    await octokit.rest.repos.getContent({
      owner: repoConfig.owner,
      repo: repoConfig.repo,
      path: filePath,
      ref: repoConfig.branch,
    });
    return true;
  } catch (error: unknown) {
    if (isRequestError(error) && error.status === 404) {
      return false;
    }
    // For other errors, log but return false to be safe
    console.error(`Error checking if ${filePath} exists:`, error);
    return false;
  }
}

/**
 * Get file metadata without downloading content
 */
export async function getGitHubFileMetadata(
  filePath: string,
  repoConfig: RepoConfig = DOCS_REPO,
): Promise<{ sha: string; size: number } | null> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: repoConfig.owner,
      repo: repoConfig.repo,
      path: filePath,
      ref: repoConfig.branch,
    });

    // Ensure we got a file, not a directory
    if (Array.isArray(data)) {
      return null;
    }

    // Type guard for file object
    if ("sha" in data && "size" in data) {
      return {
        sha: data.sha,
        size: data.size,
      };
    }

    return null;
  } catch (error: unknown) {
    if (isRequestError(error) && error.status === 404) {
      return null;
    }
    console.error(`Error fetching metadata for ${filePath}:`, error);
    return null;
  }
}
