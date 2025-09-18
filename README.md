# ShopCart — React-Router

A simple, responsive e-commerce UI that fetches products from the Fake Store API, shows them on a grid, supports a quick Cart modal and a full Cart page, quantity controls, per-item totals, and a 10% discount on the order total. Clean layout, Google Fonts, and Font Awesome icons via CDN.

## ✨ Features

Product list from Fake Store API (/products)
Responsive product grid
Product Card + Product Details modal (with rating ★ and count)
Add to cart from Card and Details (adds/increments quantity)
Cart Modal (quick view) with remove and qty +/−
Dedicated Cart Page with order summary
Per-item total and dynamic subtotal/discount/total
10% discount applied to subtotal
Search box, category filter
Navbar with centered Search, Cart badge, Profile menu


## 🧰 Tech Stack
React + Vite
React Router v6
Tailwind CSS via CDN
Google Fonts via CDN
Font Awesome 7 via CDN
Fake Store API

## 🚀 Quick Start

# 1) Create the app
npm create vite@latest shopcart -- --template react
cd shopcart

# 2) Install deps
npm install
npm install react-router-dom

# 3) Start dev server
npm run dev


Open the URL that Vite prints (e.g., http://localhost:5173).

## 📁 Project Structure

shopcart/
  index.html
  package.json
  vite.config.js
  src/
    App.css
    main.jsx
    App.jsx
    components/
      Navbar.jsx
      ProductCard.jsx
      ProductDetails.jsx
      Cart.jsx
    pages/
      Home.jsx
      CartPage.jsx
      
## 🔌 API

Base: https://fakestoreapi.com

Products: GET /products

## 🧭 Routing
/ → Home: Product grid, Product Details modal

/cart → CartPage: Full checkout view with totals

Navigation:
Home link in Navbar category row (desktop and mobile)
Cart icon opens Cart modal; modal’s Checkout button navigates to /cart

## 🧠 State & Data Flow

App.jsx holds global state:
products: fetched once on mount
cart: array of items {...product, quantity}
filters: searchTerm, selectedCategory
totals: subtotal = Σ(price×qty) → discount = 10% → total = subtotal - discount

Child components receive handlers as props:
addToCart(product, qty)
removeFromCart(id)
increaseQty(id) / decreaseQty(id)
Adding the same product again increases its quantity.

## 🧩 Components Overview
Navbar:
Logo, centered Search, Cart with badge, Profile menu
Category row:
Mobile: dropdown with Home + categories
Desktop: inline buttons with Home, All, and category buttons

ProductCard:
Image, title, price, Add button
Clicking card opens Product Details; Add button increments quantity
ProductDetails
Large image, title, ★ rating, count, price, description, category
Add button increments quantity; Remove button appears if already in cart

Cart (Modal):
List of items with image, title, price, qty +/−, per-item total
Subtotal, discount, final total
Checkout navigates to /cart
Tuned for small screens: no horizontal scrolling; compact qty buttons

CartPage:
Full list with same controls as modal
Sticky order summary on large screens; mobile-friendly with wrapping rows

## 🧪 Scripts

npm run dev     # start dev server
npm run build   # production build
npm run preview # preview production build

Since Tailwind is via CDN, you don’t need Tailwind build tooling for this version.

## ✅ Requirement Checklist

 Fetch list of products from Fake Store API
 Display products in a responsive grid
 Show image, title, price, description (description in details modal)
 Cart page with items, name, price, qty, remove
 Add to cart; if already present, can remove from details; adding again increments qty
 Qty +/− on Cart modal and Cart page
 Per-item totals
 Subtotal + 10% discount + final total (dynamic)
 Proper state updates for add/remove/qty
 Routing between Home and Cart
 Cart modal + dedicated Cart page
 Google Font + Font Awesome CDN
 
