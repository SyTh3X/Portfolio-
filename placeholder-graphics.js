/* ==========================================================================
   WINSLOW & RYE — Design System
   A heritage-modern British furniture brand, built around the idea of
   upholstery craft: topstitched seams, fabric swatches, tailored proportions.
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Karla:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

/* ---------- Design tokens ---------- */
:root {
  /* Colour — named, deliberate, tied to upholstery materials rather than screens */
  --color-ink: #17251F;          /* primary text — near-black, green undertone */
  --color-ink-soft: #33443C;
  --color-bottle: #1F3A32;       /* deep bottle green — header/footer, dark sections */
  --color-bottle-dark: #142722;
  --color-brass: #A9782E;        /* primary accent — studs, stitching, links */
  --color-brass-dark: #8A6222;
  --color-brass-light: #C79A52;
  --color-linen: #EAE6DA;        /* page background — warm stone linen */
  --color-linen-dark: #DDD5C1;
  --color-ivory: #FBFAF6;        /* card surfaces */
  --color-muted: #5C6B60;        /* secondary text */
  --color-border: #D9D2BE;
  --color-whatsapp: #25D366;     /* WhatsApp brand green — functional exception, CTA only */
  --color-whatsapp-dark: #1DA851;
  --color-error: #A33B2C;
  --color-success: #3E7A4C;

  /* Typography */
  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-body: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.35rem;
  --text-2xl: clamp(1.6rem, 1.4rem + 1vw, 2rem);
  --text-3xl: clamp(2rem, 1.6rem + 2vw, 2.75rem);
  --text-4xl: clamp(2.5rem, 1.9rem + 3vw, 3.75rem);
  --text-5xl: clamp(3rem, 2.1rem + 4.5vw, 5rem);

  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 6rem;
  --space-16: 8rem;

  /* Shape + elevation */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-pill: 999px;
  --shadow-sm: 0 1px 3px rgba(23, 37, 31, 0.08);
  --shadow-md: 0 10px 30px -6px rgba(23, 37, 31, 0.14);
  --shadow-lg: 0 24px 60px -12px rgba(23, 37, 31, 0.22);

  --container-w: 1240px;
  --transition: 200ms ease;
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
}
body {
  font-family: var(--font-body);
  background: var(--color-linen);
  color: var(--color-ink);
  line-height: 1.55;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
input, select, textarea { font: inherit; color: inherit; }
ul, ol { list-style: none; }
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; line-height: 1.15; letter-spacing: -0.01em; }
table { border-collapse: collapse; width: 100%; }

/* Visible keyboard focus everywhere — never suppressed */
:focus-visible {
  outline: 2.5px solid var(--color-brass);
  outline-offset: 3px;
  border-radius: 2px;
}

.visually-hidden {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

.skip-link {
  position: absolute;
  left: var(--space-4);
  top: -60px;
  background: var(--color-bottle);
  color: var(--color-ivory);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-sm);
  z-index: 1000;
  transition: top var(--transition);
}
.skip-link:focus { top: var(--space-4); }

/* ---------- Layout helpers ---------- */
.container {
  max-width: var(--container-w);
  margin-inline: auto;
  padding-inline: var(--space-5);
}
@media (max-width: 640px) {
  .container { padding-inline: var(--space-4); }
}

.section { padding-block: var(--space-12); }
.section--alt { background: var(--color-ivory); }
.section--bottle { background: var(--color-bottle); color: var(--color-ivory); }
.section--tight { padding-block: var(--space-8); }
@media (max-width: 720px) {
  .section { padding-block: var(--space-10); }
}

.section__head { max-width: 640px; margin-bottom: var(--space-8); }
.section__head--center { margin-inline: auto; text-align: center; }
.section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-brass);
  margin-bottom: var(--space-3);
}
.section__eyebrow::before {
  content: "";
  width: 22px; height: 1px;
  background: var(--color-brass);
}
.section--bottle .section__eyebrow,
.section--bottle .section__eyebrow::before { color: var(--color-brass-light); background: var(--color-brass-light); }
.section__title { font-size: var(--text-3xl); margin-bottom: var(--space-3); }
.section__subtitle { color: var(--color-muted); font-size: var(--text-lg); }
.section--bottle .section__subtitle { color: rgba(251,250,246,0.75); }

