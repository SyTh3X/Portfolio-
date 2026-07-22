/**
 * WINSLOW & RYE — Site configuration and product catalog
 * ---------------------------------------------------------------
 * This is the single source of truth for the whole site.
 *
 * To go live with real data:
 *   1. Set SITE_CONFIG.whatsappNumber to your real WhatsApp Business
 *      number, in international format with no spaces, "+" or leading 0
 *      (e.g. UK mobile 07911 123456 becomes "447911123456").
 *   2. Replace the PRODUCTS array with your real products. Every page
 *      (home, shop, categories, product-details) renders itself purely
 *      from this array, so adding product #13, #100 or #1000 never
 *      requires touching any HTML — just add another object below.
 *   3. Swap `image: generated` entries for real photo URLs once you
 *      have them (see assets/js/placeholder-graphics.js).
 */

const SITE_CONFIG = {
  businessName: "Winslow & Rye",
  tagline: "Sofas, considered.",
  // WhatsApp Business number — international format, digits only.
  // This is a placeholder. Replace before going live.
  whatsappNumber: "447000000000",
  whatsappDisplay: "+44 7000 000000",
  email: "hello@winslowandrye.co.uk",
  phone: "+44 20 7000 0000",
  address: "14 Foundry Yard, Winslow, Buckinghamshire, MK18 3AA",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  pinterest: "https://pinterest.com/",
  // Toggle which extra fields get included in the auto-generated
  // WhatsApp message. Turn any of these off with `false` at any time.
  whatsappMessageFields: {
    price: true,
    sku: true,
    colour: true,
    dimensions: false,
    productUrl: true,
  },
};

// Shape-based categories (used for the Shop / Categories filters + nav)
const CATEGORIES = [
  { id: "3-seater", label: "3 Seater Sofas", blurb: "The everyday centrepiece for family living rooms." },
  { id: "2-seater", label: "2 Seater Sofas", blurb: "Compact comfort for snug rooms and second reception spaces." },
  { id: "corner", label: "Corner Sofas", blurb: "Sprawling, sectional comfort built for lounging." },
  { id: "recliner", label: "Recliner Sofas", blurb: "Built-in recline mechanisms for total relaxation." },
  { id: "chaise", label: "Chaise Sofas", blurb: "A stretched-out lounging end for putting your feet up." },
  { id: "sofa-bed", label: "Sofa Beds", blurb: "Doubles as a proper night's sleep for guests." },
];

// Material facet (separate from shape — a corner sofa can be leather OR fabric)
const MATERIALS = ["Fabric", "Leather", "Velvet", "Linen", "Wool Tweed"];

/**
 * PRODUCTS
 * Only `name` is strictly required for the WhatsApp flow to work — every
 * other field is optional and simply omitted from the UI/message if left
 * out. That's what makes this scale to hundreds of products with only
 * partial data.
 */
