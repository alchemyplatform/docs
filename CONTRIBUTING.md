# Contributing to Alchemy Docs

Thank you for your interest in contributing to Alchemy's documentation! This guide will help you get started with the contribution process.

## Architecture Overview

Alchemy's documentation is split across two repositories:

| Repository | Description |
|---|---|
| [`alchemyplatform/docs`](https://github.com/alchemyplatform/docs) (this repo) | Content repository — MDX pages, API specs (OpenAPI/OpenRPC), navigation config, and content indexing |
| [`OMGWINNING/docs-site`](https://github.com/OMGWINNING/docs-site) (private) | Site repository — custom Next.js application that renders the content |

As a content contributor, you only need to work in **this repo**. The docs site fetches content from here via the GitHub API and caches it in Redis. When changes are merged to `main`, the live site is automatically revalidated.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/docs.git`
3. Set up the upstream repository:
   ```bash
   git remote add upstream https://github.com/alchemyplatform/docs.git
   ```
4. Install dependencies: `pnpm i`
5. Create a new branch: `git checkout -b initials/your-feature-name`

> \[!INFO]
> Alchemy employees do not need to create their own fork!

### Documentation Types

#### Written Documentation

* Located in `content/`
* Written in MDX format
* Update `content/docs.yml` when adding, removing, or moving pages

For available MDX components and syntax, see the [MDX Features Reference](MDX_FEATURES.md).

#### API Documentation

**REST APIs (OpenAPI)**

* Location: `src/openapi/`
* Define APIs using YAML following the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)

> \[!TIP]
> Use the [Redocly VSCode extension](https://marketplace.visualstudio.com/items?itemName=Redocly.openapi-vs-code) to enable OpenAPI spec validation with Intellisense.

**JSON-RPC APIs (OpenRPC)**

* Location: `src/openrpc/`
* Define APIs following the [OpenRPC Specification](https://spec.open-rpc.org/)
* Structure:
  * `alchemy/`: Alchemy-specific APIs
  * `chains/`: Chain-specific APIs (e.g., ethereum, polygon)

> \[!TIP]
> Use the [YAML VSCode extension](https://marketplace.cursorapi.com/items?itemName=redhat.vscode-yaml) to get some basic OpenRPC validation with Intellisense.

### Smart Wallet Documentation

Smart Wallets documentation has its own [contributing guide](https://github.com/alchemyplatform/docs/blob/main/content/wallets/README.md). Additionally, Account Kit SDK references are maintained separately in the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk).

## Making Changes

If you are not an [Alchemy Employee](#alchemy-employees), you will need to create your own fork.

1. Fork the repo (if you haven't already)
2. Make your changes
3. Run linting: `pnpm run lint`
4. Commit your changes
5. Push to your fork
6. Create a pull request to the upstream

### Previewing Changes

This is a content-only repository — there is no local dev server. Instead, users can preview branch changes before merging via the preview link generated on each PR. Alchemy contributors can also preview local content using the following command:

```bash
pnpm preview
```

> \[!NOTE]
> Previewing local content requires environment variables. See `.env.example` for the required variables.

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

## Adding Images and Videos

**All documentation assets are hosted on Cloudinary** - do NOT commit images/videos to Git.

### How to Add Assets

> **Note for External Contributors**: Cloudinary access is only available to internal Alchemy team members. If you need to add images or videos to your contribution, please upload them to a temporary location (like GitHub Issues or PR comments) and ask the Alchemy team to upload them to Cloudinary for you.

1. **Upload to Cloudinary** *(Internal contributors only)*
   * Sign-in to Cloudinary through Okta.
   * Upload to the `docs/` folder
   * Organize by section: `docs/api-reference/`, `docs/tutorials/`, `docs/guides/`, etc.

2. **Copy the Cloudinary URL**
   * Click on your uploaded asset
   * Copy the "Secure URL" (starts with `https://alchemyapi-res.cloudinary.com/`)

3. **Add to Your MDX File**
   ```markdown
   ![Descriptive alt text](https://alchemyapi-res.cloudinary.com/image/upload/v1234567890/docs/section/image.png)
   ```

### Best Practices

* ✅ Use descriptive filenames: `nft-api-dashboard.png`
* ✅ Optimize images before uploading (keep under 1 MB)
* ❌ Don't commit images to Git
* ❌ Don't use generic names like `image.png`
* ❌ Don't link to external CDNs (GitHub, Imgur, etc.)

### Video Embeds

```markdown
<embed
  src="https://alchemyapi-res.cloudinary.com/raw/upload/v1234567890/docs/section/video.webm"
  type="video/webm"
  style={{ width: '100%' }}
/>
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

* [OpenAPI Specification](https://swagger.io/specification/)
* [OpenRPC Specification](https://spec.open-rpc.org/)
