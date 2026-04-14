// js/animations.js
(function() {
    // Esperar a que GSAP y ScrollTrigger estén listos
    function initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP o ScrollTrigger no cargados, reintentando...');
            setTimeout(initAnimations, 100);
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        console.log('Animaciones iniciadas'); // Para debug

        // ========== 1. HERO: FADE OUT AL SCROLL ==========
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            // Animamos el contenido del hero (logo, título, párrafo, botones) para que desaparezca mientras se hace scroll
            gsap.to(heroContent, {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',      // cuando el top del hero toca el top de la ventana
                    end: '+=300',          // durante 300px de scroll adicional
                    scrub: true,           // la animación sigue el scroll (avanza y retrocede)
                },
                opacity: 0,
                y: -80,                    // se desplaza hacia arriba mientras se desvanece
                ease: 'none'
            });

            // Opcional: también aclarar el overlay del hero
            const hero = document.querySelector('.hero');
            if (hero) {
                gsap.to(hero, {
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: '+=300',
                        scrub: true,
                    },
                    '--overlay-opacity': 0.3,  // esto requiere CSS personalizado, mejor usar CSS variable
                    ease: 'none'
                });
            }
        } else {
            console.warn('No se encontró .hero-content');
        }

        // ========== 2. TARJETAS DE PRODUCTOS Y PROYECTOS (con reversión) ==========
        // Selecciona todas las tarjetas en index, productos.html y proyectos.html
        const cards = document.querySelectorAll('.producto-card, .proyectos-preview figure, .grid-productos .producto-card, .galeria-proyectos figure');
        if (cards.length) {
            cards.forEach(card => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play reverse play reverse', // reproduce al entrar, revierte al salir
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });
        } else {
            console.warn('No se encontraron tarjetas');
        }

        // ========== 3. VIDEO CARD ==========
        const videoCard = document.querySelector('.video-card');
        if (videoCard) {
            gsap.from(videoCard, {
                scrollTrigger: {
                    trigger: videoCard,
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
                scale: 0.95,
                opacity: 0,
                duration: 0.7,
                ease: 'back.out(0.3)'
            });
        }

        // ========== 4. BOTONES DEL CTA FINAL ==========
        const ctaButtons = document.querySelectorAll('.cta-final .btn, .cta-final .btn-whatsapp');
        if (ctaButtons.length) {
            gsap.from(ctaButtons, {
                scrollTrigger: {
                    trigger: '.cta-final',
                    start: 'top 85%',
                    toggleActions: 'play reverse play reverse',
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }
    }

    // Iniciar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();