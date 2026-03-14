# Wallet Documentation Contributing Guidelines

<!-- AI ASSISTANT INSTRUCTIONS START -->

## 🤖 AI Assistant Guidelines

**ROLE**: You are helping write documentation for Alchemy's Smart Wallets product. Always follow these rules when generating or editing content.

**PRECEDENCE**: These rules override the repo-wide style guide in [`STYLE_RULES.md`](../../STYLE_RULES.md) for content under `content/wallets/`.

**CORE PRINCIPLES**:

* SIMPLIFY: Hide blockchain complexity, focus on developer outcomes
* STANDARDIZE: Use consistent terminology and voice
* ACTIONABLE: Provide clear, direct instructions

**TERMINOLOGY ENFORCEMENT**:

* ALWAYS use approved terms from the "Approved Terms" section
* NEVER use terms from the "Prohibited Terms" section
* REPLACE prohibited terms with their approved alternatives

**VOICE REQUIREMENTS**:

* Use second person ("you") not first person ("we", "I")
* Use active voice, not passive voice
* Be direct and confident, avoid qualifiers like "perhaps", "might"
* Follow Google Developer Documentation Style Guide standards

<!-- AI ASSISTANT INSTRUCTIONS END -->

## Overview

When writing or editing documentation for Alchemy Smart Wallets, follow these comprehensive style guidelines. These rules ensure consistency, clarity, and developer-focused content that abstracts away blockchain complexity.

**Scope**: These guidelines extend the repo-wide style guide in [`STYLE_RULES.md`](../../STYLE_RULES.md). If a Wallets-specific rule conflicts with the repo-wide guide, follow this document for Wallets content.

