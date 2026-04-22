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
  copyright: '© 2026 Shahzad Ahmed · All rights reserved',
  badges:    [],
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
      if (!numEl || !txtEl || !srcEl) return;
      dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    };
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    show(0);
    setInterval(() => show((current + 1) % facts.length), 5000);
  }
  if (typeof startThreatSimulation === "function") 
    {
      startThreatSimulation();
    }
}

/* ================================================================
   INSIGHTS PAGE TOOLS
   Runs only on insights.html — each block checks for its root el.
   ================================================================ */

/* ── TOOL 1: PASSWORD STRENGTH ANALYSER ────────────────────────── */
function initPasswordTool() {
  const input  = document.getElementById('pw-input');
  if (!input) return;

  const fill     = document.getElementById('pw-fill');
  const scoreLbl = document.getElementById('pw-score-lbl');
  const entLbl   = document.getElementById('pw-entropy-lbl');
  const statLen  = document.getElementById('pw-stat-len');
  const statCh   = document.getElementById('pw-stat-charset');
  const statComb = document.getElementById('pw-stat-comb');
  const statCrk  = document.getElementById('pw-stat-crack');
  const tipsWrap = document.getElementById('pw-tips');
  const eyeBtn   = document.getElementById('pw-eye');

  const COLORS = ['#F87171','#FBBF24','#FBBF24','#60A5FA','#34D399','#34D399'];
  const LABELS = ['Very Weak','Weak','Fair','Good','Strong','Very Strong'];

  if (eyeBtn) eyeBtn.addEventListener('click', () => {
    const vis = input.type === 'text';
    input.type = vis ? 'password' : 'text';
    eyeBtn.textContent = vis ? '👁' : '🙈';
  });

  function charsetSize(pw) {
    let n = 0;
    if (/[a-z]/.test(pw)) n += 26;
    if (/[A-Z]/.test(pw)) n += 26;
    if (/[0-9]/.test(pw)) n += 10;
    if (/[^a-zA-Z0-9]/.test(pw)) n += 32;
    return n || 1;
  }
  function entropyBits(pw) { return pw.length * Math.log2(charsetSize(pw)); }
  function crackTime(bits) {
    const s = Math.pow(2, bits) / 1e12;
    if (s < 1)        return '< 1 sec';
    if (s < 60)       return Math.round(s) + ' secs';
    if (s < 3600)     return Math.round(s/60) + ' mins';
    if (s < 86400)    return Math.round(s/3600) + ' hours';
    if (s < 2592000)  return Math.round(s/86400) + ' days';
    if (s < 31536000) return Math.round(s/2592000) + ' months';
    if (s < 3.15e10)  return Math.round(s/31536000) + ' years';
    return 'Centuries+';
  }
  function fmtComb(bits) {
    const v = Math.pow(2, bits);
    if (v < 1e6)  return v.toLocaleString();
    if (v < 1e9)  return (v/1e6).toFixed(1)+'M';
    if (v < 1e12) return (v/1e9).toFixed(1)+'B';
    if (v < 1e15) return (v/1e12).toFixed(1)+'T';
    return '10^'+Math.floor(bits*0.301);
  }
  function score(pw) {
    const b = entropyBits(pw);
    if (!pw.length) return -1;
    if (b < 28) return 0; if (b < 36) return 1;
    if (b < 50) return 2; if (b < 64) return 3;
    if (b < 80) return 4; return 5;
  }
  function getTips(pw) {
    const COMMON = ['password','123456','qwerty','letmein','admin','welcome','monkey','iloveyou'];
    return [
      { pass: pw.length >= 12, text: pw.length >= 12 ? `Good length (${pw.length} chars)` : 'Use at least 12 characters' },
      { pass: /[A-Z]/.test(pw), text: /[A-Z]/.test(pw) ? 'Has uppercase letters' : 'Add uppercase letters (A–Z)' },
      { pass: /[0-9]/.test(pw), text: /[0-9]/.test(pw) ? 'Has numbers' : 'Add numbers (0–9)' },
      { pass: /[^a-zA-Z0-9]/.test(pw), text: /[^a-zA-Z0-9]/.test(pw) ? 'Has symbols' : 'Add symbols (!@#$%…)' },
      { pass: !COMMON.some(c => pw.toLowerCase().includes(c)), text: 'No common patterns detected' },
    ];
  }

  input.addEventListener('input', () => {
    const pw = input.value;
    const s  = score(pw);
    if (s === -1) {
      fill.style.width = '0%';
      scoreLbl.textContent = '—'; entLbl.textContent = '';
      [statLen,statCh,statComb,statCrk].forEach(el => el && (el.textContent='—'));
      tipsWrap.innerHTML = ''; return;
    }
    const pct = ((s+1)/6*100)+'%';
    fill.style.width = pct; fill.style.background = COLORS[s];
    scoreLbl.textContent = LABELS[s]; scoreLbl.style.color = COLORS[s];
    const bits = entropyBits(pw);
    entLbl.textContent = Math.round(bits)+' bits entropy';
    if (statLen)  statLen.textContent  = pw.length;
    if (statCh)   statCh.textContent   = charsetSize(pw);
    if (statComb) statComb.textContent = fmtComb(bits);
    if (statCrk)  statCrk.textContent  = crackTime(bits);
    tipsWrap.innerHTML = getTips(pw).map(t => `
      <div class="pw-tip">
        <div class="pw-tip-dot" style="background:${t.pass?'var(--success)':'var(--danger)'}"></div>
        <span style="color:${t.pass?'var(--t2)':'var(--t3)'}">${t.text}</span>
      </div>`).join('');
  });
}

