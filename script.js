document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    const dayImages = ['day1.jpg', 'day2.jpg', 'day3.jpg'];
    const nightImages = ['night1.jpg', 'night2.jpg', 'night3.jpg'];

    function getRandomImage(images) {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    }

    function updateBackground() {
        if (body.classList.contains('day')) {
            body.style.backgroundImage = `url(${getRandomImage(dayImages)})`;
        } else {
            body.style.backgroundImage = `url(${getRandomImage(nightImages)})`;
        }
    }

    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('night');
        body.classList.toggle('day');
        updateBackground();
    });

    // Initialize with day theme
    body.classList.add('day');
    updateBackground();
});
