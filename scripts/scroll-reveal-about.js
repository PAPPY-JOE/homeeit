//   Scroll Reveal
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    easing: 'ease',
    reset: true
});

// Scroll Home
sr.reveal('.first-gradient',{ duration: 1500});

// Scroll Main
sr.reveal('.block-heading',{distance: '100px'});
sr.reveal('.block-text',{delay: 800, reset: false});
sr.reveal('.rating-container div',{interval: 500});



// Horizontal reveal

let scr = ScrollReveal({
    origin: 'left',
    distance: '20%',
    duration: 2000,
    easing: 'ease',
    reset: true
});

scr.reveal('.rating-sect',{delay: 200, interval: 500, reset: false});