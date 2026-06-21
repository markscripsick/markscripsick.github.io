/**
 * Generates placeholder + share assets into /public:
 *   • Placeholder SVG images for the seed projects and cert logo
 *   • og-image.png (1200×630 social-share card)  ── via sharp
 *   • apple-touch-icon.png (180×180)             ── via sharp
 *   • resume.pdf (a valid minimal placeholder PDF)
 *
 * Run with:  npm run gen:assets
 *
 * You can safely delete this script once you've replaced the placeholders
 * with your own images and a real résumé — it's only a convenience.
 *
 * Colors here mirror the "editorial engineering" palette in
 * src/styles/global.css (warm cream + charcoal + warm grays).
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const INK = '#232019'; // charcoal / near-black
const GRAY = '#6c685d'; // warm gray accent (was copper)
const PAPER = '#ece7db'; // warm cream surface
const CREAM = '#ece7db'; // light text on charcoal
const CREAM_2 = '#cdc8bd'; // dimmer cream
const STRIPE = '#b8b2a6'; // refined accent stripe / detail

async function write(rel, contents) {
  const full = join(pub, rel);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, contents);
  console.log('  ✓', rel);
}

/** A simple labeled placeholder SVG (the user replaces these later). */
function placeholderSvg(label, sub = 'placeholder — replace me', w = 1200, h = 750) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${PAPER}"/>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#d6cfbf" stroke-width="2"/>
  <g fill="${INK}" font-family="'JetBrains Mono', ui-monospace, monospace" text-anchor="middle">
    <circle cx="${w / 2}" cy="${h / 2 - 70}" r="46" fill="none" stroke="${GRAY}" stroke-width="5"/>
    <path d="M ${w / 2 - 22} ${h / 2 - 70} h 44 M ${w / 2} ${h / 2 - 92} v 44" stroke="${GRAY}" stroke-width="5"/>
    <text x="${w / 2}" y="${h / 2 + 30}" font-size="40" letter-spacing="2" fill="${INK}">${label}</text>
    <text x="${w / 2}" y="${h / 2 + 74}" font-size="22" letter-spacing="3" fill="#8a867c">${sub}</text>
  </g>
</svg>`;
}

const projectImages = {
  'assistive-devices': 'ASSISTIVE DEVICES',
  'turtle-robotics': 'TURTLE ROBOTICS',
};

console.log('Generating placeholder images…');
for (const [slug, label] of Object.entries(projectImages)) {
  await write(`images/projects/${slug}/hero.svg`, placeholderSvg(label, 'HERO IMAGE — REPLACE ME', 1200, 675));
  for (let i = 1; i <= 3; i++) {
    await write(
      `images/projects/${slug}/gallery-${i}.svg`,
      placeholderSvg(`${label} ${i}`, 'GALLERY IMAGE — REPLACE ME', 800, 600),
    );
  }
}

// Cert logo placeholder
await write(
  'images/certifications/solidworks.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="8" fill="${INK}"/>
  <text x="60" y="62" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="28" font-weight="700"
        letter-spacing="1" fill="${CREAM}" text-anchor="middle" dominant-baseline="central">SW</text>
</svg>`,
);

// ── Social-share card (og-image.png) ────────────────────────────────────
console.log('Generating og-image.png + apple-touch-icon.png…');
const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${INK}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${STRIPE}"/>
  <text x="80" y="178" font-family="'JetBrains Mono', monospace" font-size="24" letter-spacing="8" fill="${STRIPE}">MECHANICAL ENGINEERING — TEXAS A&amp;M</text>
  <text x="76" y="300" font-family="Times New Roman, Georgia, serif" font-size="96" fill="${CREAM}">Mark Scripsick</text>
  <text x="80" y="372" font-family="Times New Roman, Georgia, serif" font-size="40" font-style="italic" fill="${CREAM_2}">mechanical engineer &amp; design-builder</text>
  <text x="80" y="448" font-family="'JetBrains Mono', monospace" font-size="22" letter-spacing="3" fill="${STRIPE}">CAD · SOLIDWORKS · ROBOTICS · DESIGN-BUILD</text>
  <rect x="1000" y="470" width="120" height="120" rx="14" fill="#2c281f"/>
  <text x="1060" y="530" font-family="Times New Roman, serif" font-size="56" fill="${CREAM}"
        text-anchor="middle" dominant-baseline="central">MS</text>
</svg>`);
await sharp(ogSvg).png().toFile(join(pub, 'og-image.png'));
console.log('  ✓ og-image.png');

const iconSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="${INK}"/>
  <text x="90" y="98" font-family="Times New Roman, serif" font-size="84" fill="${CREAM}"
        text-anchor="middle" dominant-baseline="central">MS</text>
</svg>`);
await sharp(iconSvg).png().toFile(join(pub, 'apple-touch-icon.png'));
console.log('  ✓ apple-touch-icon.png');

// ── Placeholder résumé PDF (valid, minimal, correct xref offsets) ────────
console.log('Generating resume.pdf placeholder…');
function minimalPdf(lines) {
  const objs = [];
  objs.push('<< /Type /Catalog /Pages 2 0 R >>');
  objs.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  objs.push(
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] ' +
      '/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
  );
  let stream = 'BT /F1 18 Tf 72 720 Td 22 TL\n';
  for (const line of lines) {
    stream += `(${line.replace(/([()\\])/g, '\\$1')}) Tj T*\n`;
  }
  stream += 'ET';
  objs.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  objs.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((body, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;
  return Buffer.from(pdf, 'latin1');
}
await writeFile(
  join(pub, 'resume.pdf'),
  minimalPdf([
    'Mark Scripsick - Placeholder Resume',
    '',
    'Replace this file at public/resume.pdf with your real resume PDF.',
    'The "Download resume" buttons across the site link to it automatically.',
  ]),
);
console.log('  ✓ resume.pdf');

console.log('\nDone. Replace these placeholders with your own files anytime.');
