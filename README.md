# Alchemy Documentation

This repository contains the documentation for Alchemy's APIs and services. The documentation is built using [Fern](https://buildwithfern.com/), a modern documentation platform.

The latest documentation lives on https://alchemy.docs.buildwithfern.com/home

## Project Structure

```text
/
├── src/
│   ├── openapi/     # REST API definitions (OpenAPI)
│   └── openrpc/     # JSON-RPC API definitions (OpenRPC)
└── fern/
    ├── <tab>/       # Written documentation for that tab (MDX)
    ├── api-specs/   # Dereferenced API Specs generated from definitions (gitignored)
    └── docs.yml     # Navigation and structure config
```

> \[!WARNING]
> Account Kit documentation is maintained separately in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk). See its [README](https://github.com/alchemyplatform/aa-sdk/blob/main/docs/README.md) for contribution guidelines.

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

## Development

### Local Development

Start the development server:

```bash
pnpm dev
```

This will start a local server with live reloading. Visit `http://localhost:3020` to view the documentation.

### Building API Specs

Production OpenAPI and OpenRPC specs are generated using scripts from their definition files in the `src` directory.

```bash
pnpm run generate
```

This will generate all specs as dereferenced json files in the `fern/api-specs` directory.

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

* **ESLint**: For JavaScript and TypeScript code linting
* **Prettier**: For code formatting
* **Remark**: For Markdown/MDX linting
* **TypeScript**: For type checking

You can find the appropriate commands for running each in `package.json`

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

* [Fern Documentation](https://buildwithfern.com/learn)
* [OpenAPI Specification](https://swagger.io/specification/)
* [OpenRPC Specification](https://spec.open-rpc.org/)

## License

This project is licensed under the CC-BY-4.0 License - see the [LICENSE](./LICENSE) file for details.
