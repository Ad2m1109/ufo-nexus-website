// Project scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.projects-scroll');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const scrollAmount = 1100; // Adjust this value based on your needs

    scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft -= scrollAmount;
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollLeft += scrollAmount;
    });
});