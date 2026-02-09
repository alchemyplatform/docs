# Alchemy docs style rules

These rules govern all written documentation in this repository — MDX pages,
API spec descriptions, changelog entries, and code sample comments.

Both human contributors and AI agents follow these rules. Each rule is a
pass/fail check. If a rule has an EXCEPTION, apply the exception only when
the stated condition is true.

***

## VOICE

RULE: Use "we" when referring to Alchemy. Never write "Alchemy" as a third-person subject.
✅ "We support 80+ chains"
❌ "Alchemy supports 80+ chains"
EXCEPTION: First sentence of a landing page or meta description may use "Alchemy" once for SEO, then switch to "we."

RULE: Use "you" when addressing the reader. Never use "the developer", "the user", "users", or "one."
✅ "You can create an API key from the dashboard"
❌ "The developer can create an API key from the dashboard"
❌ "Users should deploy their contract"

RULE: Use contractions. "you'll", "we've", "don't", "isn't."
❌ "You will need to configure" → ✅ "Yogure"

RULE: Never use "simply", "just", "easy", "easily", or "obviously."
❌ "Simply call the endpoint"
✅ "Call the endpoint"

RULE: Cut filler phrases.
❌ "In order to" → ✅ "To"
❌ "It is important to note that" → DELETE
❌ "As a matter of fact" → DELETE
❌ "Basically" → DELETE

RULE: Do not over-explain general programming concepts (HTTP requests, loops, variables, JSON parsing). Do explain blockchain-specific and Alchemy-specific concepts.

***

## FORMATTING

RULE: Headings use sentence case. Capitalize only the first word and proper nouns.
✅ "Get started with the SDK"
✅ "Send your first transaction"
❌ "Get Started With The SDK"
❌ "Send Your First Transaction"

RULE: No emojis in headings.
❌ "📋 Steps to get started"
✅ "Steps to get started"

RULE: Headings describe what the reader will DO, not just label a topic.
✅ "Send your first transaction"
❌ "Transactions"

RULE: Never skip heading levels. H2 → H3 → H4. Never H2 → H4.

RULE: Maxd lists ONLY for sequential steps. Use bullet lists for non-ordered items.

RULE: All list items in a single list must have parallel structure. If one starts with a verb, all start with a verb.
✅ "Create an app", "Configure the SDK", "Send a request"
❌ "Create an app", "SDK configuration", "Sending a request"

***

## TERMINOLOGY

These are the ONLY correct forms. Flag any deviation.

| Correct | Incorrect (flag these) |
|---------|----------------------|
| API key | api key, API Key, apikey, Api Key |
| Alchemy SDK | alchemy SDK, Alchemy sdk |
| Alchemy Dashboard | dashboard (as product name), the Dashboard |
| JSON-RPC | json-rpc, JSONRPC, Json-RPC |
| webhook | Webhook (mid-sentence), web hook, web-hook |
| smart contract | Smart Contract (mid-sentence) |
| dApp | dapp, Dapp, DApp |
| onchain | on-chain, on chain |
| offchain | off-chain, off chain |
| mainnet | Mainnet (mid-sentence), main net, main-net |
| testnet | Testnet (mid-sentence), test net, test-net |
| WebSocket | Websocket, websocketb Socket |
| ERC-20 | ERC20, erc-20 |
| ERC-721 | ERC721, erc-721 |
| ERC-4337 | ERC4337, erc-4337 |
| gas fees | Gas Fees, Gas fees (mid-sentence) |

RULE: Capitalize chain names always: Ethereum, Solana, Polygon, Arbitrum, Base, Optimism.

RULE: Use "endpoint" not "route" or "URL" for API endpoints.

RULE: Use "request" and "response" not "call" and "return" in API context.

RULE: Use "parameter" not "param" in prose. "param" is acceptable only in code.

RULE: First use of any acronym must be spelled out: "Externally Owned Account (EOA)." After that, use the acronym only.

***

## CODE SAMPLES

RULE: Every code sample must be runnable when the reader substitutes their own API key. No pseudocode in tutorials unless explicitly labeled "pseudocode."

RULE: Every code sample must include error handling (try/catch or equivalent).
❌ Bare `fetch()` with no error handling
✅ `fetch()` wrapped in try/catch with response status check

RULE: Use `{apiKey}` as the API key placeholder.
❌ YOUR\_API\_KEY, \<api-your-api-key, API\_KEY

RULE: Use realistic values in examples. Real block numbers, real testnet addresses, real method names.
❌ `0x0000000000000000000000000000000000000000`

RULE: Every request example must be followed by an example response.

RULE: Use fenced code blocks with language identifiers: `javascript, `bash, `json, `python, \`\`\`solidity.

RULE: Use inline code for: method names, parameter names, file names, terminal commands, values, technical chain references.
✅ "Call `eth_getBlockByNumber`"
✅ "Set the `network` parameter"
❌ Do NOT use inline code for product names ("Alchemy SDK" not "`Alchemy SDK`")

RULE: Multi-language code sample order: JavaScript/TypeScript → Python → cURL. Always include cURL on API reference pages.

***

## LINKS

RULE: Link text must describe the destination.
✅ "See the [quickstart guide](/docs/alchemy-quickstart-guide)"
❌ "Click [here](/docs/alchemy-quickstart-guide)"

RULE: Internal docs links use relative paths: `/docs/...` not full U a term only on its first mention per section. Do not repeat-link.

***

## API REFERENCE PAGE STRUCTURE

Every API endpoint page must contain these sections in this order:

1. Method name as title
2. One-line description of what it does
3. Parameters table (columns: Parameter, Type, Required, Description)
4. Request example (cURL + SDK)
5. Response example (full JSON, annotate non-obvious fields)
6. Error codes (common errors and causes)

Missing any section = flag as incomplete.

***

## TUTORIAL STRUCTURE

Every tutorial must contain these sections in this order:

1. What you'll build/learn (1 paragraph, set expectations)
2. Prerequisites (tools, accounts, knowledge needed)
3. Numbered steps (each step produces a verifiable result)
4. Verify it works (concrete confirmation step)
5. Next steps (links to related guides)

RULE: Do not mix conceptual explanation into step-by-step instructions. Use a separate "How it works" section or a callout.

RULE: Include expected output after every command or code execution step.

***

## CALLOUTS

RULE: Use only these four callout types:

* **Note** — additional context, not critical
* **Tip** — shortcut or best practice
* **Warning** — could cause errors or unexpected behavior
* **Danger** — could cause data loss, security issues, or cost money

RULE: Max 3 callouts per page. If you need more, the body text is missing information.

***

## DEPRECATION

RULE: Never delete docs for deprecated features. Add a deprecation notice at the top with: date, what replaces it, and migration path.

RULE: Changelog entries follow: **\[Product] — What changed — Why it matters to you.**
