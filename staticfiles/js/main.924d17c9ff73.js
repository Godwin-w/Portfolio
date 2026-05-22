// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Particles.js with enhanced visibility on black background
particlesJS('particles-js', {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff88'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.4,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: '#00ff88',
            opacity: 0.5,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Add more green particles with connecting lines
setTimeout(() => {
    const pJSDom = window.pJSDom[0];
    if (pJSDom && pJSDom.particles) {
        // Add additional green particles
        for (let i = 0; i < 50; i++) {
            if (pJSDom.particles.array[0]) {
                pJSDom.particles.array.push({
                    ...pJSDom.particles.array[0],
                    color: { value: '#00ff88' },
                    position: {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    },
                    opacity: {
                        value: 0.7
                    }
                });
            }
        }
    }
}, 1000);



// Mobile Navigation Toggle
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");

    // Prevent background scrolling
    document.body.classList.toggle("menu-open");

});


// Smooth Page Transitions
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            pageContent.style.animation = 'fadeOut 0.3s ease';
        }
        
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Scroll Animations with GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.project-card, .skill-category, .profile-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom+=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// Floating Elements Animation with random positions
const floatElements = document.querySelectorAll('.float-element');
floatElements.forEach((element, index) => {
    const delay = index * 0.2;
    element.style.animationDelay = `${delay}s`;
    
    // Random positions within viewport
    const randomX = 5 + Math.random() * 90;
    const randomY = 5 + Math.random() * 90;
    element.style.top = `${randomY}%`;
    element.style.left = `${randomX}%`;
    
    // Random animation duration
    const randomDuration = 6 + Math.random() * 6;
    element.style.animationDuration = `${randomDuration}s`;
    
    // Random size
    const randomSize = 1.5 + Math.random() * 1.5;
    element.style.fontSize = `${randomSize}rem`;
});

// Typing Animation for About Section
if (document.querySelector('.typing-about')) {
    new Typed('.typing-about', {
        strings: ['Problem Solver', 'Innovator', 'Team Player', 'Continuous Learner'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Add active class to current navigation link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || 
        (currentPath === '/' && href === '/') ||
        (currentPath === '/home' && href === '/')) {
        link.classList.add('active');
    }
});

// Form Validation and Animation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
        }
    });
}

// Smooth Scroll for Anchor Links
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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.6;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
    }
    
    .burger {
        display: none;
        cursor: pointer;
    }
    
    .burger div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px;
        transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .burger {
            display: block;
        }
        
        .burger.toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .burger.toggle .line2 {
            opacity: 0;
        }
        
        .burger.toggle .line3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    /* Particle canvas visibility */
    #particles-js canvas {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 0 !important;
        background: #000000 !important;
    }
    
    /* Ensure content is above particles */
    .navbar, .hero-section, .projects-section, .skills-section, 
    .coding-profiles-section, .contact-section, .about-section {
        position: relative;
        z-index: 1;
    }
`;
document.head.appendChild(style);

// 3D Tilt Effect for Cards
document.querySelectorAll('.project-card, .profile-card, .tool-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

// Add floating particles effect with Three.js for additional green dots
const addThreeJSParticles = () => {
    const threeContainer = document.getElementById('three-canvas');
    if (threeContainer && !window.threeParticlesAdded) {
        window.threeParticlesAdded = true;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        threeContainer.appendChild(renderer.domElement);
        
        // Create many small green particles
        const particleCount = 500;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesPositions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            particlesPositions[i * 3] = (Math.random() - 0.5) * 200;
            particlesPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            particlesPositions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00ff88,
            size: 0.2,
            transparent: true,
            opacity: 0.6
        });
        
        const particlesSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesSystem);
        
        camera.position.z = 30;
        
        function animateParticles() {
            requestAnimationFrame(animateParticles);
            particlesSystem.rotation.y += 0.002;
            particlesSystem.rotation.x += 0.001;
            renderer.render(scene, camera);
        }
        
        animateParticles();
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
};

// Call after a short delay to ensure DOM is ready
setTimeout(addThreeJSParticles, 500);

// Console greeting
console.log('%c🚀 Welcome to my portfolio!', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%c✨ Green particles and connecting lines are active on black background!', 'color: #00ff88; font-size: 14px;');
console.log('%c💖 Feel free to explore my work and get in touch!', 'color: #ff0066; font-size: 14px;');

// Fetch skills from your API
fetch('/api/skills')
  .then(response => response.json())
  .then(skills => {
    const skillsList = document.querySelector('.skills-list');
    skillsList.innerHTML = skills.map(skill => 
      `<div class="skill-item">
        <span>${skill.name}</span>
        <div class="progress-bar" style="width: ${skill.percentage}%"></div>
      </div>`
    ).join('');
});



