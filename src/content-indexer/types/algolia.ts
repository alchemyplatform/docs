/**
 * Algolia search record structure.
 * Each record represents a searchable page (Guide or API method).
 */
export interface AlgoliaRecord {
  objectID: string; // Hash-based unique identifier - REQUIRED by Algolia
  path: string; // Full pathname without leading slash (e.g., "reference/ethereum/eth-getbalance").
  pageType: "API Method" | "Guide" | "Changelog";
  title: string;
  description?: string; // Brief 1-2 sentence summary of the content
  breadcrumbs: string[]; // Navigation ancestry titles for context (e.g., ["NFT API", "NFT API Endpoints"])
  httpMethod?: string; // For API methods: "GET" | "POST" | etc.
  content: string; // MDX content or endpoint description
}
