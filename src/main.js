// ── Portfolio Main JS ─────────────────────────────────────────────────
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAV: scroll state ────────────────────────────────────────
  const nav = document.getElementById('main-nav');
  const scrollThreshold = 40;

  const onScroll = () => {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check


  // ── 2. MOBILE NAV hamburger ─────────────────────────────────────
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Expose close function for inline onclick attrs
  window.closeMobileNav = () => {
    hamburger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };


  // ── 3. SMOOTH SCROLL with offset ───────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  // ── 4. SCROLL REVEAL ────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  // ── 5. PROCESS TIMELINE: active states + line draw ─────────────
  const processItems = document.querySelectorAll('.process__item');
  const processLine = document.getElementById('process-line');

  if (processItems.length && processLine) {
    const processList = document.querySelector('.process__list');

    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });

        // Draw line proportionate to progress
        if (processList) {
          const rect = processList.getBoundingClientRect();
          const total = processList.offsetHeight;
          const visible = Math.max(0, window.innerHeight - rect.top);
          const pct = Math.min(1, visible / total);
          processLine.style.height = (pct * 100) + '%';
        }
      },
      { threshold: 0.4 }
    );

    processItems.forEach(el => processObserver.observe(el));

    // Continuous line draw on scroll
    window.addEventListener('scroll', () => {
      if (!processList) return;
      const rect = processList.getBoundingClientRect();
      const total = processList.offsetHeight;
      const visible = Math.max(0, window.innerHeight - rect.top);
      const pct = Math.min(1, visible / total);
      processLine.style.height = (pct * 100) + '%';
    }, { passive: true });
  }


  // ── 6. MAGNETIC BUTTON effect ──────────────────────────────────
  const magneticBtns = document.querySelectorAll('#hero-cta, #hero-cv');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.3;
      const dy = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });


  // ── 7. BENTO CARD tilt effect ──────────────────────────────────
  document.querySelectorAll('.bento__card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `
        perspective(600px)
        rotateX(${-y * 6}deg)
        rotateY(${x * 6}deg)
        translateY(-4px)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  // ── 8. GSAP animations (if loaded) ─────────────────────────────
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero headline word stagger
    const heroHL = document.querySelector('.hero__headline');
    if (heroHL) {
      const words = heroHL.querySelectorAll('em, br');
      gsap.from(heroHL, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
        clearProps: 'all',
      });
    }

    // Bento cards stagger in
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.from('.bento__card', {
        opacity: 0,
        y: 50,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#work',
          start: 'top 75%',
        },
        clearProps: 'all',
      });

      // Stats count-up feel
      gsap.from('.hero__stat strong', {
        textContent: 0,
        duration: 1.5,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        delay: 0.8,
      });
    }
  }


  // ── 9. CONTACT form handling ────────────────────────────────────
  const form = document.getElementById('contact-form');
  const submit = document.getElementById('contact-submit');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.textContent = 'Sending…';
    submit.disabled = true;

    // Simulate async — replace with actual fetch/API call
    setTimeout(() => {
      submit.textContent = 'Message Sent! 🎉';
      submit.style.background = 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)';
      form.reset();
      setTimeout(() => {
        submit.textContent = 'Send Message →';
        submit.disabled = false;
        submit.style.background = '';
      }, 3500);
    }, 1200);
  });

});
