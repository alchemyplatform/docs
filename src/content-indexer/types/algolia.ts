/**
 * Algolia search record structure.
 * Each record represents a searchable page (Guide or API method).
 */
export interface AlgoliaRecord {
  objectID: string; // Hash-based unique identifier (e.g., "a3f2c8e1b9d4f6a7") - REQUIRED by Algolia
  indexerType: string; // Indexer type for filtering/targeted deletion (e.g., "docs", "sdk", "changelog")
  path: string; // Full pathname without leading slash (e.g., "reference/ethereum/eth-getbalance").
  pageType: "API Method" | "Guide" | "Changelog";
  title: string;
  description?: string; // Brief 1-2 sentence summary of the content
  breadcrumbs: string[]; // Navigation ancestry titles for context (e.g., ["NFT API", "NFT API Endpoints"])
  httpMethod?: string; // For API methods: "GET" | "POST" | etc.
  content: string; // MDX content or endpoint description
}
