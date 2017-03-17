// TABS

var selector, elems, makeActive;

selector = '.nav-tabs li';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);


// MENU


var bmenu = document.querySelector("#m-button"),
    topmenu = document.querySelector(".mainNavbar"),
    closemenu = document.querySelector("#m-button-close");

bmenu.addEventListener("click", function(){
    
    topmenu.style.top = "10px";
    closemenu.style.display = "block";
    bmenu.style.display = "none";

    
}, false);

closemenu.addEventListener("click", function(){
    
    topmenu.style.top = "-380px";
    bmenu.style.display = "block";
    closemenu.style.display = "none";
    

    
    
}, false);