/* ── TOOL 2: ISO 27001:2022 CONTROL LOOKUP ─────────────────────── */
function initISOTool() {
  const input = document.getElementById('iso-input');
  if (!input) return;

  const ISO_CONTROLS = [
    {id:'5.1', name:'Policies for Information Security', cat:'Organisational',
     tags:['governance','policy'],
     desc:'Information security policy and topic-specific policies shall be defined, approved by management, published, communicated, and reviewed at planned intervals.'},
    {id:'5.3', name:'Segregation of Duties', cat:'Organisational',
     tags:['access control','fraud prevention'],
     desc:'Conflicting duties and areas of responsibility shall be segregated to reduce opportunities for unauthorised or unintentional modification or misuse of assets.'},
    {id:'5.7', name:'Threat Intelligence', cat:'Organisational',
     tags:['threat intel','vulnerability'],
     desc:'Information relating to information security threats shall be collected and analysed to produce threat intelligence, used to inform risk assessment and treatment decisions.'},
    {id:'5.15', name:'Access Control', cat:'Organisational',
     tags:['access control','IAM','authorisation'],
     desc:'Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements.'},
    {id:'5.16', name:'Identity Management', cat:'Organisational',
     tags:['identity','IAM','provisioning'],
     desc:'The full life cycle of identities shall be managed.'},
    {id:'5.17', name:'Authentication Information', cat:'Organisational',
     tags:['authentication','passwords','MFA'],
     desc:'Allocation and management of authentication information shall be controlled by a management process, including advising personnel on appropriate handling.'},
    {id:'5.18', name:'Access Rights', cat:'Organisational',
     tags:['access rights','least privilege','UAR'],
     desc:'Access rights to information and other associated assets shall be provisioned, reviewed, modified and removed in accordance with the access control policy.'},
    {id:'5.19', name:'Information Security in Supplier Relationships', cat:'Organisational',
     tags:['third party','supply chain','vendor'],
     desc:'Processes and procedures shall be defined and implemented to manage information security risks associated with the use of supplier\'s products or services.'},
    {id:'5.23', name:'Information Security for Use of Cloud Services', cat:'Organisational',
     tags:['cloud','SaaS','shared responsibility'],
     desc:'Processes for acquisition, use, management and exit from cloud services shall be established in accordance with the organisation\'s information security requirements.'},
    {id:'5.24', name:'Information Security Incident Management Planning', cat:'Organisational',
     tags:['incident response','IRP','planning'],
     desc:'The organisation shall plan and prepare for managing information security incidents by defining, establishing and communicating incident management processes, roles and responsibilities.'},
    {id:'5.26', name:'Response to Information Security Incidents', cat:'Organisational',
     tags:['incident response','containment','eradication'],
     desc:'Information security incidents shall be responded to in accordance with the documented procedures.'},
    {id:'5.29', name:'Information Security During Disruption', cat:'Organisational',
     tags:['BCP','continuity','resilience'],
     desc:'The organisation shall plan how to maintain information security at an appropriate level during disruption.'},
    {id:'5.31', name:'Legal, Statutory, Regulatory and Contractual Requirements', cat:'Organisational',
     tags:['compliance','legal','GDPR'],
     desc:'Legal, statutory, regulatory and contractual requirements relevant to information security shall be identified, documented and kept up to date.'},
    {id:'5.34', name:'Privacy and Protection of PII', cat:'Organisational',
     tags:['privacy','PII','GDPR','data protection'],
     desc:'The organisation shall identify and meet requirements regarding the preservation of privacy and protection of personally identifiable information (PII) according to applicable laws and regulations.'},
    {id:'6.3', name:'Information Security Awareness, Education and Training', cat:'People',
     tags:['training','awareness','phishing'],
     desc:'Personnel shall receive appropriate information security awareness, education and training including regular updates on the organisation\'s policies and procedures as relevant for their job function.'},
    {id:'6.7', name:'Remote Working', cat:'People',
     tags:['remote work','WFH','VPN','endpoint'],
     desc:'Security measures shall be implemented when personnel are working remotely to protect information accessed, processed or stored outside the organisation\'s premises.'},
    {id:'6.8', name:'Information Security Event Reporting', cat:'People',
     tags:['incident reporting','SIEM'],
     desc:'The organisation shall provide a mechanism for personnel to report observed or suspected information security events through appropriate channels in a timely manner.'},
    {id:'7.1', name:'Physical Security Perimeters', cat:'Physical',
     tags:['physical security','perimeter'],
     desc:'Security perimeters shall be defined and used to protect areas that contain information and other associated assets.'},
    {id:'7.4', name:'Physical Security Monitoring', cat:'Physical',
     tags:['CCTV','monitoring','surveillance'],
     desc:'Premises shall be continuously monitored for unauthorised physical access.'},
    {id:'7.14', name:'Secure Disposal or Re-Use of Equipment', cat:'Physical',
     tags:['disposal','data destruction'],
     desc:'Items of equipment containing storage media shall be verified to ensure sensitive data and licensed software has been removed or securely overwritten prior to disposal or reuse.'},
    {id:'8.1', name:'User Endpoint Devices', cat:'Technological',
     tags:['endpoint','MDM','BYOD'],
     desc:'Information stored on, processed by or accessible via user endpoint devices shall be protected.'},
    {id:'8.2', name:'Privileged Access Rights', cat:'Technological',
     tags:['PAM','privileged access','admin'],
     desc:'The allocation and use of privileged access rights shall be restricted and managed.'},
    {id:'8.5', name:'Secure Authentication', cat:'Technological',
     tags:['authentication','MFA','SSO','zero trust'],
     desc:'Secure authentication technologies and procedures shall be implemented based on information access restriction and the topic-specific policy on access control.'},
    {id:'8.7', name:'Protection Against Malware', cat:'Technological',
     tags:['antivirus','EDR','malware'],
     desc:'Protection against malware shall be implemented and supported by appropriate user awareness.'},
    {id:'8.8', name:'Management of Technical Vulnerabilities', cat:'Technological',
     tags:['vulnerability management','patching','CVE'],
     desc:'Information about technical vulnerabilities shall be obtained in a timely fashion, the organisation\'s exposure evaluated, and appropriate measures taken.'},
    {id:'8.9', name:'Configuration Management', cat:'Technological',
     tags:['hardening','baselines','CIS'],
     desc:'Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, implemented, monitored and reviewed.'},
    {id:'8.12', name:'Data Leakage Prevention', cat:'Technological',
     tags:['DLP','data loss prevention','exfiltration'],
     desc:'Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information.'},
    {id:'8.13', name:'Information Backup', cat:'Technological',
     tags:['backup','DR','RTO','3-2-1'],
     desc:'Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed backup policy.'},
    {id:'8.15', name:'Logging', cat:'Technological',
     tags:['logging','audit trail','SIEM'],
     desc:'Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analysed.'},
    {id:'8.16', name:'Monitoring Activities', cat:'Technological',
     tags:['monitoring','SOC','anomaly detection'],
     desc:'Networks, systems and applications shall be monitored for anomalous behaviour and appropriate actions taken to evaluate potential information security incidents.'},
    {id:'8.20', name:'Networks Security', cat:'Technological',
     tags:['network security','firewall','segmentation'],
     desc:'Networks and network devices shall be secured, managed and controlled to protect information in systems and applications.'},
    {id:'8.22', name:'Segregation of Networks', cat:'Technological',
     tags:['network segmentation','VLAN','zero trust'],
     desc:'Groups of information services, users and information systems shall be segregated in the organisation\'s networks.'},
    {id:'8.24', name:'Use of Cryptography', cat:'Technological',
     tags:['encryption','cryptography','TLS','keys'],
     desc:'Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented.'},
    {id:'8.25', name:'Secure Development Lifecycle', cat:'Technological',
     tags:['SDLC','DevSecOps','secure coding'],
     desc:'Rules for the secure development of software and systems shall be established and applied.'},
    {id:'8.27', name:'Secure System Architecture and Engineering Principles', cat:'Technological',
     tags:['security architecture','zero trust','defence in depth'],
     desc:'Principles for engineering secure systems shall be established, documented, maintained and applied to any information system development and integration activities.'},
  ];

  const SAMPLE_CHIPS = ['5.1','5.15','5.17','5.18','5.23','5.24','6.3','6.7','7.14','8.2','8.5','8.7','8.8','8.12','8.13','8.15','8.24','8.27'];

  const resultBox  = document.getElementById('iso-result-box');
  const notFound   = document.getElementById('iso-not-found');
  const resId      = document.getElementById('iso-res-id');
  const resName    = document.getElementById('iso-res-name');
  const resDesc    = document.getElementById('iso-res-desc');
  const resTags    = document.getElementById('iso-res-tags');
  const chipsWrap  = document.getElementById('iso-chips');
  const searchBtn  = document.getElementById('iso-search-btn');

  // Build chips
  if (chipsWrap) {
    SAMPLE_CHIPS.forEach(id => {
      const ctrl = ISO_CONTROLS.find(c => c.id === id);
      if (!ctrl) return;
      const chip = document.createElement('button');
      chip.className = 'iso-chip'; chip.textContent = ctrl.id; chip.title = ctrl.name;
      chip.addEventListener('click', () => { input.value = ctrl.id; doSearch(); });
      chipsWrap.appendChild(chip);
    });
  }

  function doSearch() {
    const q = input.value.trim().toLowerCase();
    if (!q) return;
    notFound.style.display = 'none';
    resultBox.classList.remove('visible');
    const found = ISO_CONTROLS.find(c =>
      c.id.toLowerCase() === q ||
      c.name.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q)) ||
      c.desc.toLowerCase().includes(q)
    );
    if (!found) { notFound.style.display = 'block'; return; }
    resId.textContent   = `ISO 27001:2022 — Annex A Control ${found.id} · ${found.cat}`;
    resName.textContent = found.name;
    resDesc.textContent = found.desc;
    resTags.innerHTML   = found.tags.map(t => `<span class="tag tag-blue">${t}</span>`).join('');
    resultBox.classList.add('visible');
  }

  if (searchBtn) searchBtn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
}

