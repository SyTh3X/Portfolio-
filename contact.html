/**
 * WINSLOW & RYE — shared site behaviour
 * Runs on every page. Product-specific rendering lives in home.js /
 * shop.js / product.js instead, so this file never needs to change
 * as the catalog grows.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initSiteConfigFields();
    initMobileNav();
    initHeaderScrollState();
    initBackToTop();
    initFloatingWhatsApp();
    initScrollReveal();
    initAccordions();
    initFooterYear();
    markActiveNavLink();
  });

  /**
   * Binds SITE_CONFIG values onto the page so business details (phone,
   * email, address, socials) live in exactly one place: products-data.js.
   * Usage: <span data-config="email"></span>, <a data-config-href="mailto">
   */
  function initSiteConfigFields() {
    if (typeof SITE_CONFIG === "undefined") return;
    document.querySelectorAll("[data-config]").forEach((el) => {
      const key = el.getAttribute("data-config");
      if (SITE_CONFIG[key] !== undefined) el.textContent = SITE_CONFIG[key];
    });
    document.querySelectorAll("[data-config-href]").forEach((el) => {
      const key = el.getAttribute("data-config-href");
      if (key === "tel" && SITE_CONFIG.phone) el.setAttribute("href", "tel:" + SITE_CONFIG.phone.replace(/\s+/g, ""));
      else if (key === "mailto" && SITE_CONFIG.email) el.setAttribute("href", "mailto:" + SITE_CONFIG.email);
      else if (["instagram", "facebook", "pinterest"].includes(key) && SITE_CONFIG[key]) {
        el.setAttribute("href", SITE_CONFIG[key]);
      }
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const scrim = document.querySelector("[data-nav-scrim]");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      scrim && scrim.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function openNav() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      scrim && scrim.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      isOpen ? closeNav() : openNav();
    });
    scrim && scrim.addEventListener("click", closeNav);
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  function initHeaderScrollState() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initBackToTop() {
    const btn = document.querySelector("[data-back-to-top]");
    if (!btn) return;
    const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initFloatingWhatsApp() {
    const btn = document.querySelector("[data-whatsapp-float]");
    if (!btn || typeof buildWhatsAppLink !== "function") return;
    // Product pages call initWhatsAppButtons() themselves with the specific
    // product, which will overwrite this href with a product-specific one.
    if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") {
      btn.setAttribute("href", buildWhatsAppLink(null));
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener");
    }
  }

  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("is-visible"), (i % 4) * 70);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  /**
   * Generic accordion: any [data-accordion] wraps items with
   * [data-accordion-trigger] (a button) + [data-accordion-panel].
   * Multiple accordions on a page are independent; within one
   * accordion, opening an item closes the others.
   */
  function initAccordions() {
    document.querySelectorAll("[data-accordion]").forEach((accordion) => {
      const triggers = accordion.querySelectorAll("[data-accordion-trigger]");
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const panel = trigger.parentElement.querySelector("[data-accordion-panel]");
          const isOpen = trigger.getAttribute("aria-expanded") === "true";
          triggers.forEach((t) => {
            t.setAttribute("aria-expanded", "false");
            const p = t.parentElement.querySelector("[data-accordion-panel]");
            if (p) p.style.maxHeight = "0px";
          });
          if (!isOpen) {
            trigger.setAttribute("aria-expanded", "true");
            if (panel) panel.style.maxHeight = panel.scrollHeight + 24 + "px";
          }
        });
      });
    });
  }

  function initFooterYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  // Highlights the current page in the nav based on the file name in the URL.
  function markActiveNavLink() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav] a[href]").forEach((link) => {
      const href = link.getAttribute("href").split("?")[0];
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /** Star rating, filled up to Math.round(rating) out of 5. Shared markup
   *  so home.js / shop.js / product.js never redraw this independently. */
  function starsHTML(rating) {
    const full = Math.round(rating || 0);
    let out = "";
    for (let i = 0; i < 5; i++) {
      out += `<svg viewBox="0 0 20 20" fill="${i < full ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z"/></svg>`;
    }
    return out;
  }

  /** One product card, used on the homepage, shop grid, and related-products rail. */
  function productCardHTML(p) {
    const badges = [];
    if (p.oldPrice) badges.push('<span class="badge badge--sale">Sale</span>');
    if (p.stock === "Made to Order") badges.push('<span class="badge badge--made-to-order">Made to Order</span>');
    return `
      <article class="product-card reveal">
        <div class="product-card__media">
          <div class="product-card__badges">${badges.join("")}</div>
          <div data-art-for="${p.id}"></div>
          <span class="placeholder-badge">Illustrative image</span>
        </div>
        <div class="product-card__body">
          <span class="product-card__collection">${p.collection || p.material}</span>
          <h3 class="product-card__title"><a href="product-details.html?id=${p.id}">${p.name}</a></h3>
          <p class="product-card__desc">${p.shortDescription || ""}</p>
          <div class="rating">
            <span class="rating__stars" aria-hidden="true">${starsHTML(p.rating)}</span>
            <span>${(p.rating || 0).toFixed(1)} (${p.reviewCount || 0})</span>
          </div>
          <div class="product-card__footer">
            <span class="product-card__price">${p.oldPrice ? `<span class="product-card__price--old">${formatGBP(p.oldPrice)}</span>` : ""}${formatGBP(p.price)}</span>
            <a class="btn btn--outline btn--sm product-card__cta" href="product-details.html?id=${p.id}">View</a>
          </div>
        </div>
      </article>`;
  }

  // Exposed so shop.js / product.js can re-run reveal + whatsapp init
  // after they finish rendering dynamic content, and reuse shared markup.
  window.WR = window.WR || {};
  window.WR.refreshReveal = initScrollReveal;
  window.WR.refreshWhatsAppFloat = initFloatingWhatsApp;
  window.WR.productCardHTML = productCardHTML;
  window.WR.starsHTML = starsHTML;
})();

/**
 * sendPrompt-style helper isn't needed here (this is a static site, not
 * an in-chat widget) — kept out deliberately.
 */
