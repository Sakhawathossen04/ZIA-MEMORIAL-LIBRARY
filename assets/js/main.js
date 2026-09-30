/* ============================================================
   ZIA MEMORIAL LIBRARY — main.js
   Mobile menu, timeline modal, gallery lightbox, era filter,
   client-side search (Obama Library behaviour clone)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile navbar toggler ---------- */
  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.querySelector(".navbar-collapse");
  if (toggler && collapse) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
      collapse.classList.toggle("open");
    });
  }

  /* ---------- Timeline: era filter ---------- */
  var eraButtons = document.querySelectorAll(".timeline-era[data-era]");
  var tlItems = document.querySelectorAll(".timeline-item[data-era]");
  eraButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var era = btn.getAttribute("data-era");
      eraButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      tlItems.forEach(function (item) {
        item.style.display = (era === "all" || item.getAttribute("data-era") === era) ? "" : "none";
      });
    });
  });

  /* ---------- Timeline / generic modals ---------- */
  document.querySelectorAll("[data-modal-open]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modal = document.getElementById(trigger.getAttribute("data-modal-open"));
      if (modal) { modal.classList.add("open"); document.body.style.overflow = "hidden"; }
    });
  });
  document.querySelectorAll(".modal-backdrop, [data-modal-close]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (e.target === el || el.hasAttribute("data-modal-close")) {
        var modal = el.classList.contains("modal-backdrop") ? el : el.closest(".modal-backdrop");
        if (modal) modal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open, .lightbox.open").forEach(function (m) {
        m.classList.remove("open"); document.body.style.overflow = "";
      });
    }
  });

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    if (lbImg && !lbImg.getAttribute("src")) lbImg.removeAttribute("src");
    var lbCap = lightbox.querySelector(".lb-caption");
    document.querySelectorAll(".photo-grid img[data-full]").forEach(function (img) {
      img.addEventListener("click", function () {
        lbImg.src = img.getAttribute("data-full");
        lbImg.alt = img.alt || "";
        lbCap.textContent = img.getAttribute("data-caption") || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
  }

  /* ---------- Simple client-side search (search page) ---------- */
  var searchForm = document.getElementById("site-search-main-form") || document.getElementById("site-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) { e.preventDefault(); runSearch(); });
  }
  function runSearch() {
    var q = (document.getElementById("site-search-main-input") || document.getElementById("site-search-input") || {}).value || "";
    q = q.trim().toLowerCase();
    var out = document.getElementById("search-results");
    if (!out) return;
    out.innerHTML = "";
    if (!q) return;
    var pages = window.SITE_INDEX || [];
    var hits = pages.filter(function (p) {
      return (p.title + " " + p.text).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 20);
    if (!hits.length) {
      out.innerHTML = "<li>কোনো ফলাফল পাওয়া যায়নি।</li>";
      return;
    }
    hits.forEach(function (h) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = h.url; a.textContent = h.title;
      li.appendChild(a);
      var d = document.createElement("div");
      d.className = "caption";
      d.textContent = h.text.slice(0, 160) + "…";
      li.appendChild(d);
      out.appendChild(li);
    });
  }

  /* ---------- Active nav highlighting ---------- */
  (function () {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.indexOf(path) !== -1 && path !== "") a.classList.add("is-active");
    });
  })();
})();
