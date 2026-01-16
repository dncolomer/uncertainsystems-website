/* ============================================
   UNCERTAIN SYSTEMS - MAIN JAVASCRIPT
   Animations and interactions
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    /**
     * IntersectionObserver for scroll-triggered animations
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.project-card, .pillar, .feature-card, .flow-step, .experiment-card, .mini-card, .vision-manifesto, .description-content, .description-highlight, .code-block, .cta-content'
        );

        if (!animatedElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on element index within its container
                    const siblings = entry.target.parentElement.children;
                    const siblingIndex = Array.from(siblings).indexOf(entry.target);
                    const delay = siblingIndex * 100;
                    
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    // ============================================
    // NAVIGATION
    // ============================================
    
    /**
     * Handle navigation state changes on scroll
     */
    function initNavigation() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        let lastScroll = 0;
        const scrollThreshold = 100;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add/remove scrolled class for styling
            if (currentScroll > scrollThreshold) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }

    /**
     * Mobile navigation toggle
     */
    function initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!navToggle || !navLinks) return;
        
        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            
            navToggle.setAttribute('aria-expanded', !isOpen);
            navLinks.classList.toggle('is-open', !isOpen);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isOpen ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('is-open');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                e.preventDefault();
                
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ============================================
    // HERO ANIMATIONS
    // ============================================
    
    /**
     * Parallax effect for hero background elements
     */
    function initHeroParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const orb = hero.querySelector('.hero-orb');
        const stars = hero.querySelector('.stars');
        const constellation = hero.querySelector('.constellation');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            // Only animate when hero is in view
            if (scrolled > heroHeight) return;
            
            const parallaxFactor = scrolled * 0.3;
            
            if (orb) {
                orb.style.transform = `translateY(calc(-50% + ${parallaxFactor * 0.5}px))`;
            }
            if (stars) {
                stars.style.transform = `translateY(${parallaxFactor * 0.2}px)`;
            }
            if (constellation) {
                constellation.style.transform = `translateY(${parallaxFactor * 0.1}px)`;
            }
        }, { passive: true });
    }

    // ============================================
    // CARD INTERACTIONS
    // ============================================
    
    /**
     * Enhanced hover effects for project cards
     */
    function initCardInteractions() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            const glow = card.querySelector('.card-glow');
            if (!glow) return;
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                glow.style.left = `${x - glow.offsetWidth / 2}px`;
                glow.style.top = `${y - glow.offsetHeight / 2}px`;
            });
        });
    }

    // ============================================
    // CONSTELLATION ANIMATION
    // ============================================
    
    /**
     * Create dynamic constellation points in hero
     */
    function initConstellation() {
        const constellation = document.querySelector('.constellation');
        if (!constellation) return;

        // Create additional floating points
        for (let i = 0; i < 15; i++) {
            const point = document.createElement('div');
            point.className = 'constellation-point';
            point.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: var(--gold);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.4 + 0.1};
                animation: twinkle-point ${Math.random() * 4 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 4}s;
            `;
            constellation.appendChild(point);
        }

        // Add keyframes for twinkle animation if not exists
        if (!document.querySelector('#constellation-styles')) {
            const style = document.createElement('style');
            style.id = 'constellation-styles';
            style.textContent = `
                @keyframes twinkle-point {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.5); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // NETWORK ANIMATION (Omega Quest)
    // ============================================
    
    /**
     * Animate network connections for Omega Quest hero
     */
    function initNetworkAnimation() {
        const networkSvg = document.querySelector('.network-svg');
        if (!networkSvg) return;

        const lines = networkSvg.querySelectorAll('line');
        
        lines.forEach((line, index) => {
            line.style.animation = `line-pulse ${3 + Math.random() * 2}s ease-in-out infinite`;
            line.style.animationDelay = `${index * 0.3}s`;
        });

        // Add keyframes
        if (!document.querySelector('#network-styles')) {
            const style = document.createElement('style');
            style.id = 'network-styles';
            style.textContent = `
                @keyframes line-pulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.6; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ============================================
    // PAGE LOAD ANIMATION
    // ============================================
    
    /**
     * Orchestrate page load animations
     */
    function initPageLoad() {
        document.body.classList.add('page-loaded');
        
        // Add loaded class to body after fonts are ready
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
            });
        } else {
            // Fallback for browsers without Font Loading API
            setTimeout(() => {
                document.body.classList.add('fonts-loaded');
            }, 300);
        }
    }

    // ============================================
    // CURSOR GLOW EFFECT
    // ============================================
    
    /**
     * Subtle cursor glow on dark sections
     */
    function initCursorGlow() {
        const darkSections = document.querySelectorAll('.stack, .project-cta, .other-projects');
        
        darkSections.forEach(section => {
            let glow = document.createElement('div');
            glow.className = 'cursor-glow';
            glow.style.cssText = `
                position: absolute;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 0;
            `;
            section.style.position = 'relative';
            section.appendChild(glow);
            
            section.addEventListener('mousemove', (e) => {
                const rect = section.getBoundingClientRect();
                const x = e.clientX - rect.left - 150;
                const y = e.clientY - rect.top - 150;
                
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
                glow.style.opacity = '1';
            });
            
            section.addEventListener('mouseleave', () => {
                glow.style.opacity = '0';
            });
        });
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    
    /**
     * Initialize all modules when DOM is ready
     */
    function init() {
        initPageLoad();
        initNavigation();
        initMobileNav();
        initSmoothScroll();
        initScrollAnimations();
        initHeroParallax();
        initCardInteractions();
        initConstellation();
        initNetworkAnimation();
        initCursorGlow();
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
