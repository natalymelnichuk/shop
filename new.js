const buyButton = document.getElementById ('buy');
const cart = document.getElementById ('cart-product');
const crossButton = document.getElementById ('cross');

buyButton.addEventListener('click', () => {
    cart.classList.add ('cart-product')
});

crossButton.addEventListener ('click', () => {
    cart.classList.remove ('cart-product')
});