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
        
        $('.side-bar').css('transition', 'none');
        $('.side-bar').slideUp(800);

        if (menuToggleStatus === true && FullMenuStatus === false) {
                $('.side-bar').css('width', '80px');
                $('.side-bar .top').css('opacity', '0');
                $('.side-bar a span').css('opacity', '0');
        }       
    
        menuToggleStatus = false;
    }
}

$('.menu-bar').on("click", menuToggle);





// Full Menu Toggle
let FullMenuStatus = false;

let FullMenu = function () {
    if (FullMenuStatus === false) {

        $('.side-bar').css('width', '230px');
        $('.side-bar').css('transition', '.5s all ease');
        $('.side-bar .top').css('visibility', 'visible');
        $('.side-bar a span').css('display', 'block');
        $('.side-bar .top').css('opacity', '1');
        $('.side-bar a span').css('opacity', '1');
        
    }
    
}

$('.side-bar a').on("click", FullMenu);