.grid {
  display: grid;
  gap: var(--space-6);
}
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }
@media (max-width: 980px) {
  .grid--3, .grid--4 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px) {
  .grid--2, .grid--3, .grid--4 { grid-template-columns: 1fr; }
}

/* Stitched-seam divider — the site's signature motif, used sparingly */
.stitch-divider {
  height: 10px;
  width: 100%;
  background-image: repeating-linear-gradient(to right, var(--color-brass) 0 12px, transparent 12px 20px),
                     repeating-linear-gradient(to right, var(--color-brass) 0 12px, transparent 12px 20px);
  background-size: 100% 1px;
  background-position: top, bottom;
  background-repeat: repeat-x;
  opacity: 0.55;
}
.stitch-divider--light { filter: brightness(2.1); opacity: 0.4; }

/* ---------- Typography utilities ---------- */
.eyebrow-mono { font-family: var(--font-mono); font-size: var(--text-xs); letter-spacing: 0.1em; text-transform: uppercase; }
.text-muted { color: var(--color-muted); }
.text-center { text-align: center; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.9rem 1.75rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: var(--text-base);
  border: 1.5px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition), border-color var(--transition), color var(--transition);
  white-space: nowrap;
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }
.btn--primary { background: var(--color-bottle); color: var(--color-ivory); }
.btn--primary:hover { background: var(--color-bottle-dark); box-shadow: var(--shadow-md); }
.btn--brass { background: var(--color-brass); color: var(--color-ivory); }
.btn--brass:hover { background: var(--color-brass-dark); box-shadow: var(--shadow-md); }
.btn--outline { background: transparent; border-color: currentColor; color: var(--color-ink); }
.btn--outline:hover { background: var(--color-ink); color: var(--color-ivory); }
.section--bottle .btn--outline { color: var(--color-ivory); }
.section--bottle .btn--outline:hover { background: var(--color-ivory); color: var(--color-bottle); }
.btn--whatsapp {
  background: var(--color-whatsapp);
  color: #ffffff;
}
.btn--whatsapp:hover { background: var(--color-whatsapp-dark); box-shadow: var(--shadow-md); }
.btn--sm { padding: 0.6rem 1.2rem; font-size: var(--text-sm); }
.btn--lg { padding: 1.15rem 2.25rem; font-size: var(--text-lg); }
.btn--block { width: 100%; }
.btn svg { width: 1.15em; height: 1.15em; flex-shrink: 0; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* ---------- Site header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(251, 250, 246, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: box-shadow var(--transition), border-color var(--transition);
}
.site-header.is-scrolled { box-shadow: var(--shadow-sm); border-color: var(--color-border); }
.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-block: var(--space-4);
}
.logo { display: flex; align-items: baseline; gap: var(--space-2); font-family: var(--font-display); font-size: var(--text-xl); font-weight: 700; }
.logo__mark { color: var(--color-brass); }
.nav { display: flex; align-items: center; gap: var(--space-6); }
.nav__list { display: flex; gap: var(--space-5); font-size: var(--text-sm); font-weight: 600; }
.nav__list a { padding: var(--space-2) 0; position: relative; }
.nav__list a::after {
  content: "";
  position: absolute; left: 0; right: 100%; bottom: -2px; height: 2px;
  background: var(--color-brass);
  transition: right var(--transition);
}
.nav__list a:hover::after, .nav__list a.is-active::after { right: 0; }
.nav__list a.is-active { color: var(--color-brass-dark); }
.header__actions { display: flex; align-items: center; gap: var(--space-4); }
.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
}
.nav__toggle span { width: 24px; height: 2px; background: var(--color-ink); transition: transform var(--transition), opacity var(--transition); }
.nav__toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav__toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .nav__toggle { display: flex; }
  .nav {
    position: fixed; inset: 0 0 0 auto; width: min(320px, 84vw);
    background: var(--color-ivory);
    flex-direction: column; align-items: stretch;
    padding: var(--space-8) var(--space-6);
    box-shadow: var(--shadow-lg);
    transform: translateX(100%);
    transition: transform 280ms ease;
    overflow-y: auto;
  }
  .nav.is-open { transform: translateX(0); }
  .nav__list { flex-direction: column; gap: var(--space-1); font-size: var(--text-lg); }
  .nav__list a { display: block; padding: var(--space-3) 0; border-bottom: 1px solid var(--color-border); }
  .header__actions .btn span { display: none; }
  .nav-scrim {
    display: none;
    position: fixed; inset: 0; background: rgba(23,37,31,0.4); z-index: 90;
  }
  .nav-scrim.is-open { display: block; }
}

