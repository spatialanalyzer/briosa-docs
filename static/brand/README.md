# Briosa Brand Assets

These files are copied unchanged from
[`spatialanalyzer/briosa-brand@v2.1.0`](https://github.com/spatialanalyzer/briosa-brand/tree/v2.1.0),
commit `705dbfc8624936f1179b31b79c9804c13405b510`, by way of the
[v2.1.0 release pack](https://github.com/spatialanalyzer/briosa-brand/releases/tag/v2.1.0).
The release ZIP has SHA-256
`de02b47a46cd5bd368d67273c634b87c5058e107f11cac85664fe5fffa5c4db3`, and its
`SHA256SUMS.txt` has SHA-256
`e086c3f87d762e58f5c55b4eb4f71eb64f743d7c649b224e0775a4081598b443`. Every file
here matches that `SHA256SUMS.txt`, and `.gitattributes` keeps the copies
byte-for-byte. The directory structure preserves the original asset paths:

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
  slogan, and product labels are outlined. The site does not load Saira.
- `LICENSE` and `THIRD-PARTY-NOTICES.md`: original license and attribution.

Follow the [brand guide](https://github.com/spatialanalyzer/briosa-brand/blob/v2.1.0/BRAND-GUIDE.md)
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
