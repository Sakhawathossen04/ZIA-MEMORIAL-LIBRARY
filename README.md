# শহীদ প্রেসিডেন্ট জিয়াউর রহমান স্মৃতি গ্রন্থাগার — **Zia Memorial Library**

> Site : https://ziamemoriallibrary.vercel.app/

---

## 1. Reference সাইট অ্যানালাইসিস (যা যা পেলাম)

| বিষয় | Obama Library তে যা আছে |
|---|---|
| CMS | Drupal (custom theme `obama_lib`), path: `/themes/custom/obama_lib/` |
| CSS framework | **Bootstrap 4/5 utility ও কম্পোনেন্ট ক্লাস** (`.container`, `.row`, `.btn`, `.navbar`, `.modal` ...) |
| Typography | Body: **Source Sans Pro** · Serif/quote: **Merriweather** (Google Fonts) |
| Colors | Body bg `#ffffff`, text `#454545` (`rgb(69,69,69)`), navbar/footer bg `#000` black, white text |
| Timeline | **Knight Lab TimelineJS** (`#timeline-332.tl-timeline.tl-layout-landscape`) — event এ ক্লিক করলে Bootstrap XL modal (`#detail-modal-{id}`) খোলে, ভিতরে `Media Gallery` (YouTube embed + ছবি + caption + transcript PDF) |
| Carousel | Slick Carousel (হোমপেজ গ্যালারি) |
| Icons | Bootstrap Icons (`bi bi-instagram`, `bi bi-youtube`, `bi bi-box-arrow-up-right`) |
| Analytics | Google Tag Manager (GTM-WLMC86) |
| Top bar | NARA ব্র্যান্ডিং বার (`narabanner.js` — "NATIONAL ARCHIVES | Explore our Websites") |
| Layout | Page = `.container > .row.g-0` → বামে `.page-sidebar-first-container .col-lg-2` (sidebar menu) + ডানে content |
| Hero | Full-viewport dark photo, বামে উদ্ধৃতি + signature image + scroll-down cue, ডানে-নিচে caption box |



---


### প্রস্তাবিত ফাইল স্ট্রাকচার
```
zia-library/
├── index.html                  # Home
├── zia-family/
│   ├── index.html              # The Zia Family
│   ├── president-ziaur-rahman.html
│   ├── begum-khaleda-zia.html
│   └── zia-family-legacy.html
├── timeline/index.html
├── photos-videos/index.html
├── galleries/*.html
├── artifacts/index.html
├── research/index.html
├── about-us/ (index, faq, support, contact)
├── news/index.html
├── 404.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── images/ (hero, portraits, gallery)
│   └── fonts/
└── docs/ (এই ডকুমেন্টগুলো)
```

---

## 4. Design System — A to Z

### 4.1 Colors (CSS variables)

```css
:root {
  --c-black:        #000000;   /* navbar, footer bg, hero overlay */
  --c-text:         #454545;   /* body text (Obama site-এর মতোই) */
  --c-white:        #ffffff;
  --c-grey-btn:     #6c757d;   /* .btn-secondary bg */
  --c-grey-border:  #dee2e6;
  --c-red:          #006a4e;   /* আমাদের accent — বাংলাদেশ সবুজ (hover/link) */
  --c-red-dark:     #f42a41;   /* দ্বিতীয় accent — লাল (badges, নোটিশ) */
  --c-overlay:      rgba(0,0,0,.55); /* hero ছবির উপর ডার্ক overlay */
  --c-caption-bg:   rgba(20,20,20,.85);
}
```
> Obama সাইট মূলত **black & white**; আমরা লিংক/হাইলাইটে সবুজ-লাল accent নেব — বাকি সব একই মনোক্রোম, যাতে clone-অনুভূতি থাকে।

### 4.2 Typography

| ব্যবহার | ফন্ট | সাইজ/ওয়েট |
|---|---|---|
| Body text | Source Sans Pro, sans-serif | 16px / 400 |
| Page heading `h1.page-heading` | Source Sans Pro, uppercase | 28–32px / 700, letter-spacing 1px |
| Section heading `h2` | Source Sans Pro | 24px / 700 |
| Timeline event title | Source Sans Pro | 20px / 700 |
| Hero quote | **Merriweather serif** | 26–34px / 400, line-height 1.6 |
| Nav/footer links | Source Sans Pro, uppercase | 14px / 600, letter-spacing .5px |
| Date (news/timeline) | Source Sans Pro uppercase | 13px / 700 |