/* ── TOOL 3: INCIDENT RESPONSE DECISION TREE ───────────────────── */
function initIRTool() {
  const content = document.getElementById('ir-content');
  if (!content) return;

  const badge     = document.getElementById('ir-step-badge');
  const crumbWrap = document.getElementById('ir-breadcrumb');
  const restartBtn= document.getElementById('ir-restart-btn');

  const TREE_START = {
    phase: 'Detection & Analysis',
    q: 'An alert has triggered. What type of potential incident are you facing?',
    guidance: 'NIST SP 800-61 Phase 1 — Identify the incident type before taking action.',
    opts: [
      { label:'Malware / Ransomware',               sev:'critical', next:'malware'   },
      { label:'Phishing / Credential Theft',        sev:'high',     next:'phishing'  },
      { label:'Unauthorised Access / Intrusion',    sev:'critical', next:'intrusion' },
      { label:'Data Exposure / Leak',               sev:'high',     next:'dataleak'  },
      { label:'DDoS / Service Disruption',          sev:'medium',   next:'ddos'      },
      { label:'Insider Threat',                     sev:'high',     next:'insider'   },
    ]
  };

  const NODES = {
    malware: {
      phase:'Containment — Malware',
      q:'Has the malware encrypted files, or is it still spreading?',
      guidance:'Do NOT pay ransom without leadership and legal sign-off. Isolate first.',
      opts:[
        { label:'Files are encrypted — ransomware active', sev:'critical', next:'ransomware_isolate' },
        { label:'Malware detected, no encryption yet',     sev:'high',     next:'malware_contain'   },
      ]
    },
    ransomware_isolate: {
      terminal:true, title:'Isolate → Preserve → Recover',
      body:'Execute in this exact order:',
      actions:[
        'Isolate all affected machines immediately — disable NICs, pull cables, segment VLAN',
        'Preserve memory dumps and forensic disk images before any remediation',
        'Notify leadership, legal counsel, and regulators within required timeframes',
        'Restore from last known-clean backup — verify backup integrity first',
        'Engage incident response retainer or forensic firm',
        'Document every action taken with timestamps for the post-incident report',
        'Conduct root cause analysis before reconnecting any systems',
      ]
    },
    malware_contain: {
      terminal:true, title:'Malware Containment & Eradication',
      body:'Malware detected early — act with speed:',
      actions:[
        'Quarantine the affected endpoint immediately via EDR console',
        'Block the malware hash and C2 domains/IPs at perimeter and DNS',
        'Run a full scan across similar endpoints in the environment',
        'Identify patient zero and the initial infection vector',
        'Reset credentials for any accounts present on affected systems',
        'Patch the exploited vulnerability before returning to production',
        'Document the incident and update your threat intelligence feeds',
      ]
    },
    phishing: {
      phase:'Detection — Phishing',
      q:'Have credentials been entered on the phishing page?',
      guidance:'Assume compromise until proven otherwise. Time is critical.',
      opts:[
        { label:'Yes — user entered credentials', sev:'high',   next:'phishing_creds' },
        { label:'Click only — no credentials',    sev:'medium', next:'phishing_click' },
        { label:'Not sure',                       sev:'high',   next:'phishing_creds' },
      ]
    },
    phishing_creds: {
      terminal:true, title:'Credential Compromise Response',
      body:'Treat as full account compromise — act within minutes:',
      actions:[
        'Reset the user\'s password immediately',
        'Revoke all active sessions and OAuth tokens for the affected account',
        'Enable or verify MFA is enforced on the account',
        'Check mail rules, forwarding settings, and sent items for exfiltration',
        'Review authentication logs for access from suspicious IPs or locations',
        'Notify the user and conduct targeted security awareness follow-up',
        'Document in the incident register',
      ]
    },
    phishing_click: {
      terminal:true, title:'Phishing Click — No Credential Entry',
      body:'Lower immediate risk, but action still required:',
      actions:[
        'Scan the user\'s device for any drive-by malware executed',
        'Check browser history and proxy logs for the phishing URL',
        'Block the phishing domain at DNS and email gateway level',
        'Report the phishing email to your email security vendor for analysis',
        'Conduct targeted security awareness follow-up with the user',
        'Submit the phishing URL to threat intel sharing platforms',
      ]
    },
    intrusion: {
      phase:'Detection — Intrusion',
      q:'What level of access has the attacker likely obtained?',
      guidance:'Scope the blast radius before any aggressive response action.',
      opts:[
        { label:'Administrative / Domain-level access', sev:'critical', next:'intrusion_admin' },
        { label:'Standard user account access only',    sev:'high',     next:'intrusion_user'  },
        { label:'Unknown — still investigating',        sev:'high',     next:'intrusion_unk'   },
      ]
    },
    intrusion_admin: {
      terminal:true, title:'Admin-Level Intrusion — Major Incident',
      body:'Assume full domain compromise. Escalate immediately:',
      actions:[
        'Escalate to CISO and senior leadership immediately',
        'Preserve all logs — do not begin remediation before preservation',
        'Engage external incident response firm',
        'Reset all privileged credentials: Domain Admin, service accounts, break-glass',
        'Audit for persistence: scheduled tasks, new accounts, registry keys, startup items',
        'Consider full domain reset if Tier 0 accounts are confirmed compromised',
        'Notify regulators and legal counsel per your incident response plan',
      ]
    },
    intrusion_user: {
      terminal:true, title:'User-Level Intrusion — Contain Lateral Movement',
      body:'Prevent escalation before it reaches privileged access:',
      actions:[
        'Isolate the compromised account and system immediately',
        'Review what data and systems the account had access to',
        'Check for lateral movement attempts in authentication and network logs',
        'Reset credentials and revoke all sessions for the compromised account',
        'Scan adjacent systems for signs of compromise or staging',
        'Identify and close the initial access vector',
        'Assess regulatory notification requirements based on data accessed',
      ]
    },
    intrusion_unk: {
      terminal:true, title:'Unknown Scope — Triage Protocol',
      body:'When scope is unknown, assume broad and investigate systematically:',
      actions:[
        'Assign a single incident commander for all decision-making',
        'Pull authentication, endpoint, network, and proxy logs immediately',
        'Look for IOCs: new accounts, unusual process execution, outbound connections',
        'Contain the most likely affected systems while investigation continues',
        'Use an out-of-band communications channel — assume primary may be monitored',
        'Set a 1-hour triage checkpoint to reassess scope and severity',
      ]
    },
    dataleak: {
      phase:'Data Exposure Response',
      q:'Is the exposed data classified as sensitive or regulated (PII, health, financial)?',
      guidance:'Regulatory notification timelines start from when you "become aware" — GDPR: 72hr, HIPAA: 60 days.',
      opts:[
        { label:'Yes — PII, health, or financial data', sev:'critical', next:'dataleak_reg' },
        { label:'No — internal data only',              sev:'medium',   next:'dataleak_int' },
      ]
    },
    dataleak_reg: {
      terminal:true, title:'Regulated Data Exposure — Mandatory Notification',
      body:'Notification is likely legally required. Act immediately:',
      actions:[
        'Engage legal counsel within the first hour — timelines have started',
        'Document exactly what data was exposed, to whom, and for how long',
        'Close the exposure vector immediately',
        'Assess notification obligations: GDPR, HIPAA, PCI-DSS, local laws',
        'Draft internal and external communications for leadership review',
        'Notify affected individuals where legally required',
        'Preserve all evidence for regulatory inquiry',
      ]
    },
    dataleak_int: {
      terminal:true, title:'Internal Data Exposure',
      body:'No regulatory requirement — but internal action still needed:',
      actions:[
        'Identify and close the source of the exposure immediately',
        'Document what was exposed, who had access, and for how long',
        'Assess business impact: trade secrets, competitive information, strategy',
        'Notify business owners of affected data sets',
        'Conduct a root cause analysis to prevent recurrence',
        'Review and update data classification and access control policies',
      ]
    },
    ddos: {
      terminal:true, title:'DDoS / Service Disruption Response',
      body:'Mitigation and communications are the priorities:',
      actions:[
        'Engage your ISP or DDoS mitigation provider immediately (Cloudflare, Akamai, etc.)',
        'Enable rate limiting and geo-blocking at the edge if available',
        'Activate business continuity / failover procedures for affected services',
        'Communicate service status to stakeholders — do not leave a vacuum',
        'Monitor for secondary attacks under cover of the DDoS',
        'Preserve netflow logs for post-incident analysis and law enforcement if required',
        'Review network architecture resilience after the incident',
      ]
    },
    insider: {
      phase:'Insider Threat',
      q:'Is the insider threat intentional or accidental?',
      guidance:'Handle with HR and Legal from the first step. Evidence preservation is critical.',
      opts:[
        { label:'Intentional — suspected malicious insider', sev:'critical', next:'insider_mal' },
        { label:'Accidental — human error, no malicious intent', sev:'medium', next:'insider_acc' },
      ]
    },
    insider_mal: {
      terminal:true, title:'Malicious Insider — Handle Confidentially',
      body:'Do not tip off the suspect. Evidence first, action second:',
      actions:[
        'Engage HR and Legal immediately — do not act unilaterally',
        'Preserve all logs and evidence before any action is taken on the account',
        'Do not alert the suspect — covert monitoring may be legally permissible',
        'Review all data access, downloads, and email activity for the past 90 days',
        'Disable access at a planned moment coordinated with HR and Legal',
        'Consult Law Enforcement if data theft or criminal activity is evident',
        'Maintain strict chain of custody for all evidence collected',
      ]
    },
    insider_acc: {
      terminal:true, title:'Accidental Insider — Fix the Control, Not Just the Person',
      body:'No-blame approach: address the root cause:',
      actions:[
        'Remediate any data exposed or systems affected by the error',
        'Conduct a supportive conversation — understand what went wrong and why',
        'Identify the control gap that made the error possible',
        'Update procedures, training, or technical controls to prevent recurrence',
        'Assess if any regulatory notification is required based on what occurred',
        'Document the incident and remediation in your ISMS improvement log',
      ]
    },
  };

  const SEV_CLASS = { critical:'ir-sev-critical', high:'ir-sev-high', medium:'ir-sev-medium' };

  let path = [];
  let nodeId = 'start';
  let stepNum = 1;

  function nodeFor(id) { return id === 'start' ? TREE_START : NODES[id]; }

  function render() {
    const node = nodeFor(nodeId);
    if (!node) return;
    if (badge)     badge.textContent   = `Step ${stepNum}`;
    if (crumbWrap) crumbWrap.innerHTML = path.map(p => `<span class="ir-crumb">${p}</span>`).join('');

    if (node.terminal) {
      content.innerHTML = `
        <div class="ir-terminal">
          <div class="ir-terminal-title">${node.title}</div>
          <div class="ir-terminal-body">${node.body}</div>
          <div class="ir-actions">${node.actions.map(a=>`<div class="ir-action">${a}</div>`).join('')}</div>
        </div>
        <div class="ir-nav-row">
          <button class="btn btn-secondary" id="ir-back-btn">← Back</button>
          <button class="btn btn-primary" id="ir-new-btn">Start New Scenario</button>
        </div>`;
      document.getElementById('ir-back-btn').addEventListener('click', goBack);
      document.getElementById('ir-new-btn').addEventListener('click', resetTree);
      return;
    }

    content.innerHTML = `
      <div class="ir-question-box">
        <div class="ir-phase-lbl">${node.phase}</div>
        <div class="ir-question">${node.q}</div>
        ${node.guidance ? `<div class="ir-guidance">ⓘ ${node.guidance}</div>` : ''}
      </div>
      <div class="ir-options">
        ${node.opts.map(o => `
          <button class="ir-option" data-next="${o.next}" data-label="${o.label}">
            <span class="ir-sev ${SEV_CLASS[o.sev]||''}">${o.sev}</span>
            ${o.label}
            <span class="ir-arrow">›</span>
          </button>`).join('')}
      </div>
      ${stepNum > 1 ? `<div class="ir-nav-row" style="margin-top:var(--s3)">
        <button class="btn btn-secondary" id="ir-back-btn">← Back</button>
      </div>` : ''}`;

    content.querySelectorAll('.ir-option').forEach(btn => {
      btn.addEventListener('click', () => {
        path.push(btn.dataset.label);
        nodeId = btn.dataset.next;
        stepNum++;
        render();
      });
    });
    const backBtn = document.getElementById('ir-back-btn');
    if (backBtn) backBtn.addEventListener('click', goBack);
  }

  function goBack() {
    if (path.length === 0) return;
    path.pop(); stepNum--;
    // Retrace path from start
    nodeId = 'start';
    for (let i = 0; i < path.length; i++) {
      const node = nodeFor(nodeId);
      const opt  = node.opts && node.opts.find(o => o.label === path[i]);
      if (opt) nodeId = opt.next; else break;
    }
    render();
  }

  function resetTree() { path = []; nodeId = 'start'; stepNum = 1; render(); }

  if (restartBtn) restartBtn.addEventListener('click', resetTree);
  render();
}

