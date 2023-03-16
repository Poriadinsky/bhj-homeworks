const addButtons = document.querySelectorAll('.product__add');
const decButtons = document.querySelectorAll('.product__quantity-control_dec');
const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const cartProducts = document.querySelector('.cart__products');

function removeProduct(event) {
   const product = event.target.closest('.cart__product');
   product.remove();
}

function addItem(event) {
   const product = event.target.closest('.product');
   const value = parseInt(product.querySelector('.product__quantity-value').textContent);
   const image = product.querySelector('.product__image').src;
   const id = product.dataset.id;

   const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
   if (existingProduct) {
      const count = existingProduct.querySelector('.cart__product-count');
      count.textContent = parseInt(count.textContent) + value;
   } else {
      const newItem = `
      <div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${value}</div>
        <div class="product__delete">Удалить</div>
      </div>
    `;
      cartProducts.insertAdjacentHTML('afterBegin', newItem);
      const deleteBtn = cartProducts.querySelector('.product__delete');
      deleteBtn.addEventListener('click', removeProduct);
   }
}

for (const addButton of addButtons) {
   addButton.addEventListener('click', addItem);
}

function updateQuantity(event, operation) {
   const counter = event.target.parentNode.querySelector('.product__quantity-value');
   const value = parseInt(counter.textContent);
   if (operation === 'inc') {
      counter.textContent = value + 1;
   } else if (operation === 'dec' && value > 1) {
      counter.textContent = value - 1;
   }
}

for (const decButton of decButtons) {
   decButton.addEventListener('click', (event) => updateQuantity(event, 'dec'));
}

for (const incButton of incButtons) {
   incButton.addEventListener('click', (event) => updateQuantity(event, 'inc'));
}
