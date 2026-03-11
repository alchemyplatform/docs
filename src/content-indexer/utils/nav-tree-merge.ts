import type {
  NavItem,
  NavigationTree,
} from "@/content-indexer/types/navigation.js";

/**
 * Checks if a navigation item is an SDK reference section.
 * SDK sections are identified by title containing "sdk reference" (case-insensitive)
 * WARNING: This is an assumption and will break if the title for this section is changed
 */
const isSDKReferenceSection = (item: NavItem): boolean => {
  if (item.type === "section" || item.type === "api-section") {
    return item.title.toLowerCase().includes("sdk reference");
  }
  return false;
};

/**
 * Identifies SDK reference sections vs manual sections in a navigation tree.
 * SDK sections are identified by title containing "sdk reference" (case-insensitive).
 *
 * @param tree - The navigation tree to separate
 * @returns Object with sdk and manual sections
 */
export const separateSDKAndManualSections = (
  tree: NavigationTree,
): { sdk: NavigationTree; manual: NavigationTree } => {
  return tree.reduce<{ sdk: NavigationTree; manual: NavigationTree }>(
    (acc, item) => {
      if (isSDKReferenceSection(item)) {
        acc.sdk.push(item);
      } else {
        acc.manual.push(item);
      }
      return acc;
    },
    { sdk: [], manual: [] },
  );
};

/**
 * Merges navigation trees for the wallets tab, handling SDK references and manual sections.
 * SDK References are always inserted second-to-last (before Resources section).
 *
 * @param newTree - New sections from current indexer run
 * @param existingTree - Existing wallets navigation tree from Redis (or null if none)
 * @param indexerType - Type of indexer: "sdk" means newTree is SDK refs, "docs" means newTree is manual content
 * @returns Merged tree with manual sections + SDK sections at second-to-last position
 */
export const mergeWalletsNavTree = (
  newTree: NavigationTree,
  existingTree: NavigationTree | null,
  indexerType: "docs" | "sdk",
): NavigationTree => {
  if (!existingTree) {
    if (indexerType === "sdk") {
      console.warn("⚠️  No existing wallets nav tree found, creating new one");
    }
    return newTree;
  }

  console.info("📖 Read existing wallets nav tree from Redis");

  // Separate SDK and manual sections from existing tree
  const { sdk: existingSDK, manual: existingManual } =
    separateSDKAndManualSections(existingTree);

  // Determine which sections are new and which to preserve
  const manualSections = indexerType === "docs" ? newTree : existingManual;
  let sdkSections: NavigationTree;
  if (indexerType === "sdk") {
    // Merge by section title: replace only the SDK sections whose titles
    // match the incoming tree, preserving SDK sections from other branches.
    // e.g., a v5.x.x run updates "SDK Reference (v5.x.x)" but preserves
    // main's "SDK Reference" section, and vice versa.
    const newTitles = new Set(
      newTree.filter(isSDKReferenceSection).map((s) => s.title),
    );
    const preservedSDK = existingSDK.filter(
      (s) =>
        (s.type === "section" || s.type === "api-section") &&
        !newTitles.has(s.title),
    );
    sdkSections = [...preservedSDK, ...newTree];
  } else {
    sdkSections = existingSDK;
  }

  // Log preservation info
  if (indexerType === "docs" && sdkSections.length > 0) {
    console.info(
      `📖 Preserved ${sdkSections.length} SDK reference section(s) in wallets nav tree`,
    );
  }

  // Handle edge cases
  if (sdkSections.length === 0) {
    return manualSections;
  }
  if (manualSections.length === 0) {
    return sdkSections;
  }

  // Insert SDK sections at second-to-last position (before Resources)
  return [
    ...manualSections.slice(0, -1), // All manual sections except last
    ...sdkSections, // SDK sections
    manualSections[manualSections.length - 1], // Last section (Resources)
  ];
};
