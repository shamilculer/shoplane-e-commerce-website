import "./src/toggleNav.js"
import "./src/cart/toggleCart.js"



import { getElement, productsUrl } from "./src/utils.js";
import {addBanner} from "./src/banners.js"
import getProducts from "./src/fetchProducts.js"
import { displayProducts } from "./src/displayProducts.js";

const init = async () => {
    const products = await getProducts(productsUrl)
    displayProducts(products)
    addBanner()
}

init()