const PRODUCTS = [
  {
    id: "xyz-sofa",
    name: "XYZ Sofa",
    category: "3-seater",
    material: "Fabric",
    collection: "Studio Collection",
    price: 799,
    oldPrice: null,
    sku: "WR-XYZ-001",
    stock: "In Stock",
    deliveryTime: "2–3 weeks",
    rating: 4.6,
    reviewCount: 58,
    colours: ["Charcoal Grey", "Oatmeal", "Sage Green"],
    dimensions: { width: 210, depth: 92, height: 88, seatHeight: 45 },
    shortDescription: "A placeholder product used to demonstrate the dynamic catalog — swap this for your first real sofa.",
    description: "This is the default demo product for the Winslow & Rye catalog template. It behaves exactly like any other entry in this file: it appears on the homepage, in the shop grid, in category pages, and generates its own WhatsApp enquiry message automatically. Replace the fields on this object with your first real product — the rest of the site needs no changes.",
    features: [
      "Demonstrates every dynamic field the template supports",
      "Swap image, price, colours and specs without touching any HTML",
      "Fully wired into search, filters and the WhatsApp enquiry button",
    ],
    shape: "three-seater",
  },
  {
    id: "amalfi-corner-sofa",
    name: "Amalfi Corner Sofa",
    category: "corner",
    material: "Fabric",
    collection: "Coastal Collection",
    price: 1599,
    oldPrice: 1799,
    sku: "WR-AML-014",
    stock: "In Stock",
    deliveryTime: "3–4 weeks",
    rating: 4.8,
    reviewCount: 142,
    colours: ["Natural Stone", "Soft Grey", "Dusty Blue"],
    dimensions: { width: 268, depth: 168, height: 86, seatHeight: 44 },
    shortDescription: "A deep, sprawling corner sofa upholstered in brushed weave fabric.",
    description: "Named for long afternoons that don't need an agenda, the Amalfi is built around a deep 168cm chaise return so there's always room to stretch out. The frame is kiln-dried timber, doubled-jointed at every corner, and the seat cushions use a high-resilience foam and fibre wrap that holds its shape without ever feeling firm. Available with the chaise on either the left or right — just let us know when you enquire.",
    features: [
      "Deep 168cm chaise return, left or right hand",
      "Kiln-dried timber frame, corner-blocked and doubled-jointed",
      "High-resilience foam and fibre-wrapped cushions",
      "Removable, washable seat cushion covers",
      "Available as a corner sofa bed on request",
    ],
    shape: "corner",
  },
  {
    id: "chesterfield-3-seater",
    name: "Chesterfield 3 Seater",
    category: "3-seater",
    material: "Leather",
    collection: "Heritage Collection",
    price: 1349,
    oldPrice: null,
    sku: "WR-CHF-003",
    stock: "In Stock",
    deliveryTime: "4–6 weeks",
    rating: 4.9,
    reviewCount: 203,
    colours: ["Tan Brown", "Black", "Cognac"],
    dimensions: { width: 204, depth: 90, height: 78, seatHeight: 43 },
    shortDescription: "The deep-buttoned classic, hand-finished in full grain leather.",
    description: "A proper Chesterfield: deep diamond buttoning, rolled arms the same height as the back, and a low, formal stance that anchors a room. Every hide is full grain leather, hand-cut and hand-finished by upholsterers who've been doing this for decades, so no two sofas — or cushions — are ever quite identical. It only gets better with age.",
    features: [
      "Deep diamond button-back, hand-dressed by hand",
      "Full grain leather, hand-cut and hand-finished",
      "Traditional rolled arms, level with the backrest",
      "Solid beech frame with 8-way hand-tied springs",
      "Studded detailing along the base rail",
    ],
    shape: "three-seater",
  },
  {
    id: "hampton-2-seater",
    name: "Hampton 2 Seater",
    category: "2-seater",
    material: "Fabric",
    collection: "Studio Collection",
    price: 649,
    oldPrice: null,
    sku: "WR-HMP-021",
    stock: "In Stock",
    deliveryTime: "2–3 weeks",
    rating: 4.5,
    reviewCount: 76,
    colours: ["Oatmeal", "Charcoal Grey", "Blush Pink", "Navy Blue"],
    dimensions: { width: 168, depth: 88, height: 84, seatHeight: 45 },
    shortDescription: "A neat, upright two-seater built for smaller rooms and second sitting rooms.",
    description: "The Hampton is sized for rooms that don't have space to spare — a flat, a snug, a home office that occasionally hosts guests. Despite the compact footprint the seat depth is a genuine 88cm, so it doesn't feel like a compromise. Straight arms and a tailored, piped edge keep the silhouette neat rather than boxy.",
    features: [
      "Compact 168cm width for smaller rooms",
      "Genuine 88cm seat depth — no cramped perching",
      "Tailored piped edging along arms and back",
      "Pocket-sprung seat cushions",
      "Available in 4 fabric colourways",
    ],
    shape: "two-seater",
  },
  {
    id: "oakley-recliner-sofa",
    name: "Oakley Recliner Sofa",
    category: "recliner",
    material: "Fabric",
    collection: "Studio Collection",
    price: 999,
    oldPrice: 1099,
    sku: "WR-OKL-009",
    stock: "Made to Order",
    deliveryTime: "5–7 weeks",
    rating: 4.7,
    reviewCount: 118,
    colours: ["Charcoal Grey", "Slate Blue", "Moss Green"],
    dimensions: { width: 212, depth: 96, height: 100, seatHeight: 46 },
    shortDescription: "Independent manual-recline mechanisms built into all three seats.",
    description: "All three seats on the Oakley recline independently, so nobody has to negotiate the remote — there isn't one. A smooth side-lever mechanism eases the backrest down and lifts a sprung footrest, without the bulk you'd expect: closed up, it reads as a normal, tailored sofa rather than a mechanism wearing an upholstery cover.", 
    features: [
      "Independent manual recline on all three seats",
      "Sprung, self-levelling footrests",
      "Reinforced steel recline mechanism, rated for daily use",
      "Reading-height backrest in the upright position",
      "Available with USB-C charging ports either arm (+£60)",
    ],
    shape: "recliner",
  },
  {
    id: "nordic-chaise-sofa",
    name: "Nordic Chaise Sofa",
    category: "chaise",
    material: "Linen",
    collection: "Coastal Collection",
    price: 1149,
    oldPrice: null,
    sku: "WR-NRD-017",
    stock: "In Stock",
    deliveryTime: "3–4 weeks",
    rating: 4.8,
    reviewCount: 94,
    colours: ["Natural Stone", "Soft Grey", "Sandstone"],
    dimensions: { width: 232, depth: 152, height: 82, seatHeight: 43 },
    shortDescription: "A slim-armed chaise sofa in washed linen, built for lounging.",
    description: "Slim, squared-off arms and a low back keep the Nordic feeling open and airy, while the extended chaise end is genuinely long enough to lie flat on. The washed linen weave is loose and matte rather than shiny, and softens further with every wash. A pared-back, Scandinavian-leaning shape that suits bright, simply furnished rooms.",
    features: [
      "Extended chaise end, 152cm — long enough to lie flat",
      "Slim, squared arms for a lighter visual footprint",
      "Pre-washed linen weave, softens over time",
      "Feather-topped seat cushions over foam core",
      "Solid oak feet, left exposed",
    ],
    shape: "chaise",
  },
  {
    id: "windsor-sofa-bed",
    name: "Windsor Sofa Bed",
    category: "sofa-bed",
    material: "Fabric",
    collection: "Studio Collection",
    price: 849,
    oldPrice: null,
    sku: "WR-WND-011",
    stock: "In Stock",
    deliveryTime: "2–3 weeks",
    rating: 4.4,
    reviewCount: 87,
    colours: ["Charcoal Grey", "Oatmeal", "Navy Blue"],
    dimensions: { width: 198, depth: 94, height: 86, seatHeight: 44, bedWidth: 140, bedLength: 190 },
    shortDescription: "A proper 140cm double bed hidden inside an everyday 3 seater.",
    description: "The Windsor's pull-out mechanism opens in one motion to a full 140 x 190cm double bed with its own sprung base — no fold-out cushions doubling as a mattress. Closed up, it sits and looks like a standard 3 seater sofa, arms and all, so it doesn't announce itself as a spare-room fallback.",
    features: [
      "One-motion pull-out to a full 140 x 190cm double bed",
      "Independent sprung slatted base, not the seat cushions",
      "15cm foam and pocket-sprung mattress included",
      "Storage space beneath the seat deck",
      "Under 100kg — moves easily on standard castors",
    ],
    shape: "sofa-bed",
  },
  {
    id: "belgravia-velvet-3-seater",
    name: "Belgravia Velvet 3 Seater",
    category: "3-seater",
    material: "Velvet",
    collection: "Heritage Collection",
    price: 1399,
    oldPrice: null,
    sku: "WR-BLG-006",
    stock: "Made to Order",
    deliveryTime: "5–7 weeks",
    rating: 4.9,
    reviewCount: 165,
    colours: ["Emerald Green", "Dusky Pink", "Navy", "Mustard"],
    dimensions: { width: 206, depth: 94, height: 82, seatHeight: 44 },
    shortDescription: "Channel-tufted velvet with a brass-finished plinth base.",
    description: "Vertical channel tufting runs the full height of the backrest, catching the light differently from every angle — a technique that only really works in a weighty velvet like this one. The whole thing sits on a slim brass-finished plinth rather than feet, which reads considerably lighter than the deep-buttoned silhouette above it suggests.",
    features: [
      "Full-height vertical channel tufting",
      "Weighted, performance-backed velvet — resists crushing",
      "Brass-finished plinth base",
      "Scatter-back cushions included, contrast piped",
      "4 jewel-tone colourways",
    ],
    shape: "three-seater",
  },
  {
    id: "camden-corner-sofa-bed",
    name: "Camden Corner Sofa Bed",
    category: "corner",
    material: "Fabric",
    collection: "Studio Collection",
    price: 1699,
    oldPrice: 1899,
    sku: "WR-CMD-019",
    stock: "In Stock",
    deliveryTime: "3–5 weeks",
    rating: 4.6,
    reviewCount: 71,
    colours: ["Charcoal Grey", "Soft Grey", "Oatmeal"],
    dimensions: { width: 274, depth: 172, height: 88, seatHeight: 45, bedWidth: 150, bedLength: 196 },
    shortDescription: "A full corner sofa that opens into a 150cm bed via the chaise end.",
    description: "The Camden does two jobs at once: day to day it's a deep corner sofa with a wide chaise return, and the same chaise section lifts and unfolds into a 150 x 196cm bed for guests. A hidden ottoman under the chaise seat holds the bedding out of sight the rest of the time — genuinely useful in flats without a spare room.",
    features: [
      "Chaise end opens to a 150 x 196cm bed",
      "Hidden ottoman storage under the chaise seat",
      "Available left or right hand chaise",
      "Corner-blocked timber frame throughout",
      "Machine-washable scatter cushion covers",
    ],
    shape: "corner",
  },
  {
    id: "highland-tweed-2-seater",
    name: "Highland Tweed 2 Seater",
    category: "2-seater",
    material: "Wool Tweed",
    collection: "Heritage Collection",
    price: 729,
    oldPrice: null,
    sku: "WR-HLD-008",
    stock: "In Stock",
    deliveryTime: "3–4 weeks",
    rating: 4.7,
    reviewCount: 63,
    colours: ["Heather Grey", "Moss", "Charcoal"],
    dimensions: { width: 172, depth: 90, height: 86, seatHeight: 45 },
    shortDescription: "A woven wool tweed two-seater with turned wooden legs.",
    description: "Woven from a flecked wool-rich tweed in small mill runs, so colourways shift slightly batch to batch — a feature, not an inconsistency. Turned solid oak legs and a boxed, tailored cushion give the Highland a slightly traditional, countryside-cottage feel rather than a city one.",
    features: [
      "Flecked wool-rich tweed, woven in small batches",
      "Turned solid oak legs, exposed",
      "Boxed seat cushions with a tailored edge",
      "Naturally stain- and fade-resistant wool fibre",
      "Matching armchair available separately",
    ],
    shape: "two-seater",
  },
  {
    id: "kensington-leather-corner-recliner",
    name: "Kensington Leather Corner Recliner",
    category: "corner",
    material: "Leather",
    collection: "Heritage Collection",
    price: 2199,
    oldPrice: 2499,
    sku: "WR-KNS-002",
    stock: "Made to Order",
    deliveryTime: "6–8 weeks",
    rating: 4.9,
    reviewCount: 134,
    colours: ["Black", "Dark Olive", "Tan Brown"],
    dimensions: { width: 286, depth: 174, height: 98, seatHeight: 46 },
    shortDescription: "Full corner proportions with two built-in leather recliner seats.",
    description: "Two of the five seating positions on the Kensington are full recliners with a smooth side-lever mechanism; the rest are fixed, deep-cushioned seats. Every panel is full grain leather over a hardwood frame, corner-blocked and glued rather than stapled, which is most of the reason this one is built to be handed down rather than replaced.",
    features: [
      "Two independent recliner seats built into the corner layout",
      "Full grain leather throughout, including sides and back",
      "Hardwood frame, corner-blocked and glued",
      "8-way hand-tied springs on fixed seats",
      "Available left or right hand corner",
    ],
    shape: "corner",
  },
  {
    id: "brighton-coastal-3-seater",
    name: "Brighton Coastal 3 Seater",
    category: "3-seater",
    material: "Linen",
    collection: "Coastal Collection",
    price: 899,
    oldPrice: null,
    sku: "WR-BRT-013",
    stock: "In Stock",
    deliveryTime: "2–4 weeks",
    rating: 4.6,
    reviewCount: 102,
    colours: ["Natural Stone", "Chalk White", "Soft Grey"],
    dimensions: { width: 202, depth: 92, height: 84, seatHeight: 44 },
    shortDescription: "A relaxed, light-filled linen sofa with loose-look tailored cushions.",
    description: "Loose-look cushions (tailored and fitted, not actually loose) and a bleached, matte linen weave give the Brighton a deliberately undone, seaside-cottage feel. Scaled to sit comfortably in bay-windowed period rooms as well as new-builds, with a slightly lower back than most of the range.",
    features: [
      "Loose-look tailored seat and back cushions",
      "Bleached matte linen weave",
      "Slightly lower back height — 84cm",
      "Turned beech feet in a whitewash finish",
      "3 coastal-toned colourways",
    ],
    shape: "three-seater",
  },
];