**Foundation**: Follow the [Google Developer Documentation Style Guide](https://developers.google.com/style) as the base standard.

***

## 1. Core Principles

### Simplify and Abstract

* **Goal**: Hide Account Abstraction and blockchain complexity
* **Focus**: Developer outcomes, not implementation details
* **Example** (for high-level docs):
  * ❌ **Don't**: "Send a UserOperation to the bundler and use a paymaster"
  * ✅ **Do**: "Send gasless transactions"
* **Note**: Low-level infra docs (`content/wallets/pages/low-level-infra/`) can and should use precise technical terms like "bundler" and "paymaster"

### Standardize

* **Goal**: Consistent terminology, voice, and document structure across all docs
* **Application**: Use identical terms for identical concepts

### Be Actionable

* **Goal**: Clear instructions that help developers achieve goals quickly
* **Implementation**: Direct commands, specific steps, working examples

***

## 2. Terminology Standards

### ✅ Approved Terms (ALWAYS USE)

| Term                       | Usage                 | Context                                  |
| -------------------------- | --------------------- | ---------------------------------------- |
| `"Smart Wallets"`          | Primary product term  | Capitalize when referring to the product |
| `"smart account"`          | Technical term        | Lowercase in general text                |
| `"aa-sdk"`                 | Code references only  | Never in prose, only in code blocks      |
| `"gasless"`                | Payment model         | Not "gas-less"                           |
| `"onchain"`                | Blockchain reference  | Not "on-chain"                           |
| `"transactions"`           | User actions          | Not "user operations"                    |
| `"sponsor gas"`            | Gas payment feature   | Not "gas manager"                        |
| `"pay gas with any token"` | ERC20 payment feature | Not "ERC20 paymaster"                    |

### ❌ Prohibited Terms (NEVER USE)

**Replacement Rules**:

| Prohibited Term                              | ➡️ Use Instead                                | Exception                               |
| -------------------------------------------- | --------------------------------------------- | --------------------------------------- |
| `"Account Abstraction"` or `"AA"`            | Avoid entirely                                | Only in advanced technical docs         |
| `"ERC-4337"`                                 | Avoid entirely                                | Only when discussing protocol specifics |
| `"user operation"` or `"user ops"`           | `"transactions"`                              | Never                                   |
| `"bundler"`                                  | `"sending transactions"`                      | OK in low-level infra docs (`content/wallets/pages/low-level-infra/`) |
| `"entrypoint"`                               | Avoid entirely                                | Implementation detail                   |
| `"smart contract account"`                   | `"smart account"`                             | Never                                   |
| `"Account Kit"`                              | `"Smart Wallets"`                             | Never                                   |
| `"gas manager"`                              | `"sponsor gas"` or `"pay gas with any token"` | OK in low-level infra docs and as "Gas Manager API" |
| `"paymaster"`                                | Context-specific replacement                  | OK in low-level infra docs and as "paymaster contract" |
| `"Signer"`                                   | `"authentication"` or `"owner"`               | Don't combine into "authentication owner" -- use one or the other based on context |
| `"modular account v2"`, `"light account v1"` | `"smart account"`                             | Keep the specific name when describing features or capabilities unique to that account type (e.g., "Modular Account v2 includes a growing library of permission types") |

### ⚠️ Important Terminology Exceptions

**Use specific product/account names when describing their unique features**:

When a feature or capability belongs to a specific account type (e.g., Modular Account v2), refer to it by name rather than the generic "smart account." The generic term is for when you're talking about smart accounts in general, not a specific implementation.

* ❌ "Smart account includes a growing library of permission types"
* ✅ "Modular Account v2 includes a growing library of permission types"

**Low-level infrastructure docs can use technical terms**:

Content under `content/wallets/pages/low-level-infra/` targets developers working directly with infrastructure. Terms like "bundler", "paymaster", and "gas manager" are appropriate and preferred in this context because they are technically precise.

* ❌ (in low-level infra docs) "split traffic between the transaction sending and gas sponsorship RPC"
* ✅ (in low-level infra docs) "split traffic between the Bundler and Paymaster RPC"

**Don't use "Smart Wallets" as a technical actor**:

"Smart Wallets" is the product name for marketing/branding. Don't use it as the subject performing technical actions -- it can sound inaccurate.

* ❌ "Smart Wallets fronts the gas and adds it to your monthly bill"
* ✅ "You don't need to hold any tokens -- gas is fronted and added to your monthly bill"

### 🏷️ Brand Reference Rules

**Company References**:

* ❌ **Don't use**: "Alchemy" or "our" in documentation
* ✅ **Examples**:
  * ❌ "Alchemy Smart Wallets" → ✅ "Smart Wallets"
  * ❌ "our smart account" → ✅ "smart accounts"

***

## 3. Voice and Tone Standards

### 📝 Voice Requirements

**Second Person Voice** (REQUIRED):

* ✅ **Use**: "you" throughout documentation
* ❌ **Avoid**: "we", "I", "one"
* ❌ **Never**: "We recommend..." → ✅ **Use**: "Recommended approach:"

**Active Voice** (REQUIRED):

* ✅ **Use**: "Create a wallet"
* ❌ **Avoid**: "A wallet should be created"

**Direct Commands** (REQUIRED):

* ✅ **Use**: "Install the SDK"
* ❌ **Avoid**: "You need to install..." or "You should install..."

### 🎯 Tone Requirements

**Be Confident and Opinionated**:

* ❌ **Avoid qualifiers**: "perhaps", "might want to", "you may wish to"
* ✅ **Be direct**: State the recommended approach clearly

**Consistency**:

* Use identical terminology for identical concepts across all documents
* Maintain consistent voice throughout each document

### 📐 Capitalization Rules

| Type                         | Rule                       | Examples                              |
| ---------------------------- | -------------------------- | ------------------------------------- |
| **Product terms**            | Capitalize                 | "Smart Wallets"                       |
| **Titles and sidebar names** | Capitalize first word only | "Getting started with authentication" |
| **API names**                | Capitalize proper nouns    | "Gas Manager API", "Bundler API"      |
| **Type definitions**         | Capitalize                 | `Provider`, `Signer`, `Account`       |

***

## 4. Content Structure Rules

### 📋 Headers and Titles

**Requirements**:

* ❌ **No AA-specific terms** in titles or headers
* ✅ **Use developer-friendly, outcome-focused titles**
* ✅ **Keep concise** for sidebar navigation (avoid wrapping)

**Examples**:

* ❌ "Gas Manager Quickstart" → ✅ "Sponsor gas"
* ❌ "UserOp Configuration" → ✅ "Configure transactions"

### 🔗 Content Organization

**Link Strategy**:

* **Link to existing docs** instead of repeating content
* **Use relative links**: All relative links should begin with `/wallets/...` instead of full URLs (`https://www.alchemy.com/docs/wallets/...`)
* **Ensure no broken or circular references**

***

## 5. Code and Technical Standards

### 📋 Prerequisites and Setup

**Always Include**:

* Prerequisites and assumptions
* Version requirements
* Configuration steps

**Examples**:

```markdown
Before implementing social login, configure your Smart Wallets dashboard...
Ensure you are using aa-sdk version 3.x or later...
```

### 💻 Code Block Requirements

**Formatting Rules**:

* ✅ **Use backticks** for all code references, function names, technical terms
* ✅ **Include language specification** in code blocks
* ✅ **Apply `twoslash`** to all examples for type checking

**Example Structure**:

````markdown
```ts twoslash
// Your example code here
```
````

### 🏗️ Example Standards

**Every Example Must Be**:

1. **Standalone** - can be copied and run independently
2. **Compilable** - passes type checking
3. **Working** - produces expected results

**Example Organization**:

* Split long examples into multiple files
* Use `example.ts` tab for main code
* Use `config.ts` tab for setup
* Follow this pattern:
  1. Install aa-sdk
  2. Get required configs (API keys, Policy IDs, private key)
  3. Copy the files
  4. Run `example.ts`

**Highlighting**:

* Use code highlighting to focus on critical parts
  * Designate highlighted lines using brackets, ex: {4,10-13}
* Use snippets for common configuration to avoid duplication

***

## 6. Markdown Formatting Standards

### 📝 Structure Requirements

**Follow**:

* [Google Markdown Style Guide](https://google.github.io/styleguide/docguide/style.html)
* Remark-lint rules for consistency
* Proper heading hierarchy (H1 → H2 → H3)

**Framework Support**:

* If a guide supports multiple frameworks, use tabs within one document
* Example tabs: React, React Native, Other JavaScript

**Links and References**:

* ✅ **Use relative links**: `[/wallets/authentication]`
* ❌ **Avoid full URLs**: `[https://www.alchemy.com/docs/...]`
* ✅ **Include alt text** for all images
* ✅ **Verify no broken links**

### 🖼️ Images and Assets

**All documentation assets are hosted on Cloudinary**

**Adding New Images**:

1. **Upload to Cloudinary**:

   * Sign-in to Cloudinary through Okta.
   * Folder structure: `docs/aa-sdk/images/[subdirectory]/`
   * Use the Cloudinary dashboard or API (can get credentials for API through dashboard)
   * Set `overwrite: true` to replace existing assets if updating existing ones.

2. **Reference in Documentation**:

   ```markdown
   ![Alt text](https://alchemyapi-res.cloudinary.com/image/upload/v{version}/docs/aa-sdk/images/your-image.png)
   ```

   Or for HTML:

   ```html
   <img
     src="https://alchemyapi-res.cloudinary.com/image/upload/v{version}/docs/aa-sdk/images/your-image.png"
     alt="Description"
   />
   ```

3. **Best Practices**:
   * ✅ Use descriptive filenames (e.g., `auth0-config.png` not `image1.png`)
   * ✅ Optimize images before upload (compress PNGs, use appropriate quality for JPEGs)
   * ✅ Use kebab-case for filenames
   * ✅ Always include alt text for accessibility
   * ❌ Don't commit local image files to the repository

**Folder Structure on Cloudinary**:

```json
docs/aa-sdk/
├── images/              # Main documentation images
│   ├── getting-started/ # Quickstart and setup images
│   └── ...
└── shared/              # Shared assets referenced across multiple docs
```

***

## 7. Quality Assurance Checklist

### ✅ Pre-Publish Validation

**Terminology Validation**:

* \[ ] No prohibited terms used anywhere in the document
* \[ ] All approved terms used correctly and consistently
* \[ ] Proper capitalization applied throughout
* \[ ] No AA-specific terms in headers or titles

**Voice and Style Validation**:

* \[ ] Follows Google Developer Documentation Style Guide
* \[ ] Second-person voice used throughout ("you" not "we")
* \[ ] Active voice used consistently
* \[ ] Direct, confident tone without unnecessary qualifiers
* \[ ] Outcome-focused titles and headers

**Code and Technical Validation**:

* \[ ] Twoslash applied to all code snippets
* \[ ] Language specified for all code blocks
* \[ ] All code references properly formatted with backticks
* \[ ] Examples are standalone, compilable, and working
* \[ ] Prerequisites clearly stated

**Format and Structure Validation**:

* \[ ] Proper markdown hierarchy maintained
* \[ ] All links are relative and functional
* \[ ] No broken or circular references
* \[ ] Content links to existing docs instead of repeating information
* \[ ] Consistent spacing and formatting throughout

### 🔧 AI Assistant Validation

**For AI Tools** (GitHub Copilot, Cursor, etc.):

* \[ ] Document follows structured format for easy parsing
* \[ ] Clear do/don't examples provided
* \[ ] Terminology rules explicitly stated with replacements
* \[ ] Voice requirements clearly defined
* \[ ] Code standards include specific formatting requirements

***

## 8. Implementation Guide

### For Human Contributors

1. **Before Writing**: Review this entire guide
2. **While Writing**: Reference the approved/prohibited terms tables
3. **Before Submitting**: Complete the quality checklist
4. **When Editing**: Ensure consistency with existing docs

### For AI Assistants

**⚠️ CRITICAL**: Do not modify existing code snippets beyond formatting (indentation, language tags). Code changes can break functionality.

1. **Priority Order**: Terminology > Voice > Structure > Style
2. **Conflict Resolution**: When in doubt, choose the simpler, more developer-friendly option
3. **Validation**: Cross-reference every term against the approved/prohibited lists
4. **Consistency**: Maintain identical terminology across all generated content

***

*This document is the definitive style guide for Smart Wallets documentation. All content must conform to these standards.*
