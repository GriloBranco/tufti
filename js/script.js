// Transurfing Decodificado - JavaScript Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.card-quantum, .section-spacing h2, .section-spacing h3');
    animatedElements.forEach(el => observer.observe(el));

    // Enhanced button hover effects
    const quantumButtons = document.querySelectorAll('.btn-quantum');
    quantumButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Particle animation enhancement
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${Math.random() > 0.5 ? 'var(--quantum-gold)' : 'var(--accent)'};
            border-radius: 50%;
            opacity: ${Math.random() * 0.7 + 0.3};
            pointer-events: none;
            animation: float-up ${Math.random() * 3 + 2}s linear infinite;
            left: ${Math.random() * 100}%;
            bottom: -10px;
        `;
        
        const heroSection = document.querySelector('section');
        if (heroSection) {
            heroSection.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 5000);
        }
    }

    // Create floating particles periodically
    setInterval(createFloatingParticle, 3000);

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Enhanced card hover effects
    const cards = document.querySelectorAll('.card-quantum');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(131, 92, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.absolute.inset-0');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Dynamic text color change based on scroll
    const gradientTexts = document.querySelectorAll('.text-gradient-quantum, .text-gradient-gold');
    window.addEventListener('scroll', function() {
        const scrollPercent = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        
        gradientTexts.forEach(text => {
            const hue = 240 + (scrollPercent * 60); // From blue to purple
            text.style.filter = `hue-rotate(${hue}deg)`;
        });
    });

    // Typewriter effect for main heading (if needed)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Enhanced emoji animations
    const emojiElements = document.querySelectorAll('.animate-bounce');
    emojiElements.forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.2}s`;
        
        emoji.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        emoji.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Progress indicator on scroll
    function createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--quantum-gold), var(--accent));
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollPercent = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    createProgressBar();

    // Enhanced CTA button effects
    const ctaButtons = document.querySelectorAll('a[href*="pay.hotmart.com"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle flash effect
            this.style.background = 'linear-gradient(135deg, var(--quantum-gold-light), var(--quantum-gold))';
            
            setTimeout(() => {
                this.style.background = '';
            }, 200);
        });
    });

    // Mouse trail effect
    let mouseTrail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({x: e.clientX, y: e.clientY});
        
        if (mouseTrail.length > maxTrailLength) {
            mouseTrail.shift();
        }
        
        // Create trail particles
        if (Math.random() > 0.95) {
            const trailParticle = document.createElement('div');
            trailParticle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: var(--accent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                opacity: 0.7;
                animation: fade-out 1s ease-out forwards;
            `;
            document.body.appendChild(trailParticle);
            
            setTimeout(() => {
                if (trailParticle.parentNode) {
                    trailParticle.parentNode.removeChild(trailParticle);
                }
            }, 1000);
        }
    });

    // Add fade-out animation for trail particles
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes fade-out {
            0% { opacity: 0.7; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    document.head.appendChild(trailStyle);

    // Section reveal animations
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });

    // Dynamic gradient background
    function updateBackgroundGradient() {
        const time = Date.now() * 0.0001;
        const hue1 = Math.sin(time) * 30 + 240;
        const hue2 = Math.cos(time * 0.7) * 30 + 280;
        
        document.body.style.background = `
            linear-gradient(45deg, 
                hsl(${hue1}, 50%, 5%) 0%, 
                hsl(${hue2}, 50%, 3%) 50%, 
                hsl(${hue1 + 20}, 50%, 5%) 100%)
        `;
    }

    // Update background gradient periodically
    setInterval(updateBackgroundGradient, 100);

    // Enhanced accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add keyboard navigation styles
    const keyboardStyle = document.createElement('style');
    keyboardStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 2px solid var(--quantum-gold) !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(keyboardStyle);

    console.log('🌟 Transurfing Decodificado carregado com sucesso!');
    console.log('🚀 Navegação quântica ativada!');
});