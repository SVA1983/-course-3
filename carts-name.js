import { carts } from "./carts-arr.js";
export function addImg() {
    

const imgItem = document.querySelector(".cart-img")
for (let key in carts) {
    let img = document.createElement("img");
    img.setAttribute('data-key', key);
    img.src = 'img/carts/' + key + '.png';
    imgItem.append(img)
}; 
}