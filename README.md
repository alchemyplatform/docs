# Alchemy Documentation

This repository contains the content and API specifications for Alchemy's developer documentation. The documentation site is a custom Next.js application hosted in a [separate private repository](https://github.com/OMGWINNING/docs-site), which consumes content from this repo via the GitHub API.

The production site lives at <https://alchemy.com/docs>

## Project Structure

```text
/
├── src/
│   ├── openapi/           # REST API definitions (OpenAPI YAML)
│   ├── openrpc/           # JSON-RPC API definitions (OpenRPC YAML)
│   │   ├── alchemy/       # Alchemy-specific APIs
│   │   └── chains/        # Chain-specific APIs (e.g., ethereum, polygon)
│   ├── content-indexer/   # Indexer that syncs content to Redis and Algolia
│   └── utils/             # Shared utilities for spec generation
└── content/
    ├── <tab>/             # Written documentation for each tab (MDX)
    ├── api-specs/         # Dereferenced API specs generated from src/ (gitignored)
    └── docs.yml           # Navigation and structure config
```

> \[!WARNING]
> Account Kit SDK references content is maintained separately in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk). Those files are auto-generated using TypeDoc.

## How It Works

This is a **content-only** repository. It does not run the docs site directly. Instead:

1. Content authors write MDX files in `content/` and API specs in `src/`
2. The [docs-site](https://github.com/OMGWINNING/docs-site) fetches content from this repo
3. Content fetched from Github and cached in Redis (Upstash)
4. Navigation structure is defined in `content/docs.yml` and indexed into Redis by the content indexer
5. On merge to `main`, a GitHub Action triggers revalidation on the live site

### Previewing Changes

This is a content-only repository — there is no local dev server. Instead, users can preview branch changes before merging via the preview link generated on each PR. Alchemy contributors can also preview local content using the following command:

```bash
pnpm preview
```

> \[!NOTE]
> Previewing local content requires environment variables. See `.env.example` for the required variables.

This mode works by indexing your current branch's content in Redis with a branch-scoped prefix, then activating [Next.js draft mode](https://nextjs.org/docs/app/guides/draft-mode) to dynamically render the uploaded content. Since pages are rendered dynamically, page loads are slower compared to production. However, users no longer need to wait for long build times.

## Consuming Specs

The API specifications generated in this repository are automatically published to the `dev-docs.alchemy.com` domain. These published specs provide machine-readable definitions for all of Alchemy's APIs, including both REST (OpenAPI) and JSON-RPC (OpenRPC) endpoints.

You can find the complete list of all available API specs at:
**https://dev-docs.alchemy.com/metadata.json**

Each individual API spec can be found via a simple URL pattern:

* **REST API specs** (OpenAPI): `https://dev-docs.alchemy.com/alchemy/rest/{api-name}.json`
* **JSON-RPC specs** (OpenRPC): `https://dev-docs.alchemy.com/alchemy/json-rpc/{api-name}.json`
* **Chain-specific specs** (OpenRPC): `https://dev-docs.alchemy.com/chains/{chain-name}.json`

## Getting Started

### Prerequisites

* [pnpm](https://pnpm.io/)
* Node.js 22.x (install via [asdf](https://asdf-vm.com/) or [mise](https://mise.jdx.dev/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alchemyplatform/docs.git
   ```

2. Install dependencies:
   ```bash
   asdf install # or `mise install`
   corepack enable
   pnpm i
   ```

### Environment Variables

Certain operations (previewing, indexing) require environment variables for Redis and Algolia. See `.env.example` for the required variables.

## Development

### Building API Specs

Production OpenAPI and OpenRPC specs are generated using scripts from their definition files in the `src` directory.

```bash
pnpm run generate
```

This will generate all specs as dereferenced json files in the `content/api-specs` directory.

To watch for changes during development:

```bash
pnpm run generate:watch
```

### Validation

You can validate both OpenAPI and OpenRPC using these commands:

```bash
# Validate REST API specs
pnpm run validate:rest

# Validate RPC specs
pnpm run validate:rpc

# Or you can run them together with
pnpm run validate
```

### Linting

The project uses several linting tools to ensure code quality and consistency:

* **ESLint**: For JavaScript, TypeScript, and MDX code linting
* **Prettier**: For code formatting
* **Remark**: For Markdown/MDX linting
* **TypeScript**: For type checking

```bash
# Run all linters
pnpm run lint

# Auto-fix issues
pnpm run lint:fix

# Check for broken links
pnpm run lint:broken-links
```

#### Enforcement

The project uses [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/lint-staged/lint-staged) to run linting checks before commits.

## Assets (Images & Videos)

**All documentation assets are hosted on Cloudinary** - do NOT commit images/videos to the Git repository.

### Adding Images

> **Note**: Cloudinary access is only available to internal Alchemy team members. External contributors should upload assets to a temporary location and request the Alchemy team to upload them to Cloudinary.

**For internal contributors:**

1. Sign-in to Cloudinary through Okta and upload in the `docs/` folder
2. Copy the Cloudinary URL
3. Use in MDX: `![Alt text](https://alchemyapi-res.cloudinary.com/image/upload/v1234567890/docs/section/image.png)`

See [CONTRIBUTING.md](CONTRIBUTING.md#adding-images-and-videos) for detailed guidelines.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the documentation.

## Resources

* [OpenAPI Specification](https://swagger.io/specification/)
* [OpenRPC Specification](https://spec.open-rpc.org/)

## License

This project is licensed under the CC-BY-4.0 License - see the [LICENSE](./LICENSE) file for details.