/* ---------- Breadcrumbs ---------- */
.breadcrumbs {
  display: flex; flex-wrap: wrap; gap: var(--space-2);
  font-size: var(--text-sm); color: var(--color-muted);
  padding-block: var(--space-5);
}
.breadcrumbs a:hover { color: var(--color-brass-dark); }
.breadcrumbs li:not(:last-child)::after { content: "/"; margin-left: var(--space-2); color: var(--color-border); }
.breadcrumbs li { display: flex; gap: var(--space-2); }
.breadcrumbs li[aria-current] { color: var(--color-ink); font-weight: 600; }

/* ---------- Hero ---------- */
.hero {
  padding-block: var(--space-10) var(--space-12);
  overflow: hidden;
}
.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--space-10);
  align-items: center;
}
.hero__eyebrow { color: var(--color-brass-dark); }
.hero__title { font-size: var(--text-5xl); margin-bottom: var(--space-5); }
.hero__title em { font-style: italic; color: var(--color-brass-dark); }
.hero__lede { font-size: var(--text-lg); color: var(--color-ink-soft); max-width: 46ch; margin-bottom: var(--space-6); }
.hero__actions { display: flex; gap: var(--space-4); flex-wrap: wrap; }
.hero__art {
  position: relative;
  background: var(--color-ivory);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-lg);
}
.hero__art::before {
  content: "";
  position: absolute; inset: 14px;
  border: 2px dashed var(--color-brass);
  opacity: 0.35;
  border-radius: calc(var(--radius-lg) - 6px);
  pointer-events: none;
}
.hero__badge {
  position: absolute; top: var(--space-5); left: var(--space-5);
  background: var(--color-bottle); color: var(--color-ivory);
  font-family: var(--font-mono); font-size: var(--text-xs);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  z-index: 2;
}
@media (max-width: 900px) {
  .hero__grid { grid-template-columns: 1fr; }
  .hero__title { font-size: var(--text-4xl); }
}

/* ---------- Category / swatch cards ---------- */
.category-card {
  position: relative;
  background: var(--color-ivory);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-5) var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
  overflow: hidden;
}
.category-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.category-card::before {
  /* fabric-swatch corner fold */
  content: "";
  position: absolute; top: 0; right: 0;
  width: 0; height: 0;
  border-style: solid;
  border-width: 0 26px 26px 0;
  border-color: transparent var(--color-linen-dark) transparent transparent;
  transition: border-color var(--transition);
}
.category-card:hover::before { border-color: transparent var(--color-brass) transparent transparent; }
.category-card__swatch {
  width: 100%; height: 64px;
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-4);
  background-image:
    repeating-linear-gradient(45deg, rgba(23,37,31,0.05) 0 2px, transparent 2px 6px);
}
.category-card__title { font-size: var(--text-lg); margin-bottom: var(--space-1); }
.category-card__count { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-muted); }

