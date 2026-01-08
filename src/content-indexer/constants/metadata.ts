import { DOCS_BASE_URL } from "./links";

// TODO: This file is copied from docs-site but not used in the content indexer
// It's kept for potential future use but Next.js types are stubbed
type Metadata = {
  title?: { template?: string; default?: string } | string;
  description?: string;
  robots?: { index?: boolean; follow?: boolean };
  alternates?: { canonical?: string };
  openGraph?: Record<string, unknown>;
  twitter?: Record<string, unknown>;
};

export const DEFAULT_OG_IMAGE = {
  url: "https://alchemyapi-res.cloudinary.com/image/upload/v1753213834/docs/docs-og-image.png",
  width: 1200,
  height: 630,
};

export const DEFAULT_OPEN_GRAPH: Metadata["openGraph"] = {
  title: "Alchemy Documentation - Build anything onchain",
  description:
    "Learn how to use Node APIs, Data APIs, Webhooks, Smart Wallets and Rollups to create powerful onchain experiences.",
  siteName: "Alchemy Documentation",
  url: DOCS_BASE_URL,
  locale: "en_US",
  type: "website",
  images: [DEFAULT_OG_IMAGE],
};

const DEFAULT_TWITTER: Metadata["twitter"] = {
  card: "summary_large_image",
  title: "Alchemy Documentation - Build anything onchain",
  description:
    "Learn how to use Node APIs, Data APIs, Webhooks, Smart Wallets and Rollups to create powerful onchain experiences.",
  site: "@alchemy",
  images: [DEFAULT_OG_IMAGE.url],
};

export const DEFAULT_METADATA: Metadata = {
  title: {
    template: "%s | Alchemy Docs",
    default: "Alchemy Documentation - Build anything onchain",
  },
  description:
    "Learn how to use Node APIs, Data APIs, Webhooks, Smart Wallets and Rollups to create powerful onchain experiences.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: DOCS_BASE_URL,
  },
  openGraph: DEFAULT_OPEN_GRAPH,
  twitter: DEFAULT_TWITTER,
};
