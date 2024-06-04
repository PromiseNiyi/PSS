window.addEventListener('scroll', function() {
    const fadeImage = document.querySelector('.fade-image');
    const fadeSection = document.querySelector('.fixed-background');
    const sectionHeight = fadeSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    // Calculate the opacity based on scroll position
    const startFade = fadeSection.offsetTop;
    const endFade = startFade + sectionHeight - windowHeight;
    let opacity = 1;
    
    if (scrollY >= startFade && scrollY <= endFade) {
        opacity = 1 - (scrollY - startFade) / (sectionHeight - windowHeight);
    } else if (scrollY > endFade) {
        opacity = 0;
    }

    // Set the image opacity
    fadeImage.style.opacity = opacity;
});
