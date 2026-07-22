/**
 * WINSLOW & RYE — WhatsApp message + link generation
 * ---------------------------------------------------------------
 * Every "Contact on WhatsApp" button on the site is built from this one
 * function. Give it a product (and, optionally, a colour/quantity the
 * shopper picked) and it returns a ready-to-open wa.me link with the
 * message already URL-encoded.
 *
 * Works on both mobile (opens the WhatsApp app) and desktop (opens
 * WhatsApp Web) because wa.me links are handled by WhatsApp itself —
 * there is no device-detection needed on our side.
 */

/**
 * Build the plain-text enquiry message for a product.
 * @param {Object} product - a product object from PRODUCTS
 * @param {Object} [options]
 * @param {string} [options.colour] - a colour the shopper selected
 * @param {number} [options.quantity] - quantity, if more than 1
 * @param {string} [options.pageUrl] - override for the current page URL
 */
function buildWhatsAppMessage(product, options = {}) {
  if (!product || !product.name) {
    return "Hello, I'd like some more information please.";
  }

  const fields = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.whatsappMessageFields) || {};
  const lines = [];

  lines.push("Hello,");
  lines.push("");
  lines.push("I am interested in the following sofa:");
  lines.push("");
  lines.push(`Product: ${product.name}`);

  if (fields.price && product.price) {
    lines.push(`Price: ${formatGBP(product.price)}`);
  }
  if (options.colour) {
    lines.push(`Colour: ${options.colour}`);
  } else if (fields.colour && product.colours && product.colours.length === 1) {
    lines.push(`Colour: ${product.colours[0]}`);
  }
  if (options.quantity && options.quantity > 1) {
    lines.push(`Quantity: ${options.quantity}`);
  }
  if (fields.dimensions && product.dimensions) {
    lines.push(`Dimensions: ${formatDimensions(product.dimensions)}`);
  }
  if (fields.sku && product.sku) {
    lines.push(`SKU: ${product.sku}`);
  }

  const pageUrl = options.pageUrl || (typeof window !== "undefined" ? window.location.href : "");
  if (fields.productUrl && pageUrl) {
    lines.push("");
    lines.push(`Product page: ${pageUrl}`);
  }

  lines.push("");
  lines.push("Could you please provide more information regarding:");
  lines.push("• Availability");
  lines.push("• Delivery");
  lines.push("• Price");
  lines.push("• Colour options");
  lines.push("");
  lines.push("Thank you.");

  return lines.join("\n");
}

/**
 * Build a generic (non product-specific) enquiry message, used by the
 * floating WhatsApp button on pages that aren't about one product.
 */
function buildGenericWhatsAppMessage() {
  return "Hello, I'd like some more information about your sofas please.";
}

/**
 * Build the full https://wa.me/... link, URL-encoded and ready to use
 * as an <a href>.
 */
function buildWhatsAppLink(product, options = {}) {
  const number = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.whatsappNumber) || "";
  const message = product ? buildWhatsAppMessage(product, options) : buildGenericWhatsAppMessage();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a wa.me link from the Contact page form fields. Used instead of
 * a <form action="..."> POST, since this is a static frontend with no
 * server to receive form submissions — WhatsApp becomes the "submit".
 */
function buildContactFormLink(fields) {
  const number = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.whatsappNumber) || "";
  const lines = ["Hello,", ""];
  if (fields.name) lines.push(`My name is ${fields.name}.`);
  if (fields.topic) lines.push(`Topic: ${fields.topic}`);
  lines.push("");
  lines.push(fields.message || "I'd like some more information please.");
  if (fields.email) {
    lines.push("");
    lines.push(`(Happy to hear back by email too: ${fields.email})`);
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Wire up every element with [data-whatsapp-btn] on the page: sets its
 * href to the right wa.me link. Pass the current product (if any) —
 * leave undefined on pages with no single product in context.
 */
function initWhatsAppButtons(product, options = {}) {
  const link = buildWhatsAppLink(product, options);
  document.querySelectorAll("[data-whatsapp-btn]").forEach((el) => {
    el.setAttribute("href", link);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  return link;
}
