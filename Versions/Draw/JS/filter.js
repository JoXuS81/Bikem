/*

TABLE OF CONTENTS

1. Filter Function

*/ 

// Filter Function
function filter() {
    
    var filterValue; 
    var input;
    var ul;
    var li;
    var a;
    var i;

    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("div");
        
        for (i = 0 ; i < li.length ; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = "";
                
            } else {
                li[i].style.display = "none";
            }
        }
    }