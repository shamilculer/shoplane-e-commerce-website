import getProducts from "../fetchProducts.js"
import { productsUrl } from "../utils.js"
import { displayProducts } from "../displayProducts.js"

import "../toggleNav.js"
import "../cart/toggleCart.js"

let accessory = []

const products = await getProducts(productsUrl)
products.map(product => {
    if(product.isAccessory){
        accessory.push(product)
    }
})

displayProducts(accessory)



