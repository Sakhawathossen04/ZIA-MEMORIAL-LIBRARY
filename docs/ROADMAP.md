# 🗺️ ROADMAP — Zia Memorial Library (Obama Library clone)

> লক্ষ্য: [obamalibrary.gov](https://www.obamalibrary.gov)-এর structure/design ১:১ অনুসরণ করে শহীদ প্রেসিডেন্ট জিয়াউর রহমান, বেগম খালেদা জিয়া ও তারেক রহমান কেন্দ্রিক সম্পূর্ণ ওয়েবসাইট।
> Spec: [README.md](../README.md) · Content: [docs/CONTENT-COLLECTION.md](CONTENT-COLLECTION.md)

---

## Phase 0 — ভিত্তি (Setup) ✅ শুরু হয়েছে
- [x] Obama সাইটের পূর্ণ অ্যানালাইসিস (structure, colors, fonts, ক্লাস, কম্পোনেন্ট)
- [x] Zia পরিবারের তথ্য A-to-Z সংগ্রহ
- [x] README (clone spec) + কনটেন্ট ডক + রোডম্যাপ
- [ ] ফোল্ডার স্ট্রাকচার তৈরি (`index.html`, `assets/`, পেজ ফোল্ডার)
- [ ] লোগো ও স্বাক্ষর ইমেজ (zia-signature, archive logo placeholder)
- [ ] `main.css` — design tokens (colors/typography) + base styles

## Phase 1 — Header / Footer / Layout shell
- [ ] Brand banner (NARA বারের clone → "Bangladesh History Archive" স্টাইল)
- [ ] Header: কালো bg + লোগো + সার্চ বক্স + hamburger
- [ ] Main nav (৭টি লিংক, সঠিক অর্ডারে) + mobile collapse
- [ ] Footer: menu + copyright block + CONNECT WITH US + archive logo
- [ ] Breadcrumb + `.portal-header` (পেজ ব্যানার) + sidebar (`.col-lg-2`) লেআউট
- [ ] Skip-link ও accessibility বেস

## Phase 2 — হোমপেজ
- [ ] Full-viewport hero: জিয়ার ছবি + ২৭ মার্চ উদ্ধৃতি + স্বাক্ষর + scroll cue + caption বক্স
- [ ] Timeline preview section (নিচে scroll)
- [ ] "The Zia Family" ২-কলাম প্রোফাইল কার্ড
- [ ] Photos & Videos গ্যালারি কার্ড (scroll-snap slider)
- [ ] FAQ / About / Support ব্লক
- [ ] Social/Instagram-style স্ট্রিপ

## Phase 3 — মূল পেজসমূহ
- [ ] `/zia-family` + ৩টি বায়ো পেজ (Zia, Khaleda, Family/Legacy) — Obama-র বায়ো পেজের মতো সেকশন ভাগ
- [ ] `/timeline` — TimelineJS embed বা নিজস্ব CSS timeline; event → **Bootstrap-style modal** (`#detail-modal-*`, Media Gallery + caption + transcript লিংক) + jump-nav
- [ ] `/photos-videos` + ৫টি গ্যালারি পেজ (lightbox সহ)
- [ ] `/artifacts` — স্মৃতিচিহ্নের ক্যাটালগ পেজ
- [ ] `/research` — ডকুমেন্ট আর্কাইভ, ভাষণ ট্রান্সক্রিপ্ট, রিকোয়েস্ট ফর্ম তথ্য
- [ ] `/about-us` (+ FAQ, Support, Contact) ও `/news`
- [ ] `/search` — সাধারণ ক্লায়েন্ট-সাইড সার্চ (static এ সীমাবদ্ধ) ও `404.html`

## Phase 4 — কনটেন্ট ফাইনালাইজেশন
- [ ] ছবি সংগ্রহ ও ক্রেডিট/লাইসেন্স লগ (docs/IMAGE-LICENSES.md)
- [ ] ভিডিও embed লিস্ট (২৭ মার্চ, ভাষণ, শপথ ২০২৬)
- [ ] বাংলা টেক্সট সম্পাদনা/প্রুফরিড (উদ্ধৃতির নির্ভুল পাঠ যাচাই)
- [ ] প্রতিটি পেজে SEO meta + og-image + canonical

## Phase 5 — Quality ও লঞ্চ
- [ ] Responsive টেস্ট: 360 / 768 / 1024 / 1440 px
- [ ] Accessibility অডিট (alt, contrast, keyboard nav, focus state)
- [ ] Performance: ছবি WebP/কমপ্রেস, lazy-load, Lighthouse > 90
- [ ] হোস্টিং (GitHub Pages / Netlify) + কাস্টম ডোমেইন
- [ ] Analytics (GA4/GTM) ও sitemap.xml, robots.txt

## Phase 6 — এনহ্যান্সমেন্ট (ঐচ্ছিক)
- [ ] দ্বিভাষিক টগল (বাংলা ⇄ English)
- [ ] সার্চ (Pagefind/Algolia) — সব পেজে ফুলটেক্সট সার্চ
- [ ] News/Archive CMS (Decap CMS + GitHub) — নতুন নিউজ নিজে যোগ করা যাবে
- [ ] TimelineJS ডেটা Google Sheet থেকে এডিটেবল
- [ ] Virtual exhibit ("Z Force", "চন্দ্রিমা উদ্যান") — গল্প-ধাঁচের পেজ

## Phase 7 — স্কেল-আপ (দূরের লক্ষ্য)
- [ ] Next.js/Astro-তে migration (কম্পোনেন্ট রিইউজ, ISR)
- [ ] Headless CMS (Sanity/Strapi) — artifact ক্যাটালগ ৩৫,০০০+ স্কেলে
- [ ] পাবলিক API (artifact/টাইমলাইন ডেটার জন্য)
- [ ] 3D/ভার্চুয়াল ট্যুর (মাজার কমপ্লেক্স, গণভবন)

---

### মাইলস্টোন চেকপয়েন্ট
| মাইলস্টোন | কী থাকবে | ধাপ |
|---|---|---|
| M1 | Header+Footer+হোম hero — সাইট চেনা যায় | Phase 0–2 |
| M2 | ৭টি মূল সেকশন নেভিগেবল, সব পেজ লিংকড | Phase 3 |
| M3 | কনটেন্ট সম্পূর্ণ, ছবি/ভিডিও বসানো | Phase 4 |
| M4 | লাইভ ডোমেইন | Phase 5 |
