const STORAGE_KEYS = {
  cart: "nexstep-cart",
  wishlist: "nexstep-wishlist",
  cookies: "nexstep-cookies",
  forms: "nexstep-forms",
  orders: "nexstep-orders"
};

const PRODUCTS = [
  {
    id: "apex-runner-elite",
    name: "Apex Runner Elite",
    category: "sports",
    audience: "men",
    type: "running",
    price: 168,
    tag: "Best Seller",
    rating: 4.9,
    featured: true,
    colors: "Matte black / cobalt",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Energy-return running sneaker with a sculpted heel, mesh upper, and road-ready cushioning.",
    badge: "Responsive foam"
  },
  {
    id: "nova-race-knit",
    name: "Nova Race Knit",
    category: "sports",
    audience: "women",
    type: "race",
    price: 182,
    tag: "Race Day",
    rating: 4.9,
    featured: true,
    colors: "Ice white / silver",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight knit performance runner designed for tempo sessions, race pacing, and fast city miles.",
    badge: "Ultra light"
  },
  {
    id: "metro-court-lx",
    name: "Metro Court LX",
    category: "casual",
    audience: "men",
    type: "court",
    price: 159,
    tag: "Editor Pick",
    rating: 4.8,
    featured: true,
    colors: "White / gum",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    description: "Minimal leather court sneaker with premium lining, low-profile tooling, and refined everyday wear.",
    badge: "Leather upper"
  },
  {
    id: "aura-street-luxe",
    name: "Aura Street Luxe",
    category: "casual",
    audience: "women",
    type: "lifestyle",
    price: 154,
    tag: "City Edit",
    rating: 4.8,
    featured: true,
    colors: "Cream / sand",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    description: "Refined lifestyle sneaker with a plush interior, polished panels, and a clean downtown profile.",
    badge: "Soft leather"
  },
  {
    id: "atlas-trail-grip",
    name: "Atlas Trail Grip",
    category: "sports",
    audience: "men",
    type: "trail",
    price: 176,
    tag: "All Terrain",
    rating: 4.7,
    featured: false,
    colors: "Graphite / moss",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    description: "Trail shoe with a rugged lug outsole, reinforced toe wrap, and secure lockdown for wet surfaces.",
    badge: "Trail outsole"
  },
  {
    id: "halo-trainer-studio",
    name: "Halo Trainer Studio",
    category: "sports",
    audience: "women",
    type: "training",
    price: 162,
    tag: "Studio",
    rating: 4.8,
    featured: false,
    colors: "Black / neon lime",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80",
    description: "Stable cross-training sneaker with lateral support for HIIT sessions, circuits, and strength days.",
    badge: "Gym stability"
  },
  {
    id: "soho-loafer-soft",
    name: "Soho Loafer Soft",
    category: "casual",
    audience: "women",
    type: "loafer",
    price: 146,
    tag: "Smart Casual",
    rating: 4.6,
    featured: false,
    colors: "Espresso leather",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=80",
    description: "Cushioned leather loafer with a sleek almond toe, dress-polished finish, and commuter comfort.",
    badge: "Workday ready"
  },
  {
    id: "brooklyn-suede-low",
    name: "Brooklyn Suede Low",
    category: "casual",
    audience: "men",
    type: "suede",
    price: 171,
    tag: "Weekend",
    rating: 4.7,
    featured: false,
    colors: "Stone / off white",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    description: "Soft suede low-top built for refined off-duty wear, with a supple collar and premium stitched finish.",
    badge: "Suede finish"
  },
  {
    id: "avalon-court-knit",
    name: "Avalon Court Knit",
    category: "casual",
    audience: "women",
    type: "court",
    price: 158,
    tag: "New Arrival",
    rating: 4.8,
    featured: true,
    colors: "Pearl / platinum",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    description: "Court-inspired knit sneaker with a cushioned platform feel and a premium polished finish.",
    badge: "Knit texture"
  },
  {
    id: "pacific-sprint",
    name: "Pacific Sprint",
    category: "sports",
    audience: "men",
    type: "running",
    price: 164,
    tag: "Daily Run",
    rating: 4.7,
    featured: false,
    colors: "Ink / electric blue",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    description: "Balanced running shoe with padded ankle support and smooth transitions for steady daily mileage.",
    badge: "Daily mileage"
  },
  {
    id: "harbor-slip-knit",
    name: "Harbor Slip Knit",
    category: "casual",
    audience: "women",
    type: "slip-on",
    price: 149,
    tag: "Everyday",
    rating: 4.7,
    featured: false,
    colors: "Cloud / graphite",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    description: "Breathable knit slip-on with memory foam comfort for travel days, errands, and casual wear.",
    badge: "Easy entry"
  },
  {
    id: "ridge-commuter-boot",
    name: "Ridge Commuter Boot",
    category: "casual",
    audience: "men",
    type: "boot",
    price: 194,
    tag: "Premium Leather",
    rating: 4.8,
    featured: false,
    colors: "Dark oak / black sole",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
    description: "Weather-finished leather boot with a structured upper, shock-absorbing sole, and elevated profile.",
    badge: "Cold weather"
  },
  {
    id: "luna-court-shine",
    name: "Luna Court Shine",
    category: "casual",
    audience: "women",
    type: "court",
    price: 166,
    tag: "Polished Pick",
    rating: 4.8,
    featured: false,
    colors: "Ivory / rose gold",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
    description: "Polished court sneaker with soft cushioning, metallic trim, and a clean premium streetwear profile.",
    badge: "Metallic detail"
  },
  {
    id: "vantage-recovery-runner",
    name: "Vantage Recovery Runner",
    category: "sports",
    audience: "women",
    type: "running",
    price: 172,
    tag: "Recovery",
    rating: 4.8,
    featured: false,
    colors: "Stone / glacier",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    description: "High-cushion running pair built for easy miles, recovery days, and soft underfoot comfort.",
    badge: "Soft rebound"
  },
  {
    id: "district-canvas-low",
    name: "District Canvas Low",
    category: "casual",
    audience: "men",
    type: "canvas",
    price: 138,
    tag: "Weekend Light",
    rating: 4.5,
    featured: false,
    colors: "Navy / white foxing",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    description: "Easy canvas low-top styled for weekends, travel, and warm-weather everyday use.",
    badge: "Lightweight"
  },
  {
    id: "zenith-pace-pro",
    name: "Zenith Pace Pro",
    category: "sports",
    audience: "men",
    type: "performance",
    price: 188,
    tag: "Fast Lane",
    rating: 4.9,
    featured: true,
    colors: "Volt / black",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80",
    description: "High-response performance runner with aggressive rocker geometry for speed-focused sessions.",
    badge: "Race tuned"
  }
];

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function getCart() {
  return readStorage(STORAGE_KEYS.cart, []);
}

