document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type    : 'loop',   // Options for slider type (loop, slide, fade)
        perPage : 1,        // Number of slides to show per page
        autoplay: false,     // Automatically start sliding
        interval: 3000,
    }).mount();
});