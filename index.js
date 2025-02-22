document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Change navbar background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle mobile menu
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Highlight menu items on hover
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#333';
            this.style.backgroundColor = '#fff';
        });

        link.addEventListener('mouseout', function () {
            this.style.color = '#fff';
            this.style.backgroundColor = 'transparent';
        });
    });
});