/* ---------- Product cards ---------- */
.product-card {
  background: var(--color-ivory);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.product-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
.product-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: var(--color-linen);
  overflow: hidden;
}
.product-card__media svg { width: 100%; height: 100%; transition: transform 400ms ease; }
.product-card:hover .product-card__media svg { transform: scale(1.04); }
.product-card__badges { position: absolute; top: var(--space-3); left: var(--space-3); display: flex; flex-direction: column; gap: var(--space-2); z-index: 2;}
.product-card__body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); flex: 1; }
.product-card__collection { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-brass-dark); text-transform: uppercase; letter-spacing: 0.06em; }
.product-card__title { font-size: var(--text-lg); }
.product-card__title a::after { content: ""; position: absolute; inset: 0; }
.product-card__desc { color: var(--color-muted); font-size: var(--text-sm); flex: 1; }
.product-card__footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-2); }
.product-card__price { font-family: var(--font-mono); font-size: var(--text-lg); font-weight: 500; }
.product-card__price--old { text-decoration: line-through; color: var(--color-muted); font-size: var(--text-sm); margin-right: var(--space-2); }
.product-card__cta { position: relative; z-index: 2; }
.placeholder-badge {
  position: absolute; bottom: var(--space-3); right: var(--space-3);
  background: rgba(23,37,31,0.72); color: var(--color-ivory);
  font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 3px 8px; border-radius: var(--radius-sm); z-index: 2;
}

/* ---------- Badges ---------- */
.badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: var(--text-xs); font-weight: 700;
  padding: 3px 10px; border-radius: var(--radius-pill);
  letter-spacing: 0.02em;
}
.badge--sale { background: var(--color-error); color: #fff; }
.badge--stock { background: rgba(62,122,76,0.14); color: var(--color-success); }
.badge--made-to-order { background: rgba(169,120,46,0.16); color: var(--color-brass-dark); }
.badge--new { background: var(--color-bottle); color: var(--color-ivory); }

/* ---------- Rating ---------- */
.rating { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-sm); color: var(--color-muted); }
.rating__stars { display: inline-flex; gap: 2px; color: var(--color-brass); }
.rating__stars svg { width: 14px; height: 14px; }

/* ---------- Why choose us / value cards ---------- */
.value-card { display: flex; flex-direction: column; gap: var(--space-3); }
.value-card__icon {
  width: 52px; height: 52px; border-radius: var(--radius-md);
  background: var(--color-linen-dark);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-bottle);
}
.value-card__icon svg { width: 26px; height: 26px; }
.value-card__title { font-size: var(--text-lg); font-family: var(--font-display); font-weight: 600; }
.value-card__text { color: var(--color-muted); font-size: var(--text-sm); }

/* ---------- Testimonials ---------- */
.testimonial-card {
  background: var(--color-ivory);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  display: flex; flex-direction: column; gap: var(--space-4);
  height: 100%;
}
.testimonial-card__quote { font-family: var(--font-display); font-size: var(--text-lg); line-height: 1.4; }
.testimonial-card__meta { display: flex; align-items: center; gap: var(--space-3); margin-top: auto; }
.testimonial-card__avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--color-bottle); color: var(--color-ivory);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 600;
}
.testimonial-card__name { font-weight: 700; font-size: var(--text-sm); }
.testimonial-card__loc { font-size: var(--text-xs); color: var(--color-muted); }

/* ---------- Footer ---------- */
.site-footer { background: var(--color-bottle); color: rgba(251,250,246,0.82); padding-top: var(--space-10); }
.footer__grid {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(251,250,246,0.14);
}
.footer__logo { font-family: var(--font-display); font-size: var(--text-xl); font-weight: 700; color: var(--color-ivory); margin-bottom: var(--space-3); }
.footer__desc { font-size: var(--text-sm); max-width: 32ch; }
.footer__heading { color: var(--color-ivory); font-weight: 700; font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: var(--space-4); }
.footer__links li { margin-bottom: var(--space-2); font-size: var(--text-sm); }
.footer__links a:hover { color: var(--color-ivory); text-decoration: underline; }
.footer__social { display: flex; gap: var(--space-3); margin-top: var(--space-4); }
.footer__social a {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(251,250,246,0.3);
  display: flex; align-items: center; justify-content: center;
  transition: background var(--transition), border-color var(--transition);
}
.footer__social a:hover { background: var(--color-brass); border-color: var(--color-brass); }
.footer__social svg { width: 16px; height: 16px; }
.footer__bottom {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-3);
  padding-block: var(--space-5);
  font-size: var(--text-xs);
}
.footer__bottom a:hover { text-decoration: underline; }
.footer__legal { display: flex; gap: var(--space-5); }
@media (max-width: 900px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .footer__grid { grid-template-columns: 1fr; }
  .footer__bottom { flex-direction: column; align-items: flex-start; }
}

