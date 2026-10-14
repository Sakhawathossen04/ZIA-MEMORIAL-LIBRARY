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

