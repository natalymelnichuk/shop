const buyButton = document.getElementById('buy');
const listProduct = document.getElementById('list-product');
const crossButton = document.getElementById('cross');

buyButton.addEventListener('click', () => {
    listProduct.classList.add('list-product-active');
});

crossButton.addEventListener('click', () => {
    listProduct.classList.remove('list-product-active');
});

//const checkout = document.getElementById 
