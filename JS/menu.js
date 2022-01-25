/* Table of Contents
********************

1. Create Effect for Hamburger Menu Lines

*/


// Create Effect for Hamburger Menu Lines
const menuIcon = document.querySelector (".hamburger");
const header = document.querySelector ("header");
menuIcon.addEventListener("click", () => {
    header.classList.toggle("change");
});


// Transform Menu after Click 
$(document).ready(function() {
  $(".link").on("click", function() {
      $("header").removeClass("change");
  });
}); 