document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LIGHT / DARK THEME TOGGLE
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            // Switch to light theme
            document.body.classList.replace('dark-theme', 'light-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark theme
            document.body.classList.replace('light-theme', 'dark-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================
    // 2. SCROLL PROGRESS & HEADER SCROLL EFFECT
    // ==========================================
    const mainHeader = document.getElementById('main-header');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        // Update progress bar
        scrollProgress.style.width = `${scrollPercent}%`;

        // Update header background
        if (scrollTop > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. MOBILE MENU NAVIGATION
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavPanel = document.getElementById('mobile-nav-panel');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNavPanel.classList.toggle('open');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = mobileNavPanel.classList.contains('open') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavPanel.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Close mobile menu when window is resized above mobile threshold
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavPanel.classList.contains('open')) {
            toggleMenu();
        }
    });

    // ==========================================
    // 4. ACTIVE LINK ON SCROLL (INTERSECTION OBSERVER)
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mNavLinks = document.querySelectorAll('.mobile-nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // trigger when section covers middle portion of screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                // Desktop Link update
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });

                // Mobile Link update
                mNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ==========================================
    // 5. TIMELINE FILTERING LOGIC
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    // Show item
                    item.style.display = 'block';
                    // Retrigger simple entrance animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide item
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // match transitional styling duration
                }
            });
        });
    });

    // ==========================================
    // 6. SCROLL REVEAL ANIMATION
    // ==========================================
    const revealElements = document.querySelectorAll('.animate-reveal');
    
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 7. CONTACT FORM SUBMISSION HANDLING
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name').value;
            const accessKeyInput = contactForm.querySelector('input[name="access_key"]').value;

            // Pastikan user sudah mengganti placeholder key
            if (accessKeyInput === 'YOUR_ACCESS_KEY_HERE') {
                formStatus.style.display = 'block';
                formStatus.className = 'form-status error';
                formStatus.innerHTML = `<i class="fas fa-exclamation-circle"></i> Mohon ganti 'YOUR_ACCESS_KEY_HERE' dengan Access Key Web3Forms Anda di file index.html terlebih dahulu.`;
                return;
            }

            // Form Status: Loading state
            formStatus.style.display = 'block';
            formStatus.className = 'form-status';
            formStatus.textContent = 'Mengirim pesan...';
            
            const formData = new FormData(contactForm);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Success
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = `<i class="fas fa-check-circle"></i> Terima kasih ${nameInput}, pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.`;
                    contactForm.reset();
                } else {
                    // API Error Response
                    console.log(response);
                    formStatus.className = 'form-status error';
                    formStatus.innerHTML = `<i class="fas fa-exclamation-circle"></i> Maaf, terjadi kesalahan: ${json.message}`;
                }
            })
            .catch(error => {
                // Connection/Network Error
                console.log(error);
                formStatus.className = 'form-status error';
                formStatus.innerHTML = `<i class="fas fa-exclamation-circle"></i> Maaf, terjadi kesalahan jaringan saat mengirim pesan.`;
            })
            .then(() => {
                // Sembunyikan status setelah 5 detik
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            });
        });
    }

    // ==========================================
    // 8. LIGHTBOX MODAL GALLERY
    // ==========================================
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const openGalleryBtns = document.querySelectorAll('.open-gallery-btn');

    let currentImages = [];
    let currentCaptions = [];
    let currentIndex = 0;

    if (modal && openGalleryBtns.length > 0) {
        openGalleryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const imagesStr = btn.getAttribute('data-images');
                const captionsStr = btn.getAttribute('data-captions') || '';
                
                if (imagesStr) {
                    currentImages = imagesStr.split(',').map(s => s.trim());
                    currentCaptions = captionsStr ? captionsStr.split(',').map(s => s.trim()) : [];
                    currentIndex = 0;
                    
                    showImage(currentIndex);
                    modal.style.display = 'flex';
                    setTimeout(() => modal.classList.add('show'), 10);
                    document.body.style.overflow = 'hidden'; // prevent background scroll
                }
            });
        });

        const showImage = (index) => {
            modalImg.src = currentImages[index];
            
            // Set caption
            if (currentCaptions[index]) {
                modalCaption.textContent = currentCaptions[index];
            } else {
                modalCaption.textContent = `Foto ${index + 1} dari ${currentImages.length}`;
            }

            // Hide/show navigation buttons based on image count
            if (currentImages.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
        };

        const navigateImage = (direction) => {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % currentImages.length;
            } else if (direction === 'prev') {
                currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            }
            showImage(currentIndex);
        };

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateImage('prev');
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateImage('next');
        });

        // Close modal when Close Button is clicked
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside the content
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content')) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('show')) {
                if (e.key === 'ArrowRight') navigateImage('next');
                if (e.key === 'ArrowLeft') navigateImage('prev');
                if (e.key === 'Escape') {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300);
                    document.body.style.overflow = '';
                }
            }
        });
    }
});