### 4.3 কম্পোনেন্ট ও ক্লাস সম্পূর্ণ লিস্ট (Obama সাইট থেকে সরাসরি ম্যাপ করা)

**a) Top brand bar** (`#nara-banner` clone → `.brand-banner`)
```html
<div class="brand-banner">
  <a class="banner-logo" href="#">[প্রতীক] BANGLADESH HISTORY ARCHIVE</a>
  <a class="collapsible" href="#banner-links">Explore our Websites</a>
</div>
```

**b) Header** (`.site-header`) — black bg, দুই ভাগ:
```html
<header id="header" class="site-header">
  <div class="container d-flex">
    <a href="/" class="site-logo"><img src="assets/images/logo.png" alt="Zia Memorial Library"></a>
    <form class="header-search" role="search">
      <input type="text" class="form-control" name="q" aria-label="Search">
      <button class="btn btn-search" type="submit">Search</button>
    </form>
  </div>
  <nav class="navbar navbar-dark bg-black">
    <div class="container d-flex nav-items">
      <button class="navbar-toggler" aria-label="Open menu"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="main-menu">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/zia-family">The Zia Family</a></li>
          <li class="nav-item"><a class="nav-link" href="/timeline">Timeline</a></li>
          <li class="nav-item"><a class="nav-link" href="/photos-videos">Photos & Videos</a></li>
          <li class="nav-item"><a class="nav-link" href="/artifacts">Artifacts</a></li>
          <li class="nav-item"><a class="nav-link" href="/research">Research</a></li>
          <li class="nav-item"><a class="nav-link" href="/about-us">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="/news">News</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```
- Desktop: menu বাম→ডান সাজানো (Obama-তে `justify-content-md-end`); mobile: hamburger → dropdown
- Active link: `.nav-link.is-active` → underline/white

**c) Hero (হোমপেজ)** — `.hero`
```html
<section class="hero" style="background-image:url('assets/images/hero-zia.jpg')">
  <div class="hero-overlay"></div>
  <div class="container">
    <blockquote class="hero-quote">"আমি, মেজর জিয়াউর রহমান, বাংলাদেশের স্বাধীনতা ঘোষণা করছি…"</blockquote>
    <img class="hero-signature" src="assets/images/zia-signature.svg" alt="জিয়াউর রহমানের স্বাক্ষর">
    <a class="hero-scroll-cue" href="#timeline-preview">↓</a>
    <p class="hero-caption">কালুরঘাট বেতার কেন্দ্র, চট্টগ্রাম — ২৭ মার্চ ১৯৭১</p>
  </div>
</section>
```
- `.hero` → min-height: 100vh; background-size: cover; position: relative
- `.hero-quote` → Merriweather, সাদা, max-width 640px, বাম দিকে
- `.hero-caption` → নিচে-ডানে, `.hero-caption-bg` আধা-কালো বক্স

**d) Page banner (sub-page)** — `.portal-header` clone:
```html
<div id="portal-header" class="portal-header" style="background:url('assets/images/banners/family.jpg') no-repeat top center; background-size:cover">
  <div id="title-bar" class="title-bar"><div class="container"><h1 class="page-heading">The Zia Family</h1></div></div>
</div>
```
- `.title-bar` → আধা-স্বচ্ছ কালো strip, সাদা uppercase h1

**e) Breadcrumb** — `.breadcrumb > .breadcrumb-item` (Home → Page), h2.visually-hidden "Breadcrumb"

**f) Two-column layout (sub-page)**:
```html
<div class="container"><div class="row g-0">
  <aside class="page-sidebar-first-container col-12 col-lg-2">
    <nav class="sidebar-main-menu"> ... এই সেকশনের sub-pages ... </nav>
  </aside>
  <main class="page-content col-12 col-lg-10"> ... </main>
</div></div>
```

**g) Profile card (২-কলাম)** — Obama `/obamas` clone:
```html
<div class="row two-col">
  <div class="profile-card col-md-6">
    <img class="profile-img" src="..." alt="প্রেসিডেন্ট জিয়াউর রহমান">
    <h2>President Ziaur Rahman</h2>
    <p>ছোট ভূমিকা (২-৩ লাইন)…</p>
    <a class="btn btn-outline-dark" href="...">LEARN MORE</a>
  </div>
  ...
</div>
```

