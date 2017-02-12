
var menu = document.querySelector(".menu");


//    menu.classList.add("showmenu", "hidden");

    window.addEventListener("scroll", function(){

        if(document.body.scrollTop > 500){

            menu.classList.remove("hidden");

        }else {
            menu.classList.add("hidden");
        }

}, false);
//====================

 $(".about").click(function() {
                $('html, body').animate({
                scrollTop: $("#about").offset().top

                }, 500);
            });

 $(".projects").click(function() {
                $('html, body').animate({
                scrollTop: $("#projects").offset().top

                }, 500);
            });



 $(".contact").click(function() {
                $('html, body').animate({
                scrollTop: $("#contact").offset().top

                }, 500);
            });
