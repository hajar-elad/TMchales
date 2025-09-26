import {listProducts} from './chales.js';
import {cart} from './cart.js';
import {addToCart} from './cart.js';
import {getNbrOfItems} from './cart.js';

// List Products On WebPage

let html = '';
html = listProducts('foulardsAMotifs');

document.querySelector('.grid-container')
.innerHTML = html;

getNbrOfItems();

// Add Items To Cart

 document.querySelectorAll('.add-to-cart-btn')
    .forEach((button) => {
        button.addEventListener('click',() => {
        const    productId = button.dataset.productId;
          addToCart(productId,'foulardsAMotifs');})
     
    })  
   
console.log(cart);

     