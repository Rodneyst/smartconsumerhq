/**
 * Smart Consumer HQ — script.js
 * Vanilla JavaScript — no dependencies
 */

'use strict';

/* ================================================
   1. STICKY HEADER SHADOW
   ================================================ */
(function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* ================================================
   2. MOBILE MENU TOGGLE
   ================================================ */
(function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav    = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  let isOpen = false;

  const setOpen = (open) => {
    isOpen = open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(!isOpen));

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !nav.contains(e.target) && !toggle.contains(e.target)) {
      setOpen(false);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) setOpen(false);
  });
})();


/* ================================================
   3. SCROLL REVEAL ANIMATION
   ================================================ */
(function initReveal() {
  // Add reveal class to key elements
  const selectors = [
    '.category-card',
    '.guide-card',
    '.pillar',
    '.section-header',
    '.about-text',
    '.newsletter-content',
    '.newsletter-form',
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger cards in grids
      const parent = el.parentElement;
      if (parent && (parent.classList.contains('categories-grid') ||
                     parent.classList.contains('guides-grid') ||
                     parent.classList.contains('pillars-grid'))) {
        const delayIndex = (i % 5) + 1;
        el.classList.add(`reveal-delay-${delayIndex}`);
      }
    });
  });

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ================================================
   4. NEWSLETTER FORM
   ================================================ */
(function initNewsletterForm() {
  const form    = document.getElementById('newsletter-form');
  const input   = document.getElementById('email-input');
  const success = document.getElementById('form-success');
  if (!form || !input || !success) return;

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!isValidEmail(email)) {
      input.classList.add('invalid');
      input.focus();
      input.setAttribute('aria-invalid', 'true');
      return;
    }

    input.classList.remove('invalid');
    input.setAttribute('aria-invalid', 'false');

    // Simulate successful submission
    input.disabled = true;
    form.querySelector('button[type="submit"]').disabled = true;
    success.hidden = false;

    // In production, replace this with a real API call:
    // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' } });
    console.log('[SmartConsumerHQ] Newsletter signup:', email);
  });

  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
      input.setAttribute('aria-invalid', 'false');
    }
  });
})();


/* ================================================
   5. SMOOTH SCROLL FOR ANCHOR LINKS
   ================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 68;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top, behavior: 'smooth' });
      // Update URL without triggering scroll
      history.pushState(null, '', `#${id}`);
    });
  });
})();


/* ================================================
   6. ACTIVE NAV HIGHLIGHTING (scroll-spy)
   ================================================ */
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const headerH = () => document.getElementById('site-header')?.offsetHeight ?? 68;

  const activate = (id) => {
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${id}`;
      link.style.color = active ? 'var(--blue)' : '';
      link.style.background = active ? 'var(--blue-light)' : '';
    });
  };

  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= headerH() + 60) current = sec.id;
    });
    if (current) activate(current);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ================================================
   7. NAV DROPDOWN (keyboard + click accessible)
   ================================================ */
(function initDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(item => {
    const toggle = item.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    // Hover is CSS; this handles keyboard/touch
    toggle.addEventListener('click', (e) => {
      const isOpen = item.classList.contains('open');
      // Close all first
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      item.classList.remove('open');
    });

    // Keyboard: Enter/Space to open, Escape to close
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('open');
      }
      if (e.key === 'Escape') item.classList.remove('open');
    });
  });
})();


/* ================================================
   8. FAQ ACCORDION
   ================================================ */
(function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all in same container
      const container = item.closest('.faq-section') || item.parentElement;
      container.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();


/* ================================================
   9. ACTIVE NAV STATE for inner pages
   ================================================ */
(function markActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.main-nav a, .dropdown-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Normalize: strip trailing slash, compare
    const linkPath = href.replace(/\/$/, '');
    const currentPath = path.replace(/\/$/, '');
    if (linkPath && linkPath !== '/' && currentPath.includes(linkPath.replace(/\.html$/, ''))) {
      link.style.color = 'var(--blue)';
      link.style.fontWeight = '700';
    }
  });
})();

