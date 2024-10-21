let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    alert(`Total Amount: $${total.toFixed(2)}\nThank you for your purchase!`);
    cart = [];
    total = 0;
    updateCart();
}