/* ---------- Forms ---------- */
.form-field { display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-5); }
.form-label { font-weight: 700; font-size: var(--text-sm); }
.form-hint { font-size: var(--text-xs); color: var(--color-muted); }
.form-input, .form-select, .form-textarea {
  border: 1.5px solid var(--color-border);
  background: var(--color-ivory);
  border-radius: var(--radius-sm);
  padding: 0.8rem 1rem;
  font-size: var(--text-base);
  transition: border-color var(--transition);
  width: 100%;
}
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--color-brass); }
.form-textarea { resize: vertical; min-height: 120px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); }
@media (max-width: 620px) { .form-row { grid-template-columns: 1fr; } }

.check-row { display: flex; align-items: center; gap: var(--space-3); font-size: var(--text-sm); margin-bottom: var(--space-2); cursor: pointer; }
.check-row input { width: 18px; height: 18px; accent-color: var(--color-brass); }

/* ---------- Shop layout ---------- */
.shop-layout { display: grid; grid-template-columns: 260px 1fr; gap: var(--space-8); align-items: start; }
@media (max-width: 900px) { .shop-layout { grid-template-columns: 1fr; } }

.filters { background: var(--color-ivory); border-radius: var(--radius-md); padding: var(--space-5); box-shadow: var(--shadow-sm); position: sticky; top: 100px; }
.filters__group { padding-block: var(--space-4); border-bottom: 1px solid var(--color-border); }
.filters__group:last-child { border-bottom: none; }
.filters__title { font-weight: 700; font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-3); display: flex; justify-content: space-between; }
.filters__clear { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-brass-dark); text-decoration: underline; }
@media (max-width: 900px) {
  .filters { position: static; }
  .filters[data-collapsed="true"] .filters__body { display: none; }
}

.toolbar { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); flex-wrap: wrap; margin-bottom: var(--space-6); }
.toolbar__search { position: relative; flex: 1; min-width: 220px; }
.toolbar__search svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 18px; height: 18px; color: var(--color-muted); }
.toolbar__search input { padding-left: 2.6rem; }
.toolbar__meta { font-size: var(--text-sm); color: var(--color-muted); white-space: nowrap; }
.toolbar__sort select { min-width: 190px; }
.toolbar__filter-toggle { display: none; }
@media (max-width: 900px) { .toolbar__filter-toggle { display: inline-flex; } }

.empty-state { text-align: center; padding: var(--space-12) var(--space-5); color: var(--color-muted); }
.empty-state h3 { color: var(--color-ink); margin-bottom: var(--space-3); font-family: var(--font-display); }

.pagination { display: flex; justify-content: center; gap: var(--space-2); margin-top: var(--space-8); }
.pagination__btn {
  min-width: 40px; height: 40px; border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  border: 1.5px solid var(--color-border);
  font-family: var(--font-mono); font-size: var(--text-sm);
  transition: all var(--transition);
}
.pagination__btn:hover:not(:disabled) { border-color: var(--color-brass); }
.pagination__btn.is-active { background: var(--color-bottle); border-color: var(--color-bottle); color: var(--color-ivory); }
.pagination__btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ---------- Skeleton loading ---------- */
.skeleton { position: relative; overflow: hidden; background: var(--color-linen-dark); border-radius: var(--radius-md); }
.skeleton::after {
  content: ""; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
  animation: shimmer 1.4s infinite;
}
@keyframes shimmer { 100% { transform: translateX(100%); } }

/* ---------- Product details ---------- */
.product-detail { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-10); align-items: start; }
@media (max-width: 900px) { .product-detail { grid-template-columns: 1fr; } }

.gallery__main { background: var(--color-ivory); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); aspect-ratio: 4/3; position: relative; }
.gallery__main svg { width: 100%; height: 100%; }
.gallery__thumbs { display: flex; gap: var(--space-3); margin-top: var(--space-4); }
.gallery__thumb {
  width: 76px; height: 76px; border-radius: var(--radius-sm); overflow: hidden;
  background: var(--color-ivory); border: 2px solid transparent; box-shadow: var(--shadow-sm);
  transition: border-color var(--transition);
}
.gallery__thumb.is-active { border-color: var(--color-brass); }
.gallery__thumb svg { width: 100%; height: 100%; }

