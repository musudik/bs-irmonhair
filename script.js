/* ========================================
   IRMONHAIR BEAUTY - JavaScript Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // LANGUAGE SYSTEM
    // ========================================
    const translations = {
        de: {
            // Navigation
            'Startseite': 'Startseite',
            'Preise': 'Preise',
            'Galerie': 'Galerie',
            'Kontakt': 'Kontakt',
            
            // Hero
            'Willkommen bei Irmonhair Beauty': 'Willkommen bei Irmonhair Beauty',
            'Ihr exklusiver Friseur in München Hadern': 'Ihr exklusiver Friseur in München Hadern',
            'Unsere Leistungen': 'Unsere Leistungen',
            
            // Services Section
            'Unsere Leistungen & Preise': 'Unsere Leistungen & Preise',
            'Professionelle Haarpflege für Damen, Herren und Kinder': 'Professionelle Haarpflege für Damen, Herren und Kinder',
            
            // Service Categories
            'Damen - Haarschnitte & Stylings': 'Damen - Haarschnitte & Stylings',
            'Damen - Farbe & Coloration': 'Damen - Farbe & Coloration',
            'Herren - Haarschnitte & Stylings': 'Herren - Haarschnitte & Stylings',
            'Kinder - Haarschnitte': 'Kinder - Haarschnitte',
            'Augenbrauen & Wimpern': 'Augenbrauen & Wimpern',
            'Permanent Make-Up': 'Permanent Make-Up',
            
            // Service Items
            'Föhnen / Legen': 'Föhnen / Legen',
            'Waschen, Schneiden & Föhnen': 'Waschen, Schneiden & Föhnen',
            'Hochsteckfrisur': 'Hochsteckfrisur',
            'Dauerwelle & Styling': 'Dauerwelle & Styling',
            'Dauerwelle, Schnitt & Styling': 'Dauerwelle, Schnitt & Styling',
            'OLAPLEX Treatment (60 min)': 'OLAPLEX Treatment (60 min)',
            'Ansatzfarbe': 'Ansatzfarbe',
            'Komplettfarbe': 'Komplettfarbe',
            'Strähnen': 'Strähnen',
            'Balayage': 'Balayage',
            'Blondierung': 'Blondierung',
            'Glossing': 'Glossing',
            'Maschinenhaarschnitt': 'Maschinenhaarschnitt',
            'Schnitt & Styling': 'Schnitt & Styling',
            'Waschen, Schneiden & Styling': 'Waschen, Schneiden & Styling',
            'Bartschnitt': 'Bartschnitt',
            'Haare färben': 'Haare färben',
            'Kinderhaarschnitt (bis 10 Jahre)': 'Kinderhaarschnitt (bis 10 Jahre)',
            'Teenagerhaarschnitt (11-16 Jahre)': 'Teenagerhaarschnitt (11-16 Jahre)',
            'Wimpern färben': 'Wimpern färben',
            'Augenbrauen färben': 'Augenbrauen färben',
            'Augenbrauen zupfen': 'Augenbrauen zupfen',
            'Komplett-Paket (Farbe & Form)': 'Komplett-Paket (Farbe & Form)',
            'Augenbrauen (Microblading)': 'Augenbrauen (Microblading)',
            'Lippen (Vollschattierung)': 'Lippen (Vollschattierung)',
            'Eyeliner': 'Eyeliner',
            'Nacharbeit': 'Nacharbeit',
            
            // Gallery
            'Unsere Galerie': 'Unsere Galerie',
            'Einblicke in unsere Arbeit und unseren Salon': 'Einblicke in unsere Arbeit und unseren Salon',
            
            // Contact
            'Besuchen Sie uns oder vereinbaren Sie einen Termin': 'Besuchen Sie uns oder vereinbaren Sie einen Termin',
            'Adresse': 'Adresse',
            'Telefon': 'Telefon',
            'Öffnungszeiten': 'Öffnungszeiten',
            'Mo - Fr: 9:00 - 18:00 Uhr<br>Sa: 9:00 - 14:00 Uhr': 'Mo - Fr: 9:00 - 18:00 Uhr<br>Sa: 9:00 - 14:00 Uhr',
            'Anfahrt': 'Anfahrt',
            'U-Bahn: Großhadern (1 Min. Fußweg)': 'U-Bahn: Großhadern (1 Min. Fußweg)',
            
            // Footer
            'Ihr exklusiver Friseur in München Hadern für professionelle Haarpflege und Styling.': 'Ihr exklusiver Friseur in München Hadern für professionelle Haarpflege und Styling.',
            'Schnelllinks': 'Schnelllinks',
            'Rechtliches': 'Rechtliches',
            'Folgen Sie uns': 'Folgen Sie uns',
            'Alle Rechte vorbehalten.': 'Alle Rechte vorbehalten.'
        },
        en: {
            // Navigation
            'Startseite': 'Home',
            'Preise': 'Prices',
            'Galerie': 'Gallery',
            'Kontakt': 'Contact',
            
            // Hero
            'Willkommen bei Irmonhair Beauty': 'Welcome to Irmonhair Beauty',
            'Ihr exklusiver Friseur in München Hadern': 'Your exclusive hairdresser in Munich Hadern',
            'Unsere Leistungen': 'Our Services',
            
            // Services Section
            'Unsere Leistungen & Preise': 'Our Services & Prices',
            'Professionelle Haarpflege für Damen, Herren und Kinder': 'Professional hair care for ladies, gentlemen and children',
            
            // Service Categories
            'Damen - Haarschnitte & Stylings': 'Ladies - Haircuts & Styling',
            'Damen - Farbe & Coloration': 'Ladies - Color & Coloring',
            'Herren - Haarschnitte & Stylings': 'Men - Haircuts & Styling',
            'Kinder - Haarschnitte': 'Children - Haircuts',
            'Augenbrauen & Wimpern': 'Eyebrows & Lashes',
            'Permanent Make-Up': 'Permanent Makeup',
            
            // Service Items
            'Föhnen / Legen': 'Blow-dry / Set',
            'Waschen, Schneiden & Föhnen': 'Wash, Cut & Blow-dry',
            'Hochsteckfrisur': 'Updo',
            'Dauerwelle & Styling': 'Perm & Styling',
            'Dauerwelle, Schnitt & Styling': 'Perm, Cut & Styling',
            'OLAPLEX Treatment (60 min)': 'OLAPLEX Treatment (60 min)',
            'Ansatzfarbe': 'Root Color',
            'Komplettfarbe': 'Full Color',
            'Strähnen': 'Highlights',
            'Balayage': 'Balayage',
            'Blondierung': 'Bleaching',
            'Glossing': 'Glossing',
            'Maschinenhaarschnitt': 'Clipper Cut',
            'Schnitt & Styling': 'Cut & Styling',
            'Waschen, Schneiden & Styling': 'Wash, Cut & Styling',
            'Bartschnitt': 'Beard Trim',
            'Haare färben': 'Hair Color',
            'Kinderhaarschnitt (bis 10 Jahre)': "Children's Cut (up to 10 yrs)",
            'Teenagerhaarschnitt (11-16 Jahre)': 'Teen Cut (11-16 yrs)',
            'Wimpern färben': 'Lash Tinting',
            'Augenbrauen färben': 'Brow Tinting',
            'Augenbrauen zupfen': 'Brow Shaping',
            'Komplett-Paket (Farbe & Form)': 'Complete Package (Color & Shape)',
            'Augenbrauen (Microblading)': 'Eyebrows (Microblading)',
            'Lippen (Vollschattierung)': 'Lips (Full Shading)',
            'Eyeliner': 'Eyeliner',
            'Nacharbeit': 'Touch-up',
            
            // Gallery
            'Unsere Galerie': 'Our Gallery',
            'Einblicke in unsere Arbeit und unseren Salon': 'Insights into our work and our salon',
            
            // Contact
            'Besuchen Sie uns oder vereinbaren Sie einen Termin': 'Visit us or book an appointment',
            'Adresse': 'Address',
            'Telefon': 'Phone',
            'Öffnungszeiten': 'Opening Hours',
            'Mo - Fr: 9:00 - 18:00 Uhr<br>Sa: 9:00 - 14:00 Uhr': 'Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 9:00 AM - 2:00 PM',
            'Anfahrt': 'Directions',
            'U-Bahn: Großhadern (1 Min. Fußweg)': 'Subway: Großhadern (1 min walk)',
            
            // Footer
            'Ihr exklusiver Friseur in München Hadern für professionelle Haarpflege und Styling.': 'Your exclusive hairdresser in Munich Hadern for professional hair care and styling.',
            'Schnelllinks': 'Quick Links',
            'Rechtliches': 'Legal',
            'Folgen Sie uns': 'Follow Us',
            'Alle Rechte vorbehalten.': 'All rights reserved.'
        }
    };

    let currentLang = localStorage.getItem('irmonhair-lang') || 'de';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('irmonhair-lang', lang);
        
        // Update all elements with data-de and data-en attributes
        document.querySelectorAll('[data-de][data-en]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else {
                    el.innerHTML = text;
                }
            }
        });
        
        // Update language toggle button
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            const activeSpan = langToggle.querySelector('.lang-active');
            const inactiveSpan = langToggle.querySelector('.lang-inactive');
            if (lang === 'de') {
                activeSpan.textContent = 'DE';
                inactiveSpan.textContent = 'EN';
            } else {
                activeSpan.textContent = 'EN';
                inactiveSpan.textContent = 'DE';
            }
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            setLanguage(currentLang === 'de' ? 'en' : 'de');
        });
    }

    // Initialize language
    setLanguage(currentLang);

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // ========================================
    // MOBILE MENU
    // ========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ========================================
    // HERO SLIDESHOW
    // ========================================
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i]?.classList.remove('active');
        });
        
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide]?.classList.add('active');
        indicators[currentSlide]?.classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideshow() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetSlideshow();
        });
    });

    // Start slideshow
    if (slides.length > 0) {
        startSlideshow();
    }

    // ========================================
    // GALLERY LIGHTBOX
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    const galleryImages = [];

    // Build gallery images array
    galleryItems.forEach((item, index) => {
        const src = item.getAttribute('data-src');
        if (src) {
            galleryImages.push(src);
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        }
    });

    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

    // Close on overlay click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
