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

* Located in `fern/docs/`
* Written in MDX format
* Update `docs.yml` when adding/moving pages

#### API Documentation

**REST APIs (OpenAPI)**

* Location: `src/openapi/`
* Define APIs using YAML following the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
* **Tip**: Use the [Redocly VSCode extension](https://marketplace.visualstudio.com/items?itemName=Redocly.openapi-vs-code) to enable OpenAPI spec validation with Intellisense.

**JSON-RPC APIs (OpenRPC)**

* Location: `src/openrpc/`
* Define APIs following the [OpenRPC Specification](https://spec.open-rpc.org/)
* Structure:
  * `alchemy/`: Alchemy-specific APIs
  * `chains/`: Chain-specific APIs (e.g., ethereum, polygon)

### Account Kit Documentation

Account Kit documentation is maintained in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk). See its [README](https://github.com/alchemyplatform/aa-sdk/blob/main/docs/README.md) for contribution guidelines.

## Making Changes

1. Make your changes
2. Test locally using `pnpm dev`
3. Commit your changes
4. Push to your fork
5. Create a pull request to the upstream

## Markdown Style Guide

This project implements a modified version of the [Markdown Style Guide](https://google.github.io/styleguide/docguide/style.html) which is enforced in Eslint via [remark-lint](https://github.com/remarkjs/remark-lint). Please ensure you abide by the guidelines set there.

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

* Ensure your PR addresses a specific issue or adds a specific feature
* Include a clear description of the changes
* Reference any related issues in your PR description
* Ensure all checks pass before submitting
* Follow the existing code style and formatting

## Creating Issues

Unsure how to make changes yourself? Feel free to open an issue using the appropriate template. Please fill out required fields and provide as much detail as possible to ensure contributors can be as helpful as possible.

## Alchemy Employees

If you work at Alchemy you don't need to create your own fork. Members of the [Alchemy Employees Team](https://github.com/orgs/alchemyplatform/teams/alchemy-employees) team in GitHub are automatically granted direct access. Clicking on the alchemyplatform tile in Okta should automatically add you to this team! Please contact IT if you need further assistance being added to the team.

> \[!NOTE]
> The SSH key you use with GitHub **must** have SSO enabled to work. You can do that [here](https://github.com/settings/keys). Click the "Configure SSO" dropdown and authorize `alchemyplatform`

## Questions?

If you have any questions or need help, please open an issue in the repository.

## Resources

* [Fern Documentation](https://buildwithfern.com/learn)
* [OpenAPI Specification](https://swagger.io/specification/)
* [OpenRPC Specification](https://spec.open-rpc.org/)
