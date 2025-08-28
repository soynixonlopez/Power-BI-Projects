// Función para abrir los dashboards de Power BI
function openDashboard(dashboardId) {
    // URLs reales de los dashboards de Power BI para visualización directa
    const dashboardUrls = {
        'dashboard1': 'https://app.powerbi.com/links/czoGV3Oy9g?ctid=d8e3bd44-0bba-426b-952d-ada7bb17393c&pbi_source=linkShare',
        'dashboard2': null, // En desarrollo
        'dashboard3': null  // En desarrollo
    };
    
    const url = dashboardUrls[dashboardId];
    
    if (url) {
        // Abrir en nueva pestaña con parámetros para visualización directa
        window.open(url, '_blank');
    } else {
        // Mostrar mensaje temporal si no hay URL configurada
        showNotification('Dashboard en desarrollo. Próximamente disponible.');
    }
}

// Función para mostrar notificaciones
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #0099cc);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-family: 'Fira Code', monospace;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animación de título con efecto de escritura de código
function animateTitle() {
    const titleLine1 = document.getElementById('title-line-1');
    const titleLine2 = document.getElementById('title-line-2');
    const welcomeText = document.getElementById('welcome-text');
    
    // Función para escribir texto con efecto de máquina de escribir
    function typeWriter(element, text, speed = 80) {
        return new Promise((resolve) => {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }
    
    // Secuencia de animación mejorada
    setTimeout(async () => {
        // Animar primera línea del título
        await typeWriter(titleLine1, 'Hola, Soy Nixon López', 70);
        
        setTimeout(async () => {
            // Animar segunda línea del título
            await typeWriter(titleLine2, 'IT Teacher', 70);
            
            setTimeout(() => {
                // Animar texto de bienvenida
                welcomeText.classList.add('animate');
            }, 800);
        }, 500);
    }, 1000);
}

// Efectos de entrada para las galerías con scroll
function animateGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px) scale(0.95)';
        item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(item);
    });
}

// Efecto de partículas de fondo mejorado
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Crear partículas con diferentes tamaños y velocidades
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 15 + 10;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.4 + 0.1});
            border-radius: 50%;
            animation: float ${duration}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 ${size * 2}px rgba(0, 212, 255, 0.4);
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Agregar keyframes para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Efecto de cursor personalizado mejorado
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);
    return cursor;
}

// Efectos de hover mejorados para las galerías
function initGalleryHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
                cursor.style.background = 'radial-gradient(circle, rgba(0, 212, 255, 1), transparent)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(0, 212, 255, 0.8), transparent)';
            }
        });
    });
}

// Control de iconos flotantes por sección
function initFloatingIconsControl() {
    const floatingIcons = document.querySelector('.floating-icons');
    const heroSection = document.querySelector('.hero');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Mostrar iconos flotantes solo en la sección hero
                floatingIcons.style.opacity = '1';
                floatingIcons.style.visibility = 'visible';
            } else {
                // Ocultar iconos flotantes en otras secciones
                floatingIcons.style.opacity = '0';
                floatingIcons.style.visibility = 'hidden';
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
    });
    
    observer.observe(heroSection);
}

// Transiciones suaves entre secciones
function initSmoothSectionTransitions() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Efecto de entrada suave
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Agregar clase para animaciones adicionales
                entry.target.classList.add('section-visible');
            } else {
                // Efecto de salida suave
                entry.target.style.opacity = '0.8';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.classList.remove('section-visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(section);
    });
}

// Scroll suave para toda la página
function initSmoothScroll() {
    // Configurar scroll suave para toda la página
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Agregar transiciones suaves a todos los elementos
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (!element.style.transition) {
            element.style.transition = 'all 0.3s ease';
        }
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar animación de título
    animateTitle();
    
    // Iniciar efectos de galería
    animateGalleryItems();
    
    // Crear partículas de fondo
    createParticles();
    
    // Inicializar cursor personalizado
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.custom-cursor') || createCustomCursor();
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Inicializar efectos de hover
    initGalleryHoverEffects();
    
    // Inicializar control de iconos flotantes
    initFloatingIconsControl();
    
    // Inicializar transiciones suaves entre secciones
    initSmoothSectionTransitions();
    
    // Inicializar scroll suave
    initSmoothScroll();
});
