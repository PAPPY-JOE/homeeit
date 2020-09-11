//   Scroll Reveal
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    easing: 'ease',
    reset: true
});


// Scroll titles
sr.reveal('.main-heading p');

// Scroll boxes
sr.reveal('.box', {distance: '100px', interval: 500, reset: false});