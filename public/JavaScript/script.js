
 


let menu = document.getElementById("menu-bars")
let navBar = document.querySelector(".navbar")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  navBar.classList.toggle("active")
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navBar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = function() {
  document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   loop:true,
});

function addCart(event){
  var parentDiv = event.target.closest('.box');
var h3Element = parentDiv.querySelector('img + h3');

// get the text value of the h3 element
var h3Text = h3Element.textContent;
  document.querySelector("#item-name").value=h3Text

  var quantity = document.querySelector("#quantity");
  quantity.addEventListener('input', function() {
    var quant = quantity.value;
    var prices = parentDiv.querySelector('.price');
    var pricetxt = prices.textContent;
    document.querySelector("#rates").value = "Rs" + " " + pricetxt * quant;
  });
} 

