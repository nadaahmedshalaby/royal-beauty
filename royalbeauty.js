let cart = [];
function addToCart(productName, productPrice) {
    
    let productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        
        cart[productIndex].quantity += 1;
    } else {
        
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    
    updateCartCount();
    alert(`${productName} has been added to your cart!`);
}

 
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').innerText = cartCount;
}


function viewCart() {
    let cartContent = 'Your Cart:\n';
    cart.forEach(item => {
        cartContent += {itemname} - {itemquantity} * {itemprice};
    });
    cartContent += Total; {calculateTotal()} EGP;
    alert(cartContent);
}

 
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
 
function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let products = document.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].querySelector('h3').innerText.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}
document.getElementById('searchInput').addEventListener('keyup', searchProducts);