/* ── TOOL 4: LIVE SECURITY DASHBOARD ──────────────────────────── */
function startThreatSimulation() {
  const statsEl   = document.getElementById('dash-stats');
  if (!statsEl) return;

  const feedEl    = document.getElementById('dash-feed-body');
  const tsEl      = document.getElementById('dash-ts');
  const updatedEl = document.getElementById('dash-updated');
  const refreshBtn= document.getElementById('dash-refresh-btn');

  const CVE_DATA = [
    { id:'CVE-2024-3400',  desc:'PAN-OS GlobalProtect — Command Injection (Zero Day)',   score:10.0, vendor:'Palo Alto Networks' },
    { id:'CVE-2024-21762', desc:'FortiOS SSL VPN — Out-of-Bound Write',                 score:9.6,  vendor:'Fortinet'           },
    { id:'CVE-2024-27198', desc:'JetBrains TeamCity — Authentication Bypass',            score:9.8,  vendor:'JetBrains'          },
    { id:'CVE-2023-46805', desc:'Ivanti Connect Secure — Authentication Bypass',         score:8.2,  vendor:'Ivanti'             },
    { id:'CVE-2024-1709',  desc:'ConnectWise ScreenConnect — Path Traversal',            score:10.0, vendor:'ConnectWise'        },
    { id:'CVE-2024-6387',  desc:'OpenSSH regreSSHion — Remote Code Execution',           score:8.1,  vendor:'OpenBSD'            },
    { id:'CVE-2024-4577',  desc:'PHP CGI — Argument Injection (Windows)',                score:9.8,  vendor:'PHP Group'          },
    { id:'CVE-2024-5806',  desc:'MOVEit Transfer — Authentication Bypass',              score:9.1,  vendor:'Progress Software'  },
    { id:'CVE-2023-22527', desc:'Confluence Data Center — OGNL Template Injection',      score:10.0, vendor:'Atlassian'          },
    { id:'CVE-2024-38063', desc:'Windows TCP/IP — Remote Code Execution',                score:9.8,  vendor:'Microsoft'          },
    { id:'CVE-2024-29988', desc:'Microsoft SmartScreen — Protection Bypass',             score:8.8,  vendor:'Microsoft'          },
    { id:'CVE-2024-20353', desc:'Cisco ASA — Denial of Service via HTTPS Request',       score:8.6,  vendor:'Cisco'              },
    { id:'CVE-2024-22024', desc:'Ivanti Connect Secure — XXE Injection',                 score:8.3,  vendor:'Ivanti'             },
    { id:'CVE-2024-37085', desc:'VMware ESXi — Auth Bypass via Active Directory',        score:6.8,  vendor:'VMware'             },
    { id:'CVE-2024-30078', desc:'Windows Wi-Fi Driver — Remote Code Execution',          score:8.8,  vendor:'Microsoft'          },
  ];

  function scoreClass(s) { return s>=9.0?'sc-crit':s>=7.0?'sc-high':'sc-med'; }

  function render() {
    const sorted = [...CVE_DATA].sort((a,b) => b.score - a.score);
    const critical = sorted.filter(d => d.score >= 9.0).length;
    const high     = sorted.filter(d => d.score >= 7.0 && d.score < 9.0).length;

    statsEl.innerHTML = `
      <div class="dash-stat-card dc-crit">
        <div class="dash-stat-lbl">Critical CVEs ≥9.0</div>
        <div class="dash-stat-val" style="color:var(--danger)">${critical}</div>
        <div class="dash-stat-sub">Active exploitation risk</div>
      </div>
      <div class="dash-stat-card dc-high">
        <div class="dash-stat-lbl">High Severity 7–8.9</div>
        <div class="dash-stat-val" style="color:var(--warn)">${high}</div>
        <div class="dash-stat-sub">Elevated risk</div>
      </div>
      <div class="dash-stat-card dc-info">
        <div class="dash-stat-lbl">Vendors Affected</div>
        <div class="dash-stat-val" style="color:var(--accent-hi)">${new Set(sorted.map(d=>d.vendor)).size}</div>
        <div class="dash-stat-sub">Across enterprise stack</div>
      </div>
      <div class="dash-stat-card dc-ok">
        <div class="dash-stat-lbl">CVEs Tracked</div>
        <div class="dash-stat-val" style="color:var(--success)">${sorted.length}</div>
        <div class="dash-stat-sub">High-signal entries</div>
      </div>`;

    if (feedEl) feedEl.innerHTML = sorted.map(d => `
      <div class="dash-row">
        <div class="dash-row-cve"><a href="https://nvd.nist.gov/vuln/detail/${d.id}" target="_blank" rel="noopener">${d.id}</a></div>
        <div>
          <div class="dash-row-desc">${d.desc}</div>
          <div class="dash-row-vendor">${d.vendor}</div>
        </div>
        <div class="dash-score ${scoreClass(d.score)}">${d.score}</div>
      </div>`).join('');

    const now = new Date();
    if (tsEl)      tsEl.textContent     = 'Last refreshed: ' + now.toLocaleTimeString();
    if (updatedEl) updatedEl.textContent= now.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
  }

  if (refreshBtn) refreshBtn.addEventListener('click', render);
  render();
}

/* ── INIT ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  initInteractions();
  // Insights page tools — each checks for its own root element
  initPasswordTool();
  initISOTool();
  initIRTool();
  startThreatSimulation();
});
