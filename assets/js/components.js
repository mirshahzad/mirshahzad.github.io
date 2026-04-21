/* ================================================================
   COMPONENTS.JS
   ----------------------------------------------------------------
   Edit this file to update navigation or footer across ALL pages.

   TO UPDATE NAV LINKS: edit the `navLinks` array below.
   TO UPDATE FOOTER CONTACTS: edit the `contacts` object below.
   TO ADD/REMOVE SOCIAL LINKS: edit the `social` array below.
   ================================================================ */

const SITE = {

  /* ── PERSONAL INFO ───────────────────────────────────────────
     Update these when your details change.                      */
  name:     'Shahzad Ahmed',
  tagline:  '"Security that holds."',
  title:    'Cybersecurity Consultant & Virtual CISO',
  email:    'shahzadahmed.sec@gmail.com',

  /* ── NAVIGATION LINKS ────────────────────────────────────────
     Add, remove, or reorder links here.
     { href, label, cta: true } makes it the CTA button.        */
  navLinks: [
    { href: 'index.html',        label: 'Home' },
    { href: 'about.html',        label: 'About' },
    { href: 'services.html',     label: 'Services' },
    { href: 'projects.html',     label: 'Projects' },
    { href: 'research.html',     label: 'Research' },
    { href: 'insights.html',     label: 'Insights' },
    { href: 'work-with-me.html', label: 'Work With Me', cta: true },
  ],

  /* ── PLATFORM LINKS ──────────────────────────────────────────
     Used in footer and Work With Me page.                       */
  platforms: {
    upwork:     'https://www.upwork.com/freelancers/mirshahzad',
    fiverr:     'https://www.fiverr.com/mirshahzad007',
    linkedin:   'https://www.linkedin.com/in/mirshahzad/',
    github:     'https://github.com/mirshahzad',
    medium:     'https://mirshahzad.medium.com/',
    scholar:    'https://scholar.google.com/citations?user=VeyHCiEAAAAJ&hl=en',
    researchgate:'https://www.researchgate.net/profile/Shahzad-Ahmed-12',
    goodreads:  'https://www.goodreads.com/mirshahzad',
    calendly:   'https://calendly.com/mirshahzad/coffeechat',
    portfolio:  'https://mirshahzad.github.io',
  },

  /* ── FOOTER COPY ─────────────────────────────────────────────*/
  copyright: '© 2026 Shahzad Ahmed · Remote · Global · All rights reserved',
  badges:    ['Top-Rated Upwork', 'Level-2 Fiverr', 'MSc InfoSec · ITMO'],
  footerDesc: 'Cybersecurity consultant and virtual CISO building security programs that governments, hospitals, and enterprises trust.',

};

/* ================================================================
   BUILD NAV
   ================================================================ */
