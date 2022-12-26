import { getElement } from "./utils.js";

const menuBtn = getElement(".menu-toggle")
const mobileNav = getElement('.mobile-nav')
const closeBtn = getElement('.nav-close')
const overlay = getElement('.overlay')

menuBtn.addEventListener('click', () => {
    mobileNav.style.transform = "translateX(0%)"
    overlay.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    mobileNav.style.transform = "translateX(-100%)"
    overlay.style.display = "none"
})
