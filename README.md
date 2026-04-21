# Shahzad Ahmed — Portfolio Website
## mirshahzad.github.io

---

## Quick Reference: What to edit for common updates

| What you want to change | File to edit |
|---|---|
| Colors, fonts, spacing | `assets/css/design.css` — `:root` variables only |
| Navigation links | `assets/js/components.js` — `navLinks` array |
| Footer links / contacts | `assets/js/components.js` — `SITE.platforms` object |
| Homepage text | `index.html` |
| About page text | `about.html` |
| Services | `services.html` |
| Add/edit a project | `projects.html` |
| Research / certifications | `research.html` |
| Insights articles | `insights.html` |
| Security fact ticker | `assets/js/components.js` — `facts` array in ticker |
| Hire me / platform links | `work-with-me.html` + `assets/js/components.js` |

---

## File Structure

```
/
├── index.html            ← Homepage (content only)
├── about.html            ← Story & credentials
├── services.html         ← 6 service areas
├── projects.html         ← Anonymized project portfolio
├── research.html         ← Publication, education, certs
├── insights.html         ← #CyberWithShahzad articles
├── work-with-me.html     ← Hire me + platform buttons
│
└── assets/
    ├── css/
    │   ├── design.css      ← DESIGN SYSTEM — tokens only
    │   ├── layout.css      ← Navigation & footer styles
    │   └── components.css  ← All UI component styles
    ├── js/
    │   └── components.js   ← Shared nav + footer + interactions
    └── img/
        └── (add your photo here)
```

---

## How the architecture works

**Nav and footer are defined ONCE** in `assets/js/components.js`.
Every page has `<div id="nav-mount"></div>` and `<div id="footer-mount"></div>`.
The JS injects the nav and footer at page load.

**To update a nav link:** Edit `SITE.navLinks` in `components.js` — done.
**To update the footer contact email:** Edit `SITE.email` in `components.js` — done.
**To change a color:** Edit the color variable in `design.css` `:root` — done.

---

## Deploy

See conversation for full branch-based deployment guide.
No build process. No dependencies. Push HTML and it's live.

---

*"Security that holds."*
