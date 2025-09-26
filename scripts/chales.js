import {products} from '../data/products.js';    
let html = '';


export function listProducts(category){
    
    products.forEach((product) => {
       if(product.category === category){
           html += `
        <div class="product-container">
                <img class="product-image" src="${product.image}">
                <div class="product-infos">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price} DHS</div>
                </div>
                <button class="add-to-cart-btn" data-product-id=${product.id}>Ajouter Au Panier</button>
            </div>`
       }
    })
    return html;
}

/*function numberOfItems(){}*/
