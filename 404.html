/**
 * WINSLOW & RYE — shop page
 * Everything here reads PRODUCTS from products-data.js. Add product
 * #13 to that file and it appears in the grid, becomes searchable,
 * and slots into the right filters automatically — nothing here
 * needs to change.
 */
(function () {
  "use strict";

  const PAGE_SIZE = 9;
  const PRICE_BUCKETS = [
    { id: "under-750", label: "Under £750", min: 0, max: 749 },
    { id: "750-1200", label: "£750 – £1,200", min: 750, max: 1200 },
    { id: "1200-1800", label: "£1,200 – £1,800", min: 1201, max: 1800 },
    { id: "over-1800", label: "Over £1,800", min: 1801, max: Infinity },
  ];

  const state = {
    categories: new Set(),
    materials: new Set(),
    colours: new Set(),
    price: new Set(),
    search: "",
    sort: "featured",
    page: 1,
  };

  let els = {};

  document.addEventListener("DOMContentLoaded", () => {
    els = {
      filterBody: document.querySelector("[data-filter-body]"),
      grid: document.querySelector("[data-shop-grid]"),
      resultCount: document.querySelector("[data-result-count]"),
      pagination: document.querySelector("[data-pagination]"),
      search: document.querySelector("[data-shop-search]"),
      sort: document.querySelector("[data-shop-sort]"),
      clearBtn: document.querySelector("[data-clear-filters]"),
      filterToggle: document.querySelector("[data-filter-toggle]"),
      filters: document.querySelector("[data-filters]"),
      activeCategoryHeading: document.querySelector("[data-active-category-heading]"),
    };

    readStateFromUrl();
    renderFilterPanel();
    bindGlobalControls();
    renderAll();
  });

  function readStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("category")) state.categories.add(params.get("category"));
    if (params.get("material")) state.materials.add(params.get("material"));
    if (params.get("search")) state.search = params.get("search");
    if (params.get("sort")) state.sort = params.get("sort");
  }

  function writeStateToUrl() {
    try {
      const params = new URLSearchParams();
      if (state.categories.size === 1) params.set("category", [...state.categories][0]);
      if (state.materials.size === 1) params.set("material", [...state.materials][0]);
      if (state.search) params.set("search", state.search);
      if (state.sort !== "featured") params.set("sort", state.sort);
      const qs = params.toString();
      history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    } catch (e) {
      // Some browsers restrict history.replaceState under file:// or other
      // edge-case origins. The filter/search/sort state itself lives in
      // memory regardless, so this is safe to ignore — we just lose the
      // shareable URL in that one scenario.
      console.warn("Could not update the address bar (filters still work):", e.message);
    }
  }

  function renderFilterPanel() {
    if (!els.filterBody) return;
    const colourFamilies = getAllColourFamilies();
    els.filterBody.innerHTML = `
      <div class="filters__group">
        <h3 class="filters__title">Category</h3>
        ${CATEGORIES.map((c) => checkboxRow("categories", c.id, c.label)).join("")}
      </div>
      <div class="filters__group">
        <h3 class="filters__title">Material</h3>
        ${MATERIALS.map((m) => checkboxRow("materials", m, m)).join("")}
      </div>
      <div class="filters__group">
        <h3 class="filters__title">Colour</h3>
        ${colourFamilies.map((c) => checkboxRow("colours", c, c)).join("")}
      </div>
      <div class="filters__group">
        <h3 class="filters__title">Price</h3>
        ${PRICE_BUCKETS.map((b) => checkboxRow("price", b.id, b.label)).join("")}
      </div>
    `;
    syncCheckboxesToState();
    els.filterBody.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      cb.addEventListener("change", () => {
        const group = cb.getAttribute("data-group");
        const val = cb.value;
        cb.checked ? state[group].add(val) : state[group].delete(val);
        state.page = 1;
        writeStateToUrl();
        renderAll();
      });
    });
  }

  function checkboxRow(group, value, label) {
    const id = `filter-${group}-${value}`.replace(/[^a-zA-Z0-9-]/g, "");
    return `
      <label class="check-row" for="${id}">
        <input type="checkbox" id="${id}" data-group="${group}" value="${value}">
        ${label}
      </label>`;
  }

  function syncCheckboxesToState() {
    els.filterBody.querySelectorAll("input[type=checkbox]").forEach((cb) => {
      const group = cb.getAttribute("data-group");
      cb.checked = state[group].has(cb.value);
    });
  }

  function bindGlobalControls() {
    if (els.search) {
      els.search.value = state.search;
      let debounce;
      els.search.addEventListener("input", () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          state.search = els.search.value.trim();
          state.page = 1;
          writeStateToUrl();
          renderAll();
        }, 180);
      });
    }
    if (els.sort) {
      els.sort.value = state.sort;
      els.sort.addEventListener("change", () => {
        state.sort = els.sort.value;
        writeStateToUrl();
        renderAll();
      });
    }
    if (els.clearBtn) {
      els.clearBtn.addEventListener("click", () => {
        state.categories.clear();
        state.materials.clear();
        state.colours.clear();
        state.price.clear();
        state.search = "";
        state.sort = "featured";
        state.page = 1;
        if (els.search) els.search.value = "";
        if (els.sort) els.sort.value = "featured";
        syncCheckboxesToState();
        writeStateToUrl();
        renderAll();
      });
    }
    if (els.filterToggle && els.filters) {
      els.filterToggle.addEventListener("click", () => {
        const collapsed = els.filters.getAttribute("data-collapsed") === "true";
        els.filters.setAttribute("data-collapsed", collapsed ? "false" : "true");
        els.filterToggle.setAttribute("aria-expanded", collapsed ? "true" : "false");
      });
    }
    window.addEventListener("popstate", () => {
      state.categories.clear();
      state.materials.clear();
      readStateFromUrl();
      syncCheckboxesToState();
      renderAll();
    });
  }

  function getFilteredProducts() {
    return PRODUCTS.filter((p) => {
      if (state.categories.size && !state.categories.has(p.category)) return false;
      if (state.materials.size && !state.materials.has(p.material)) return false;
      if (state.colours.size) {
        const productFamilies = (p.colours || []).map(getColourFamily);
        if (![...state.colours].some((f) => productFamilies.includes(f))) return false;
      }
      if (state.price.size) {
        const buckets = PRICE_BUCKETS.filter((b) => state.price.has(b.id));
        if (!buckets.some((b) => p.price >= b.min && p.price <= b.max)) return false;
      }
      if (state.search) {
        const haystack = `${p.name} ${p.shortDescription} ${p.material} ${p.collection}`.toLowerCase();
        if (!haystack.includes(state.search.toLowerCase())) return false;
      }
      return true;
    });
  }

  function sortProducts(list) {
    const sorted = [...list];
    switch (state.sort) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "rating-desc":
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }

  function renderAll() {
    const filtered = sortProducts(getFilteredProducts());
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    state.page = Math.min(state.page, totalPages);
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    if (els.resultCount) {
      els.resultCount.textContent = filtered.length === 1 ? "1 sofa" : `${filtered.length} sofas`;
    }

    if (els.activeCategoryHeading) {
      const activeCat = state.categories.size === 1 ? CATEGORIES.find((c) => c.id === [...state.categories][0]) : null;
      els.activeCategoryHeading.textContent = activeCat ? activeCat.label : "All Sofas";
    }

    if (!els.grid) return;

    if (!pageItems.length) {
      els.grid.innerHTML = `
        <div class="empty-state">
          <h3>No sofas match those filters</h3>
          <p>Try clearing a filter or searching a different term.</p>
        </div>`;
      if (els.pagination) els.pagination.innerHTML = "";
      return;
    }

    els.grid.innerHTML = pageItems.map((p) => window.WR.productCardHTML(p)).join("");
    els.grid.querySelectorAll("[data-art-for]").forEach((mount) => {
      mountProductArt(mount, getProductById(mount.getAttribute("data-art-for")));
    });

    renderPagination(totalPages);
    window.WR && window.WR.refreshReveal && window.WR.refreshReveal();
  }

  function renderPagination(totalPages) {
    if (!els.pagination) return;
    if (totalPages <= 1) {
      els.pagination.innerHTML = "";
      return;
    }
    let html = `<button class="pagination__btn" data-page="prev" ${state.page === 1 ? "disabled" : ""} aria-label="Previous page">‹</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="pagination__btn ${i === state.page ? "is-active" : ""}" data-page="${i}" aria-current="${i === state.page ? "page" : "false"}">${i}</button>`;
    }
    html += `<button class="pagination__btn" data-page="next" ${state.page === totalPages ? "disabled" : ""} aria-label="Next page">›</button>`;
    els.pagination.innerHTML = html;
    els.pagination.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-page");
        if (val === "prev") state.page = Math.max(1, state.page - 1);
        else if (val === "next") state.page = Math.min(totalPages, state.page + 1);
        else state.page = Number(val);
        renderAll();
        document.querySelector("[data-shop-grid]").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
})();
