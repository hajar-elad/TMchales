import {products} from '../data/products.js';
import {cart, getNbrOfItems, cartPTotal} from './cart.js'; 



function listingItemsBilling(){
    let html = '';
    cart.forEach((cartItem) => { 

       products.forEach((product) => {
           if (cartItem.id === product.id){
               html += `<a href =""class ="js-product-image"><img class="product-image" data-product-id=${product.id} src="${product.image} ">
               </a>`
        }})
    })
    document.querySelector('.cart-items')
       .innerHTML = html;
}

listingItemsBilling();
   
 document.querySelectorAll('.js-product-image')
      .forEach((image) => {
         image.addEventListener('click',() => {
            document.querySelector('.main')
       .innerHTML = 'kkk'
         })
        })

function renderPayementSummary(){
  let html = '';
  let totalCart = 0;
  const totalProducts = cartPTotal();
  let shippingFees = totalProducts >= 280 ? 0 : 30;

    totalCart = totalProducts + shippingFees;
        html =  `<div>Montant Total :</div>
                    <div class="total-cart">${totalCart.toFixed(2)} DHS</div>`

        document.querySelector('.payment-summary')
            .innerHTML = html;
}

  renderPayementSummary();

//Display Payment Summary
  

function submitOrder(){

   let html = `<div class = "submitted">
      <img src = "images/shoppingBag.png" class="submitted-image">
      <div>Commande Validee &#10003</div>
      </div>`;
   document.querySelector('.js-submit-button')
     .addEventListener('click',() => {
            document.querySelector('.main')
       .innerHTML = html
         })
}


submitOrder();
