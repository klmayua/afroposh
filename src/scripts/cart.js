const CART_KEY = 'afroposh_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  showToast(`✓ ${product.name} added to cart`);
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + (i.price * i.qty), 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

// Call on every page load to sync UI
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('[data-cart-count]')
    .forEach(el => el.textContent = count);
}
