/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};


const mediaQuery2400 = window.matchMedia('(min-width:1921px) and (max-width:2400px)')
const mediaQuery3000 = window.matchMedia('(min-width:2401px) and (max-width:3000px)')
const mediaQuery3750 = window.matchMedia('(min-width:3001px) and (max-width:3750px)')
const mediaQuerylarge = window.matchMedia('(min-width:3751px)')


var navbar = document.getElementById("navbar");


function myFunction() {
  if (window.pageYOffset >= 50) {
    navbar.classList.add("home_sticky");
  } else {
    navbar.classList.remove("home_sticky");
  } 
}


if (mediaQuery2400.matches) {
  function myFunction() {
    if (window.pageYOffset >= 62) {
      navbar.classList.add("home_sticky");
    } else {
      navbar.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuery3000.matches) {
  function myFunction() {
    if (window.pageYOffset >= 77) {
      navbar.classList.add("home_sticky");
    } else {
      navbar.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuery3750.matches) {
  function myFunction() {
    if (window.pageYOffset >= 96) {
      navbar.classList.add("home_sticky");
    } else {
      navbar.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuerylarge.matches) {
  function myFunction() {
    if (window.pageYOffset >= 120) {
      navbar.classList.add("home_sticky");
    } else {
      navbar.classList.remove("home_sticky");
    } 
  }
}