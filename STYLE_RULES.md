# Alchemy docs style guide

This guide explains how we write docs in this repository. It covers MDX pages, API descriptions, changelog entries, and code sample comments.

Use it for editorial decisions: voice, structure, terminology, and examples. For MDX syntax and components, see [MDX_FEATURES.md](./MDX_FEATURES.md). For repo setup and contribution workflow, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Agent quick rules

Use this section as the fast path when you are writing or editing docs with an AI agent.

Required:

* Use `you` for the reader
* Prefer `we` for Alchemy in prose
* Use sentence case headings
* Prefer the `Steps` and `Step` components for ordered MDX procedures
* Use descriptive link text
* Use the preferred terminology table exactly
* Use JavaScript or TypeScript for authored examples unless the page has a stronger existing convention
* Put changelog updates under product-area headings and place `Node` after more user-facing sections when both are present
* Use `Updates` for launches, availability changes, deprecations, and behavior changes
* Use `Upgrades` for version bumps and maintenance entries
* Do not hand-edit generated API reference output; update the source specs instead

Preferred:

* Open with the reader outcome, not background context
* Keep procedural steps action-oriented and move explanation into separate sections
* Make examples copy-pasteable
* Show expected output when success is not obvious
* Use cURL when showing raw request structure or quick command-line testing
* Keep changelog bullets to one distinct change each

Avoid:

* Writing in terms of "the user", "users", or "the developer"
* Promotional or filler-heavy phrasing
* Vague headings such as `Overview`, `Usage`, or `Details`
* Repeating the same link throughout a section without a reason
* Overusing callouts

If a default conflicts with clarity, choose clarity and preserve the repo's existing patterns.

## What good docs do

Good docs help a reader make progress without making them slow down to decode our writing. In practice, that means:

* They start with the outcome, not the background
* They sound direct and competent, not promotional
* They use product and protocol terms consistently
* They show working examples, not idealized pseudocode
* They make the next step obvious

## How to use this guide

Treat these as strong defaults, not blind rules.

Interpret these labels consistently:

* `Required` means agents and contributors should follow the rule unless an existing repo constraint prevents it
* `Preferred` means use this by default, but it can be overridden for clarity or local context
* `Avoid` means do not do this unless there is a specific reason

Section-specific guides override this document when they are more specific. For example, Wallets documentation has its own contributing guide at `content/wallets/CONTRIBUTING.md`. In those docs, follow the Wallets-specific rules first and use this guide as the fallback for anything not covered there.

Some choices in this repo are enforced by tooling such as Prettier, ESLint, and markdown linting. This guide should not duplicate those checks. It should cover the places where judgment matters: what to say, how to organize it, and how much to explain.

When a rule hurts clarity, choose clarity. When you break a default, do it intentionally.

## Voice and tone

Write like a capable teammate helping another developer ship.

### Address the reader directly

Use `you` for the reader.

Prefer:

* "You can create an API key in the Alchemy Dashboard."
* "If you already have a contract deployed, skip this step."

Avoid:

* "The developer can create an API key..."
* "Users should..."
* "One can..."

### Refer to Alchemy consistently

Use `we` when speaking on behalf of Alchemy in explanatory prose.

Prefer:

* "We support 80+ chains."
* "We recommend using webhooks when you need near real-time updates."

Allow "Alchemy" as the subject when it improves scanning, branding, or SEO, especially in intros, titles, and overview copy. Do not force awkward rewrites to avoid the company name.

### Keep the tone direct

Prefer short, declarative sentences. Contractions are fine when they sound natural.

Prefer:

* "You'll need an API key before you can send requests."
* "This endpoint returns token balances for an address."

Avoid filler and softening language that reduces precision:

* `simply`
* `just`
* `easy`
* `easily`
* `obviously`
* `basically`
* `it is important to note`
* `in order to`

### Explain the right things

Explain what is specific to Alchemy, blockchain workflows, or the product surface the reader is using.

Do not spend paragraphs reteaching general programming concepts unless the page is explicitly for beginners and the extra context is necessary to complete the task.

## Structure pages around reader intent

Organize content around what the reader is trying to do, not around how we think about the product internally.

### Open with the outcome

The first screen should answer at least one of these questions:

* What will I do here?
* What will I get when I finish?
* Is this the right page for my problem?

### Separate action from explanation

Keep step-by-step instructions focused on actions. Put conceptual background in a separate section such as `How it works`, `Why this matters`, or `Before you begin`.

This keeps procedural content scannable and makes conceptual sections easier to revisit later.

### Write headings that help people scan

Use sentence case.

Prefer headings that describe an action, question, or concrete topic:

* `Send your first request`
* `Check whether the webhook was delivered`
* `Choose a supported network`

Avoid vague labels:

* `Overview`
* `Usage`
* `Details`
* `Miscellaneous`

Do not skip heading levels.

## Content patterns by page type

### Tutorials and quickstarts

Tutorials should help the reader reach a concrete outcome with minimal ambiguity.

Default structure:

1. What the reader will build, learn, or finish
2. Prerequisites
3. Ordered steps
4. Verification
5. Next steps

Guidelines:

* In MDX tutorials, prefer the `Steps` and `Step` components for ordered procedures
* Make each step produce a visible result
* Show expected output after commands when verification is not obvious
* Keep conceptual detours out of the main path

### Changelog entries

Changelog entries should answer three questions quickly:

* What changed?
* Who does it matter to?
* What should the reader do next, if anything?

