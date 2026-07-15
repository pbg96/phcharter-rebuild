/* ── PHCSE Scroll-Driven Video Experience ─────────────────────────
   Stack: Lenis (smooth scroll) + GSAP (hero entrance + section anims)
   Architecture: hero slider → canvas frame scrub → overlay sections
   ─────────────────────────────────────────────────────────────────── */

gsap.registerPlugin(ScrollTrigger);

// ── Slide data ────────────────────────────────────────────────────
const SLIDES = [
  {
    headline:   'Kindergarten & 8th Grade Graduation Photo Galleries',
    subhead:    null,
    body:       null,
    ctas: [
      { label: 'Kindergarten Gallery', href: 'https://uwebtvstudios.shootproof.com/gallery/eb2425ce-370d-45e0-acd8-0eb33298d831', variant: 'gold' },
      { label: '8th Grade Gallery',    href: 'https://uwebtvstudios.shootproof.com/gallery/cfde26f0-283d-4d8c-b849-a4a42dc43739', variant: 'outline' },
    ],
  },
  {
    headline:   'McKinney-Vento Homeless Assistance Support',
    subhead:    null,
    body:       'Does your family lack a fixed, regular nighttime residence due to hardship, disaster, or housing instability? Your student may qualify for educational support services.',
    ctas: [
      { label: 'Read Article', href: '/mckinney-vento-homeless-assistance', variant: 'gold' },
    ],
  },
  {
    headline:   'Preparing Young Scholars For The First 21st Century And Beyond',
    subhead:    null,
    body:       'Our vision is for every student to reach his or her full potential and discover the pathways for lifelong success.',
    ctas: [
      { label: 'Enroll Now',          href: 'https://www.enrollphcharter.org/school-tours#SchoolTourForm', variant: 'gold' },
      { label: 'View School Calendar',href: 'https://phcharter.org/wp-content/uploads/2025/06/2025-2026-PHCSE-School-Calendar.pdf', variant: 'outline' },
    ],
  },
  {
    headline:   'Building Confidence Through Real-World Entrepreneurship',
    subhead:    'As featured in TribLive',
    body:       null,
    ctas: [
      { label: 'Read Article', href: 'https://triblive.com/local/penn-hills/microsociety-builds-confidence-challenges-students-at-penn-hills-charter-school-of-entrepreneurship/', variant: 'gold' },
    ],
  },
  {
    headline:   'School Breakfast Challenge',
    subhead:    null,
    body:       'Great Schools, Better Communities',
    ctas: [
      { label: 'Enroll Now', href: 'https://www.enrollphcharter.org/school-tours#SchoolTourForm', variant: 'gold' },
    ],
  },
  {
    headline:   'As Featured in CBS News',
    subhead:    null,
    body:       null,
    ctas: [],
  },
];

// ── Canvas config ─────────────────────────────────────────────────
const FRAME_COUNT = 300;
const FRAME_SPEED = 2.0;
const IMAGE_SCALE = 0.85;
const BG_COLOR    = '#07071A';

// ── DOM refs ──────────────────────────────────────────────────────
const loader      = document.getElementById('loader');
const loaderBar   = document.getElementById('loader-bar');
const loaderPct   = document.getElementById('loader-percent');
const hero        = document.getElementById('hero');
const canvasWrap  = document.getElementById('canvas-wrap');
const canvas      = document.getElementById('canvas');
const ctx         = canvas.getContext('2d');
const darkOverlay = document.getElementById('dark-overlay');
const marqueeWrap = document.getElementById('marquee');
const marqueeText = marqueeWrap.querySelector('.marquee-text');
const sections    = Array.from(document.querySelectorAll('.scroll-section'));

// Slider DOM
const slideEls    = Array.from(document.querySelectorAll('.slide'));
const dotEls      = Array.from(document.querySelectorAll('.dot'));
const heroContent = document.getElementById('hero-content');
const heroHeading = document.getElementById('hero-heading');
const heroSubhead = document.getElementById('hero-subhead');
const heroBody    = document.getElementById('hero-body');
const heroCtas    = document.getElementById('hero-ctas');

// ── Lenis ─────────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

// ── Canvas setup ──────────────────────────────────────────────────
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width  = window.innerWidth  * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width  = window.innerWidth  + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (frames[currentFrame]) drawFrame(currentFrame);
  updateMaxScroll();
}
window.addEventListener('resize', resizeCanvas);

// ── Frame state ───────────────────────────────────────────────────
const frames     = new Array(FRAME_COUNT).fill(null);
let currentFrame = 0;
let framesLoaded = 0;
let pendingDraw  = false;

function frameSrc(i) {
  return `frames/frame_${String(i + 1).padStart(4, '0')}.jpg`;
}

function drawFrame(index) {
  const img = frames[index];
  if (!img) return;
  const cw = window.innerWidth, ch = window.innerHeight;
  const iw = img.naturalWidth,  ih = img.naturalHeight;
  if (!iw || !ih) return;
  const scale = Math.max(cw / iw, ch / ih) * IMAGE_SCALE;
  const dw = iw * scale, dh = ih * scale;
  const dx = (cw - dw) / 2, dy = (ch - dh) / 2;
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(img, dx, dy, dw, dh);
}

