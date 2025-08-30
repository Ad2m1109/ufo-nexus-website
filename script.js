document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        if (preloader) {
            preloader.style.cssText = 'display: none !important';
        }
    }, 500); // Hide preloader after 500ms

    const scrollContainer = document.querySelector('.projects-scroll');
    if (scrollContainer) {
        const scrollLeftBtn = document.querySelector('.scroll-left');
        const scrollRightBtn = document.querySelector('.scroll-right');

        const getScrollAmount = () => {
            return scrollContainer.offsetWidth;
        };

        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        const handleScrollButtons = () => {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
            scrollRightBtn.style.display = scrollContainer.scrollLeft < maxScrollLeft - 5 ? 'block' : 'none';
        };

        scrollContainer.addEventListener('scroll', handleScrollButtons);
        window.addEventListener('resize', () => {
            setTimeout(handleScrollButtons, 250); // Debounce resize
        });

        // Initial check after a short delay to allow layout to settle
        setTimeout(handleScrollButtons, 100);
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});