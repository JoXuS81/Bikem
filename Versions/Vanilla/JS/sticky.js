/* Table of Contents
********************

1. Regulate sticky header behavior  

*/


/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};
const mediaQuery = window.matchMedia('(min-width:1921px) and (max-width:2400px)');
const mediaQuery3000 = window.matchMedia('(min-width:2401px) and (max-width:3000px)');
const mediaQuery3750 = window.matchMedia('(min-width:3001px) and (max-width:3750px)');
const mediaQuery4690 = window.matchMedia('(min-width:3751px)');
const mediaQuerySmall = window.matchMedia('(max-width:1199px)');
var headerArea = document.getElementById("menusticky");
var headerSection = document.getElementById("headerSection");
var sticky = headerArea.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 50) {
    headerArea.classList.add("header_sticky")
  } else {
    headerArea.classList.remove("header_sticky");
  } 
}