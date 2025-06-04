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

#### Building Custom Components

In some cases we need to use custom-built components that require styling outside the standard Fern capabilities. Currently, Fern does not support building/rendering Custom JS + React locally, so first you'll need to build the custom component:

```bash
cd footer/  # using the custom footer component as an example
pnpm install  # if you need to install dependencies
pnpm run build
```

Then, a preview needs to be generated (this requires access to Fern):

```bash
pnpm fern login
pnpm fern generate --docs --preview
```

This will take a few minutes as it needs to upload a lot of files to generate the preview after which it will output a preview URL.

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

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the documentation.

## Resources

* [Fern Documentation](https://buildwithfern.com/learn)
* [OpenAPI Specification](https://swagger.io/specification/)
* [OpenRPC Specification](https://spec.open-rpc.org/)

## License

This project is licensed under the CC-BY-4.0 License - see the [LICENSE](./LICENSE) file for details.