function buildNav() {
  const current = location.pathname.split('/').pop().replace('.html','') || 'index';

  const links = SITE.navLinks.map(l => {
    const page = l.href.replace('.html','');
    const active = page === current ? ' active' : '';
    if (l.cta) return `<li><a href="${l.href}" class="nav__link nav__cta">${l.label}</a></li>`;
    return `<li><a href="${l.href}" class="nav__link${active}">${l.label}</a></li>`;
  }).join('\n      ');

  const drawerLinks = SITE.navLinks.map(l => {
    const page = l.href.replace('.html','');
    const active = page === current ? ' active' : '';
    if (l.cta) return `<a href="${l.href}" class="nav__cta">${l.label}</a>`;
    return `<a href="${l.href}" class="nav__link${active}">${l.label}</a>`;
  }).join('\n  ');

  const navHTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav__wrap">
    <a href="index.html" class="nav__logo">Shahzad Ahmed</a>
    <ul class="nav__links" role="list">
      ${links}
    </ul>
    <button class="nav__burger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav__drawer" role="dialog" aria-label="Mobile navigation">
  ${drawerLinks}
</div>`;

  document.getElementById('nav-mount').innerHTML = navHTML;
}

/* ================================================================
   BUILD FOOTER
   ================================================================ */
function buildFooter() {
  const navItems = SITE.navLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('\n        ');

  const badges = SITE.badges.map(b =>
    `<span class="footer__badge">${b}</span>`
  ).join('\n          ');

  const footerHTML = `
<footer class="footer">
  <div class="footer__grid">
    <div>
      <a href="index.html" class="footer__logo">Shahzad A<span>.</span></a>
      <p class="footer__desc">${SITE.footerDesc}</p>
      <span class="footer__tagline">${SITE.tagline}</span>
    </div>
    <div>
      <p class="footer__col-title">Navigation</p>
      <nav class="footer__nav" aria-label="Footer navigation">
        ${navItems}
      </nav>
    </div>
    <div>
      <p class="footer__col-title">Connect</p>
      <div class="footer__contacts">
        <div class="footer__ci">
          <a href="${SITE.platforms.linkedin}" target="_blank" rel="noopener" >
            <img src="assets/img/logos/linkedin.svg" alt="LinkedIn" style="width:30px;height:30px;">
          </a>
        </div>
        <div class="footer__ci">
          <a href="${SITE.platforms.upwork}" target="_blank" rel="noopener">
            <img src="assets/img/logos/upwork.svg" alt="Upwork" style="width:30px;height:30px;">
          </a>
        </div>
        <div class="footer__ci">
          <a href="${SITE.platforms.fiverr}" target="_blank" rel="noopener">
            <img src="assets/img/logos/fiverr.svg" alt="Fiverr" style="width:30px;height:30px;">
          </a>
        </div>
        <div class="footer__ci">
          <a href="mailto:${SITE.email}">
            <img src="assets/img/logos/email.svg" alt="Email" style="width:30px;height:30px;">
          </a>
        </div>
        <div class="footer__ci">
          <a href="${SITE.platforms.github}" target="_blank" rel="noopener">
            <img src="assets/img/logos/github.gif" alt="GitHub" style="width:30px;height:30px;">
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <p class="footer__copy">${SITE.copyright}</p>
    <div class="footer__badges">
      ${badges}
    </div>
  </div>
</footer>`;

  document.getElementById('footer-mount').innerHTML = footerHTML;
}

/* ================================================================
   MAIN.JS INTERACTIONS
   ================================================================ */
function initInteractions() {

  /* Nav solid on scroll */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('solid', scrollY > 20);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile burger */
  document.addEventListener('click', e => {
    const burger = e.target.closest('.nav__burger');
    const drawer = document.querySelector('.nav__drawer');
    if (burger && drawer) {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !open);
      drawer.classList.toggle('open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    }
    if (!e.target.closest('.nav') && !e.target.closest('.nav__drawer')) {
      const b = document.querySelector('.nav__burger');
      const d = document.querySelector('.nav__drawer');
      if (d && d.classList.contains('open')) {
        d.classList.remove('open');
        if (b) b.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.rv');
  if (reveals.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('on'));
  }

  /* Stat counters */
  document.querySelectorAll('[data-count]').forEach(el => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);
      const target = +el.dataset.count, suffix = el.dataset.suffix || '';
      const dur = 900, start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* Smooth hash scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const nav = document.querySelector('.nav');
        const offset = (nav ? nav.offsetHeight : 0) + 16;
        scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  /* Hero dot-grid canvas */
  const canvas = document.getElementById('dot-grid');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const GAP = 40;
    let W, H, pts;
    const init = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      pts = [];
      for (let x = GAP; x < W; x += GAP)
        for (let y = GAP; y < H; y += GAP)
          pts.push({ x, y, phase: Math.random() * Math.PI * 2, speed: .0008 + Math.random() * .0012 });
    };
    const draw = t => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        const a = .05 + .1 * Math.abs(Math.sin(t * p.speed + p.phase));
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,184,${a.toFixed(3)})`; ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    init();
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 150); });
    requestAnimationFrame(draw);
  }

  /* Security fact ticker */
  const ticker = document.getElementById('sec-ticker');
  if (ticker) {
    const facts = [
      { num: '2,200+', text: 'cyberattacks happen every single day globally — that is one attack every 39 seconds.', source: 'Source: University of Maryland / Cybersecurity Ventures' },
      { num: '197 days', text: 'is the average time organizations take to identify a data breach — nearly 7 months of undetected exposure.', source: 'Source: IBM Cost of a Data Breach Report 2024' },
      { num: '$4.88M', text: 'is the average total cost of a data breach in 2024 — the highest in the 19-year history of IBM\'s report.', source: 'Source: IBM Cost of a Data Breach Report 2024' },
      { num: '95%', text: 'of cybersecurity breaches are caused by human error — making security culture as important as technical controls.', source: 'Source: World Economic Forum Global Risks Report' },
      { num: '43%', text: 'of cyberattacks target small and medium-sized businesses — not just large enterprises.', source: 'Source: Verizon Data Breach Investigations Report' },
    ];
    let current = 0;
    const numEl  = ticker.querySelector('.ticker-num');
    const txtEl  = ticker.querySelector('.ticker-text');
    const srcEl  = ticker.querySelector('.ticker-source');
    const dots   = ticker.querySelectorAll('.ticker-dot');
    const show = (i) => {
      current = i;
      numEl.textContent = facts[i].num;
      txtEl.textContent = facts[i].text;
      srcEl.textContent = facts[i].source;
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    };
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    show(0);
    setInterval(() => show((current + 1) % facts.length), 5000);
  }

}

/* ── INIT ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initInteractions();
});
