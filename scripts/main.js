import {products} from '../data/products.js'

products.forEach(product => {
    const html = `
    <a href="product.html" class="product-card" data-product-id=${product.id}>
        <div class="product-img-container">
        <img src="assets/${product.image}" class="product-img js-product-img">
        </div>
        <div class="card-info">
        <span class="product-title">
        ${product.title}
        </span>
        <span class="stars-container">
            <img class="product-stars" src="assets/${product.stars}star.png">
            (${product.starsCom})
        </span> 
            <span class="product-price">
            from ${product.price}
            </span>
            <span class="sale-product-price">
            To ${product.price} DA
            </span>
        </div>
    </a>
    `
    document.querySelector('.product-grid').innerHTML += html
    
    
})
document.querySelectorAll(`.js-product-img`).forEach(img=>{
    img.addEventListener('mouseover',() => {
        img.src='assets/logo.jpg'
        img.classList.add('product-img-animation')
        setTimeout(()=>{
            img.classList.add('product-img-after-animation')
        },200)
    })
    products.forEach(product =>{
        img.addEventListener('mouseleave',() => {
            img.src=`assets/${product.image}`
            img.classList.remove('product-img-animation')
            img.classList.remove('product-img-after-animation')
            setTimeout(()=>{
                img.classList.remove('product-img-after-animation')
            },200)
        })
        
    })
})
document.querySelectorAll('.product-card').forEach((card)=>{
    card.addEventListener('click', ()=>{
        products.forEach((product)=>{
            if(product.id === card.dataset.productId){
                localStorage.setItem('selectedProduct' ,JSON.stringify(product))
            }
        })
    })
})