**h) Buttons (সম্পূর্ণ সেট — Obama সাইটে যা যা আছে):**

| ক্লাস | ব্যবহার | স্টাইল |
|---|---|---|
| `.btn` | বেস | padding 8px 20px, radius 4px, uppercase, letter-spacing 1px, font 14px/600 |
| `.btn-secondary` | Search submit | bg `#6c757d`, সাদা টেক্সট |
| `.btn-outline-dark` | LEARN MORE / VIEW GALLERY | সাদা bg, কালো border, hover → black bg সাদা টেক্সট |
| `.btn-hero` | hero scroll/CTA | transparent, সাদা border |
| `.btn-close` | modal close | Bootstrap ✕ |
| `.navbar-toggler` | mobile menu | সাদা ৩-লাইন icon |

**i) Timeline section** (`.tl-timeline` clone):
- Era chips: `.timeline-era` — Pre-Liberation (১৯৩৬–৭০) / Liberation War (১৯৭১) / Rise to Power (১৯৭৫–৭৭) / Presidency (১৯৭৭–৮১) / After Zia (১৯৮১–২০২৬)
- Event card: date (uppercase) + title; ক্লিক → **modal**:
```html
<div class="modal fade modal-xl" id="detail-modal-27">
  <div class="modal-dialog modal-dialog-centered"><div class="modal-content">
    <div class="modal-header"><button class="btn-close" data-bs-dismiss="modal"></button></div>
    <div class="modal-body">
      <div class="parent-node-info">
        <div class="parent-date">Timeline — ২৭ মার্চ ১৯৭১</div>
        <h2 class="parent-title">স্বাধীনতার ঘোষণা</h2>
        <div class="parent-body"><p>…</p></div>
      </div>
      <h2>Media Gallery</h2>
      <div class="media-gallery">
        <div class="media-field"><div class="media-wrapper"><iframe class="iframe" src="[youtube-embed]"></iframe></div>
          <div class="caption">ক্যাপশন… <a href="transcript.pdf" target="_blank">View Transcript</a></div></div>
        <div class="media-field"><div class="media-wrapper"><img class="media-image tl-media-image" src="..."></div>
          <div class="caption">…</div></div>
      </div>
    </div>
  </div></div>
</div>
```
- নিচে ছোট **jump-nav**: সব event-এর লিংক লিস্ট (Obama সাইটের "On This Page" এর মতো)

**j) Gallery card grid** — `.gallery-grid > .gallery-card` (থাম্বনেইল + VIEW GALLERY বাটন), ভিতরে `.photo-grid > figure > img + figcaption`

**k) News teaser** — `.news-item`: uppercase date + h3 title + excerpt + `READ MORE` লিংক, ডানে থাম্বনেইল

**l) FAQ / Support কার্ড (হোম)** — `.home-block`: h2 + সংক্ষিপ্ত টেক্সট + LEARN MORE

**m) Footer** — সম্পূর্ণ clone:
```html
<footer class="site-footer">
  <div class="container">
    <ul class="nav footer-nav">
      <li class="nav-item"><a class="nav-link" href="#">ACCESSIBILITY</a></li>
      <li class="nav-item"><a class="nav-link" href="#">PRIVACY POLICY</a></li>
      <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
      <li class="nav-item"><a class="nav-link" href="/about-us">ABOUT US</a></li>
      <li class="nav-item"><a class="nav-link" href="/news">NEWS</a></li>
    </ul>
    <div class="copyright-block">এই স্মৃতিগ্রন্থাগার… (এক লাইনের বর্ণনা)</div>
    <nav class="menu--social"><h3>CONNECT WITH US</h3>
      <ul class="nav"><li><a class="nav-link bi bi-facebook" href="#">Facebook</a></li>
      <li><a class="nav-link bi bi-youtube" href="#">YouTube</a></li></ul>
    </nav>
    <a class="archives-logo" href="#"><img src="assets/images/archive-logo.png" alt="Archive logo"></a>
  </div>
</footer>
```

**n) Utility ক্লাস** (Obama সাইট থেকে): `.container`, `.row`, `.col-*`, `.g-0`, `.d-flex`, `.text-light`, `.bg-dark`, `.bg-black`, `.visually-hidden`, `.modal*`, `.collapse`, `.form-control`, `.order-*`

