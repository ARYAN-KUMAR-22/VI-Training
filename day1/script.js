/* ============================================
   IOCL Home Page — JavaScript
   Slider, Counters, Menu, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== HERO SLIDER ==========
  const slider = {
    container: document.querySelector('.hero-slides'),
    slides: document.querySelectorAll('.hero-slide'),
    dots: document.querySelectorAll('.slider-dot'),
    prevBtn: document.querySelector('.slider-arrow.prev'),
    nextBtn: document.querySelector('.slider-arrow.next'),
    current: 0,
    total: 0,
    interval: null,
    autoPlayDelay: 5000,

    init() {
      this.total = this.slides.length;
      if (this.total === 0) return;

      this.dots.forEach((dot, i) => {
        dot.addEventListener('click', () => this.goTo(i));
      });

      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

      this.startAutoPlay();

      // Pause on hover
      const heroSection = document.querySelector('.hero-slider');
      if (heroSection) {
        heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
        heroSection.addEventListener('mouseleave', () => this.startAutoPlay());
      }

      // Touch support
      let touchStartX = 0;
      if (heroSection) {
        heroSection.addEventListener('touchstart', (e) => {
          touchStartX = e.touches[0].clientX;
          this.stopAutoPlay();
        }, { passive: true });

        heroSection.addEventListener('touchend', (e) => {
          const diff = touchStartX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) {
            diff > 0 ? this.next() : this.prev();
          }
          this.startAutoPlay();
        }, { passive: true });
      }
    },

    goTo(index) {
      this.current = index;
      if (this.container) {
        this.container.style.transform = `translateX(-${this.current * (100 / this.total)}%)`;
      }
      this.updateDots();
      this.resetAnimations();
    },

    next() {
      this.goTo((this.current + 1) % this.total);
    },

    prev() {
      this.goTo((this.current - 1 + this.total) % this.total);
    },

    updateDots() {
      this.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.current);
      });
    },

    resetAnimations() {
      // Re-trigger text animations on current slide
      const currentSlide = this.slides[this.current];
      if (!currentSlide) return;
      const h2 = currentSlide.querySelector('h2');
      const p = currentSlide.querySelector('p');
      const btn = currentSlide.querySelector('.hero-btn');

      [h2, p, btn].forEach(el => {
        if (el) {
          el.style.animation = 'none';
          el.offsetHeight; // trigger reflow
          el.style.animation = '';
        }
      });
    },

    startAutoPlay() {
      this.stopAutoPlay();
      this.interval = setInterval(() => this.next(), this.autoPlayDelay);
    },

    stopAutoPlay() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  };

  slider.init();


  // ========== STICKY NAVIGATION ==========
  const mainNav = document.querySelector('.main-nav');
  const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
  const headerMiddleHeight = document.querySelector('.header-middle')?.offsetHeight || 0;
  const scrollThreshold = topBarHeight + headerMiddleHeight;

  window.addEventListener('scroll', () => {
    if (mainNav) {
      mainNav.classList.toggle('scrolled', window.scrollY > scrollThreshold);
    }
  });


  // ========== MOBILE MENU ==========
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMobileMenu() {
    hamburger?.classList.toggle('active');
    navMenu?.classList.toggle('open');
    navOverlay?.classList.toggle('active');
    document.body.style.overflow = navMenu?.classList.contains('open') ? 'hidden' : '';
  }

  hamburger?.addEventListener('click', toggleMobileMenu);
  navOverlay?.addEventListener('click', toggleMobileMenu);

  // Mobile sub-menu toggles
  const menuItems = document.querySelectorAll('.nav-menu > li');
  menuItems.forEach(item => {
    const link = item.querySelector(':scope > a');
    const subMenu = item.querySelector('.mega-menu, .dropdown-menu');
    if (subMenu && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          // Close all other open menus
          menuItems.forEach(other => {
            if (other !== item) other.classList.remove('menu-open');
          });
          item.classList.toggle('menu-open');
        }
      });
    }
  });


  // ========== SCROLL-TO-TOP BUTTON ==========
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // ========== ANIMATED COUNTERS ==========
  const counters = document.querySelectorAll('.stat-number .count');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;

    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      countersAnimated = true;

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(eased * target);

          counter.textContent = currentValue.toLocaleString('en-IN');

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString('en-IN');
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Check on load


  // ========== SCROLL FADE-IN ANIMATIONS ==========
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => fadeObserver.observe(el));


  // ========== FONT SIZE CONTROLS ==========
  const incFont = document.getElementById('incfont');
  const decFont = document.getElementById('decfont');
  let currentFontSize = 16;

  incFont?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentFontSize < 22) {
      currentFontSize += 1;
      document.body.style.fontSize = currentFontSize + 'px';
    }
  });

  decFont?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentFontSize > 12) {
      currentFontSize -= 1;
      document.body.style.fontSize = currentFontSize + 'px';
    }
  });


  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ========== ANNOUNCEMENT AUTO-SCROLL ==========
  const announcementItems = document.querySelector('.announcement-items');
  if (announcementItems) {
    let scrollDirection = 1;
    let autoScrollPaused = false;

    announcementItems.addEventListener('mouseenter', () => { autoScrollPaused = true; });
    announcementItems.addEventListener('mouseleave', () => { autoScrollPaused = false; });

    setInterval(() => {
      if (autoScrollPaused) return;
      const maxScroll = announcementItems.scrollHeight - announcementItems.clientHeight;

      if (announcementItems.scrollTop >= maxScroll) {
        scrollDirection = -1;
      } else if (announcementItems.scrollTop <= 0) {
        scrollDirection = 1;
      }

      announcementItems.scrollTop += scrollDirection;
    }, 40);
  }

});
