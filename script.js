// Simple cart using localStorage
let cart = JSON.parse(localStorage.getItem('charvis_cart')) || [];

function saveCart() {
  localStorage.setItem('charvis_cart', JSON.stringify(cart));
}

function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  alert(name + ' added to cart!');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

function clearCart() {
  cart = [];
  saveCart();
  displayCart();
}

function displayCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="font-size:14px;color:#7e6656;">Your ritual bag is empty. Add something from the shop ✨</p>';
    document.getElementById('subtotal').textContent = '₹0';
    document.getElementById('total').textContent = '₹0';
    return;
  }

  let html = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price;
    html += `
      <div class="cart-item">
        <div>
          <div class="cart-name">${item.name}</div>
        </div>
        <div>
          <span class="cart-price">₹${item.price}</span>
          <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  document.getElementById('subtotal').textContent = '₹' + subtotal;
  document.getElementById('total').textContent = '₹' + subtotal;
}
