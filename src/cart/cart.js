
import { getElement,getElements, productsUrl} from "../utils.js";
import getProducts from "../fetchProducts.js";


let cartItems = []

async function addToCart(id){

const products = await getProducts(productsUrl)
let product = products.find(cartItem => cartItem.id === id)

if(cartItems.some(item => item.id === id)){
    updateCount(id)
}else{ 
    cartItems.push({...product , count:1})  
}
updateCart()
}

function updateCart(){
    displpyCart()
    displayTotal()
}

const cartCards  = getElement('.cart-cards-container')
const cart = getElement('.cart-section')
const overlay = getElement('.overlay')



function displpyCart(){
    
   cartCards.innerHTML = ""
    if(cartItems.length > 3){
         cartCards.style.overflowY = "scroll"
    } 
    cartItems.forEach(item => {
        const {id,name,preview,price,brand,count} = item
       
        cartCards.innerHTML += `<article class="cart-card" id=${id}>
        <div class="cart-img-container">
            <img src="${preview}" alt="" class="cart-preview">
        </div>
        <div class="cart-item-details">
            <h4 class="product-name">${name}</h4>
            <span class="brand">${brand}</span>
            <span class="price">RS ${price}/-</span>
            <button class="cart-remove" id=${id}>
            Remove
            <i class="fa-solid fa-xmark cart-remove-btn"></i>
            </button>
            <div class="cart-add-reduce">
            <button id=${id} class="count-btn cart-minus">-</button>
            <span class="items-count" id=${id}>${count}</span>
            <button id=${id} class="count-btn cart-add">+</button>
           
        </div>
    </article>`
    });

    cart.style.transform = "translateX(0%)"
    overlay.style.display = "block"
    
    updateCount()

    const cartCard = Array.from(getElements('.cart-card'))

    cartCard.forEach(card => {
        card.addEventListener('click',removeItem)
    })
    
}


function updateCount(id){
    const addBtn =Array.from(getElements('.cart-add')) 
    const minusBtn =Array.from(getElements('.cart-minus')) 
    
    if(id){
        cartItems.map(item =>{
            if(item.id === id){
                item.count ++
            }
            
        })
    }
    
    function countUpdate(e,itemCount){
        cartItems.map(item => {
            if(item.id === e.target.id){
                if(e.target.classList.contains("cart-add")){
                    item.count ++
                    itemCount.innerHTML = item.count
                }else if(e.target.classList.contains("cart-minus") && item.count > 1){
                    item.count --
                    itemCount.innerHTML = item.count
                }
            }

        })
    }
    let count;
        addBtn.map(btn => {
            btn.addEventListener('click',(e) => {
                count = btn.previousElementSibling
                countUpdate(e,count)
                displayTotal()
            })
        })

        minusBtn.map(btn => {
            btn.addEventListener('click',(e) => {
                count = btn.nextElementSibling
                countUpdate(e,count)
                displayTotal()
            })
        })
   
}

const totalAmount = getElement('.amount-conainer .price span')
const totalItems = getElement('.cart-count')


function displayTotal(){

    let totalPrice = 0;
    let totalProducts = 0;
    cartItems.forEach(item => {

        totalPrice += item.price * item.count
        totalProducts += item.count

        totalAmount.innerHTML = totalPrice
        totalItems.innerHTML = totalProducts
    })
    
}

function removeItem(e){
    if(e.target.classList.contains('cart-remove')){
        cartItems = cartItems.filter((item) => item.id !== e.target.id)

       updateCart()
        
        if(cartItems.length === 0){
            totalAmount.innerHTML = "000"
            totalItems.innerHTML = 0
        
        }
    }
    
}



export {addToCart, displpyCart}