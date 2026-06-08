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
