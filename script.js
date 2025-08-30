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

    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
});