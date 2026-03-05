# Content Indexer

Content Indexer is the indexing system that builds path indexes, navigation trees, and Algolia search records for the Alchemy docs site. It lives in the `docs` repository and processes documentation from three sources:

1. **Main Docs** - Manual content from `docs/content/docs.yml` (local filesystem)
2. **SDK References** - Generated content from `aa-sdk/docs/docs.yml` (sparse checkout in GHA)
3. **Changelog** - Entries from `docs/content/changelog/*.md` (local filesystem)

## Three Indexers

The system provides three independent indexers, each triggered by different content changes:

### 1. Main Indexer (`pnpm index:main`)

Indexes manual documentation content from the local `docs` repository.

* **Trigger**: Changes to `docs/content/docs.yml` or manual content files
* **Source**: Local filesystem (`docs/content/`)
* **Modes**:
  * `production` - Full indexing with Algolia upload (default)
  * `preview` - Branch-scoped indexing without Algolia upload
* **Updates**:
  * `{branch}/path-index:main` (Redis, 30-day TTL for preview branches)
  * `{branch}/nav-tree:{tab}` for all tabs (Redis, 30-day TTL for preview branches)
  * `{branch}_alchemy_docs` (Algolia, production mode only - updates records where `indexerType:docs`)

### 2. SDK Indexer (`pnpm index:sdk`)

Indexes SDK reference documentation from the `aa-sdk` repository.

* **Trigger**: Changes to `aa-sdk/docs/docs.yml` via repository dispatch
* **Source**: Local filesystem (sparse checkout of aa-sdk/docs in GHA)
* **Updates**:
  * `{branch}/path-index:sdk` (Redis)
  * `{branch}/nav-tree:wallets` (Redis, merged with existing manual content)
  * `{branch}_alchemy_docs` (Algolia - updates records where `indexerType:sdk`)

### 3. Changelog Indexer (`pnpm index:changelog`)

Indexes changelog entries from date-based markdown files.

