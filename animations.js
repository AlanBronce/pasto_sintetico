// js/animations.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Registrar el plugin ScrollTrigger de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada para tarjetas de productos y proyectos
    const cards = document.querySelectorAll('.producto-card, .proyectos-preview figure, .grid-productos .producto-card, .galeria-proyectos figure');
    cards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // Animación para el video-card (si existe en la página)
    const videoCard = document.querySelector('.video-card');
    if (videoCard) {
        gsap.from(videoCard, {
            scrollTrigger: {
                trigger: videoCard,
                start: 'top 85%'
            },
            scale: 0.95,
            opacity: 0,
            duration: 0.7,
            ease: 'back.out(0.2)'
        });
    }

    // Animación para los botones del CTA final
    const ctaButtons = document.querySelectorAll('.cta-final .btn');
    if (ctaButtons.length) {
        gsap.from(ctaButtons, {
            scrollTrigger: {
                trigger: '.cta-final',
                start: 'top 85%'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        });
    }

    // (Opcional) Animación de entrada para el hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from(heroContent, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
});