import crypto from "crypto";

/**
 * Generates an HMAC-signed preview URL safe for public display (e.g., PR comments).
 * The signature proves the branch name was authorized by someone with the secret,
 * without exposing the secret itself.
 */
export const buildPreviewUrl = (
  branch: string,
  baseUrl: string,
  secret: string,
): string => {
  const sig = crypto.createHmac("sha256", secret).update(branch).digest("hex");

  return `${baseUrl}/api/preview/start?branch=${encodeURIComponent(branch)}&sig=${sig}`;
};
