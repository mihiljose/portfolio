// js/main.js

// ===========================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// OPTIMIZED PARALLAX BLOB EFFECT
// ===========================
let ticking = false;
let lastScrollY = 0;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const blob = document.querySelector('.blob');
    
    if (blob && scrolled < window.innerHeight) {
        blob.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
    }
    
    lastScrollY = scrolled;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}, { passive: true });

// ===========================
// FLOATING TECH ICONS INTERACTION
// ===========================
const floatingTech = document.querySelectorAll('.floating-tech');

floatingTech.forEach(tech => {
    tech.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.15) rotate(5deg)';
        this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
    
    tech.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===========================
// PAGE LOAD FADE-IN
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});