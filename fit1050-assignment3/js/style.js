document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('#hero-229');
    if (heroSection) {
        const backgrounds = ['hero-bg1', 'hero-bg2', 'hero-bg3', 'hero-bg4', 'hero-bg5', 'hero-bg6'];
        let currentIndex = 0;

        function showNextBackground() {
            heroSection.classList.remove(backgrounds[currentIndex]);
            currentIndex = (currentIndex + 1) % backgrounds.length;
            heroSection.classList.add(backgrounds[currentIndex]);
        }

        // Initialize
        heroSection.classList.add(backgrounds[currentIndex]);

        setInterval(showNextBackground, 3000); // Change background every 2 seconds
    } else {
        console.error('Hero section not found');
    }
});
