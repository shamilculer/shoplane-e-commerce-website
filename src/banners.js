import { bannerImages,getElement,getElements } from "./utils.js";

const imageContainer = getElement('.slider-image-container')




const addBanner = () => { 
    
    // const banneCloneFirst = document.createElement('img')
    // banneCloneFirst.className = "banner-images"
    // banneCloneFirst.alt = "Banner images"
    // banneCloneFirst.src = bannerImages[bannerImages.length - 1]

    // imageContainer.appendChild(banneCloneFirst)


    bannerImages.forEach(banner => {
        const banners = document.createElement('img')
        banners.className = "banner-images"
        banners.alt = "Banner images"
        banners.src = banner

        imageContainer.appendChild(banners)
    })


    const banneCloneLast = document.createElement('img')
    banneCloneLast.className = "banner-images"
    banneCloneLast.alt = "Banner images"
    banneCloneLast.src = bannerImages[0]
    
    imageContainer.appendChild(banneCloneLast)

    

    let count = 0

    setInterval(() => { 
        
        imageContainer.style.transition = ".3s"
        count++
        if(count === bannerImages.length + 1){
   
            imageContainer.style.transition = "none"  
            count = 0
            
        }
        imageContainer.style.transform = `translateX(-${count}00%)`

    },3000)


}
export {addBanner}