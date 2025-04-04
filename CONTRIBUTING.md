# Contributing to Alchemy Docs

Thank you for your interest in contributing to Alchemy's documentation! This guide will help you get started with the contribution process.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/docs.git`
3. Set up the upstream repository:
   ```bash
   git remote add upstream https://github.com/alchemyplatform/docs.git
   ```
4. Install dependencies: `pnpm i`
5. Create a new branch: `git checkout -b feature/your-feature-name`

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
- Define APIs following the [OpenRPC Specification](https://spec.open-rpc.org/)
- Structure:
  - `alchemy/`: Alchemy-specific APIs
  - `chains/`: Chain-specific APIs (e.g., ethereum, polygon)

### Account Kit Documentation

Account Kit documentation is maintained in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk). See its [README](https://github.com/alchemyplatform/aa-sdk/blob/ds/fern-compatible-docs/docs/README.md) for contribution guidelines.

## Making Changes

1. Make your changes
2. Test locally using `pnpm dev`
3. Commit your changes
4. Push to your fork
5. Create a pull request to the upstream

## Keeping Your Fork Updated

To keep your fork up-to-date with the original repository:

```bash
# Fetch changes from the original repository
git fetch upstream

# Checkout your main branch
git checkout main

# Merge changes from the original repository
git merge upstream/main

# Push the updated main branch to your fork
git push origin main
```

## Pull Request Guidelines

- Ensure your PR addresses a specific issue or adds a specific feature
- Include a clear description of the changes
- Reference any related issues in your PR description
- Ensure all checks pass before submitting
- Follow the existing code style and formatting

## Creating Issues

Unsure how to make changes yourself? Feel free to open an issue using the appropriate template. Please fill out required fields and provide as much detail as possible to ensure contributors can be as helpful as possible.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of differing viewpoints and experiences.

## Questions?

If you have any questions or need help, please open an issue in the repository.

## Resources

- [Fern Documentation](https://buildwithfern.com/learn)
- [OpenAPI Specification](https://swagger.io/specification/)
- [OpenRPC Specification](https://spec.open-rpc.org/)
