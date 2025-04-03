Contribution guide for our new [docs repository](https://github.com/alchemyplatform/docs) powered by [Fern](https://buildwithfern.com/)!

---

## 📁 Repo Structure Overview

Our documentation is organized clearly:

- **`src`**
  - `openapi/`: YAML definitions for REST APIs (OpenAPI).
  - `openrpc/`: JSON-RPC API specifications (OpenRPC).
- **`fern`**
  - Contains configuration (`docs.yml`) for navigation and structure + markdown (MDX) files for written docs (`docs/`)
- **`scripts`**
  - Scripts for building and validating documentation and APIs (`build.sh`, TypeScript validations).
- **`custom-app`** _(rarely used)_
  - Frontend source code for custom UI components.
- **`docs`** _(auto-generated)_
  - Output directory for compiled docs (`pnpm run build`).
- **Miscellaneous Files**
  - Project management files (`README.md`, `package.json`, etc.).

---

## ✏️ Updating Written Docs

### Editing Markdown (MDX) Files

- **Location:** `fern/docs`
- **Steps:**
  1. Find or create the relevant file.
  2. Edit with markdown ([reference](https://buildwithfern.com/learn/docs/content/write-markdown)).
  3. Update navigation (`docs.yml`) if adding new pages.

---

## ⚙️ Updating API Specifications

### REST APIs (OpenAPI)

- **Location:** `src/openapi/`
- Define APIs using YAML ([OpenAPI Spec](https://spec.openapis.org/oas/latest.html)).
- Update navigation (`docs.yml`) if adding new API.

### JSON-RPC APIs (OpenRPC)

- **Location:** `src/openrpc/`
- Divided into:
  - **Alchemy-specific APIs:** (`alchemy/`)
    - `_shared/components.yaml`: Common types (address, blockTag).
    - `<api-name>/base.yaml`: General API info and server urls.
    - `<api-name>/methods.yaml`: API methods ([OpenRPC Spec](https://spec.open-rpc.org/)).
  - **Chain-specific APIs:** (`chains/`)
    - Organized by chain (e.g., `ethereum/`):
      - `methods/`: Method definitions ([OpenRPC Spec](https://spec.open-rpc.org/)).
      - `components/`: Supporting components.
      - `base.yaml`: General chain info and server urls.
- Update navigation (`docs.yml`) if adding new APIs.

---

## :1728952592-account-kit: Updating Account Kit Docs

<aside>
💡

Account Kit docs are maintained in a separate repo! Their content is managed in [**aa-sdk**](https://github.com/alchemyplatform/aa-sdk)

</aside>

**Docs Content**

To add or modify written pages:

- Add/edit markdown files in the `pages/` directory
- Update the `navigation` section in `docs.yml`
- Reference markdown files from `pages/` by path using `../account-kit/pages/`

To add new images:

- Place image files in the `images/` directory
- Reference images from the `images/` directory in markdown using `images/account-kit/filename.png`

**SDK References**

SDK References are automatically generated from relevant projects within the monorepo via `fern-gen`. In the root, run `yarn fern:gen`

**See the [README here](https://github.com/alchemyplatform/aa-sdk/blob/ds/fern-compatible-docs/docs/README.md) for more info**

---

## 🚧 Building & Previewing

- **Build locally:**

```bash
pnpm run build
```

- **Preview locally:**

```bash
fern docs dev
```

---

## 🚀 Committing & Publishing

Follow this version control workflow:

1. **Create Branch:**

```bash
git checkout -b feature/update-docs-<topic>
```

1. **Commit Changes:**

```bash
git add .
git commit -m "Update docs for [topic]: [brief description]"
```

1. **Open PR:** Clearly describe your changes. Fern provides a live preview.
2. **Merge & Deploy:** After review, merge PR to deploy.

---

## 📖 Helpful Resources

- [Fern Docs](https://buildwithfern.com/learn)
- [OpenAPI Spec](https://swagger.io/specification/)
- [OpenRPC Spec](https://spec.open-rpc.org/)
