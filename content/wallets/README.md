# Smart Wallets Documentation

This directory contains the written documentation for Smart Wallets that gets published to [alchemy.com/docs](https://alchemy.com/docs/wallets).

## Structure

```text
content/wallets/
├── README.md          # This file
├── CONTRIBUTING.md    # Style guide and content standards
├── pages/             # Documentation pages (MDX)
├── components/        # Custom components (e.g., icons)
└── shared/            # Shared snippets referenced by multiple pages
```

> \[!WARNING]
> If you want to make changes to content outside the Wallets tab, see the main [contributing guide](../../CONTRIBUTING.md).

## Making Updates

### Docs Content

To add or modify documentation content:

* Add/edit MDX files in the `pages/` directory
* Follow the style guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md)

To add new pages to navigation:

* Update the wallets section in [`content/docs.yml`](../docs.yml)

### SDK References

SDK references are automatically generated from the [aa-sdk repository](https://github.com/alchemyplatform/aa-sdk) using TypeDoc and should **not** be edited manually.

### Images

**All documentation images are hosted on Cloudinary** for optimal performance and CDN delivery.

To add new images:

1. **Upload to Cloudinary**:

   * Sign-in to Cloudinary through Okta.
   * Folder structure: `docs/aa-sdk/images/[subdirectory]/`
   * Use descriptive, kebab-case filenames (e.g., `auth0-config.png`)
   * Set `overwrite: true` if replacing an existing asset

2. **Reference in Markdown**:

   ```markdown
   ![Alt text](https://alchemyapi-res.cloudinary.com/image/upload/v{version}/docs/aa-sdk/images/your-image.png)
   ```

3. **Best Practices**:
   * ✅ Always include descriptive alt text for accessibility
   * ✅ Optimize images before upload (compress PNGs, use appropriate JPEG quality)
   * ✅ Use consistent naming conventions
   * ❌ Don't commit local image files to the repository

## Previewing Changes

1. Create a pull request with your changes
2. A preview link is automatically generated on each PR
3. Review the preview to ensure your changes appear as expected

## Publishing

Documentation changes are automatically published to [alchemy.com/docs](https://alchemy.com/docs) when merged to the `main` branch.