function setCart(cart) {
  writeStorage(STORAGE_KEYS.cart, cart);
  updateHeaderCounts();
}

function getWishlist() {
  return readStorage(STORAGE_KEYS.wishlist, []);
}

function setWishlist(wishlist) {
  writeStorage(STORAGE_KEYS.wishlist, wishlist);
  updateHeaderCounts();
}

function getOrders() {
  return readStorage(STORAGE_KEYS.orders, []);
}

function getStoredForms() {
  return readStorage(STORAGE_KEYS.forms, []);
}

function saveFormSubmission(payload) {
  const forms = getStoredForms();
  forms.unshift({
    ...payload,
    createdAt: new Date().toLocaleString("en-US"),
    page: window.location.pathname.split("/").pop() || "index.html"
  });
  writeStorage(STORAGE_KEYS.forms, forms);
}

function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function cartItemsDetailed() {
  return getCart()
    .map((item) => {
      const product = productById(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function cartSubtotal() {
  return cartItemsDetailed().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function taxAmount(subtotal) {
  return subtotal * 0.0825;
}

function shippingAmount(subtotal) {
  return subtotal >= 175 || subtotal === 0 ? 0 : 14;
}

function orderCountLabel() {
  const count = getOrders().length;
  return `${count} order${count === 1 ? "" : "s"}`;
}

function updateHeaderCounts() {
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = cartCount();
  });
  document.querySelectorAll("[data-wishlist-count]").forEach((node) => {
    node.textContent = getWishlist().length;
  });
}

function updateCatalogQuery(nextParams) {
  const url = new URL(window.location.href);
  Object.entries(nextParams).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  });
  window.history.replaceState({}, "", url);
}

function catalogState() {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get("category") || "all",
    q: params.get("q") || "",
    sort: params.get("sort") || "featured"
  };
}

