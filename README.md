# Alchemy Documentation

This repository contains the documentation for Alchemy's APIs and services. The documentation is built using [Fern](https://buildwithfern.com/), a modern documentation platform.

## Project Structure

```
docs/
├── src/
│   ├── openapi/     # REST API definitions (OpenAPI)
│   └── openrpc/     # JSON-RPC API definitions (OpenRPC)
├── fern/
│   ├── docs/        # Written documentation (MDX)
│   └── docs.yml     # Navigation and structure config
└── docs/            # Generated documentation - Do NOT make changes here
```

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/)

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

This will start a local server with live reloading. Visit `http://localhost:3000` to view the documentation.

### Building API Specs

Production OpenAPI and OpenRPC specs are generated using scripts from their definition files in the `src` directory.

```bash
pnpm run generate
```

This will generate all specs as dereferenced json files in the `build/` directory.

### Validation

You can validate both specs and MDX using scripts.

```bash
# Validate REST API specs
pnpm run validate:rest

# Validate RPC specs
pnpm run validate:rpc

# Validate markdown files
pnpm run validate:mdx
```

Or you can run them together using

```bash
pnpm run validate
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the documentation.

## Resources

- [Fern Documentation](https://buildwithfern.com/learn)
- [OpenAPI Specification](https://swagger.io/specification/)
- [OpenRPC Specification](https://spec.open-rpc.org/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
