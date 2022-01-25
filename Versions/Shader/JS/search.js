/* 

Table of Contents

1. Display and Close Search Area
2. Transform Menu After Click

*/


// Display and Close Search Area
$( ".close" ).click(function() {
    $(".about").show();
    $(".blog").show();
    $(".contact").show();
    $("footer").show();
    $("header").show();
    $(".search_area").hide();
    $(".shop").show();
});


$( ".search" ).click(function() {
    $(".about").hide();
    $(".blog").hide();
    $(".contact").hide();
    $("footer").hide();
    $("header").hide();
    $(".search_area").show();
    $(".shop").hide();
});


const search = document.querySelector ("search_area");
const menuClick = document.querySelector (".menu_click");


// Transform Menu after Click 
$(document).ready(function() {
    $(".menu_click").on("click", function() {
        $(".about").show();
        $(".blog").show();
        $(".contact").show();
        $("footer").show();
        $("header").show();
        $(".search_area").hide();
        $(".shop").show();
    });
}); 