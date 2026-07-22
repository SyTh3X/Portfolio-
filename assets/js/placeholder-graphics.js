/**
 * WINSLOW & RYE — Generated placeholder product illustrations
 * ---------------------------------------------------------------
 * Real product photography is the obvious next step once available —
 * this file exists so the catalog never shows a broken image icon in
 * the meantime, and so a new product added with zero images still
 * looks intentional rather than empty.
 *
 * Each product is illustrated as a simple, on-brand line drawing based
 * on its `shape` and `material`, coloured deterministically from its
 * id (same product always renders the same illustration). Swap
 * `renderProductArt` for a real <img> once photography exists — every
 * call site (home.js, shop.js, product.js) reads from one place.
 */

const THEME_HEX = {
  ink: "#17251F",
  bottle: "#1F3A32",
  brass: "#A9782E",
  linen: "#EAE6DA",
  ivory: "#FBFAF6",
};

// [seat/back fill, arm/shadow fill] pairs per material, several shades each
const MATERIAL_THEME_COLORS = {
  Leather: [
    ["#8A5A34", "#6B4226"],
    ["#6B4226", "#4A2E1E"],
    ["#9C6B3E", "#7A4E2C"],
  ],
  Fabric: [
    ["#7C8A7E", "#59685E"],
    ["#96A28F", "#6C7A6C"],
    ["#5E6D63", "#424F46"],
  ],
  Velvet: [
    ["#5B6E46", "#3D4A2A"],
    ["#7A4152", "#552733"],
    ["#3E5468", "#28374A"],
  ],
  Linen: [
    ["#D9D2BB", "#BEB89F"],
    ["#DAD2BC", "#C2BB9F"],
    ["#CFC7AE", "#AFA98F"],
  ],
  "Wool Tweed": [
    ["#928C7E", "#6E695D"],
    ["#7F8770", "#5A6152"],
    ["#8C8577", "#68635A"],
  ],
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getProductTheme(product) {
  const palette = MATERIAL_THEME_COLORS[product.material] || MATERIAL_THEME_COLORS.Fabric;
  const idx = hashString(product.id) % palette.length;
  const [base, dark] = palette[idx];
  return { base, dark, accent: THEME_HEX.brass };
}

// --- shape body builders — each returns the sofa-only markup, drawn within a 480x360 viewBox ---

function stitchOutline(x, y, w, h, r, colour) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="${colour}" stroke-width="2" stroke-dasharray="4 6" opacity="0.45"/>`;
}

function legPair(leftX, rightX, y) {
  return `
    <rect x="${leftX}" y="${y}" width="13" height="20" rx="3" fill="${THEME_HEX.ink}" opacity="0.65"/>
    <rect x="${rightX}" y="${y}" width="13" height="20" rx="3" fill="${THEME_HEX.ink}" opacity="0.65"/>
  `;
}

function throwPillow(cx, cy, colour, rotate) {
  return `<rect x="-28" y="-28" width="56" height="56" rx="9" transform="translate(${cx},${cy}) rotate(${rotate})" fill="${colour}"/>`;
}

function seatDividers(x, y, w, h, count, colour) {
  let out = "";
  for (let i = 1; i <= count; i++) {
    const dx = x + (w / (count + 1)) * i;
    out += `<line x1="${dx}" y1="${y}" x2="${dx}" y2="${y + h}" stroke="${colour}" stroke-width="2" opacity="0.18"/>`;
  }
  return out;
}

function buildThreeOrTwoSeater(theme, seats) {
  const narrow = seats === 2;
  const left = narrow ? 108 : 50;
  const right = narrow ? 372 : 430;
  const armW = 40;
  const bodyLeft = left + armW + 2;
  const bodyRight = right - armW - 2;
  const bodyW = bodyRight - bodyLeft;

  return `
    <rect x="${left}" y="155" width="${armW}" height="140" rx="16" fill="${theme.dark}"/>
    <rect x="${right - armW}" y="155" width="${armW}" height="140" rx="16" fill="${theme.dark}"/>
    <rect x="${bodyLeft}" y="140" width="${bodyW}" height="82" rx="18" fill="${theme.base}"/>
    <rect x="${bodyLeft}" y="205" width="${bodyW}" height="88" rx="16" fill="${theme.base}"/>
    ${seatDividers(bodyLeft, 148, bodyW, 66, narrow ? 1 : 2, THEME_HEX.ink)}
    ${seatDividers(bodyLeft, 212, bodyW, 74, narrow ? 1 : 2, THEME_HEX.ink)}
    ${stitchOutline(bodyLeft + 10, 148, bodyW - 20, 66, 10, THEME_HEX.ivory)}
    ${throwPillow(bodyLeft + 46, 192, theme.accent, -11)}
    ${legPair(left + 18, right - 31, 291)}
  `;
}

function buildCorner(theme) {
  return `
    <rect x="55" y="72" width="86" height="24" rx="10" fill="${theme.dark}" opacity="0.9"/>
    <rect x="50" y="155" width="40" height="140" rx="16" fill="${theme.dark}"/>
    <rect x="92" y="140" width="196" height="82" rx="18" fill="${theme.base}"/>
    <rect x="92" y="205" width="196" height="88" rx="16" fill="${theme.base}"/>
    ${seatDividers(92, 148, 196, 66, 1, THEME_HEX.ink)}
    ${seatDividers(92, 212, 196, 74, 1, THEME_HEX.ink)}
    <rect x="270" y="205" width="164" height="88" rx="16" fill="${theme.base}"/>
    <rect x="270" y="176" width="164" height="34" rx="14" fill="${theme.dark}" opacity="0.85"/>
    ${stitchOutline(102, 148, 176, 66, 10, THEME_HEX.ivory)}
    ${throwPillow(150, 192, theme.accent, -11)}
    ${legPair(66, 410, 291)}
  `;
}

function buildRecliner(theme) {
  const bodyLeft = 92, bodyW = 296;
  return `
    <rect x="50" y="150" width="42" height="145" rx="16" fill="${theme.dark}"/>
    <rect x="388" y="150" width="42" height="145" rx="16" fill="${theme.dark}"/>
    <rect x="${bodyLeft}" y="136" width="${bodyW}" height="84" rx="18" fill="${theme.base}"/>
    <rect x="${bodyLeft}" y="200" width="${bodyW}" height="86" rx="16" fill="${theme.base}"/>
    ${seatDividers(bodyLeft, 144, bodyW, 68, 2, THEME_HEX.ink)}
    <line x1="240" y1="136" x2="240" y2="286" stroke="${THEME_HEX.ink}" stroke-width="2" opacity="0.12"/>
    <rect x="132" y="286" width="220" height="26" rx="10" fill="${theme.dark}" opacity="0.55"/>
    ${stitchOutline(bodyLeft + 10, 144, bodyW - 20, 60, 10, THEME_HEX.ivory)}
    ${legPair(66, 400, 293)}
  `;
}

function buildChaise(theme) {
  return `
    <rect x="55" y="168" width="36" height="120" rx="14" fill="${theme.dark}"/>
    <rect x="91" y="152" width="150" height="66" rx="16" fill="${theme.base}"/>
    <rect x="91" y="205" width="150" height="82" rx="14" fill="${theme.base}"/>
    ${seatDividers(91, 158, 150, 54, 1, THEME_HEX.ink)}
    <rect x="235" y="205" width="200" height="82" rx="16" fill="${theme.base}"/>
    <rect x="235" y="184" width="200" height="26" rx="12" fill="${theme.dark}" opacity="0.75"/>
    ${stitchOutline(101, 158, 130, 54, 8, THEME_HEX.ivory)}
    ${throwPillow(140, 188, theme.accent, 10)}
    ${legPair(66, 405, 288)}
  `;
}

function buildSofaBed(theme) {
  const bodyLeft = 92, bodyW = 296;
  return `
    <rect x="50" y="155" width="42" height="140" rx="16" fill="${theme.dark}"/>
    <rect x="388" y="155" width="42" height="140" rx="16" fill="${theme.dark}"/>
    <rect x="${bodyLeft}" y="140" width="${bodyW}" height="82" rx="18" fill="${theme.base}"/>
    <rect x="${bodyLeft}" y="205" width="${bodyW}" height="88" rx="16" fill="${theme.base}"/>
    ${seatDividers(bodyLeft, 148, bodyW, 66, 2, THEME_HEX.ink)}
    ${seatDividers(bodyLeft, 212, bodyW, 74, 2, THEME_HEX.ink)}
    <line x1="${bodyLeft + 8}" y1="204" x2="${bodyLeft + bodyW - 8}" y2="204" stroke="${THEME_HEX.ivory}" stroke-width="3" stroke-dasharray="2 6" opacity="0.7"/>
    <path d="M 228 226 l 12 12 l 12 -12" fill="none" stroke="${THEME_HEX.ivory}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
    ${throwPillow(bodyLeft + 46, 192, theme.accent, -11)}
    ${legPair(68, 402, 291)}
  `;
}

const SHAPE_BUILDERS = {
  "three-seater": (t) => buildThreeOrTwoSeater(t, 3),
  "two-seater": (t) => buildThreeOrTwoSeater(t, 2),
  corner: buildCorner,
  recliner: buildRecliner,
  chaise: buildChaise,
  "sofa-bed": buildSofaBed,
};

/**
 * Returns a complete, self-contained <svg>...</svg> string for a product.
 * Safe to inject with `.innerHTML =` or wrap in an <img src="data:image/svg+xml,...">.
 */
function renderProductArt(product, opts = {}) {
  const theme = getProductTheme(product);
  const builder = SHAPE_BUILDERS[product.shape] || SHAPE_BUILDERS["three-seater"];
  const label = opts.label ? `<title>${product.name} — ${opts.label}</title>` : `<title>${product.name}</title>`;

  return `
<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet">
  ${label}
  <rect width="480" height="360" fill="${THEME_HEX.ivory}"/>
  <ellipse cx="240" cy="308" rx="175" ry="16" fill="${THEME_HEX.ink}" opacity="0.10"/>
  ${builder(theme)}
</svg>`.trim();
}

/**
 * Convenience: mount generated art into a container element.
 */
function mountProductArt(container, product, opts = {}) {
  if (!container || !product) return;
  container.innerHTML = renderProductArt(product, opts);
  container.setAttribute("aria-label", `Illustration of the ${product.name}`);
}