### 4.4 ছবির নিয়ম
- Hero: 1920×1080 JPG, কালো-সাদা/সেপিয়া টোন, উপরে `.hero-overlay` gradient
- Portrait: 3:4 ক্রপ, `styles/large` এর মতো ~480px
- Gallery: থাম্বনেইল 400px + lightbox-এ ফুল সাইজ
- প্রতিটি ছবিতে `alt` + caption + credit (সূত্র) — বাধ্যতামূলক

---

## 5. কনটেন্ট সোর্স (ছবি/তথ্য কোথা থেকে)

- তথ্য: Wikipedia (Ziaur Rahman / Khaleda Zia / Tarique Rahman), BNP অফিসিয়াল সাইট (bnpbd.org), Ziaur Rahman Foundation (zrf.info), tariquerahman.info, BSS, The Daily Star, Prothom Alo আর্কাইভ → সম্পূর্ণ লিস্ট: **[docs/CONTENT-COLLECTION.md](docs/CONTENT-COLLECTION.md)**
- ছবি: Wikimedia Commons — "Ziaur Rahman" / "Khaleda Zia" / "Tarique Rahman" ক্যাটাগরি (লাইসেন্স যাচাই করে), সংবাদমাধ্যমের আর্কাইভ ছবি (credit সহ), পারিবারিক/দলীয় অফিসিয়াল ছবি (অনুমতি নিয়ে)
- ভিডিও: YouTube — জিয়ার ভাষণ, ২৭ মার্চ ঘোষণার রেকর্ডিং, রাষ্ট্রীয় অনুষ্ঠান (embed)

> ⚠️ কপিরাইট: প্রতিটি ছবির লাইসেন্স যাচাই করে ব্যবহার করতে হবে; সরকারি/পাবলিক ডোমেইন ছবি অগ্রাধিকার।

## 6. Quality নিয়ম (প্রতিটি পেজে)
- Responsive: 360px → 1440px (mobile menu collapse, 2-col → 1-col)
- Accessibility: skip-link (`Skip to main content`), `alt`, focus state, `aria-label`, contrast AA
- SEO: প্রতি পেজে title/description/og-image/canonical
- Performance: lazy-load ছবি (`loading="lazy"`), কমপ্রেসড assets, কোনো heavy framework নেই
- Language: বাংলা প্রাথমিক (`lang="bn"`), মেনু/সেকশনে ইংরেজি লেবেল Obama-র মতো (The Zia Family, Timeline…)

## 7. ডকুমেন্ট
- **[docs/CONTENT-COLLECTION.md](docs/CONTENT-COLLECTION.md)** — জিয়া পরিবারের A-to-Z তথ্য + পূর্ণ টাইমলাইন + সোর্স
- **[docs/ROADMAP.md](docs/ROADMAP.md)** — ধাপে ধাপে তৈরির পরিকল্পনা
- **[docs/IMAGE-LICENSES.md](docs/IMAGE-LICENSES.md)** — সব ছবির সোর্স, ক্রেডিট ও লাইসেন্স

## 8. ডাউনলোড করা ছবি (`assets/images/`)

```
assets/images/
├── portraits/
│   ├── ziaur-rahman-1979.jpg      (1400×1867, CC0 — মূল পোর্ট্রেট)
│   ├── ziaur-rahman.jpg           (454×696, CC BY-SA 3.0 nl)
│   ├── khaleda-zia-2004.jpg       (1280×1753, CC BY 3.0 br)
│   └── tarique-rahman-2005.jpg    (CC BY-SA 3.0)
├── gallery/
│   ├── zia-netherlands-visit-1979.jpg      (CC0 — hero-তে ব্যবহারযোগ্য)
│   ├── zia-queen-juliana-lelystad-1979.jpg (CC0)
│   ├── khaleda-zia-book-ceremony-2010.jpg  (CC BY-SA 3.0)
│   ├── khaleda-zia-london-2011.jpg         (OGL v1.0)
│   └── tarique-council-2005.jpg            (CC BY-SA 3.0)
└── signatures/
    ├── ziaur-rahman-signature.svg   (PD — hero signature)
    └── tarique-rahman-signature.svg (PD)
```

