// Variables globales
let currentTestimonialSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

// Funci?n para toggle del men? m?vil
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.toggle('active');
    
    // Cambiar icono del men?
    if (mobileMenu.classList.contains('active')) {
        menuBtn.className = 'fas fa-times';
    } else {
        menuBtn.className = 'fas fa-bars';
    }
}

// Funci?n para cambiar slide de testimonios
function currentSlide(n) {
    showTestimonial(currentTestimonialSlide = n);
}

function showTestimonial(n) {
    // Ocultar todos los testimonios
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remover clase active de todos los dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Mostrar testimonial actual
    if (testimonials[n]) {
        testimonials[n].classList.add('active');
        dots[n].classList.add('active');
    }
}

// Auto-slider para testimonios
function nextTestimonial() {
    currentTestimonialSlide++;
    if (currentTestimonialSlide >= testimonials.length) {
        currentTestimonialSlide = 0;
    }
    showTestimonial(currentTestimonialSlide);
}

// Funci?n para smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Funci?n para agregar al carrito
function addToCart(productName, price) {
    // Actualizar contador del carrito
    const cartCount = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    
    // Mostrar notificaci?n
    showNotification(`${productName} agregado al carrito`);
}

// Funci?n para mostrar notificaciones
function showNotification(message) {
    // Crear elemento de notificaci?n
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remover despu?s de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Funci?n para b?squeda
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        showNotification(`Buscando: "${searchTerm}"`);
        // Aqu? ir?a la l?gica de b?squeda real
        console.log('B?squeda:', searchTerm);
    }
}

// Funci?n para scroll suave en enlaces
function handleNavLinks() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
            
            // Cerrar men? m?vil si est? abierto
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
}

// Funci?n para animaciones en scroll
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature, .category-card, .product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar slider de testimonios
    if (testimonials.length > 0) {
        showTestimonial(0);
        
        // Auto-play cada 4 segundos
        setInterval(nextTestimonial, 4000);
    }
    
    // Configurar enlaces de navegaci?n
    handleNavLinks();
    
    // Configurar animaciones de scroll
    handleScrollAnimations();
    
    // Event listener para b?squeda
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-bar button');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Event listeners para botones "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;
            addToCart(productName, price);
        });
    });
    
    // Event listeners para categor?as
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            showNotification(`Navegando a categor?a: ${categoryName}`);
            // Aqu? ir?a la navegaci?n real a la categor?a
        });
    });
    
    // Event listeners para botones CTA
    const ctaButtons = document.querySelectorAll('.cta button, .hero-buttons button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            showNotification(`${buttonText} - Funcionalidad pr?ximamente`);
        });
    });
    
    // Cerrar men? m?vil al hacer click fuera
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                toggleMobileMenu();
            }
        }
    });
    
    // Scroll hacia arriba al hacer click en el logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Funci?n para lazy loading de im?genes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Funci?n para efectos de parallax suave
function handleParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Funci?n para contador animado
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar animaci?n cuando el elemento es visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Estilos adicionales para animaciones (se agregan din?micamente)
const additionalStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .mobile-menu.active {
        display: block !important;
        animation: fadeIn 0.3s ease-out;
    }
    
    .category-card:active {
        transform: translateY(-2px) scale(0.98);
    }
    
    .product-card:active {
        transform: translateY(-2px) scale(0.98);
    }
    
    .btn-primary:active,
    .btn-secondary:active,
    .add-to-cart:active {
        transform: translateY(0) scale(0.95);
    }
`;

// Agregar estilos adicionales al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Inicializar funciones adicionales cuando la p?gina est? lista
window.addEventListener('load', function() {
    lazyLoadImages();
    animateCounters();
    // handleParallax(); // Descomenta si quieres efecto parallax
});