import {cart} from './cart.js';
import {listProducts} from './chales.js';
import {addToCart} from './cart.js';
import {getNbrOfItems} from './cart.js';


// List Products On WebPage 

let html = '';
html = listProducts('chalesAMotifs');

document.querySelector('.grid-container')
.innerHTML = html;

getNbrOfItems();

// Add Items To Cart

  document.querySelectorAll('.add-to-cart-btn')
    .forEach((button) => {
        button.addEventListener('click',() => {
        const    productId = button.dataset.productId;
          addToCart(productId,'chalesAMotifs');})
     
    })  
   
console.log(cart);


