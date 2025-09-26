export function cartTotal(){
    let totalProducts= 0;
    let totalCart= 0;
    let shippingFees = 0;
    

   cart.forEach((cartItem) => { 
   
       products.forEach((product) => {
           if (cartItem.id === product.id){
            let price = (product.price) * cartItem.quantity;
            totalProducts += price ; 
           }
       })
   })

 
   if (totalProducts >= 280){
      shippingFees = 0;
   }
   else {
    shippingFees = 30;
   }

   totalCart = (totalProducts + shippingFees).toFixed(2);
   shippingFees = shippingFees.toFixed(2);
   totalProducts = totalProducts.toFixed(2);

   //Update HTML

   

   document.querySelector('.total-products-money')
          .innerHTML = totalProducts + ` DHS`;

    document.querySelector('.shipping-fees')
          .innerHTML = shippingFees + ` DHS`;

    document.querySelector('.total-cart')
          .innerHTML = totalCart + ` DHS`;
}
