let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let totalPrice = 0.00;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        
        const details = document.createElement('div');
        details.className = 'cart-item-details';
        
        const name = document.createElement('p');
        name.textContent = item.name;
        
        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;

        details.appendChild(name);
        details.appendChild(price);

        const actions = document.createElement('div');
        actions.className = 'cart-item-actions';
        
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener('change', (e) => updateQuantity(item.name, e.target.value));
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);

        actions.appendChild(quantityInput);
        actions.appendChild(removeButton);
        
        li.appendChild(details);
        li.appendChild(actions);
        
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function updateQuantity(productName, quantity) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity = parseInt(quantity);
        updateCart();
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

