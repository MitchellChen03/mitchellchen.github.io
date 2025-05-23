document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const scrollDistance = header?.offsetHeight || 0;

    // Debounced scroll handler
    let scrollTimeout;
    function toggleStickyHeader() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > scrollDistance) {
                header?.classList.add('sticky');
                navLinks?.classList.add('rounded');
            } else {
                header?.classList.remove('sticky');
                navLinks?.classList.remove('rounded');
            }
        }, 10); // 10ms delay
    }

    window.addEventListener('scroll', toggleStickyHeader);

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-times');
        });
    }

    // Fade in sections using IntersectionObserver
    const sections = document.querySelectorAll('section');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    } else {
        // Fallback for unsupported browsers
        sections.forEach(section => section.classList.add('in-view'));
    }
});
