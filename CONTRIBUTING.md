# Contributing to Alchemy Docs

Thank you for your interest in contributing to Alchemy's documentation! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/docs.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

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

## Development

### Local Development

1. Start the development server:

   ```bash
   fern docs dev
   ```

2. Generate the documentation:
   ```bash
   pnpm run generate
   ```

### Documentation Types

#### Written Documentation

- Located in `fern/docs/`
- Written in MDX format
- Update `docs.yml` when adding/moving pages

#### API Documentation

**REST APIs (OpenAPI)**

- Location: `src/openapi/`
- Define APIs using YAML following the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)

**JSON-RPC APIs (OpenRPC)**

- Location: `src/openrpc/`
- Structure:
  - `alchemy/`: Alchemy-specific APIs
  - `chains/`: Chain-specific APIs (e.g., ethereum, polygon)

### Account Kit Documentation

Account Kit documentation is maintained in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk). See its [README](https://github.com/alchemyplatform/aa-sdk/blob/ds/fern-compatible-docs/docs/README.md) for contribution guidelines.

## Making Changes

1. Make your changes
2. Test locally using `fern docs dev`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "docs: brief description of changes"
   ```
4. Push to your fork
5. Create a Pull Request

## Resources

- [Fern Documentation](https://buildwithfern.com/learn)
- [OpenAPI Specification](https://swagger.io/specification/)
- [OpenRPC Specification](https://spec.open-rpc.org/)
