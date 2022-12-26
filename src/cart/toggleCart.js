 import { getElement } from "../utils.js";

 const cart = getElement('.cart-section')
 const cartButton = getElement('.cart-icon')
 const cartclose = getElement('.cart-close')
 const overlay = getElement('.overlay')


    cartButton.addEventListener('click', () => {
        cart.style.transform = "translateX(0%)"
        overlay.style.display = "block"
    })

    cartclose.addEventListener('click', () => {
        cart.style.transform = "translateX(100%)"
        overlay.style.display = "none"
    })





