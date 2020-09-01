//   Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    easing: 'ease',
    reset: true
});

// Scroll Home
sr.reveal('.slide',{});

// Scroll Award
sr.reveal('.award-name', {});
sr.reveal('.address', {delay: 600});
sr.reveal('.price', {delay: 300});
sr.reveal('.a-i-details', {interval: 300});

// Scroll Covid
sr.reveal('.services-text', {});
sr.reveal('.box',{delay: 500, interval: 400});