Lead with the change, then the impact.

Default structure:

* Group updates under product-area headings such as `Developer Experience`, `Wallets`, `Rollups`, `Data`, and `Node`
* Skip sections that have no meaningful updates that week
* Put `Node` after product-facing sections when both are present, so infrastructure upgrades do not bury more user-visible changes
* Use short bolded subheads only when they improve scanability, such as `Docs`, `Dashboard`, `Updates`, and `Upgrades`

Guidelines:

* Keep one distinct change per bullet
* Start each bullet with the shipped change, then add the impact or context
* Use `Updates` for launches, availability changes, deprecations, or behavior changes
* Use `Upgrades` for version bumps and network-level maintenance
* In `Node` upgrade lists, use the pattern `Network: Component version, Component version`
* Link the first relevant product, doc page, or release note when it helps the reader verify the change
* Use a top-of-entry callout only for exceptional notices such as shutdowns, migrations, or time-sensitive deprecations
* Keep the tone factual. Changelog entries should read like release notes, not marketing copy

## Formatting defaults

These are editorial defaults for readability. Tooling may already enforce some of them.

### Lists

In MDX pages, prefer the `Steps` and `Step` components for step-by-step procedures. Use numbered lists when a lighter-weight ordered sequence is enough.

Use bullets for sets, options, and grouped facts.

Keep list items parallel. If one item starts with a verb, the others should too.

### Code formatting

Use inline code for:

* Method names
* Parameter names
* File names and paths
* Commands
* Config values
* Technical identifiers

Do not use inline code for normal prose or product names unless you are referring to a literal UI label or string value.

### Links

Write descriptive link text. The reader should know where a link goes before clicking it.

Prefer:

* "See the [Admin API overview](/docs/reference/admin-api/overview)."

Avoid:

* "Click [here](/docs/reference/admin-api/overview)."

Link a repeated concept once per section unless the repeated link materially improves navigation.

### Callouts

Use callouts to highlight information the reader is likely to miss in body text.

Preferred defaults:

* `Note` for extra context
* `Tip` for shortcuts or best practices
* `Warning` for likely mistakes or surprising behavior
* `Check` or `Success` for verification and completion states

Use callouts sparingly. If a page needs a warning box every few paragraphs, the body copy probably needs to be clearer.

## Terminology and naming

Use consistent terms across docs, code comments, and examples.

### Preferred forms

| Preferred | Avoid |
| --- | --- |
| API key | api key, apikey, API Key |
| Alchemy SDK | alchemy SDK, Alchemy sdk |
| Alchemy Dashboard | dashboard, Dashboard |
| JSON-RPC | JSONRPC, json-rpc |
| webhook | Webhook in the middle of a sentence |
| smart contract | Smart Contract in the middle of a sentence |
| dApp | dapp, DApp |
| onchain | on-chain, on chain |
| offchain | off-chain, off chain |
| mainnet | Mainnet in the middle of a sentence |
| testnet | Testnet in the middle of a sentence |
| WebSocket | websocket, Websocket |
| ERC-20 | ERC20 |
| ERC-721 | ERC721 |
| ERC-4337 | ERC4337 |

Additional defaults:

* Capitalize chain and network names such as `Ethereum`, `Polygon`, `Solana`, `Arbitrum`, `Base`, and `Optimism`
* Use `parameter` in prose instead of `param`
* Spell out an acronym on first use when the audience might not know it

## Code samples and examples

Examples should help the reader succeed on the first attempt.

### Make examples runnable

Prefer examples that work when the reader swaps in their own credentials or addresses.

If a sample is illustrative rather than runnable, label it clearly.

### Use realistic values

Use values that resemble real usage. Avoid placeholder data that teaches bad habits or hides important structure.

Prefer:

* Real method names
* Plausible addresses and block numbers
* Copy-pasteable commands

Be careful with secrets, costs, and destructive actions. In those cases, a placeholder is better than a misleading real value.

### Show failure paths when they matter

Include error handling in tutorials and SDK examples when failures are part of the normal integration path.

Not every short reference snippet needs full defensive scaffolding. Favor the amount of error handling that teaches the reader what they are likely to need in practice.

### Choose language examples intentionally

Default to the language mix that matches the page type and audience.

In most cases:

* JavaScript or TypeScript works well for tutorials, SDK-led workflows, server-side examples, and data workflows
* cURL is useful when showing raw request structure or quick command-line testing

Only include multiple languages when the extra examples add real value. Three shallow examples are often worse than one strong example.

## Repo-specific notes

This repo contains more than long-form docs. The same editorial standards apply across formats, but the implementation details differ:

* `content/` contains MDX pages
* `src/openapi/` contains REST API definitions
* `src/openrpc/` contains JSON-RPC definitions

When writing MDX:

* Follow this guide for voice, structure, and examples
* Use [MDX_FEATURES.md](./MDX_FEATURES.md) for component syntax and supported patterns

When writing API specs:

* Keep descriptions concise and user-facing
* Use consistent terminology with the docs
* Avoid repeating the same explanation across every field when a higher-level description would be clearer

## Review checklist

Before publishing, check:

* Can the reader tell what this page helps them do within the first few lines?
* Are prerequisites explicit?
* Do the headings scan well on their own?
* Are examples copy-pasteable or clearly labeled when they are not?
* Are product names, protocols, and terms consistent with house style?
* Does the page show how to verify success or what to do next?
