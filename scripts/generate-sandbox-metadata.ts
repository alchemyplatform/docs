// Cursor-generated
import * as fs from "fs";
import * as path from "path";

const API_SPECS_DIR = path.join(process.cwd(), "build", "api-specs");
const OUTPUT_FILE = path.join(API_SPECS_DIR, ".sandbox-metadata.json");
const URL = "https://alchemy.docs.buildwithfern.com";

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
          files.push(relativePath);
        }
      }
    }

    traverse(API_SPECS_DIR);

    // Fetch and parse sitemap
    const sitemapResponse = await fetch(`${URL}/sitemap.xml`);

    if (!sitemapResponse.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapResponse.statusText}`);
    }

    const sitemapXml = await sitemapResponse.text();

    // Extract URLs using regex and remove host
    const urls =
      sitemapXml
        .match(/<loc>(.*?)<\/loc>/g)
        ?.map((url) => url.replace(/<\/?loc>/g, "").replace(URL, "")) || [];

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ files, urls }, null, 2));
    console.info(`Successfully generated metadata file at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error generating metadata:", error);
    process.exit(1);
  }
})();