function scheduleDraw(index) {
  if (pendingDraw) return;
  pendingDraw = true;
  requestAnimationFrame(() => { pendingDraw = false; drawFrame(index); });
}

function loadFrame(index) {
  return new Promise(resolve => {
    if (frames[index]) { resolve(); return; }
    const img = new Image();
    img.onload = () => {
      frames[index] = img;
      framesLoaded++;
      updateLoaderUI();
      resolve();
    };
    img.onerror = () => { framesLoaded++; updateLoaderUI(); resolve(); };
    img.src = frameSrc(index);
  });
}

function updateLoaderUI() {
  const pct = Math.round((framesLoaded / FRAME_COUNT) * 100);
  loaderBar.style.width = pct + '%';
  loaderPct.textContent = pct + '%';
}

async function runLoader() {
  resizeCanvas();
  await Promise.all(Array.from({ length: 10 }, (_, i) => loadFrame(i)));
  drawFrame(0);
  await Promise.all(Array.from({ length: FRAME_COUNT - 10 }, (_, i) => loadFrame(i + 10)));
  gsap.to(loader, {
    opacity: 0, duration: 0.6, ease: 'power2.in',
    onComplete: () => { loader.style.display = 'none'; initExperience(); },
  });
}

// ── Slider ────────────────────────────────────────────────────────
let sliderCurrent = 0;
let sliderTimer   = null;

function renderSlideContent(index) {
  const data = SLIDES[index];

  heroHeading.textContent = data.headline;

  if (data.subhead) {
    heroSubhead.textContent = data.subhead;
    heroSubhead.style.display = '';
  } else {
    heroSubhead.style.display = 'none';
  }

  if (data.body) {
    heroBody.textContent = data.body;
    heroBody.style.display = '';
  } else {
    heroBody.style.display = 'none';
  }

  heroCtas.innerHTML = data.ctas.map(cta => {
    const isExternal = cta.href.startsWith('http');
    return `<a
      href="${cta.href}"
      class="hero-btn ${cta.variant === 'gold' ? 'hero-btn-gold' : 'hero-btn-outline'}"
      ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}
    >${cta.label}</a>`;
  }).join('');
}

function goToSlide(index, skipAnimation) {
  // Deactivate current
  slideEls[sliderCurrent].classList.remove('slide-active');
  dotEls[sliderCurrent].classList.remove('dot-active');

  sliderCurrent = (index + SLIDES.length) % SLIDES.length;

  // Activate next
  slideEls[sliderCurrent].classList.add('slide-active');
  dotEls[sliderCurrent].classList.add('dot-active');

  // Animate content in
  if (!skipAnimation) {
    heroContent.classList.remove('animate');
    requestAnimationFrame(() => heroContent.classList.add('animate'));
  }
  renderSlideContent(sliderCurrent);
}

function startSliderAutoplay() {
  if (sliderTimer) return;
  sliderTimer = setInterval(() => goToSlide(sliderCurrent + 1, false), 5000);
}

function stopSliderAutoplay() {
  clearInterval(sliderTimer);
  sliderTimer = null;
}

function initSlider() {
  // Render first slide content immediately
  renderSlideContent(0);
  heroContent.classList.add('animate');

  // Arrow controls
  document.getElementById('slider-prev').addEventListener('click', () => {
    stopSliderAutoplay();
    goToSlide(sliderCurrent - 1, false);
    startSliderAutoplay();
  });
  document.getElementById('slider-next').addEventListener('click', () => {
    stopSliderAutoplay();
    goToSlide(sliderCurrent + 1, false);
    startSliderAutoplay();
  });

  // Dot controls
  dotEls.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i === sliderCurrent) return;
      stopSliderAutoplay();
      goToSlide(i, false);
      startSliderAutoplay();
    });
  });

  startSliderAutoplay();
}

// ── Scroll progress (bounded to first 1000vh) ─────────────────────
// Uses the scroll-space element's actual rendered height so the
// newsletter/footer below don't distort the experience timings.
let maxExperienceScroll = 1;

function updateMaxScroll() {
  const el = document.getElementById('scroll-space');
  maxExperienceScroll = (el ? el.offsetHeight : 10 * window.innerHeight) - window.innerHeight;
}

function getProgress(scroll) {
  return Math.max(0, Math.min(1, scroll / maxExperienceScroll));
}

// ── Hero fade + canvas circle wipe ────────────────────────────────
function updateHero(p) {
  hero.style.opacity = p < 0.06 ? 1 : Math.max(0, 1 - (p - 0.06) / 0.06);
  const wipeP = Math.max(0, Math.min(1, (p - 0.07) / 0.08));
  canvasWrap.style.clipPath = `circle(${wipeP * 80}% at 50% 50%)`;

  // Pause slider autoplay once hero starts fading, resume if back at top
  if (p >= 0.06) stopSliderAutoplay();
  else if (sliderTimer === null) startSliderAutoplay();
}

