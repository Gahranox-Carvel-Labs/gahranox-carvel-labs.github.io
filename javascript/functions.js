// JavaScript for Gabranox website
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('Gabranox website loaded');

        // Smooth scrolling for anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        if (links && links.length > 0) {
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('.nav-link, .footer-link, .social-link');
        if (interactiveElements && interactiveElements.length > 0) {
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.transition = 'transform 0.2s ease';
                });
                element.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-navigation');
        if (mobileMenuToggle && mobileNav) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
            });
        }

        // Search functionality placeholder
        const searchIcon = document.querySelector('.search-icon');
        if (searchIcon) {
            searchIcon.addEventListener('click', function() {
                console.log('Search clicked');
            });
        }

        // Form submission handling
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Form submitted');
            });
        });
    } catch (error) {
        console.error('Error initializing website:', error);
    }

    /* ======================
       PRODUCT SLIDERS (Independent per section)
       - Works with arrows, dots, swipe
    ====================== */
    (function initProductSliders() {
        const sliderContainers = document.querySelectorAll('.product-slider-container');
        if (!sliderContainers.length) return;

        sliderContainers.forEach(sliderContainer => {
            const slider = sliderContainer.querySelector('.product-slider');
            const slides = Array.from(slider.querySelectorAll('.product-card'));
            const prevButton = sliderContainer.querySelector('.slider-arrow.prev-arrow');
            const nextButton = sliderContainer.querySelector('.slider-arrow.next-arrow');
            const dots = Array.from(sliderContainer.querySelectorAll('.slider-dot'));
            
            if (!slides.length) return;

            let currentIndex = 0;
            let isAnimating = false;

            function updateActiveStates() {
                slides.forEach((slide, index) => {
                    slide.style.opacity = index === currentIndex ? '1' : '0';
                    slide.style.position = index === currentIndex ? 'relative' : 'absolute';
                    slide.style.visibility = index === currentIndex ? 'visible' : 'hidden';
                });
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
                prevButton.disabled = currentIndex === 0;
                nextButton.disabled = currentIndex === slides.length - 1;
            }

            function goToSlide(index) {
                if (isAnimating || index < 0 || index >= slides.length) return;
                isAnimating = true;
                currentIndex = index;
                updateActiveStates();
                setTimeout(() => (isAnimating = false), 400);
            }

            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
            dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index)));

            // Swipe for touch devices
            let startX = 0, endX = 0;
            slider.addEventListener('touchstart', e => (startX = e.changedTouches[0].screenX), { passive: true });
            slider.addEventListener('touchend', e => {
                endX = e.changedTouches[0].screenX;
                const diff = endX - startX;
                if (Math.abs(diff) > 50) diff > 0 ? goToSlide(currentIndex - 1) : goToSlide(currentIndex + 1);
            }, { passive: true });

            updateActiveStates();
        });
    })();

    // End of slider init
});

// Utility functions
const utils = {
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    fadeIn: function(element, duration = 300) {
        element.style.opacity = 0;
        element.style.display = 'block';
        const start = performance.now();
        function animate(currentTime) {
            const elapsed = currentTime - start;
            const progress = elapsed / duration;
            if (progress < 1) {
                element.style.opacity = progress;
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 1;
            }
        }
        requestAnimationFrame(animate);
    }
};

// Export utils for use in other scripts
window.GabranoxUtils = utils;
