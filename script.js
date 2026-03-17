// SCROLL BUTTONS 
document.addEventListener("DOMContentLoaded", function () {

const slider = document.getElementById("product-slider");
const leftBtn = document.getElementById("scroll-left");
const rightBtn = document.getElementById("scroll-right");

leftBtn.addEventListener("click", function(){
slider.scrollBy({
left: -300,
behavior: "smooth"
});
});

rightBtn.addEventListener("click", function(){
slider.scrollBy({
left: 300,
behavior: "smooth"
});
});

});

document.addEventListener("DOMContentLoaded", function () {

const buttons = document.querySelectorAll(".scroll-btn");

buttons.forEach(button => {

button.addEventListener("click", function(){

const targetId = this.getAttribute("data-target");
const container = document.getElementById(targetId);

const scrollAmount = 300;

if(this.classList.contains("left-btn")){
container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}else{
container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

});

});

});

// PRODUCT SEARCH
const searchInput = document.getElementById("product-search-input");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

products.forEach(product =>{

let name = product.dataset.name;

if(name.includes(value)){
product.style.display = "block";
}
else{
product.style.display = "none";
}

});

});

