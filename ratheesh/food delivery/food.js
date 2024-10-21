let cart = [];
let totalPrice = 0;

// Function to add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPriceDisplay = document.getElementById("totalPrice");
  const cartCountDisplay = document.getElementById("cartCount");

  cartItems.innerHTML = ''; // Clear current cart items
  totalPrice = 0; // Reset total price

  cart.forEach((cartItem) => {
    const li = document.createElement("li");
    li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
    cartItems.appendChild(li);
    totalPrice += cartItem.price;
  });

  totalPriceDisplay.textContent = totalPrice.toFixed(2);
  cartCountDisplay.textContent = cart.length; // Update cart item count
}

// Function to simulate checkout process
function checkout() {
  if (cart.length > 0) {
    alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
    cart = []; // Clear cart
    updateCart(); // Reset cart display
  } else {
    alert("Your cart is empty!");
  }
}
