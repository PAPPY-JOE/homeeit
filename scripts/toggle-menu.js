// $('.side-bar a').click(function(event){
//     event.preventDefault();
//   });

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
                $('.side-bar .top').css('visibility', 'hidden');
                $('.side-bar a').fadeOut(0, function () {
                    $('.side-bar').css('width', '80px');
                });
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
        $('.side-bar a').css('display', 'block');
        $('.side-bar .top').fadeIn();
        $('.side-bar a').fadeIn();
        
    }
    
}

$('.side-bar span').on("click", FullMenu);
