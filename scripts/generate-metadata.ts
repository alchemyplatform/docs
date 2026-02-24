import * as fs from "fs";
import * as path from "path";

const API_SPECS_DIR = path.join(process.cwd(), "content", "api-specs");
const OUTPUT_FILE = path.join(API_SPECS_DIR, "metadata.json");
const API_SPECS_URL = "https://dev-docs.alchemy.com";
const DOCS_URL = "https://www.alchemy.com/docs";

function extractLocs(xml: string): string[] {
  return (
    xml
      .match(/<loc>(.*?)<\/loc>/g)
      ?.map((tag) => tag.replace(/<\/?loc>/g, "")) || []
  );
}

function isSitemapIndex(xml: string): boolean {
  return xml.includes("<sitemapindex");
}

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${sitemapUrl}: ${response.status} ${response.statusText}`,
    );
  }

  const xml = await response.text();

  if (isSitemapIndex(xml)) {
    const childSitemapUrls = extractLocs(xml);
    console.info(
      `Found sitemap index with ${childSitemapUrls.length} sitemap(s)`,
    );

    const results = await Promise.all(
      childSitemapUrls.map((url) => fetchSitemapUrls(url)),
    );
    return results.flat();
  }

  return extractLocs(xml);
}

(async () => {
  try {
    const files: string[] = [];

    function traverse(currentDir: string) {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (!entry.name.startsWith(".")) {
          const relativePath = path.relative(API_SPECS_DIR, fullPath);
          files.push(`${API_SPECS_URL}/${relativePath}`);
        }
      }
    }

    traverse(API_SPECS_DIR);

    const urls = await fetchSitemapUrls(`${DOCS_URL}/sitemap.xml`);
    console.info(`Collected ${urls.length} page URL(s) from sitemap`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ files, urls }, null, 2));
    console.info(`Successfully generated metadata file at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error generating metadata:", error);
    process.exit(1);
  }
})();