// ── Section animations ────────────────────────────────────────────
const sectionState = new WeakMap();

function animateSectionIn(section) {
  const type = section.dataset.animation;
  const els  = Array.from(section.querySelectorAll(
    '.section-label, .section-heading, .section-body, .cta-button, .stat'
  ));
  if (!els.length) return;
  gsap.killTweensOf(els);

  switch (type) {
    case 'fade-up':
      gsap.fromTo(els, { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out' });
      break;
    case 'slide-left':
      gsap.fromTo(els, { x: -80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: 'power3.out' });
      break;
    case 'slide-right':
      gsap.fromTo(els, { x: 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: 'power3.out' });
      break;
    case 'stagger-up':
      gsap.fromTo(els, { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.85, ease: 'power3.out',
          onComplete: () => animateCounters(section) });
      break;
    case 'clip-reveal':
      gsap.fromTo(els,
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', opacity: 1,
          stagger: 0.15, duration: 1.2, ease: 'power4.inOut' });
      break;
  }
}

function animateCounters(section) {
  section.querySelectorAll('.stat-number[data-counter="true"]').forEach(el => {
    const target = parseInt(el.dataset.value, 10);
    const dur    = 1600;
    const t0     = performance.now();
    const tick   = now => {
      const t = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function updateSections(p) {
  sections.forEach(section => {
    const enter   = parseFloat(section.dataset.enter) / 100;
    const leave   = parseFloat(section.dataset.leave) / 100;
    const persist = section.dataset.persist === 'true';
    const inRange = p >= enter && p <= leave;
    const past    = p > leave;
    const active  = sectionState.get(section) === 'active';

    if (inRange) {
      section.style.opacity       = '1';
      section.style.pointerEvents = 'auto';
      if (!active) { sectionState.set(section, 'active'); animateSectionIn(section); }
    } else if (past && persist) {
      section.style.opacity       = '1';
      section.style.pointerEvents = 'auto';
    } else {
      section.style.opacity       = '0';
      section.style.pointerEvents = 'none';
      if (active) sectionState.set(section, 'idle');
    }
  });
}

// ── Dark overlay ──────────────────────────────────────────────────
function updateOverlay(p) {
  const enter = 0.55, leave = 0.74, fade = 0.04;
  let o = 0;
  if      (p >= enter - fade && p < enter)   o = ((p - (enter - fade)) / fade) * 0.9;
  else if (p >= enter && p <= leave)         o = 0.9;
  else if (p > leave && p <= leave + fade)   o = 0.9 * (1 - (p - leave) / fade);
  darkOverlay.style.opacity = o;
}

// ── Marquee ───────────────────────────────────────────────────────
function updateMarquee(p) {
  marqueeWrap.style.opacity = (p >= 0.22 && p <= 0.80) ? '1' : '0';
  marqueeText.style.transform = `translateX(${p * -30}vw)`;
}

// ── Frame scrubbing ───────────────────────────────────────────────
function updateFrame(p) {
  const frameP = Math.min(1, p * FRAME_SPEED);
  const idx    = Math.min(Math.floor(frameP * FRAME_COUNT), FRAME_COUNT - 1);
  if (idx !== currentFrame) {
    currentFrame = idx;
    scheduleDraw(currentFrame);
  }
}

// ── Main experience ───────────────────────────────────────────────
function initExperience() {
  updateMaxScroll();
  initSlider();

  lenis.on('scroll', ({ scroll }) => {
    const p = getProgress(scroll);
    updateFrame(p);
    updateHero(p);
    updateSections(p);
    updateOverlay(p);
    updateMarquee(p);
  });

  // Set correct state at p=0
  updateHero(0);
}

// ── Navbar — dropdowns ────────────────────────────────────────────
(function initNavbar() {
  const navGroups = document.querySelectorAll('.nav-group');

  navGroups.forEach(group => {
    const btn      = group.querySelector('.nav-has-dropdown');
    const key      = btn ? btn.dataset.toggle : null;
    const dropdown = key ? document.getElementById('dropdown-' + key) : null;

    if (!btn || !dropdown) return;

    // Desktop: hover open
    group.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    group.addEventListener('mouseleave', () => dropdown.classList.remove('open'));

    // Keyboard / click fallback
    btn.addEventListener('click', () => {
      const isOpen = dropdown.classList.contains('open');
      // Close all others
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-group')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // Mobile toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu   = document.getElementById('mobile-menu');
  const iconOpen     = document.getElementById('icon-open');
  const iconClose    = document.getElementById('icon-close');

  mobileToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) {
      mobileMenu.removeAttribute('hidden');
      iconOpen.style.display  = 'none';
      iconClose.style.display = '';
    } else {
      mobileMenu.setAttribute('hidden', '');
      iconOpen.style.display  = '';
      iconClose.style.display = 'none';
    }
  });
})();

// ── Boot ──────────────────────────────────────────────────────────
runLoader();
