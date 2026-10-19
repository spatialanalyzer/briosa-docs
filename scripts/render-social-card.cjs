// Optional asset export; the PNG is committed and requires no build dependency.
// The card follows the site's Scanline design: the brand pack's tagline lockup,
// a scanned surface colored by the deviation map, a measurement grid, a ruler,
// and the spectral bar. It draws geometry only, so no fonts are needed.
const {readFileSync, mkdirSync} = require('node:fs');
const {join} = require('node:path');
const sharp = require(process.env.BRIOSA_SHARP_MODULE || 'sharp');

const root = join(__dirname, '..');
const W = 1200;
const H = 630;
const deviation = ['#3E5BFF', '#00BAF1', '#34F5C5', '#FFD23F', '#FF4D6D'];

const logo = readFileSync(join(root, 'static/brand/logos/briosa-horizontal-tagline-inverse.svg'), 'utf8')
  .replace('<svg ', '<svg x="84" y="208" ')
  .replace('width="735" height="271"', 'width="590" height="218"');

function mix(a, b, t) {
  const ch = (hex, i) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);
  return '#' + [0, 1, 2].map((i) => Math.round(ch(a, i) + (ch(b, i) - ch(a, i)) * t).toString(16).padStart(2, '0')).join('');
}

function deviationColor(t) {
  const x = Math.min(0.9999, Math.max(0, t)) * (deviation.length - 1);
  const i = Math.floor(x);
  return mix(deviation[i], deviation[i + 1], x - i);
}

// A warped sheet sampled on a grid and projected obliquely, like a scanner's
// point cloud; each point's color is its height through the deviation map.
const dots = [];
const cols = 38;
const rows = 18;
for (let j = 0; j <= rows; j++) {
  for (let i = 0; i <= cols; i++) {
    const u = i / cols;
    const v = j / rows;
    const z = 0.6 * Math.sin(u * Math.PI * 1.7 + 0.5) * Math.cos(v * Math.PI * 1.15 - 0.35) + 0.16 * Math.sin(u * 9 + v * 3.2);
    const x = 868 + (u - 0.5) * 420 + (v - 0.5) * 150;
    const y = 318 + (v - 0.5) * 210 - z * 78 - (u - 0.5) * 44;
    const r = 1.5 + v * 1.1;
    const opacity = (0.5 + 0.45 * v).toFixed(2);
    dots.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="${deviationColor((z + 0.78) / 1.56)}" fill-opacity="${opacity}"/>`);
  }
}

function brackets(x0, y0, x1, y1, arm, color) {
  const d = [
    `M${x0} ${y0 + arm}V${y0}H${x0 + arm}`, `M${x1 - arm} ${y0}H${x1}V${y0 + arm}`,
    `M${x0} ${y1 - arm}V${y1}H${x0 + arm}`, `M${x1 - arm} ${y1}H${x1}V${y1 - arm}`,
  ].join('');
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="1.5"/>`;
}

const ruler = [];
for (let x = 0; x <= W; x += 24) {
  const major = x % 120 === 0;
  ruler.push(`<rect x="${x}" y="584" width="1" height="${major ? 9 : 5}" fill="rgba(120,190,255,${major ? 0.3 : 0.16})"/>`);
}

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="0.74" cy="0.46" r="0.55">
      <stop offset="0" stop-color="#003875" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#003875" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="rgba(120,190,255,0.07)" stroke-width="1"/>
    </pattern>
    <radialGradient id="fade" cx="0.74" cy="0.46" r="0.62">
      <stop offset="0.3" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="gridMask"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
    <linearGradient id="spectral" x1="0" x2="1">
      ${deviation.map((c, i) => `<stop offset="${i / (deviation.length - 1)}" stop-color="${c}"/>`).join('')}
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#040B17"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)" mask="url(#gridMask)"/>
  ${dots.join('\n  ')}
  ${brackets(622, 132, 1132, 512, 22, 'rgba(139,231,255,0.55)')}
  ${logo}
  <rect x="0" y="584" width="${W}" height="1" fill="rgba(120,190,255,0.3)"/>
  ${ruler.join('\n  ')}
  <rect x="0" y="624" width="${W}" height="6" fill="url(#spectral)"/>
</svg>`;

mkdirSync(join(root, 'static/img'), {recursive: true});
sharp(Buffer.from(card)).png().toFile(join(root, 'static/img/briosa-social.png'))
  .catch((error) => { console.error(error); process.exitCode = 1; });
