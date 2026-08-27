# Admin API documentation plan

Internal planning doc. Not published on the docs site unless added to `docs.yml`.

---

## Target

Admin API stays under **Tools & Resources → Tools**. Nested sections are Apps, Chains, Usage, and Gas Policies. Nested sections do not have their own overview or quickstart.

```
Tools
└── Admin API                         (hidden until GA)
    ├── Overview                      /docs/reference/admin-api/overview
    ├── Quickstart                    /docs/reference/admin-api/quickstart
    ├── Apps                          /docs/admin-api/apps/{operation}
    ├── Chains                        /docs/admin-api/chains/{operation}
    ├── Usage                         /docs/admin-api/usage/{operation}
    └── Gas Policies                  /docs/admin-api/gas-policies/{operation}
```

## How URLs work

Prose pages set `slug:` in frontmatter (`reference/admin-api/overview`). Endpoint pages inherit the parent section path. Each of Apps, Chains, Usage, and Gas Policies uses `url-path` so endpoints do not pick up the Tools tab slug `tutorials`.

## Visibility

Each of Overview, Quickstart, Apps, Chains, Usage, and Gas Policies can set `hidden: true` independently. Hidden pages still load by URL and stay out of search.

Until a docs-site follow-up ships, a hidden URL does not show that section in the sidebar. The follow-up should show only the hidden section that contains the current URL (a Usage link shows Usage, not Apps).

## External dependencies

1. **Dashboard apps API** — OpenAPI tags `Apps` and `Chains` on the tsoa controllers, then deploy so `https://admin-api.alchemy.com/openapi.yaml` includes those tags. Docs `include-tags` filtering needs the tagged spec.
2. **docs-site (follow-up)** — When the current URL sits inside a hidden section, show that section in the sidebar and keep other hidden sections hidden.

## Related files

| File | Role |
|---|---|
| `content/docs.yml` | Nav, visibility, api blocks |
| `content/admin-api/*.mdx` | Admin API prose |
| `content/remote-specs.json` | Remote OpenAPI sources |
| `content/redirects.yml` | URL redirects |
| `src/content-indexer/` | Builds paths and nav from `docs.yml` |

## Changelog

| Date | Notes |
|---|---|
| 2026-08-07 | Initial plan from IA discussion |
| 2026-08-07 | Tightened for stakeholder review |
| 2026-08-13 | Stay under Tools; split URL prefixes; nest Apps, Chains, Usage; docs-site sidebar filter is a follow-up |
| 2026-08-27 | Move Gas Policy Admin APIs under Admin API; wallets hub page only |
