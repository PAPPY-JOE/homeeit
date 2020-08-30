$('.side-bar a').click(function(event){
    event.preventDefault();
  });

// Menu Bar Toggle
let menuToggleStatus = false;

let menuToggle = function () {
    if (menuToggleStatus === false) {
        
        $('.side-bar').slideDown(800);

        menuToggleStatus = true;
    }
    else if (menuToggleStatus === true) {
        
        $('.side-bar').slideUp(800);

        menuToggleStatus = false;
    }
}

$('.menu-bar').on("click", menuToggle);





// Full Menu Toggle
let FullMenuStatus = false;

let FullMenu = function () {
    if (FullMenuStatus === false) {
        
        $('.side-bar').css('width', '280px');
        $('.side-bar .top').css('visibility', 'visible');
        $('.side-bar a span').css('display', 'block');

        FullMenuStatus = true;
    }
    
}

$('.side-bar a').on("click", FullMenu);
