# Winslow & Rye — Sofa Catalogue Website

A 12-page furniture catalogue site with no checkout — every product page has a
"Contact on WhatsApp" button that opens WhatsApp with a message already
written, containing that exact sofa's name, price, colour and a link back to
its page. Built in plain HTML/CSS/JS, so it can be uploaded to almost any web
host with no build step, database, or server required.

## 1. See it right now

Double-click `index.html` to open it straight in your browser — no server
needed. To put it online, upload the whole folder (keeping the structure
below intact) to any web host, or drag the folder into a static host like
Netlify, Vercel, GitHub Pages, or your existing cPanel file manager.

## 2. The one thing to change before going live

Open `assets/js/products-data.js` and find `SITE_CONFIG` near the top:

```js
whatsappNumber: "447000000000",   // <-- your real WhatsApp Business number
whatsappDisplay: "+44 7000 000000",
email: "hello@winslowandrye.co.uk",
phone: "+44 20 7000 0000",
address: "14 Foundry Yard, Winslow, Buckinghamshire, MK18 3AA",
```

`whatsappNumber` must be **digits only**, international format, no spaces or
`+` (a UK mobile like `07911 123456` becomes `447911123456`). Everything
else — the business name, email, phone, address, and social links — is read
from this one object across every page, so you only ever edit it once.

## 3. Adding, editing or removing products

Everything the site displays about a sofa comes from one array,
`PRODUCTS`, in `assets/js/products-data.js`. Copy an existing entry and
change the fields — the home page, shop grid, filters, search, and the
product page all pick it up automatically. Only `name` is required; leave
any other field out and the site simply won't show that row.

Each product needs a unique `id` (used in the URL, e.g.
`product-details.html?id=your-id`) and a `shape` (one of `three-seater`,
`two-seater`, `corner`, `recliner`, `chaise`, `sofa-bed`) which controls
which placeholder illustration it gets.

## 4. Replacing the placeholder images

Every product photo you see right now is generated on the fly by
`assets/js/placeholder-graphics.js` — a simple illustration, not a real
photo — so the catalogue never shows a broken image icon while you're
gathering real photography. Each card is also marked "Illustrative image"
so this is obvious to visitors.

To use real photos: add an `images: ["photos/sofa-1.jpg", "photos/sofa-2.jpg"]`
array to a product, then swap the `mountProductArt(...)` calls in
`assets/js/home.js`, `shop.js` and `product.js` for a normal `<img>` tag
pointing at `product.images[i]` when the array exists, falling back to the
generated illustration otherwise. Ask a developer (or Claude) to wire this
up if you're not comfortable editing JavaScript directly.

## 5. Pages included

Home · Shop (filter/search/sort/pagination) · Categories · Product Details ·
About · Why Choose Us · Delivery Information · FAQs · Contact ·
Privacy Policy · Terms & Conditions · 404

## 6. Before you publish the legal pages

`privacy-policy.html` and `terms-conditions.html` are realistic starting
templates, not legal advice — each has a highlighted note at the top saying
so. Because this business handles real customer data and sells made-to-order
furniture, please have both reviewed by a qualified solicitor before going
live, so they properly reflect UK GDPR and consumer law (Consumer Rights Act
2015 / Consumer Contracts Regulations 2013) for your specific business.

## 7. File structure

```
index.html                 Home
shop.html                   Shop (all filtering/search/sort logic)
categories.html             Category overview
product-details.html        Single product page (?id=<product-id>)
about.html, why-choose-us.html, delivery-information.html,
faqs.html, contact.html, privacy-policy.html,
terms-conditions.html, 404.html

assets/css/style.css        All styling (one file, CSS custom properties)
assets/js/products-data.js  SITE_CONFIG + the PRODUCTS array — edit this most
assets/js/whatsapp.js       Builds the WhatsApp message + link
assets/js/placeholder-graphics.js   Generates the placeholder illustrations
assets/js/main.js           Shared nav/header/footer/accordion behaviour
assets/js/home.js           Homepage-only rendering
assets/js/shop.js           Shop page filtering/search/sort/pagination
assets/js/product.js        Product page rendering + WhatsApp wiring
```

## 8. Browser support

Tested against current Chrome, Firefox, Safari and Edge, and responsive from
small phones up to large desktop screens. No build tools, frameworks, or
`npm install` needed — it's plain HTML, CSS and JavaScript throughout.