* **Trigger**: Changes to `docs/content/changelog/*.md`
* **Source**: Local filesystem (`docs/content/changelog/`)
* **Updates**:
  * `{branch}/path-index:changelog` (Redis)
  * No navigation tree (changelogs don't have a sidebar)
  * `{branch}_alchemy_docs` (Algolia - updates records where `indexerType:changelog`)

## Key Outputs

Each indexer generates up to three outputs:

1. **Path Index**: Maps URL paths to content sources (MDX files, API specs)
2. **Navigation Trees**: Hierarchical sidebar navigation for each documentation tab
3. **Algolia Index**: Searchable content records with metadata

All data is **branch-scoped** to support preview environments.

### Navigation Item Features

Navigation items support several features configured in `docs.yml`:

* **`hidden`**: Pages, sections, and API references can be marked `hidden: true`. Hidden items are included in the navigation tree (with a `hidden` flag) so the frontend can handle them, but they are excluded from Algolia search results.
* **`description`**: Page and section nav items include a `description` field extracted from frontmatter (`description` or `subtitle`), used for rendering in navigation.

### Preview Mode vs Production Mode

**Production Mode** (default):

* Uploads to both Redis and Algolia
* Redis keys have no expiration (permanent)
* Creates branch-scoped Algolia indices

**Preview Mode** (`--mode=preview`):

* Uploads to Redis only (skips Algolia)
* Redis keys expire after 30 days (automatic cleanup)
* Uses production Algolia indices for search
* Only available for main and changelog indexers (SDK indexer is production-only)

## Preview System (`pnpm preview`)

The preview system enables branch-based content previewing without merging to `main`. It is separate from the indexers above and has its own entry point (`preview.ts`).

### How It Works

The preview command has two operation modes:

1. **Fast path** (`--upload-file`): Uploads a single changed MDX or changelog file to Redis. Used for rapid iteration.
2. **Slow path** (`--reindex`): Runs a full re-index of docs (and optionally changelog). Used when structural changes are made (e.g., `docs.yml`, API specs).

### Watch Mode (Local Development)

Running `pnpm preview` without flags starts an interactive watch mode that monitors the filesystem for changes:

* **Fast watcher**: Watches `content/**/*.{mdx,md}` — triggers individual file uploads
* **Slow watcher**: Watches `content/docs.yml` and `src/openapi/**`, `src/openrpc/**` — triggers full re-index

This enables live content previewing during local development.

### What Gets Uploaded

All branch-scoped Redis keys use a 30-day TTL for automatic cleanup.

* **MDX files**: All changed files vs `main` (not just path-indexed ones), stored at `{branch}:mdx:{filePath}`
* **Changelog files**: Changed files that exist in the path index, stored at `{branch}:changelog:{filename}`
* **API specs**: Generated specs, stored at `{branch}:{specType}-spec:{specId}`
* **Path index + nav trees**: Full re-index output, stored at `{branch}/path-index:{type}` and `{branch}/nav-tree:{tab}`

### CI Integration

In CI (GitHub Actions), preview runs non-interactively:

1. On PR open/update, the preview GitHub Action runs the indexer and uploads changed files
2. A signed preview URL is generated (HMAC-based) and posted as a PR comment
3. The preview URL activates Next.js draft mode on the docs site, which reads branch-scoped Redis keys instead of production keys

### Preview Uploaders

| File | Purpose |
|------|---------|
| `uploaders/preview-mdx.ts` | Uploads individual MDX files; detects routing-relevant frontmatter changes |
| `uploaders/preview-changelog.ts` | Uploads individual changelog files; detects new/deleted entries |
| `uploaders/preview-specs.ts` | Uploads generated API specs to Redis |
| `utils/preview-index.ts` | Orchestrates preview indexing and uploading |
| `utils/preview-url.ts` | Generates HMAC-signed preview URLs |
| `utils/preview-watchers.ts` | Spawns file watchers for local development |

## Architecture

### Main & SDK Indexers: 3-Phase Processing

Both the main and SDK indexers use a unified `buildDocsContentIndex` function that processes `docs.yml` files through three phases:

```mermaid
flowchart TD
    Start[buildDocsContentIndex] --> ReadYml[Read docs.yml]
    ReadYml --> Phase1[Phase 1: SCAN]

    Phase1 --> ScanDocs[scanDocsYml]
    ScanDocs --> CollectPaths[Collect all MDX paths]
    ScanDocs --> CollectSpecs[Collect all spec names]

    CollectPaths --> Phase2[Phase 2: BATCH FETCH]
    CollectSpecs --> Phase2

    Phase2 --> FetchContent[Fetch all content in parallel]
    FetchContent --> Cache[ContentCache]

    Cache --> Phase3[Phase 3: PROCESS]

    Phase3 --> ProcessNav[visitNavigationItem with cache]
    ProcessNav --> BuildOutputs[Build all outputs]

    BuildOutputs --> PathIdx[PathIndex]
    BuildOutputs --> NavTrees[Navigation Trees]
    BuildOutputs --> Algolia[Algolia Records]

    PathIdx --> Upload[Upload in parallel]
    NavTrees --> Upload
    Algolia --> Upload

    Upload --> Redis[storeToRedis]
    Upload --> AlgoliaUpload[uploadToAlgolia]
```

**Key difference between main and SDK:**

* **Main**: Reads from local filesystem (`docs/content/`)
* **SDK**: Reads from local filesystem (`aa-sdk-docs/docs/`) after sparse checkout in GHA

### Changelog Indexer: Simpler Flow

The changelog indexer reads date-based markdown files directly:

```mermaid
flowchart TD
    Start[buildChangelogIndex] --> ReadDir[Read content/changelog/]
    ReadDir --> ParseFiles[Parse date from filenames]
    ParseFiles --> Parallel[Fetch all files in parallel]
    Parallel --> BuildOutputs[Build PathIndex + Algolia records]
    BuildOutputs --> Upload[Upload in parallel]
    Upload --> Redis[storeToRedis]
    Upload --> AlgoliaUpload[uploadToAlgolia]
```

**Simpler because:**

* No `docs.yml` to parse
* No navigation trees needed
* Direct file-to-route mapping

### Why This Architecture?

With **4000+ pages**, this 3-phase approach:

1. **Maximizes parallelization**: All content fetched simultaneously
2. **Eliminates duplicate fetches**: Single fetch per file, cached for all uses
3. **Single-pass processing**: Build all outputs in one traversal

## Key Concepts

### Branch-Scoped Keys

All Redis keys and Algolia indices are scoped by branch to support preview environments:

```text
Redis (with TTL for preview branches):
- main/path-index:main (no expiration)
- main/nav-tree:wallets (no expiration)
- feature-abc/path-index:main (30-day TTL)
- feature-abc/nav-tree:wallets (30-day TTL)

Algolia (production mode only, unified index per branch):
- main_alchemy_docs (contains all content types with indexerType field)

Note: Each indexer updates only its own records (filtered by indexerType) in the unified index.
Preview branches use production Algolia indices for search.
```

### Wallets Navigation Tree Merging

The wallets tab navigation tree requires special handling because it contains both:

* **Manual content** (from main indexer)
* **SDK references** (from SDK indexer)

**Bidirectional merging** ensures neither indexer overwrites the other:

* **Main indexer**: Reads existing wallets tree → preserves SDK sections → merges with new manual sections
* **SDK indexer**: Reads existing wallets tree → preserves manual sections → merges with new SDK sections

SDK Reference sections are always positioned **second-to-last** (before Resources section).

### Output Data Structures

* **Path Index**: Used by Next.js routing to determine which content to render for a given URL
  * Maps paths like `wallets/getting-started` to MDX files or API operations
  * Contains metadata: type (mdx/openapi/openrpc), file path, source, tab
  * Stored in Redis for fast lookup at runtime: `{branch}/path-index:{type}`

* **Navigation Trees**: Used to render sidebar navigation
  * Hierarchical structure with sections, pages, and API endpoints
  * One tree per top-level tab (guides, wallets, reference, etc.)
  * Stored in Redis: `{branch}/nav-tree:{tab}`

* **Algolia Index**: Used for site-wide search
  * Flat list of searchable pages with content, title, breadcrumbs
  * Markdown automatically stripped to plain text for better search results
  * Uploaded to Algolia for full-text search: `{branch}_alchemy_docs[_{type}]`
  * Updated atomically to avoid search downtime

### ContentCache

The `ContentCache` class provides O(1) lookup for all fetched content:

* **MDX files**: Stores frontmatter and raw MDX body
* **API specs**: Stores parsed OpenAPI/OpenRPC specifications

By fetching everything upfront in Phase 2, we eliminate duplicate API calls during processing.

### Markdown Stripping

All Algolia records automatically have markdown syntax stripped using the `remove-markdown` package in `truncateRecord()`. This ensures search results contain clean, readable text without formatting artifacts.

### Stable ObjectIDs for Algolia

Algolia requires unique `objectID` for each record. We generate deterministic
hashes from URL paths:

* **All pages (MDX and API methods)**: SHA-256 hash of the URL path (first 16 chars)
  * Example: `a3f2c8e1b9d4f6a7`
  * Uniqueness: URLs are guaranteed unique by the routing system
  * Stability: Paths are designed to be stable (SEO, bookmarks, external links)
  * Enables partial index updates via `indexerType` field filtering

**IndexerType Field:** Each record includes an `indexerType` field (e.g., "docs", "sdk",
"changelog") to enable targeted deletion and updates. This allows multiple indexers to
write to a single unified index without conflicts.

**Why path-based hashes?** Paths are the web's natural unique identifier and are
specifically designed to be stable. Unlike titles or breadcrumbs, URL changes are
typically rare and intentional (considered breaking changes for SEO and bookmarks).

**Why hashes?** Provides compact, opaque identifiers that don't expose internal
structure while maintaining the URL's uniqueness guarantee.

## Design Decisions

### 1. Three Independent Indexers

**Why?** Content updates happen independently:

* Main docs change frequently (manual edits)
* SDK refs change when aa-sdk releases
* Changelog entries added weekly

Running separate indexers allows efficient, targeted updates without re-processing unrelated content.

### 2. Wallets Navigation Tree Merging

The wallets tab requires special handling because it contains both manual and SDK content. We use **bidirectional merging**:

* **Main indexer**: Preserves existing SDK sections when updating manual content
* **SDK indexer**: Preserves existing manual sections when updating SDK refs

This prevents either indexer from accidentally overwriting the other's content. The merge logic lives in `utils/nav-tree-merge.ts`.

### 3. Branch-Scoped Storage

All Redis keys and Algolia indices include the branch name to support preview environments:

```text
main/path-index:main       → Production
feature-xyz/path-index:main → Preview branch
```

This allows preview deployments to have independent data without interfering with production.

### 4. Unified Algolia Index with IndexerType Field

All content types (docs, SDK, changelog) write to a single Algolia index per branch:

```text
- main_alchemy_docs (contains all content types)
```

**IndexerType Field:** Each record has an `indexerType` field for targeted updates:

* `indexerType: "docs"` for main documentation
* `indexerType: "sdk"` for SDK references
* `indexerType: "changelog"` for changelog entries

**ObjectID Format:** Simple hash of URL path (e.g., `a3f2c8e1b9d4f6a7`)

**Why?** Allows multiple independent indexers to write to the same index without conflicts. Each indexer can update only its own records by filtering on `indexerType:docs`, etc.

### 5. Delete-Then-Upload Strategy for Algolia

Each indexer updates only its own records in the unified index:

1. Delete all records matching the indexer type (e.g., `indexerType:docs`)
2. Upload new records with the same indexerType
3. Measure and log downtime (gap when records are unavailable)

**Why?** Enables partial index updates without affecting other content types. Simpler than atomic swap and uses similar API operations. Brief downtime is measured and logged to monitor performance.

**Downtime Monitoring:** Each upload logs the gap between delete completion and upload start (when records are unavailable to users). Warning shown if downtime exceeds 5 seconds.

### 6. Markdown Stripping for Search

All Algolia records have markdown syntax automatically stripped using `remove-markdown`. This happens in `truncateRecord()` before size checking, ensuring search results contain clean, readable text.

## Directory Structure

```text
content-indexer/
├── index.ts                 # CLI entry point for indexers
├── preview.ts               # CLI entry point for preview system
├── indexers/                # Indexer implementations
│   ├── main.ts                 # buildDocsContentIndex (main & SDK)
│   └── changelog.ts            # buildChangelogIndex
├── collectors/              # Output collectors (Phase 3)
│   ├── algolia.ts              # Collects Algolia search records
│   ├── navigation-trees.ts     # Collects navigation trees by tab
│   ├── path-index.ts           # Collects path index entries
│   └── processing-context.ts   # Unified context encapsulating all collectors
├── constants/               # Shared constants
├── core/                    # Core processing logic (3-phase pipeline)
│   ├── scanner.ts              # Phase 1: Scan docs.yml for paths/specs
│   ├── batch-fetcher.ts        # Phase 2: Parallel fetch all content
│   ├── content-cache.ts        # Phase 2: In-memory cache for fetched content
│   ├── build-all-outputs.ts    # Phase 3: Main orchestrator
│   └── path-builder.ts         # Hierarchical URL path builder
├── visitors/                # Visitor pattern for processing (Phase 3)
│   ├── index.ts                # Main dispatcher (visitNavigationItem)
│   ├── visit-page.ts           # Processes MDX pages
│   ├── visit-section.ts        # Processes sections (with recursion)
│   ├── visit-link.ts           # Processes external links
│   ├── visit-api-reference.ts  # Orchestrates API spec processing
│   └── processors/
│       ├── process-openapi.ts  # Processes OpenAPI specifications
│       └── process-openrpc.ts  # Processes OpenRPC specifications
├── uploaders/               # Upload to external services
│   ├── algolia.ts              # Uploads to Algolia with delete-then-upload
│   ├── redis.ts                # Stores to Redis with branch scoping
│   ├── preview-mdx.ts          # Preview: uploads individual MDX files
│   ├── preview-changelog.ts    # Preview: uploads individual changelog files
│   └── preview-specs.ts        # Preview: uploads API specs
├── utils/                   # Utility functions
│   ├── filesystem.ts           # Local file reading utilities
│   ├── nav-tree-merge.ts       # Wallets nav tree merging logic
│   ├── openapi.ts              # OpenAPI-specific utilities
│   ├── openrpc.ts              # OpenRPC-specific utilities
│   ├── navigation-helpers.ts   # Navigation construction helpers
│   ├── truncate-record.ts      # Truncates Algolia records to size limit
│   ├── normalization.ts        # Path normalization utilities
│   ├── preview-index.ts        # Preview: orchestrates index + upload
│   ├── preview-url.ts          # Preview: generates signed preview URLs
│   └── preview-watchers.ts     # Preview: file watcher spawning
└── types/                   # TypeScript type definitions
    ├── indexer.ts              # IndexerResult interface
    └── ...                     # Other type definitions
```

## Data Flow (Main & SDK Indexers)

### Phase 1: Scan

Read `docs.yml` (from filesystem or GitHub), then scan it:

```typescript
scanDocsYml(docsYml) → { mdxPaths: Set<string>, specNames: Set<string> }
```

* Recursively walks `docs.yml` navigation structure
* Collects all unique MDX file paths from `page` and `section` items
* Collects all unique API spec names from `api` items
* Uses Sets to avoid duplicates
* **No additional I/O** - just traversing the YAML structure

### Phase 2: Batch Fetch

```typescript
batchFetchContent(scanResult, source) → ContentCache
```

* Converts Sets to arrays and maps over them
* Fetches all content in parallel with `Promise.all`
  * Reads local files with `fs.readFile`
  * Supports `stripPathPrefix` for handling different repository structures
* Parses frontmatter from MDX files using `gray-matter`
* Stores everything in `ContentCache` for O(1) lookup
* **Maximum parallelization** - all I/O happens simultaneously

### Phase 3: Process

```typescript
buildAllOutputs(docsYml, contentCache, stripPathPrefix?)
  → { pathIndex, navigationTrees, algoliaRecords }
```

* Uses visitor pattern to walk `docs.yml` navigation structure
* `visitNavigationItem` dispatcher routes to type-specific visitors:
  * `visitPage` for MDX pages
  * `visitSection` for sections (recursive)
  * `visitApiReference` for API specs (delegates to OpenAPI/OpenRPC processors)
  * `visitLink` for external links
* For each item, looks up content in cache (O(1) lookup)
* `ProcessingContext` encapsulates three collectors:
  * `PathIndexCollector` for path index entries
  * `NavigationTreesCollector` for navigation tree items
  * `AlgoliaCollector` for search records
* Passes `navigationAncestors` through recursion for breadcrumbs
* Returns all three outputs simultaneously

### Upload Phase

```typescript
Promise.all([
  storeToRedis(pathIndex, navigationTrees, { branchId, indexerType }),
  uploadToAlgolia(algoliaRecords, { indexerType, branchId }),
]);
```

* Writes to Redis and Algolia in parallel
* Branch-scoped keys for preview support
* Special handling for wallets nav tree (bidirectional merge)
* Algolia uses atomic swap (temp index → production)

## Changelog Indexer Flow

The changelog indexer uses a simpler flow:

1. **Read directory**: List all files in `content/changelog/`
2. **Parse filenames**: Extract dates from `YYYY-MM-DD.md` pattern
3. **Fetch in parallel**: Read all files with `Promise.all`
4. **Build outputs**: Create path index + Algolia records (no nav trees)
5. **Upload**: Write to Redis and Algolia in parallel

## Usage

### Running the Indexers

```bash
# Main indexer (production mode - default)
pnpm index:main

# Main indexer (preview mode - branch-scoped)
pnpm index:main:preview

# SDK indexer (reads from aa-sdk-docs/, production only)
pnpm index:sdk

# Changelog indexer
pnpm index:changelog
```

**Note for SDK indexer local testing:**
The SDK indexer expects `aa-sdk-docs/docs/` to exist. In GHA, this is created via sparse checkout. For local testing:

```bash
# Sparse checkout aa-sdk/docs
git clone --filter=blob:none --sparse https://github.com/alchemyplatform/aa-sdk.git aa-sdk-docs
cd aa-sdk-docs
git sparse-checkout set docs
cd ..

pnpm index:sdk
```

### Environment Variables

Create a `.env` file (see `.env.example`):

```bash
# Redis (required for path index and navigation trees)
KV_REST_API_TOKEN=your_token
KV_REST_API_URL=your_url

# Algolia (required for search index)
ALGOLIA_APP_ID=your_app_id
ALGOLIA_ADMIN_API_KEY=your_admin_key
```

### Testing

```bash
# Run all tests
pnpm test:run

# Run with coverage report
pnpm test:coverage

# Watch mode
pnpm test
```

## Development

### Running Locally

1. Set up environment variables in `.env`
2. Run an indexer:
   ```bash
   pnpm index:main:preview
   ```
3. Check Redis/Algolia to verify data was written

### Adding New Content Types

To add a new content type that requires indexing:

1. Create a new indexer in `indexers/` (or extend existing)
2. Add npm script to `package.json`
3. Update `index.ts` entry point to include new indexer type
4. Update `storeToRedis` and `uploadToAlgolia` if new storage patterns needed

### Testing

The test suite covers:

* **Core logic**: 95-100% coverage for collectors, visitors, processors
* **Integration**: Full pipeline tests for each indexer
* **Edge cases**: Truncation, merging, error handling

Low coverage in I/O utilities (`filesystem.ts`, `github.ts`) is expected and acceptable.

## Troubleshooting

### "No cached spec found for api-name"

**Cause:** Spec name in docs.yml doesn't match filename in metadata.json

**Fix:** Check `API_NAME_TO_FILENAME` mapping in `utils/apiSpecs.ts`

### "Failed to read docs.yml"

**Cause:**

* (Main indexer) File doesn't exist locally at `content/docs.yml`
* (SDK indexer) `aa-sdk-docs/docs/` directory not found

**Fix:**

1. Verify file exists at expected location
2. (SDK indexer) Run sparse checkout to create `aa-sdk-docs/docs/` (see "Running the Indexers" section above)
3. Verify the path in `index.ts` matches your local directory structure

### "Failed to read changelog file"

**Cause:** Changelog file doesn't follow expected `YYYY-MM-DD.md` naming pattern

**Fix:** Ensure all changelog files in `content/changelog/` are named like `2025-11-20.md`

### SDK References not appearing in wallets sidebar

**Cause:** Main indexer ran after SDK indexer and didn't preserve SDK sections

**Fix:**

1. Verify `mergeWalletsNavTree` is being called in `storeToRedis`
2. Check Redis to see if SDK sections exist: `GET main/nav-tree:wallets`
3. Re-run SDK indexer after main indexer to restore SDK sections
