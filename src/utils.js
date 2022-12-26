const productsUrl = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"
const bannerImages = ["https://shoplane.netlify.app/img/img1.png","https://shoplane.netlify.app/img/img2.png","https://shoplane.netlify.app/img/img3.png","https://shoplane.netlify.app/img/img4.png"]
const getElement = (selector) => {
    const element = document.querySelector(selector)
    return element
}
const getElements = (selector) => {
    const elements = document.querySelectorAll(selector)
    return elements
}

export {productsUrl,bannerImages,getElement,getElements}