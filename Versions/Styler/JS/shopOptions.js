/* 

Table of Contents

1. Right Two, Hide
2. Ellipse Three on Click
3. Ellipse One on Click

*/


// Right Two, Hide
$(document).ready(function() {
    $(".rightTwo").hide();
}); 


// Ellipse Three on Click
$(document).ready(function() {
    $(".ellipseThree").on("click", function() {
        $(".leftShop").hide();
        $(".leftTwo").show();
        $(".rightShop").hide();
        $(".rightTwo").show();
    });
}); 


// Ellipse One on Click
$(document).ready(function() {
    $(".ellipseOne").on("click", function() {
        $(".leftShop").show();
        $(".leftTwo").hide();
        $(".rightShop").show();
        $(".rightTwo").hide();
    });
}); 