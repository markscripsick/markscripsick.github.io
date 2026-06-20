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
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const INK = '#1b2430';
const ACCENT = '#b5532a';
const PAPER = '#f1efea';

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
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#d9d5cc" stroke-width="2"/>
  <g fill="${INK}" font-family="Inter, system-ui, Arial, sans-serif" text-anchor="middle">
    <circle cx="${w / 2}" cy="${h / 2 - 70}" r="46" fill="none" stroke="${ACCENT}" stroke-width="6"/>
    <path d="M ${w / 2 - 22} ${h / 2 - 60} h 44 M ${w / 2} ${h / 2 - 82} v 44" stroke="${ACCENT}" stroke-width="6"/>
    <text x="${w / 2}" y="${h / 2 + 30}" font-size="46" font-weight="700">${label}</text>
    <text x="${w / 2}" y="${h / 2 + 78}" font-size="26" fill="#717d8a">${sub}</text>
  </g>
</svg>`;
}

const projectImages = {
  'assistive-devices': 'Assistive Devices',
  'turtle-robotics': 'TURTLE Robotics',
};

console.log('Generating placeholder images…');
for (const [slug, label] of Object.entries(projectImages)) {
  await write(`images/projects/${slug}/hero.svg`, placeholderSvg(label, 'hero image — replace me', 1200, 675));
  for (let i = 1; i <= 3; i++) {
    await write(
      `images/projects/${slug}/gallery-${i}.svg`,
      placeholderSvg(`${label} ${i}`, 'gallery image — replace me', 800, 600),
    );
  }
}

// Cert logo placeholder
await write(
  'images/certifications/solidworks.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="20" fill="${INK}"/>
  <text x="60" y="62" font-family="Inter, system-ui, Arial" font-size="30" font-weight="700"
        fill="${ACCENT}" text-anchor="middle" dominant-baseline="central">SW</text>
</svg>`,
);

// ── Social-share card (og-image.png) ────────────────────────────────────
console.log('Generating og-image.png + apple-touch-icon.png…');
const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${INK}"/>
  <rect x="0" y="0" width="1200" height="12" fill="${ACCENT}"/>
  <g font-family="Inter, system-ui, Arial, sans-serif" fill="#fbfaf8">
    <text x="80" y="250" font-size="78" font-weight="800">Mark Scripsick</text>
    <text x="80" y="330" font-size="40" fill="#cdd3da">Mechanical Engineering @ Texas A&amp;M</text>
    <text x="80" y="408" font-size="32" fill="${'#e08a5f'}">CAD &amp; SolidWorks · Robotics · Design-Build</text>
  </g>
  <rect x="80" y="470" width="120" height="120" rx="24" fill="#232a34"/>
  <text x="140" y="530" font-family="Inter, Arial" font-size="56" font-weight="700" fill="${'#e08a5f'}"
        text-anchor="middle" dominant-baseline="central">MS</text>
</svg>`);
await sharp(ogSvg).png().toFile(join(pub, 'og-image.png'));
console.log('  ✓ og-image.png');

const iconSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="${INK}"/>
  <text x="90" y="96" font-family="Inter, Arial" font-size="84" font-weight="700" fill="${'#e08a5f'}"
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
