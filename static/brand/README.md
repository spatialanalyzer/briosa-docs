# Briosa Brand Assets

These files are copied unchanged from the
[v2.2.0 release pack](https://github.com/spatialanalyzer/briosa-brand/releases/tag/v2.2.0)
of `spatialanalyzer/briosa-brand`. The
[v2.2.0 tag](https://github.com/spatialanalyzer/briosa-brand/tree/v2.2.0)
points to commit `74cf2cc1f2c6614f78b2f2c7f6e59d2c86b950b3`. The release ZIP,
`briosa-brand-v2.2.0.zip`, has SHA-256
`30e004fa9fa4dd78dbed5ef7b53110e764cb1712f8c894b8afde83a415d12f83`, and its
`SHA256SUMS.txt` has SHA-256
`c53177c58cfa267d3cae0f5c6ab12a469031bc0c5f73442f0b174ccaa3161933`.

This is a subset of the pack: only the files listed below, which the site
uses. Each matches the pack's `SHA256SUMS.txt`, keeps its path from the pack,
and is kept byte-for-byte by `.gitattributes`. The license and third-party
notices are unchanged release files that do not name a version, so this record
names it. The notices also describe pack files that the site does not copy,
such as the Saira and JetBrains Mono variable fonts and the web and desktop
font builds.

- `colors.css`: the dark and light theme color tokens.
- `icons/favicon.svg`, `icons/favicon.ico`, and `icons/apple-touch-icon.png`:
  browser and home-screen icons.
- `logos/briosa-horizontal-compact-inverse.svg`: footer identity.
- `logos/briosa-horizontal-tagline-inverse.svg`: source for the social preview.
- `logos/briosa-stacked-inverse.svg`: homepage identity.
- `suite/briosa-{docs,server,dotnet,python,js}-{color,inverse}.svg`:
  navigation and product reference identities.
- `fonts/Inter-Variable.ttf` and `fonts/Inter-OFL.txt`: original Inter font and
  license.
- `fonts/Saira-OFL.txt`: license of Saira, from which the artwork's wordmark,
  slogan, and product labels are outlined. The site loads the Saira variable
  font through `@fontsource-variable/saira/wdth.css` for display text.
- `fonts/JetBrainsMono-OFL.txt`: license of JetBrains Mono, which the
  third-party notices link to. The site loads JetBrains Mono for code through
  `@fontsource-variable/jetbrains-mono`.
- `LICENSE` and `THIRD-PARTY-NOTICES.md`: the v2.2.0 release's license and
  third-party notices.

Follow the [brand guide](https://github.com/spatialanalyzer/briosa-brand/blob/v2.2.0/BRAND-GUIDE.md)
when updating these assets. Copy from a reviewed release, preserve the SVG
artwork and aspect ratios, check each file against the release's
`SHA256SUMS.txt`, and update this provenance record. The site builds and serves
its own copies without fetching the brand repository or a font CDN.

The approved slogan retains its exact wording and casing:
“SpatialAnalyzer integration, simplified.”

The site-owned `static/img/briosa-social.png` places the unchanged horizontal
inverse logo with the slogan on void at 1200 × 630 pixels.
To regenerate it, run `node scripts/render-social-card.cjs` with Sharp available,
or set `BRIOSA_SHARP_MODULE` to a separately installed Sharp module directory.
The PNG is committed; normal site builds do not require Sharp.
