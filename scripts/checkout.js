import {products} from '../data/products.js';
import {cart, removeCartItem, getNbrOfItems, cartPTotal} from './cart.js'; 
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; //calling external libary ESM version

console.log(cart);


/*             Working With Dates From External Library
console.log(dayjs()); //gives todays date
let today = dayjs(); //we save todays date in variable
console.log(today.format('dddd, MMMM D'));// format will display date in readble format (Tuesday, September 16)
console.log(today.add(7,'days')); // return date of today + 7 Days
console.log(today.add(2,'months')); // return date of today + 2 months*/

function listCartItems(){
    let html = '';
    cart.forEach((cartItem) => { 

       products.forEach((product) => {
           if (cartItem.id === product.id){
               html += `<div class="product-container js-product-container-${product.id}">
                    <img class="product-image" src="${product.image}">
                    <div class="Product-infos">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${(product.price).toFixed(2)} DHS</div>
                        <div class="quantity">Quantité: ${cartItem.quantity}</div>
                    </div>
                    <button class="remove-item js-remove-item" data-product-id=${product.id}>retirer</button>
                  </div>`
        }})
    })
    document.querySelector('.products-container')
       .innerHTML = html;
    getNbrOfItems();
}

// Display cart items 
listCartItems();

let totalCart;
export let total = 1;

  function renderPayementSummary(){

  let html = ''
  const totalProducts = cartPTotal();
  console.log(totalProducts)
  let shippingFees = totalProducts >= 280 ? 0 : 30;

    totalCart = totalProducts + shippingFees;
    html = `<div class="payment-summary-title">
                    Recapitulatif Commande:
                </div>

                <div class="total-products">
                    <div>Total Produits :</div>
                    <div class="total-products-money">${totalProducts.toFixed(2)} DHS</div>
                </div>

                <div class="shipping-total">
                    <div>Frais De Livraison :</div>
                    <div class="shipping-fees">${shippingFees.toFixed(2)} DHS</div>
                </div>

                <div class="total-amount">
                    <div>Montant Total :</div>
                    <div class="total-cart">${totalCart.toFixed(2)} DHS</div>
                </div>

                <button class="place-order-button js-place-order-button"> Valider La Commande </button>`
    document.querySelector('.payment-summary')
        .innerHTML = html;
}

//Display Payment Summary
renderPayementSummary();


// Remove Item

document.querySelectorAll('.js-remove-item')
      .forEach((button) => {
         button.addEventListener('click',() => {
            
           const productId = button.dataset.productId;
            removeCartItem(productId);
            
        //Remove Item From Page
          document.querySelector(`.js-product-container-${productId}`).remove();

          renderPayementSummary();
          getNbrOfItems();
          })
})

function redirectToBilling(){
    document.querySelector('.js-place-order-button')
     .addEventListener('click',() => {
            window.location.href = 'billing.html';
         })  
}
        
redirectToBilling();