.product-info__collection { color: var(--color-brass-dark); font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: var(--space-2); }
.product-info__title { font-size: var(--text-4xl); margin-bottom: var(--space-3); }
.product-info__meta { display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-5); flex-wrap: wrap; }
.product-info__price { font-family: var(--font-mono); font-size: var(--text-2xl); }
.product-info__desc { color: var(--color-ink-soft); margin-bottom: var(--space-6); }

.swatches { display: flex; gap: var(--space-3); flex-wrap: wrap; margin-bottom: var(--space-2); }
.swatch {
  display: flex; flex-direction: column; align-items: center; gap: var(--space-2);
  font-size: var(--text-xs); color: var(--color-muted);
}
.swatch__chip {
  width: 42px; height: 42px; border-radius: var(--radius-sm);
  border: 2px solid transparent; box-shadow: var(--shadow-sm);
  background-image: repeating-linear-gradient(115deg, rgba(0,0,0,0.06) 0 3px, transparent 3px 7px);
  transition: transform var(--transition), border-color var(--transition);
  position: relative;
}
.swatch__chip::before {
  /* pinked/frayed swatch-corner notch */
  content: ""; position: absolute; top: -1px; right: -1px;
  width: 0; height: 0; border-style: solid; border-width: 0 8px 8px 0;
  border-color: transparent var(--color-linen) transparent transparent;
}
.swatch input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.swatch input:checked + .swatch__chip { border-color: var(--color-ink); transform: translateY(-2px); }
.swatch input:focus-visible + .swatch__chip { outline: 2.5px solid var(--color-brass); outline-offset: 2px; }

.qty-stepper { display: inline-flex; align-items: center; border: 1.5px solid var(--color-border); border-radius: var(--radius-pill); overflow: hidden; }
.qty-stepper button { width: 40px; height: 40px; font-size: var(--text-lg); }
.qty-stepper button:hover { background: var(--color-linen-dark); }
.qty-stepper input { width: 44px; text-align: center; border: none; background: transparent; -moz-appearance: textfield; }
.qty-stepper input::-webkit-outer-spin-button, .qty-stepper input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

.buy-box { background: var(--color-ivory); border-radius: var(--radius-md); padding: var(--space-6); box-shadow: var(--shadow-sm); margin-top: var(--space-6); }
.buy-box__row { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); margin-bottom: var(--space-5); flex-wrap: wrap; }

/* Tape-measure styled spec table */
.spec-table {
  border-top: 3px dashed var(--color-brass);
  padding-top: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
.spec-table__row { display: flex; justify-content: space-between; padding-block: var(--space-3); border-bottom: 1px solid var(--color-border); gap: var(--space-4); }
.spec-table__row dt { color: var(--color-muted); }
.spec-table__row dd { font-weight: 600; text-align: right; }

.feature-list li { position: relative; padding-left: var(--space-6); margin-bottom: var(--space-3); }
.feature-list li::before {
  content: ""; position: absolute; left: 0; top: 0.45em; width: 12px; height: 12px;
  border-radius: 50%; background: var(--color-brass);
}

.tabs { display: flex; gap: var(--space-6); border-bottom: 1px solid var(--color-border); margin-bottom: var(--space-6); }
.tabs__btn { padding-block: var(--space-3); font-weight: 700; color: var(--color-muted); border-bottom: 2px solid transparent; margin-bottom: -1px; }
.tabs__btn.is-active { color: var(--color-ink); border-color: var(--color-brass); }
.tab-panel[hidden] { display: none; }

/* Sticky mobile CTA bar on product page */
.sticky-cta-bar {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 95;
  background: var(--color-ivory);
  border-top: 1px solid var(--color-border);
  box-shadow: 0 -8px 24px rgba(23,37,31,0.1);
  padding: var(--space-3) var(--space-4);
  display: none;
  align-items: center; justify-content: space-between; gap: var(--space-4);
  transform: translateY(100%);
  transition: transform 260ms ease;
}
.sticky-cta-bar.is-visible { transform: translateY(0); }
@media (max-width: 720px) {
  .sticky-cta-bar { display: flex; }
  body.has-sticky-cta { padding-bottom: 78px; }
}
.sticky-cta-bar__price { font-family: var(--font-mono); font-weight: 600; }

/* ---------- Floating WhatsApp button (global) ---------- */
.whatsapp-float {
  position: fixed; right: var(--space-5); bottom: var(--space-6); z-index: 96;
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--color-whatsapp); color: #fff;
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition);
}
.whatsapp-float:hover { transform: scale(1.08); }
.whatsapp-float svg { width: 30px; height: 30px; }
@media (max-width: 720px) {
  .whatsapp-float { bottom: var(--space-5); }
  body.has-sticky-cta .whatsapp-float { bottom: 92px; }
}