function updateResultsCopy(count, filterLabel, searchTerm) {
  const copy = document.querySelector("[data-results-copy]");
  if (!copy) return;

  let message = `${count} product${count === 1 ? "" : "s"} ready to shop`;
  if (filterLabel && filterLabel !== "all") message += ` in ${filterLabel}`;
  if (searchTerm) message += ` for "${searchTerm}"`;
  copy.textContent = `${message}.`;
}

function showToast(message) {
  let stack = document.querySelector("[data-toast-stack]");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    stack.setAttribute("data-toast-stack", "");
    document.body.appendChild(stack);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  window.setTimeout(() => toast.classList.add("is-visible"), 10);
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 240);
  }, 2200);
}

function bindMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const shell = document.querySelector("[data-nav-shell]");
  if (!toggle || !shell) return;

  toggle.addEventListener("click", () => shell.classList.toggle("is-open"));
  shell.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => shell.classList.remove("is-open"));
  });
}

function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.getAttribute("href") === path) link.classList.add("is-active");
  });
}

function bindCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner || localStorage.getItem(STORAGE_KEYS.cookies)) return;

  banner.classList.remove("hidden");
  banner.querySelectorAll("[data-cookie-action]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEYS.cookies, button.dataset.cookieAction);
      banner.classList.add("hidden");
      showToast(button.dataset.cookieAction === "accepted" ? "Cookie preferences saved." : "Optional cookies declined.");
    });
  });
}

function toggleWishlist(id) {
  const wishlist = getWishlist();
  const next = wishlist.includes(id)
    ? wishlist.filter((itemId) => itemId !== id)
    : [...wishlist, id];

  setWishlist(next);
  renderProducts();
  renderWishlist();
  renderAccountStats();
  showToast(next.includes(id) ? "Saved to wishlist." : "Removed from wishlist.");
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });

  setCart(cart);
  renderCart();
  renderCheckoutSummary();
  renderAccountStats();
  showToast("Added to cart.");
}

function renderProductCard(product) {
  const liked = getWishlist().includes(product.id);
  return `<article class="product-card">
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <span class="product-tag">${product.tag}</span>
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span class="pill">${product.audience}</span>
        <span class="rating">${"\u2605".repeat(5)} ${product.rating}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-specs">
        <span>${product.type}</span>
        <span>${product.colors}</span>
        <span>${product.badge}</span>
      </div>
      <div class="product-actions">
        <button class="button primary" type="button" data-add-cart="${product.id}">Add to Cart | ${formatPrice(product.price)}</button>
        <button class="icon-button ${liked ? "is-liked" : ""}" type="button" aria-label="Save to wishlist" data-like-product="${product.id}">${liked ? "\u2665" : "\u2661"}</button>
      </div>
    </div>
  </article>`;
}

function bindProductButtons(scope = document) {
  scope.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.addCart));
  });
  scope.querySelectorAll("[data-like-product]").forEach((button) => {
    button.addEventListener("click", () => toggleWishlist(button.dataset.likeProduct));
  });
}

