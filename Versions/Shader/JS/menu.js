/* 

Table of Contents

1. Create Effect for Hamburger Menu Lines
2. Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const about = document.querySelector (".about");
const header = document.querySelector ("header");
const menuIcon = document.querySelector (".header_hamburger");
const shop = document.querySelector (".shop");
const smallmenuIcon = document.querySelector (".hamburgerSmall");
var headerSection = document.getElementById("headerSection");

menuIcon.addEventListener("click", () => {
    header.classList.toggle("header_changeMenu");
});

smallmenuIcon.addEventListener("click", () => {
    about.classList.toggle("aboutMenu");
    header.classList.toggle("header_changeMenu");
});


// Transform Menu after Click 
$(document).ready(function() {
    $(".menu_click").on("click", function() {
        $(".about").removeClass("aboutMenu");
        $("header").removeClass("header_changeMenu");
    });
}); 