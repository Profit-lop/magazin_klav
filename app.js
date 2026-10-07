let wlmouse = [
   { name: 'magnetick', price: 80, img: 'magnetick.jpg' },
   { name: 'wooting', price: 80, img: 'wooting.webp' },
   { name: 'wlmous', price: 140, img: 'wlmouse.webp' },
   { name: 'Mchous', price: 75, img: 'Mchose.webp' },
   { name: 'magne', price: 180, img: 'magnetic.webp' },
   { name: 'logiteche', price: 100, img: 'logitech.webp' },
   { name: 'hator', price: 60, img: 'hator.webp' },
   { name: 'Aula', price: 70, img: 'Aula.webp' },
]

let cart = []


function updateWlmouse() {
   let out_1 = document.querySelector(".out-1")
   out_1.innerHTML = "" // clear list

   for (let i = 0; i < wlmouse.length; i++) {
      let li = document.createElement("li")
      li.classList.add("card")
      li.innerHTML = `
 <img src="img/${wlmouse[i].img}">
 <h1> ${wlmouse[i].price}$</h1>
 <span> Товар - ${wlmouse[i].name}</span>
 <button class ="toCart">До кошика</button>
 `
      out_1.append(li)
      let toCart = li.querySelector(".toCart")
      toCart.onclick = function () {
         addToCart(wlmouse[i])
      }
   }
}
updateWlmouse()


function showCartArea() {
   let cartArea = document.querySelector(".cart-area")
   cartArea.style.right = 0 + "px"
}

document.querySelector(".cardpng").onclick = showCartArea

function closeCartArea() {
  
   let cartArea = document.querySelector(".cart-area")
   cartArea.style.right = -650 + "px"
}
document.querySelector(".closeCart").onclick = closeCartArea

function updateCart() {
   let out_2 = document.querySelector(".out-2")
   out_2.innerHTML = ""
   let total = 0

   for (let i = 0; i < cart.length; i++) {
      let li = document.createElement("li")
      li.innerHTML =
      `<img src = "img/${cart[i].img}">
      <span>${cart[i].name}</span>
      <button class="btn-minus" data-index="${i}">-</button>
      <span>${cart[i].quantity}шт.</span>
      <button class="btn-plus" data-index="${i}">+</button>
      <span>${cart[i].quantity}</span>
      <span>${cart[i].price}</span>
       <button class="removeBtn">x</button>

  `
      out_2.append(li)
      total += cart[i].price * cart[i].quantity
      document.querySelector(".total").innerHTML = `До оплати: ${total}грн`
      // ...
      let carrSend = document.querySelector(".cart-send")
   }
   document.querySelector(".total").innerHTML = `До оплати: ${total}грн`
      // кнопка замовити
      let cartSend = document.querySelector(".cart-send")
      cartSend.innerHTML =  "замовити"
      cartSend.style.cssText = `
      background-color:gold;
      padding:7px 12px;
      color:white;
      cursor:pointer;
      ` 
      cartSend.onclick = clearCart



      let btnPlus = document.querySelectorAll(".btn-plus")
      for(let i=0; i<btnPlus.length; i++){
         btnPlus[i].onclick = function(){
         plusQuantity(btnPlus[i].dataset.index)
         }
      }
      let btnMinus = document.querySelectorAll(".btn-minus")
      for(let i=0; i<btnMinus.length; i++){
         btnMinus[i].onclick = function(){
         minusQuantity(btnMinus[i].dataset.index)
         }
      }
      let removeBtn = document.querySelectorAll(".removeBtn")
       for(let i=0; i<removeBtn.length; i++){
         removeBtn[i].onclick = function(){
         let numCart = this.parentElement.dataset.item
         removeFormCart(numCart)
         }
   }
}



function clearCart(){
   cart.length = 0
   updateCart()
    
   let cartArea = document.querySelector(".cart-area")
   let send = document.createElement("div")
   send.innerHTML = "Замовлення відправлене!"
   send.classList.add("order-message")
   cartArea.append(send)
   

   setTimeout(function(){
      send.remove()

   },2000)
}

// Додати товар +
function  plusQuantity(index){
    cart[index].quantity++
    updateCart()
}

// Додати товар -
function minusQuantity(index){
   if(cart[index].quantity >1){
      cart[index].quantity--
   }else{
    cart[index].quantity = 0
   }
    updateCart()
}
// Видалити з кошика 
function removeFormCart(index){
    if(index !== -1){
      cart.splice(index,1)
    }
    updateCart()
}



function addToCart(wlmouseEl) {
   //console.log(fruitEl)
   let checkFruit = null
   for (let i = 0; i < cart.length; i++) {
      if (cart[i].name == wlmouseEl.name) {
         checkFruit = cart[i]
         break
      }

   }
   if (checkFruit == null) {
      cart.push({ ...wlmouseEl, quantity: 1 })
   } else {
      checkFruit.quantity++
   }
   console.log(cart)
   updateCart()
}
















//  function addFruits(){
//   let  i_name = document.querySelector(".i-name")
//   let  i_price = document.querySelector(".i-price")
//  let  i_img = document.querySelector(".i-img")
//   console.log(i_img,i_price,i_name)
//    fruits.push({name:i_name.value,price:i_price.value,img:i_img.value})
//  console.log(fruits)
//  updatefruits()
//  }
//  document.querySelector(".b-add").onclick = addFruits