function filteredProducts() {
  const { category, q, sort } = catalogState();
  const normalizedQuery = q.trim().toLowerCase();
  const filter = category.toLowerCase();

  let items = PRODUCTS.filter((product) => {
    const haystack = [
      product.name,
      product.description,
      product.category,
      product.audience,
      product.type,
      product.tag,
      product.colors,
      product.badge
    ]
      .join(" ")
      .toLowerCase();
    const matchesFilter = filter === "all" || product.category === filter || product.audience === filter;
    const matchesSearch = !normalizedQuery || haystack.includes(normalizedQuery);
    return matchesFilter && matchesSearch;
  });

  if (sort === "price-low") items.sort((a, b) => a.price - b.price);
  if (sort === "price-high") items.sort((a, b) => b.price - a.price);
  if (sort === "rating") items.sort((a, b) => b.rating - a.rating);
  if (sort === "featured") {
    items.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating || a.price - b.price);
  }

  return items;
}

function syncCatalogControls() {
  const { category, q, sort } = catalogState();
  const search = document.querySelector("[data-product-search]");
  const sortSelect = document.querySelector("[data-sort-select]");

  if (search) search.value = q;
  if (sortSelect) sortSelect.value = sort;

  document.querySelectorAll("[data-filter-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filterButton === category);
  });
}

function renderProducts() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  syncCatalogControls();

  let items = filteredProducts();
  if (grid.dataset.featuredCount) items = items.filter((item) => item.featured).slice(0, Number(grid.dataset.featuredCount));
  if (grid.dataset.limit) items = items.slice(0, Number(grid.dataset.limit));

  const { category, q } = catalogState();
  updateResultsCopy(items.length, category, q);

  grid.innerHTML = items.length
    ? items.map(renderProductCard).join("")
    : `<div class="empty-state"><h3>No products found</h3><p>Try a broader search such as running, court, leather, knit, women, or trail.</p></div>`;
  bindProductButtons(grid);
}

function bindProductFilters() {
  document.querySelectorAll("[data-filter-button]").forEach((button) => {
    button.addEventListener("click", () => {
      updateCatalogQuery({ category: button.dataset.filterButton === "all" ? null : button.dataset.filterButton });
      renderProducts();
    });
  });

  const search = document.querySelector("[data-product-search]");
  if (search) {
    search.addEventListener("input", () => {
      updateCatalogQuery({ q: search.value.trim() || null });
      renderProducts();
    });
  }

  const sortSelect = document.querySelector("[data-sort-select]");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      updateCatalogQuery({ sort: sortSelect.value === "featured" ? null : sortSelect.value });
      renderProducts();
    });
  }

  const reset = document.querySelector("[data-clear-filters]");
  if (reset) {
    reset.addEventListener("click", () => {
      updateCatalogQuery({ category: null, q: null, sort: null });
      renderProducts();
    });
  }
}

function renderWishlist() {
  const root = document.querySelector("[data-wishlist-grid]");
  if (!root) return;

  const items = getWishlist().map(productById).filter(Boolean);
  root.innerHTML = items.length
    ? items.map(renderProductCard).join("")
    : `<div class="empty-state"><h3>Your wishlist is empty</h3><p>Save premium pairs with the heart button and they will appear here.</p></div>`;
  bindProductButtons(root);
}

function changeCartQuantity(id, delta) {
  const next = getCart()
    .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
    .filter((item) => item.quantity > 0);

  setCart(next);
  renderCart();
  renderCheckoutSummary();
  renderAccountStats();
}

function removeFromCart(id) {
  setCart(getCart().filter((item) => item.id !== id));
  renderCart();
  renderCheckoutSummary();
  renderAccountStats();
}

