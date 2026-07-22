/**
 * WINSLOW & RYE — homepage rendering
 * Renders featured categories + featured products straight from
 * products-data.js, so the homepage never needs manual updates when
 * products are added, removed or re-priced. Card markup itself lives
 * in main.js (window.WR.productCardHTML) so it's identical everywhere.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedCategories();
    renderFeaturedProducts();
    mountHeroArt();
    window.WR && window.WR.refreshReveal && window.WR.refreshReveal();
  });

  function renderFeaturedCategories() {
    const el = document.querySelector("[data-featured-categories]");
    if (!el) return;
    el.innerHTML = CATEGORIES.map((cat) => {
      const count = PRODUCTS.filter((p) => p.category === cat.id).length;
      return `
        <a class="category-card reveal" href="shop.html?category=${encodeURIComponent(cat.id)}">
          <span class="category-card__swatch" aria-hidden="true"></span>
          <h3 class="category-card__title">${cat.label}</h3>
          <p class="category-card__count">${count} ${count === 1 ? "design" : "designs"}</p>
        </a>`;
    }).join("");
  }

  function renderFeaturedProducts() {
    const el = document.querySelector("[data-featured-products]");
    if (!el) return;
    const featured = PRODUCTS.slice(0, 8);
    el.innerHTML = featured.map((p) => window.WR.productCardHTML(p)).join("");
    el.querySelectorAll("[data-art-for]").forEach((mount) => {
      mountProductArt(mount, getProductById(mount.getAttribute("data-art-for")));
    });
  }

  function mountHeroArt() {
    const mount = document.querySelector("[data-hero-art]");
    if (!mount) return;
    const hero = getProductById("amalfi-corner-sofa") || PRODUCTS[0];
    mountProductArt(mount, hero, { label: "Hero" });
  }
})();
