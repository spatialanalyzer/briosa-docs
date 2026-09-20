// Optional asset export; the PNG is committed and requires no build dependency.
const {readFileSync, mkdirSync} = require('node:fs');
const {join} = require('node:path');
const sharp = require(process.env.BRIOSA_SHARP_MODULE || 'sharp');

const root = join(__dirname, '..');
const logo = readFileSync(join(root, 'static/brand/logos/briosa-horizontal-tagline-inverse.svg'), 'utf8')
  .replace('<svg ', '<svg x="120" y="165" ')
  .replace('width="872" height="272"', 'width="960" height="300"');
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#003875"/>
  ${logo}
</svg>`;
mkdirSync(join(root, 'static/img'), {recursive: true});
sharp(Buffer.from(card)).png().toFile(join(root, 'static/img/briosa-social.png'))
  .catch((error) => { console.error(error); process.exitCode = 1; });
