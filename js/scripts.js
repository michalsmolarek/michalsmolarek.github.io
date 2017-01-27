// LINKS


var link = document.querySelectorAll("#top ul li a");

for (var i = 0; i < link.length - 1; i++) {
    link[i].addEventListener("click", function (e) {
        e.preventDefault();
    }, false);
}

// ARROW


$(".arrow").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top

    }, 500);
});


var bmenu = document.querySelector("#m-button"),
    topmenu = document.querySelector(".topm"),
    closemenu = document.querySelector("#m-button-close");

bmenu.addEventListener("click", function(){
    
    topmenu.style.top = "90px";
    closemenu.style.display = "block";
    bmenu.style.display = "none";
    
    
    
}, false);

closemenu.addEventListener("click", function(){
    
    topmenu.style.top = "-350px";
    bmenu.style.display = "block";
    closemenu.style.display = "none";
    
    
    
    
}, false);









