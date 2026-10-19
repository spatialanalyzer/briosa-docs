# Scanline styles

Scanline is the briosa.dev design language: a dark-first instrument bench with
hairline rules, a laser accent, the Caliper b mark, and the deviation color map
(`#3E5BFF → #00BAF1 → #34F5C5 → #FFD23F → #FF4D6D`) as its signature palette.

## Files

| File | Covers |
| --- | --- |
| `tokens.css` | Every color, font, and easing token (`--sl-*`), plus the Infima variables mapped to them. |
| `base.css` | Ground, type, links, focus, inline code, Markdown headings and tables. |
| `components.css` | Shared `sl-*` classes any page may use. |
| `layout.css` | Site chrome: navbar, footer, docs sidebar, contents rail, callouts, code blocks, pagination, search. |
| `api.css` | API reference landing pages. Method pages also use `src/components/ApiReference/styles.css`. |
| `catalog.css` | MP Command Catalog pages and `CatalogFilter`. |

The homepage keeps its styles in `src/pages/index.module.css` and its components.

## Rules

- Read colors only from `--sl-*` tokens (or the Infima variables mapped to them).
  Never write a literal color in a component rule: both themes must work, and
  `[data-theme]` blocks belong only in `tokens.css`.
- The footer is always the dark band; use the `--sl-foot-*` tokens there.
- Type roles:
  - `--sl-f-display` (Saira): headings at `font-stretch: 106%`, HUD labels at `125%`.
  - `--sl-f-body` (Inter): running text.
  - `--sl-f-mono` (JetBrains Mono): code, identifiers, numbers.
- Respect `prefers-reduced-motion`: animations must have a finished still.
- Keep keyboard focus visible. Use title case for headings, labels, and table headers (see AGENTS.md).

## Shared classes

| Class | Use |
| --- | --- |
| `sl-hud` | Uppercase instrument label (Saira 125%, 11px, wide tracking). |
| `sl-num` | Tabular monospace numbers. |
| `sl-kicker` | Laser section kicker with a leading rule. |
| `sl-ico` | 24-unit line icon. Set `--ac` to color its accent stroke. |
| `sl-brk` | Corner-bracket frame. Tune it with `--bk` (color), `--bl` (length) and `--bw` (weight). |
| `sl-spectral` | 2px deviation-map bar with a passing glint. |
| `sl-rule` | Ruler band across the top of a section. |
| `sl-btn` with `sl-btn--solid`, `sl-btn--ghost` or `sl-btn--sm` | Buttons. A ghost button may hold a `.sl-brk` child, which opens outward on hover. |
| `sl-textlink` | Laser text link with an arrow icon. |
| `sl-chip` | Mono chip, with an optional `<i>` HUD prefix such as `SA` or `Server`. |
| `sl-panel` | Raised panel surface. |
| `sl-readout` | Grid of labeled large numbers (digital readout). |
| `sl-status` with `data-status` | Catalog disposition pill: `current`, `next`, `undecided`, `uncommitted`, `excluded` or `sdk-unavailable`. |
| `sl-meter` with `data-level` (0 to 3) | Validation evidence meter. It needs a `.sl-meter__bars` holding three `<i>`. |
| `sl-gauge` with `data-level` (1 to 5) | Five deviation segments with one lit, used for severity. |
| `sl-term` | Terminal panel. Children: `sl-term__bar`, `sl-term__label`, `sl-term__target`, `sl-tabs`, `sl-tab`, `sl-copy` and `sl-term__panel`. |
| `sl-tk-*` | Syntax colors for hand-tokenized snippets. Prism code blocks use `src/theme/prism.ts`. |

## Status and severity colors

The deviation map carries meaning:

- **Catalog status:**
  - Current is in tolerance (green).
  - Next is cyan.
  - Undecided and Uncommitted are open questions (slate and amber).
  - Excluded is red.
  - SDK Unavailable is indigo.
- **Callout severity:** info, note, tip, caution and danger light gauge segments 1 to 5.