/* ---------- Back to top ---------- */
.back-to-top {
  position: fixed; left: var(--space-5); bottom: var(--space-6); z-index: 96;
  width: 46px; height: 46px; border-radius: 50%;
  background: var(--color-bottle); color: var(--color-ivory);
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-md);
  opacity: 0; visibility: hidden; transform: translateY(8px);
  transition: opacity var(--transition), transform var(--transition), visibility var(--transition);
}
.back-to-top.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
.back-to-top svg { width: 20px; height: 20px; }

/* ---------- Accordion (FAQs) ---------- */
.accordion__item { border-bottom: 1px solid var(--color-border); }
.accordion__trigger {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding-block: var(--space-5); text-align: left; font-size: var(--text-lg); font-family: var(--font-display); font-weight: 600;
  gap: var(--space-4);
}
.accordion__icon { flex-shrink: 0; width: 22px; height: 22px; position: relative; }
.accordion__icon::before, .accordion__icon::after {
  content: ""; position: absolute; top: 50%; left: 50%; background: var(--color-brass);
  transform: translate(-50%,-50%);
}
.accordion__icon::before { width: 14px; height: 2px; }
.accordion__icon::after { width: 2px; height: 14px; transition: transform var(--transition); }
.accordion__trigger[aria-expanded="true"] .accordion__icon::after { transform: translate(-50%,-50%) rotate(90deg) scale(0); }
.accordion__panel { overflow: hidden; max-height: 0; transition: max-height 260ms ease; }
.accordion__panel__inner { padding-bottom: var(--space-5); color: var(--color-muted); max-width: 68ch; }

/* ---------- Reveal-on-scroll ---------- */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity 600ms ease, transform 600ms ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

/* ---------- 404 ---------- */
.error-page { text-align: center; padding-block: var(--space-16); }
.error-page__code { font-family: var(--font-mono); font-size: var(--text-5xl); color: var(--color-brass); }
.error-page__art { max-width: 320px; margin-inline: auto var(--space-6); }

/* ---------- Legal content (privacy / terms) ---------- */
.legal-content { max-width: 74ch; }
.legal-content h2 { font-size: var(--text-2xl); margin-top: var(--space-8); margin-bottom: var(--space-3); }
.legal-content h3 { font-size: var(--text-lg); margin-top: var(--space-6); margin-bottom: var(--space-2); }
.legal-content p, .legal-content li { color: var(--color-ink-soft); margin-bottom: var(--space-4); }
.legal-content li { position: relative; padding-left: var(--space-5); }
.legal-content li::before { content: "—"; position: absolute; left: 0; color: var(--color-brass); }
.legal-content strong { color: var(--color-ink); }
.legal-content .updated { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--color-muted); margin-bottom: var(--space-8); }

/* ---------- Contact page ---------- */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-10); }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
.contact-card { display: flex; gap: var(--space-4); align-items: flex-start; margin-bottom: var(--space-6); }
.contact-card__icon {
  width: 44px; height: 44px; border-radius: var(--radius-md); flex-shrink: 0;
  background: var(--color-linen-dark); color: var(--color-bottle);
  display: flex; align-items: center; justify-content: center;
}
.contact-card__icon svg { width: 22px; height: 22px; }

/* ---------- Misc ---------- */
.divider-space { height: var(--space-8); }
.icon-check { color: var(--color-success); width: 18px; height: 18px; flex-shrink: 0; }
