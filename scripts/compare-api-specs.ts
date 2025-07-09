#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

interface ComparisonResult {
  identical: boolean;
  differences: string[];
  missingFiles: string[];
  extraFiles: string[];
  errorFiles: string[];
}

class DirectoryComparator {
  private baseDir1: string;
  private baseDir2: string;
  private result: ComparisonResult;

  constructor(dir1: string, dir2: string) {
    this.baseDir1 = dir1;
    this.baseDir2 = dir2;
    this.result = {
      identical: true,
      differences: [],
      missingFiles: [],
      extraFiles: [],
      errorFiles: [],
    };
  }

  private getAllFiles(dir: string, relativeTo: string = dir): string[] {
    const files: string[] = [];

    if (!fs.existsSync(dir)) {
      return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(relativeTo, fullPath);

      if (entry.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, relativeTo));
      } else if (entry.isFile()) {
        files.push(relativePath);
      }
    }

    return files;
  }

  private compareFileContents(file1: string, file2: string): boolean {
    try {
      const content1 = fs.readFileSync(file1, "utf-8");
      const content2 = fs.readFileSync(file2, "utf-8");
      return content1 === content2;
    } catch (error) {
      this.result.errorFiles.push(
        `Error reading files: ${file1} or ${file2} - ${error}`,
      );
      return false;
    }
  }

  private getFileSize(filePath: string): number {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch {
      return 0;
    }
  }

  public compare(): ComparisonResult {
    console.log(`Comparing directories:`);
    console.log(`  Source: ${this.baseDir1}`);
    console.log(`  Target: ${this.baseDir2}`);
    console.log();

    // Check if directories exist
    if (!fs.existsSync(this.baseDir1)) {
      this.result.errorFiles.push(
        `Source directory does not exist: ${this.baseDir1}`,
      );
      this.result.identical = false;
      return this.result;
    }

    if (!fs.existsSync(this.baseDir2)) {
      this.result.errorFiles.push(
        `Target directory does not exist: ${this.baseDir2}`,
      );
      this.result.identical = false;
      return this.result;
    }

    // Get all files from both directories
    const files1 = this.getAllFiles(this.baseDir1);
    const files2 = this.getAllFiles(this.baseDir2);

    const allFiles = new Set([...files1, ...files2]);

    console.log(`Found ${files1.length} files in source directory`);
    console.log(`Found ${files2.length} files in target directory`);
    console.log(`Total unique files to compare: ${allFiles.size}`);
    console.log();

    // Compare each file
    for (const relativePath of allFiles) {
      const file1 = path.join(this.baseDir1, relativePath);
      const file2 = path.join(this.baseDir2, relativePath);

      const exists1 = fs.existsSync(file1);
      const exists2 = fs.existsSync(file2);

      if (!exists1 && exists2) {
        this.result.missingFiles.push(`Missing in source: ${relativePath}`);
        this.result.identical = false;
      } else if (exists1 && !exists2) {
        this.result.extraFiles.push(`Extra in source: ${relativePath}`);
        this.result.identical = false;
      } else if (exists1 && exists2) {
        // Both files exist, compare contents
        const size1 = this.getFileSize(file1);
        const size2 = this.getFileSize(file2);

        if (size1 !== size2) {
          this.result.differences.push(
            `Size mismatch: ${relativePath} (${size1} vs ${size2} bytes)`,
          );
          this.result.identical = false;
        } else if (!this.compareFileContents(file1, file2)) {
          this.result.differences.push(`Content mismatch: ${relativePath}`);
          this.result.identical = false;
        }
      }
    }

    return this.result;
  }

  public printResults(): void {
    console.log("=".repeat(60));
    console.log("COMPARISON RESULTS");
    console.log("=".repeat(60));

    if (this.result.identical) {
      console.log("✅ SUCCESS: Directories are identical!");
    } else {
      console.log("❌ FAILURE: Directories are NOT identical!");
      console.log();

      if (this.result.errorFiles.length > 0) {
        console.log("⚠️  ERRORS:");
        this.result.errorFiles.forEach((error) => console.log(`  - ${error}`));
        console.log();
      }

      if (this.result.missingFiles.length > 0) {
        console.log("📁 MISSING FILES:");
        this.result.missingFiles.forEach((file) => console.log(`  - ${file}`));
        console.log();
      }

      if (this.result.extraFiles.length > 0) {
        console.log("➕ EXTRA FILES:");
        this.result.extraFiles.forEach((file) => console.log(`  - ${file}`));
        console.log();
      }

      if (this.result.differences.length > 0) {
        console.log("🔍 CONTENT DIFFERENCES:");
        this.result.differences.forEach((diff) => console.log(`  - ${diff}`));
        console.log();
      }
    }

    console.log("=".repeat(60));
  }
}

// Main execution
function main() {
  const dir1 = path.join(process.cwd(), "fern", "api-specs");
  const dir2 = path.join(process.cwd(), "fern", "api-specs-reference");

  const comparator = new DirectoryComparator(dir1, dir2);
  const result = comparator.compare();
  comparator.printResults();

  // Exit with appropriate code
  process.exit(result.identical ? 0 : 1);
}

// Run the script
if (require.main === module) {
  main();
}