// Convenience lookup used by product-details.html
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  const sameCategory = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
  const sameMaterialOnly = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category && p.material === product.material
  );
  return [...sameCategory, ...sameMaterialOnly].slice(0, limit);
}

function formatGBP(amount) {
  if (amount === null || amount === undefined) return "";
  return "£" + Number(amount).toLocaleString("en-GB");
}

function formatDimensions(dimensions) {
  if (!dimensions) return "";
  const { width, depth, height } = dimensions;
  return `W ${width}cm × D ${depth}cm × H ${height}cm`;
}

/**
 * Buckets a specific shade name ("Dusky Pink", "Sandstone"...) into one
 * of a small set of colour families, so the shop filter stays a short,
 * scannable list no matter how many exact shade names the catalog grows
 * to. Falls back to "Other" for anything unmatched — extend the keyword
 * lists below if a new family is needed.
 */
const COLOUR_FAMILIES = {
  Blue: ["blue", "navy"],
  Green: ["green", "sage", "moss", "olive"],
  Grey: ["grey", "gray", "slate", "heather", "charcoal"],
  "Brown / Tan": ["brown", "tan", "cognac", "mustard"],
  Pink: ["pink", "blush", "dusky"],
  Black: ["black"],
  Neutral: ["stone", "chalk", "oatmeal", "natural", "sand", "ivory"],
};

function getColourFamily(colourName) {
  const lower = colourName.toLowerCase();
  for (const [family, keywords] of Object.entries(COLOUR_FAMILIES)) {
    if (keywords.some((k) => lower.includes(k))) return family;
  }
  return "Other";
}

function getAllColourFamilies() {
  const families = new Set();
  PRODUCTS.forEach((p) => (p.colours || []).forEach((c) => families.add(getColourFamily(c))));
  return Array.from(families).sort();
}
