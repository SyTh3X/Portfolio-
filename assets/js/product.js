/**
 * WINSLOW & RYE — product details page
 * Reads ?id=<product-id> from the URL and renders everything from the
 * matching object in products-data.js. No product is hardcoded here —
 * this exact file runs for all of the 12 demo sofas today and for
 * product #1000 the day this catalog grows into one.
 */
(function () {
  "use strict";

  const CARE_INSTRUCTIONS = {
    Fabric: "Vacuum with an upholstery attachment weekly. Blot spills immediately with a clean, dry cloth rather than rubbing, and rotate seat cushions regularly so they wear evenly.",
    Leather: "Dust with a soft, dry cloth and wipe spills immediately. Keep out of direct sunlight and away from radiators, which dry out the hide over time, and condition twice a year with a leather-specific product.",
    Velvet: "Brush gently with a soft velvet brush in the direction of the pile to lift any crushing. Blot spills rather than rubbing, and keep out of direct sunlight to preserve the colour.",
    Linen: "Spot clean with a mild detergent, or machine wash covers where removable. Linen softens and creases slightly with use — that's the material settling in, not a fault.",
    "Wool Tweed": "Vacuum regularly and brush with a soft clothes brush to lift the nap. Wool is naturally stain resistant, but blot any spill promptly with a dry cloth.",
  };

  const REVIEW_POOL = [
    { name: "Sarah M.", text: "Delivery was smooth and the two-person team took it straight through to the living room. Really pleased with the finish." },
    { name: "James T.", text: "Comfortable without being too soft — exactly what we wanted for a family sofa. Arrived a little later than the estimate but worth the wait." },
    { name: "Priya K.", text: "Looks even better in person than in photos. Our WhatsApp enquiry was answered the same day, which made ordering straightforward." },
    { name: "Oliver H.", text: "Solid build quality and no wobble at all. The colour matches what was described exactly." },
    { name: "Emma R.", text: "Second sofa we've bought from here — quality has been consistent both times." },
    { name: "David C.", text: "A little firmer than expected out of the box but has softened in nicely after a few weeks of use." },
    { name: "Charlotte B.", text: "Great value for the price point. Assembly was just attaching the legs, took five minutes." },
    { name: "Mohammed A.", text: "Customer service over WhatsApp was refreshingly quick, no call centre queue to sit in." },
  ];

  const state = { product: null, colour: null, quantity: 1, activeTab: "description" };

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id");
    state.product = getProductById(requestedId) || PRODUCTS[0];
    state.colour = state.product.colours && state.product.colours[0];

    if (requestedId && !getProductById(requestedId)) {
      console.warn(`Product id "${requestedId}" not found — showing the default demo product instead.`);
    }

    renderBreadcrumb();
    renderGallery();
    renderInfo();
    renderTabs();
    renderReviews();
    renderRelated();
    bindWhatsApp();
    initStickyCta();
    document.title = `${state.product.name} — ${SITE_CONFIG.businessName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", state.product.shortDescription || "");
    window.WR && window.WR.refreshReveal && window.WR.refreshReveal();
  });

  function renderBreadcrumb() {
    const el = document.querySelector("[data-breadcrumb]");
    if (!el) return;
    const cat = CATEGORIES.find((c) => c.id === state.product.category);
    el.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      ${cat ? `<li><a href="shop.html?category=${cat.id}">${cat.label}</a></li>` : ""}
      <li aria-current="page">${state.product.name}</li>
    `;
  }

  function renderGallery() {
    const main = document.querySelector("[data-gallery-main]");
    const thumbs = document.querySelector("[data-gallery-thumbs]");
    if (!main || !thumbs) return;
    const views = ["Front View", "Side View", "In Room Setting"];
    const variantStyle = ["", "transform: scaleX(-1);", "filter: brightness(0.94) saturate(1.08);"];

    function showView(i) {
      main.innerHTML = renderProductArt(state.product, { label: views[i] });
      main.style.cssText = variantStyle[i];
      thumbs.querySelectorAll(".gallery__thumb").forEach((t, ti) => t.classList.toggle("is-active", ti === i));
    }

    thumbs.innerHTML = views
      .map(
        (v, i) =>
          `<button class="gallery__thumb ${i === 0 ? "is-active" : ""}" data-view="${i}" aria-label="Show ${v}" style="${variantStyle[i]}"></button>`
      )
      .join("");
    thumbs.querySelectorAll("[data-view]").forEach((btn, i) => {
      btn.innerHTML = renderProductArt(state.product, { label: views[i] });
      btn.addEventListener("click", () => showView(i));
    });
    showView(0);
  }

  function renderInfo() {
    const p = state.product;
    setText("[data-product-collection]", p.collection || p.material);
    setText("[data-product-title]", p.name);
    setHTML("[data-product-stars]", window.WR.starsHTML(p.rating));
    setText("[data-product-rating-count]", `${p.rating.toFixed(1)} (${p.reviewCount} reviews)`);
    setText("[data-product-desc]", p.shortDescription);
    setText("[data-product-full-desc]", p.description);
    setText("[data-product-sku-inline]", p.sku);

    const priceEl = document.querySelector("[data-product-price]");
    if (priceEl) {
      priceEl.innerHTML = `${p.oldPrice ? `<span class="product-card__price--old">${formatGBP(p.oldPrice)}</span>` : ""}${formatGBP(p.price)}`;
    }
    const stockEl = document.querySelector("[data-product-stock]");
    if (stockEl) {
      const cls = p.stock === "Made to Order" ? "badge--made-to-order" : "badge--stock";
      stockEl.innerHTML = `<span class="badge ${cls}">${p.stock}</span>${p.oldPrice ? ` <span class="badge badge--sale">Sale</span>` : ""}`;
    }

    const featuresEl = document.querySelector("[data-product-features]");
    if (featuresEl) featuresEl.innerHTML = (p.features || []).map((f) => `<li>${f}</li>`).join("");

    renderSwatches();
    renderQtyStepper();
    renderSpecTable();
  }

  function renderSwatches() {
    const el = document.querySelector("[data-swatches]");
    if (!el) return;
    const p = state.product;
    if (!p.colours || !p.colours.length) {
      el.closest("[data-swatches-wrap]") && (el.closest("[data-swatches-wrap]").hidden = true);
      return;
    }
    el.innerHTML = p.colours
      .map(
        (c, i) => `
      <label class="swatch">
        <input type="radio" name="colour" value="${c}" ${i === 0 ? "checked" : ""}>
        <span class="swatch__chip" style="background:${swatchColourHex(c)}"></span>
        ${c}
      </label>`
      )
      .join("");
    el.querySelectorAll('input[name="colour"]').forEach((input) => {
      input.addEventListener("change", () => {
        state.colour = input.value;
        bindWhatsApp();
      });
    });
  }

  // Rough visual approximation for swatch chips — cosmetic only, not sold as an accurate dye-lot match.
  function swatchColourHex(name) {
    const map = {
      grey: "#9AA39C", gray: "#9AA39C", charcoal: "#4B5049", oatmeal: "#DDD2B8", sage: "#93A084",
      stone: "#CEC6AC", blue: "#5A76A0", navy: "#2C3B57", green: "#5E7350", olive: "#5C5A3A",
      pink: "#D9AAB0", blush: "#E3C2C4", brown: "#7A5233", tan: "#B98A55", cognac: "#8A5A34",
      black: "#232323", mustard: "#C99A3E", sandstone: "#C7B896", chalk: "#EDE6D8", heather: "#8D8A93",
      moss: "#6E7A4F", emerald: "#3E6B54", dusky: "#C79AA0", slate: "#647082", white: "#F1EEE6",
    };
    const lower = name.toLowerCase();
    const key = Object.keys(map).find((k) => lower.includes(k));
    return key ? map[key] : "#B7AF9C";
  }

  function renderQtyStepper() {
    const input = document.querySelector("[data-qty-input]");
    const minus = document.querySelector("[data-qty-minus]");
    const plus = document.querySelector("[data-qty-plus]");
    if (!input) return;
    input.value = state.quantity;
    const update = (val) => {
      state.quantity = Math.min(9, Math.max(1, val));
      input.value = state.quantity;
      bindWhatsApp();
    };
    minus && minus.addEventListener("click", () => update(state.quantity - 1));
    plus && plus.addEventListener("click", () => update(state.quantity + 1));
    input.addEventListener("change", () => update(parseInt(input.value, 10) || 1));
  }

  function renderSpecTable() {
    const el = document.querySelector("[data-spec-table]");
    if (!el) return;
    const p = state.product;
    const rows = [
      ["Dimensions", formatDimensions(p.dimensions)],
      p.dimensions && p.dimensions.bedWidth ? ["Bed size (open)", `${p.dimensions.bedWidth}cm × ${p.dimensions.bedLength}cm`] : null,
      ["Material", p.material],
      ["Colour options", (p.colours || []).join(", ")],
      ["Collection", p.collection],
      ["SKU", p.sku],
      ["Stock status", p.stock],
      ["Estimated delivery", p.deliveryTime],
    ].filter(Boolean);
    el.innerHTML = rows.map(([k, v]) => `<div class="spec-table__row"><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  }

  function renderTabs() {
    const careEl = document.querySelector("[data-care-instructions]");
    if (careEl) careEl.textContent = CARE_INSTRUCTIONS[state.product.material] || "Follow the care label attached to your sofa for material-specific cleaning guidance.";
    const deliveryEl = document.querySelector("[data-delivery-copy]");
    if (deliveryEl) {
      deliveryEl.textContent = `Delivered by our two-person team, who bring your sofa to the room of choice and remove all packaging on the way out. Estimated delivery for the ${state.product.name}: ${state.product.deliveryTime}.`;
    }

    document.querySelectorAll("[data-tab-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab-btn");
        document.querySelectorAll("[data-tab-btn]").forEach((b) => b.classList.toggle("is-active", b === btn));
        document.querySelectorAll("[data-tab-panel]").forEach((p) => {
          p.hidden = p.getAttribute("data-tab-panel") !== tab;
        });
      });
    });
  }

  function renderReviews() {
    const el = document.querySelector("[data-reviews]");
    if (!el) return;
    const seed = hashString(state.product.id);
    const picks = [REVIEW_POOL[seed % REVIEW_POOL.length], REVIEW_POOL[(seed + 3) % REVIEW_POOL.length]];
    el.innerHTML = picks
      .map(
        (r) => `
      <div class="testimonial-card reveal">
        <div class="rating__stars" aria-hidden="true">${window.WR.starsHTML(state.product.rating)}</div>
        <p class="testimonial-card__quote">"${r.text}"</p>
        <div class="testimonial-card__meta">
          <span class="testimonial-card__avatar">${r.name.charAt(0)}</span>
          <div>
            <div class="testimonial-card__name">${r.name}</div>
            <div class="testimonial-card__loc">Verified enquiry</div>
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  function renderRelated() {
    const el = document.querySelector("[data-related-products]");
    if (!el) return;
    const related = getRelatedProducts(state.product, 4);
    if (!related.length) {
      el.closest("section").hidden = true;
      return;
    }
    el.innerHTML = related.map((p) => window.WR.productCardHTML(p)).join("");
    el.querySelectorAll("[data-art-for]").forEach((mount) => {
      mountProductArt(mount, getProductById(mount.getAttribute("data-art-for")));
    });
  }

  function bindWhatsApp() {
    initWhatsAppButtons(state.product, { colour: state.colour, quantity: state.quantity });
  }

  function initStickyCta() {
    const bar = document.querySelector("[data-sticky-cta]");
    const buyBox = document.querySelector("[data-buy-box]");
    if (!bar || !buyBox) return;
    const priceEl = bar.querySelector("[data-sticky-price]");
    const nameEl = bar.querySelector("[data-sticky-name]");
    if (priceEl) priceEl.textContent = formatGBP(state.product.price);
    if (nameEl) nameEl.textContent = state.product.name;

    if (!("IntersectionObserver" in window)) {
      bar.classList.add("is-visible");
      document.body.classList.add("has-sticky-cta");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          bar.classList.toggle("is-visible", show);
          document.body.classList.toggle("has-sticky-cta", show);
        });
      },
      { threshold: 0 }
    );
    io.observe(buyBox);
  }

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value || "";
  }
  function setHTML(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value || "";
  }
  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h;
  }
})();
