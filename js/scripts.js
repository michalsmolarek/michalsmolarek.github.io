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










