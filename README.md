# Alchemy Documentation

This repository contains the documentation for Alchemy's APIs and services. The documentation is built using [Fern](https://buildwithfern.com/), a modern documentation platform.

The latest documentation lives on https://alchemy.docs.buildwithfern.com/home

## Project Structure

```text
/
├── src/
│   ├── openapi/     # REST API definitions (OpenAPI)
│   └── openrpc/     # JSON-RPC API definitions (OpenRPC)
├── fern/
│   ├── <tab>/       # Written documentation for that tab (MDX)
│   └── docs.yml     # Navigation and structure config
└── build/           # Generated files - Do NOT make changes here
```

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

This will generate all specs as dereferenced json files in the `build/` directory.

### Validation

You can validate both OpenAPI and OpenRPC using scripts.

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

This project is licensed under the MIT License - see the LICENSE file for details.
