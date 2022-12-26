import "../toggleNav.js"
import "../cart/toggleCart.js"

import getProducts from "../fetchProducts.js";
import { getElement, productsUrl } from "../utils.js";
import { addToCart } from "../cart/cart.js";

const searchId = window.location.search.split('=')[1];
console.log(searchId)

const productSection = getElement('.porduct-section')
 
const renderProduct = async () =>{
    const product = await getProducts(`${productsUrl}${searchId}`).catch(err => console.log(err))

    productSection.innerHTML = `<div class="product-wrapper">
    <div class="left-section">
        <img class="preview-image" src=${product.preview} />
    </div> 
    <div class="right-section">
        <h1 class="product-heading">${product.name}</h1>
        <h3 class="detail-text product-brand">${product.brand}</h3>
        <h3 class="detail-text">Price: Rs <span class="price">${product.price}/-</span></h3>
        <h3 class="detail-text">Description</h3>
        <p class="description">${product.description}</p>
        <h3 class="detail-text preview-heading">Product Preview</h3>

        <div class="image-container">
        </div>
        <button class="cart-btn btn" id=${product.id}><i class="fa-sharp fa-solid fa-cart-shopping cart-icon"></i> Add to cart</button>
 </div>
    </div>`
   

const imgContainer = getElement('.image-container')
const previewImage = getElement('.preview-image')

const previewImages = product.photos;
previewImages.forEach((image, i) => {
  const previewClickImage = document.createElement("img");
  previewClickImage.className = "preview-small-image";
  previewClickImage.src = image;

  imgContainer.appendChild(previewClickImage);

  previewClickImage.addEventListener("click", (e) => {
    const images = document.querySelectorAll(".preview-small-image");
    images.forEach((img) => {
      img.classList.remove("active");
    });

    previewImage.src = e.target.src;
    e.target.classList.add("active");
  });

  if (i === 0) {
    previewClickImage.classList.add("active");
  }
});


const cartBtn = getElement('.cart-btn')

cartBtn.addEventListener('click',(e) => {
    addToCart(e.target.id)
})

}

renderProduct()