function renderCart() {
  const cartRoot = document.querySelector("[data-cart-items]");
  const summary = document.querySelector("[data-cart-summary]");
  if (!cartRoot && !summary) return;

  const items = cartItemsDetailed();
  const subtotal = cartSubtotal();
  const shipping = shippingAmount(subtotal);
  const tax = taxAmount(subtotal);
  const total = subtotal + shipping + tax;

  if (cartRoot) {
    cartRoot.innerHTML = items.length
      ? items
          .map(
            (item) => `<article class="cart-item">
      <div class="cart-item-grid">
        <div class="cart-thumb"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
        <div>
          <div class="cart-line"><h3>${item.name}</h3><strong>${formatPrice(item.price * item.quantity)}</strong></div>
          <p>${item.description}</p>
          <div class="product-specs">
            <span>${item.type}</span>
            <span>${item.colors}</span>
            <span>${item.badge}</span>
          </div>
          <div class="qty-controls">
            <button class="qty-button" type="button" data-cart-qty="${item.id}" data-delta="-1">-</button>
            <span>Qty ${item.quantity}</span>
            <button class="qty-button" type="button" data-cart-qty="${item.id}" data-delta="1">+</button>
            <button class="button ghost" type="button" data-remove-cart="${item.id}">Remove</button>
          </div>
        </div>
        <div class="muted">${item.tag}</div>
      </div>
    </article>`
          )
          .join("")
      : `<div class="empty-state"><h3>Your cart is empty</h3><p>Add premium shoes from the shop to continue to checkout.</p></div>`;

    cartRoot.querySelectorAll("[data-cart-qty]").forEach((button) => {
      button.addEventListener("click", () => changeCartQuantity(button.dataset.cartQty, Number(button.dataset.delta)));
    });
    cartRoot.querySelectorAll("[data-remove-cart]").forEach((button) => {
      button.addEventListener("click", () => removeFromCart(button.dataset.removeCart));
    });
  }

  if (summary) {
    summary.innerHTML = `<div class="summary-row"><span>Items</span><strong>${cartCount()}</strong></div>
      <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : formatPrice(shipping)}</strong></div>
      <div class="summary-row"><span>Estimated tax</span><strong>${formatPrice(tax)}</strong></div>
      <hr>
      <div class="summary-row"><span>Total</span><strong>${formatPrice(total)}</strong></div>
      <div class="button-row"><a class="button primary full" href="checkout.html">Proceed to Checkout</a></div>`;
  }
}

function renderCheckoutSummary() {
  const root = document.querySelector("[data-checkout-summary]");
  if (!root) return;

  const items = cartItemsDetailed();
  const subtotal = cartSubtotal();
  const shipping = shippingAmount(subtotal);
  const tax = taxAmount(subtotal);
  const total = subtotal + shipping + tax;

  root.innerHTML = items.length
    ? `${items
        .map(
          (item) =>
            `<div class="summary-row"><span>${item.name} x${item.quantity}</span><strong>${formatPrice(item.price * item.quantity)}</strong></div>`
        )
        .join("")}
    <hr>
    <div class="summary-row"><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? "Free" : formatPrice(shipping)}</strong></div>
    <div class="summary-row"><span>Tax</span><strong>${formatPrice(tax)}</strong></div>
    <div class="summary-row"><span>Total</span><strong>${formatPrice(total)}</strong></div>`
    : `<div class="empty-state"><h3>No items ready for checkout</h3><p>Your bag is currently empty.</p></div>`;
}

function validateCheckout(data, paymentMethod) {
  if (paymentMethod === "Credit / Debit Card") {
    if (!data.card_number || !data.card_name || !data.card_expiry || !data.card_cvv) {
      return "Complete the required card details before placing your order.";
    }
  }

  if (paymentMethod === "PayPal" && !data.paypal_email) {
    return "Enter the PayPal email for wallet checkout.";
  }

  return "";
}

function bindCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  const syncPaymentPanels = () => {
    const selected = form.querySelector('input[name="payment_method"]:checked')?.value;
    document.querySelectorAll("[data-payment-detail]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.paymentDetail === selected);
    });
  };

  form.querySelectorAll('input[name="payment_method"]').forEach((input) => {
    input.addEventListener("change", syncPaymentPanels);
  });
  syncPaymentPanels();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const items = cartItemsDetailed();
    const message = form.querySelector("[data-form-message]");

    if (!items.length) {
      if (message) message.textContent = "Add products to your cart before placing an order.";
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const validationMessage = validateCheckout(data, data.payment_method);
    if (validationMessage) {
      if (message) message.textContent = validationMessage;
      return;
    }

    const orders = getOrders();
    const subtotal = cartSubtotal();
    const total = subtotal + shippingAmount(subtotal) + taxAmount(subtotal);
    const order = {
      id: `NX-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toLocaleString("en-US"),
      customer: `${data.first_name} ${data.last_name}`,
      email: data.email,
      paymentMethod: data.payment_method,
      address: `${data.address}, ${data.city}, ${data.state} ${data.zip}`,
      items,
      total,
      status: "Confirmed"
    };

    orders.unshift(order);
    writeStorage(STORAGE_KEYS.orders, orders);
    setCart([]);
    renderCheckoutSummary();
    renderCart();
    renderOrders();
    renderAccountStats();
    form.reset();
    syncPaymentPanels();

    if (message) {
      message.textContent = `Order ${order.id} confirmed for ${order.customer}. Receipt total: ${formatPrice(order.total)}.`;
    }

    showToast(`Order ${order.id} placed.`);
  });
}

function renderOrders() {
  const root = document.querySelector("[data-orders-list]");
  if (!root) return;

  const orders = getOrders();
  root.innerHTML = orders.length
    ? orders
        .map(
          (order) => `<article class="order-card">
    <div class="order-line">
      <div><strong>${order.id}</strong><p>${order.createdAt}</p></div>
      <div><strong>${formatPrice(order.total)}</strong><p>${order.status}</p></div>
    </div>
    <p>${order.items.map((item) => `${item.name} x${item.quantity}`).join(", ")}</p>
    <p>Payment: ${order.paymentMethod}</p>
    <p>Ship to: ${order.address}</p>
  </article>`
        )
        .join("")
    : `<div class="empty-state"><h3>No orders yet</h3><p>Your confirmed checkout orders will appear here.</p></div>`;
}

function renderSupportHistory() {
  const root = document.querySelector("[data-support-history]");
  if (!root) return;

  const forms = getStoredForms();
  root.innerHTML = forms.length
    ? forms
        .slice(0, 4)
        .map(
          (entry) => `<article class="order-card">
    <div class="order-line">
      <div><strong>${entry.topic || entry.feedback_type || "Support Request"}</strong><p>${entry.createdAt}</p></div>
      <div><strong>${entry.page}</strong><p>${entry.email || "No email"}</p></div>
    </div>
    <p>${entry.message || "No message provided."}</p>
  </article>`
        )
        .join("")
    : `<div class="empty-state"><h3>No support history yet</h3><p>Contact and feedback submissions will appear here on this device.</p></div>`;
}

function renderAccountStats() {
  const root = document.querySelector("[data-account-stats]");
  if (!root) return;

  root.innerHTML = `
    <article class="metric-card">
      <span>Saved Favorites</span>
      <strong>${getWishlist().length}</strong>
      <p>Wishlist pairs stored on this device.</p>
    </article>
    <article class="metric-card">
      <span>Cart Quantity</span>
      <strong>${cartCount()}</strong>
      <p>Total units currently in the bag.</p>
    </article>
    <article class="metric-card">
      <span>Orders Placed</span>
      <strong>${getOrders().length}</strong>
      <p>${orderCountLabel()} available in local history.</p>
    </article>
  `;
}

function bindForms() {
  document.querySelectorAll("[data-store-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.querySelector("[data-form-message]");
      saveFormSubmission(Object.fromEntries(new FormData(form).entries()));
      form.reset();
      renderSupportHistory();
      if (message) {
        message.textContent = "Thanks. Your submission was saved and queued for NexStep support follow-up.";
      }
      showToast("Submission received.");
    });
  });
}

function bindFaqs() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", () => item.classList.toggle("is-open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindMenu();
  bindCookieBanner();
  highlightActiveNav();
  updateHeaderCounts();
  bindProductFilters();
  renderProducts();
  renderWishlist();
  renderCart();
  renderCheckoutSummary();
  bindCheckout();
  renderOrders();
  renderSupportHistory();
  renderAccountStats();
  bindForms();
  bindFaqs();
});
