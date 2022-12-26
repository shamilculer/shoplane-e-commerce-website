import { getElement, getElements, productsUrl } from "./utils.js"
import getProducts from "./fetchProducts.js"
import { addToCart } from "./cart/cart.js"



const displayProducts = (products) => {
    const productsSection = getElement('.porducts-section')
    const cardsContainer = document.createElement('div')
    cardsContainer.className = "cards-container"
    let card = ""
    products.map(product => {
        const {id, name , preview, brand, price} = product

        card += `<article class="card" id=${id}>
        <a href="product.html?id=${id}">
        <div class ="preview-container">
        <div class ="card-overlay overlay"></div>
        <img src=${preview} class="product-preview">
        </div>
        </a>
        <div class="cart-btn-container">
        <button class="cart-btn btn" id=${id}><i class="fa-sharp fa-solid fa-cart-shopping cart-icon"></i> Add to cart</button>
        </div>
        <div class="product-details-container">
            <h4 class="product-name">${name}</h4>
            <span class="brand">${brand}</span>
            <h4 class="price">RS  <span >${price}/-</span></h4>
        </div>
        </article>
        ` 
        
    })
    cardsContainer.innerHTML = card
    productsSection.appendChild(cardsContainer) 

   
    const cards = Array.from(getElements('.card'))
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
           if(e.target.classList.contains('cart-btn')){
            let id = e.target.id
            addToCart(id)
           }
        })
    })
    
}



export {displayProducts}