const { createApp } = Vue;

createApp({
    data() {
        return {
            isScrolled: false,
            mobileMenuOpen: false,
            showVideo: false,
            values: [
                {
                    name: 'Empathy',
                    description: 'Supporting the emotional well-being of every boy child.',
                    icon: 'fas fa-heart'
                },
                {
                    name: 'Inclusivity',
                    description: 'Providing equal access to mental health services.',
                    icon: 'fas fa-users'
                },
                {
                    name: 'Integrity',
                    description: 'Upholding transparency, accountability, and ethics.',
                    icon: 'fas fa-shield-alt'
                },
                {
                    name: 'Empowerment',
                    description: 'Building confidence and self-reliance.',
                    icon: 'fas fa-rocket'
                },
                {
                    name: 'Collaboration',
                    description: 'Partnering with communities for greater impact.',
                    icon: 'fas fa-handshake'
                }
            ],
            programs: [
                {
                    name: 'Mental Health Awareness',
                    description: 'Educating communities about unique mental health challenges facing young people, especially boys, and breaking stigma around seeking help.',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-brain',
                    features: ['Workshops', 'Community Sessions', 'Awareness Campaigns']
                },
                {
                    name: 'Peer Support Networks',
                    description: 'Creating safe spaces for young people to connect, share experiences, and support each other through peer counseling and group activities.',
                    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-people-group',
                    features: ['Peer Counseling', 'Support Groups', 'Mentorship']
                },
                {
                    name: 'Education & Training',
                    description: 'Providing comprehensive workshops and school programs that equip young people with life skills, emotional intelligence, and coping strategies.',
                    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-graduation-cap',
                    features: ['Life Skills', 'Emotional Intelligence', 'Coping Strategies']
                },
                {
                    name: 'Community Advocacy',
                    description: 'Collaborating with local organizations, schools, and healthcare providers to improve mental health services and create supportive environments.',
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-bullhorn',
                    features: ['Policy Advocacy', 'Community Partnerships', 'Service Improvement']
                },
                {
                    name: 'Research & Innovation',
                    description: 'Conducting research to understand local mental health needs and developing evidence-based practices and policies for better outcomes.',
                    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-microscope',
                    features: ['Community Research', 'Data Analysis', 'Policy Development']
                },
                {
                    name: 'Talent Development',
                    description: 'Discovering and nurturing talents in young people through creative programs, sports, and skills development initiatives.',
                    image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=400&h=300&fit=crop&crop=center',
                    icon: 'fas fa-star',
                    features: ['Creative Arts', 'Sports Programs', 'Skills Development']
                }
            ],
            futurePlans: [
                {
                    period: 'Q4 2025',
                    title: 'Quarterly Showcase Events',
                    description: 'Launch regular quarterly events to showcase youth talents and celebrate achievements in the community.'
                },
                {
                    period: '2025-2026',
                    title: 'Strategic Partnerships',
                    description: 'Expand partnerships with schools, churches, and CBOs to reach more young people across Murang\'a County.'
                },
                {
                    period: '2026',
                    title: 'Scholarship Fund Launch',
                    description: 'Establish a scholarship fund to support promising youth in their educational and professional development.'
                },
                {
                    period: '2026-2027',
                    title: 'Impact Measurement',
                    description: 'Implement comprehensive monitoring and evaluation framework to measure and improve program impact.'
                }
            ],
            testimonials: [
                {
                    name: 'John Kamau',
                    role: 'Program Participant',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    quote: 'The BMF workshop changed my perspective on mental health. I learned it\'s okay to seek help and talk about my feelings.',
                    rating: 5
                },
                {
                    name: 'Grace Wanjiku',
                    role: 'Parent',
                    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face',
                    quote: 'I\'m grateful for the support my son received. The foundation truly cares about our youth and their wellbeing.',
                    rating: 5
                },
                {
                    name: 'Pastor Michael',
                    role: 'Community Leader',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                    quote: 'BMF\'s approach to youth empowerment is holistic and effective. They\'re making a real difference in our community.',
                    rating: 5
                }
            ],
            gallery: [
                {
                    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop&crop=center',
                    caption: 'Youth Workshop - June 2025',
                    category: 'workshops'
                },
                {
                    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center',
                    caption: 'Community Gathering',
                    category: 'community'
                },
                {
                    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop&crop=center',
                    caption: 'Mentorship Session',
                    category: 'mentorship'
                },
                {
                    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&crop=center',
                    caption: 'Peer Support Group',
                    category: 'support'
                },
                {
                    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center',
                    caption: 'Educational Training',
                    category: 'education'
                },
                {
                    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=300&fit=crop&crop=center',
                    caption: 'Talent Development',
                    category: 'talents'
                }
            ]
        }
    },
    mounted() {
        // Initialize AOS (Animate On Scroll) - Faster for mobile
        AOS.init({
            duration: 400,
            easing: 'ease-out',
            once: true,
            offset: 50,
            delay: 0,
            disable: function() {
                // Disable on mobile for faster loading
                return window.innerWidth < 768;
            }
        });

        // Handle scroll events
        window.addEventListener('scroll', this.handleScroll);
        
        // Add smooth scrolling behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize lazy loading for images
        this.initLazyLoading();
        
        // Add parallax effect to hero section
        this.initParallax();
        
        // Counter animation for stats
        this.animateCounters();
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        scrollTo(elementId) {
            this.mobileMenuOpen = false;
            const element = document.getElementById(elementId);
            if (element) {
                const navHeight = 70;
                const targetPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },
        
        downloadPDF() {
            // Hide navigation and buttons for printing
            const navbar = document.querySelector('.navbar');
            const downloadBtns = document.querySelectorAll('.no-print');
            
            // Trigger browser print dialog
            window.print();
        },
        
        initLazyLoading() {
            // Tailwind and modern browsers handle image loading efficiently
            // This method is kept for future enhancements
        },
        
        initParallax() {
            const hero = document.querySelector('.hero-image');
            if (!hero) return;
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        },
        
        animateCounters() {
            const stats = document.querySelectorAll('.stat-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                        
                        if (numericValue) {
                            this.animateNumber(target, numericValue, finalValue);
                        }
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.5 });
            
            stats.forEach(stat => observer.observe(stat));
        },
        
        animateNumber(element, target, suffix) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (suffix.includes('+') ? '+' : '');
            }, 30);
        },
        
        filterGallery(category) {
            // Gallery filtering functionality
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        },
        
        openLightbox(image) {
            // Lightbox functionality for gallery images
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${image}" alt="Gallery Image">
                </div>
            `;
            document.body.appendChild(lightbox);
            
            // Close lightbox on click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    document.body.removeChild(lightbox);
                }
            });
        },
        
        // Form validation and submission
        validateForm(formData) {
            const errors = {};
            
            if (!formData.name || formData.name.length < 2) {
                errors.name = 'Name is required and must be at least 2 characters';
            }
            
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Valid email is required';
            }
            
            if (!formData.message || formData.message.length < 10) {
                errors.message = 'Message is required and must be at least 10 characters';
            }
            
            return errors;
        },
        
        submitContactForm(formData) {
            const errors = this.validateForm(formData);
            
            if (Object.keys(errors).length === 0) {
                // Simulate form submission
                console.log('Form submitted:', formData);
                
                // Show success message
                this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                return true;
            } else {
                // Show error messages
                this.showNotification('Please fix the errors in the form', 'error');
                return false;
            }
        },
        
        showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => notification.classList.add('show'), 100);
            
            // Remove after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => document.body.removeChild(notification), 300);
            }, 5000);
        },
        
        // Share functionality
        shareOnSocial(platform, url = window.location.href, text = 'Check out Beulah Muthonii Foundation') {
            const encodedUrl = encodeURIComponent(url);
            const encodedText = encodeURIComponent(text);
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        },
        
        // Scroll to top functionality
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        
        // Newsletter subscription
        subscribeNewsletter(email) {
            if (!email || !/\S+@\S+\.\S+/.test(email)) {
                this.showNotification('Please enter a valid email address', 'error');
                return false;
            }
            
            // Simulate newsletter subscription
            console.log('Newsletter subscription:', email);
            this.showNotification('Thank you for subscribing to our newsletter!', 'success');
            return true;
        },
        
        // Cookie consent (if needed)
        acceptCookies() {
            localStorage.setItem('cookies_accepted', 'true');
            const banner = document.querySelector('.cookie-banner');
            if (banner) {
                banner.style.display = 'none';
            }
        },
        
        // Initialize page interactions optimized for Tailwind
        initInteractions() {
            // Tailwind handles hover effects via utility classes
            // This method is kept for custom JavaScript interactions
        }
    },
    
    // Watch for route changes if implementing SPA functionality
    watch: {
        mobileMenuOpen(newVal) {
            document.body.style.overflow = newVal ? 'hidden' : '';
        }
    },
    
    // Cleanup on component destroy
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');