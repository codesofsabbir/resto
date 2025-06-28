let menu = document.getElementById("menu-bars");
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let search = document.getElementById("search");
let searchArea = document.querySelector(".search-area");
let cls = document.getElementById("close");


search.onclick = () =>{
    searchArea.style.top = "0%";
}
cls.onclick = () =>{
    searchArea.style.top = "-110%";
}




    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredslides:true,
        autoplay:{
            delay:7500,
            disableOnInteraction:false,
        },
        pagination:{
            el:".swiper-pagination",
            clickable:true,
        },
        loop:true,
    });
  