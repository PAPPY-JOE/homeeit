// Menu Bar Toggle
let menuToggleStatus = false;

let menuToggle = function () {
    if (menuToggleStatus === false) {
        
        $('.fixed-side-bar').css('visibility', 'visible');
        $('.fixed-side-bar').slideDown(800);
        
        menuToggleStatus = true;
    }
    else if (menuToggleStatus === true) {
        
        $('.fixed-side-bar').css('transition', 'none');
        $('.fixed-side-bar').slideUp(800);

        if (menuToggleStatus === true && FullMenuStatus === false) {
                $('.fixed-side-bar .fixed-logo').css('visibility', 'hidden');
                $('.fixed-side-bar a').fadeOut(0, function () {
                    $('.fixed-side-bar').css('width', '100px');
                });
        }       
    
        menuToggleStatus = false;
    }
}

$('.fixed-menu-bar ion-icon').on("click", menuToggle);
$('.fixed-side-bar .fa-times').on("click", menuToggle);





// Full Menu Toggle
let FullMenuStatus = false;

let FullMenu = function () {
    if (FullMenuStatus === false) {

        $('.fixed-side-bar').css('width', '80vw');
        $('.fixed-side-bar').css('transition', '.5s all ease');
        $('.fixed-side-bar .fixed-logo').css('visibility', 'visible');
        $('.fixed-side-bar a').css('display', 'block');
        $('.fixed-side-bar .fixed-logo').fadeIn();
        $('.fixed-side-bar a').fadeIn();
        
    }
    
}

$('.fixed-side-bar span').on("click", FullMenu);
