/* ============================================================================
   MINI CROTCHETS — main.js
   ----------------------------------------------------------------------------
   Reads the term data from content.js and fills in the "Term dates & fees"
   cards.
   It also handles smooth scrolling for the on-page navigation buttons.

   The website owner does NOT need to edit this file — everything editable
   lives in content.js. This file is written defensively: if content.js is
   missing a value (or was accidentally broken), the page still loads and the
   rest of the site keeps working.
   ============================================================================ */
(function () {
  "use strict";

  /* --- tiny helpers -------------------------------------------------------- */
  function byId(id) { return document.getElementById(id); }

  /* Turn "2026-09-10" into a real date at local midnight (no timezone drift).
     Returns null if it isn't in the expected YEAR-MONTH-DAY shape.          */
  function parseISODate(value) {
    if (typeof value !== "string") { return null; }
    var m = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) { return null; }
    var d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return isNaN(d.getTime()) ? null : d;
  }

  /* Consistent British dates for the term cards — done by hand (not Intl) so
     every browser prints the SAME full month name, always. */
  var MONTHS = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

  function shortDate(d, withYear) {
    return d.getDate() + " " + MONTHS[d.getMonth()] + (withYear ? " " + d.getFullYear() : "");
  }

  /* "2026-10-29" -> "29 October" */
  function formatShortDay(value) {
    var d = parseISODate(value);
    return d ? shortDate(d, false) : null;
  }

  /* "2026-09-10","2026-12-10" -> "10 September – 10 December" (the year isn't
     repeated here — it's already in the term title, e.g. "Autumn Term 2026" —
     which also keeps the line short enough to stay on one row. If a term ever
     spans two years, both years are shown so it stays clear.) */
  function formatDateRange(startValue, endValue) {
    var s = parseISODate(startValue), e = parseISODate(endValue);
    if (!s || !e) { return null; }
    if (s.getFullYear() === e.getFullYear()) {
      return shortDate(s, false) + " – " + shortDate(e, false);
    }
    return shortDate(s, true) + " – " + shortDate(e, true);
  }

  /* --- read the data safely ------------------------------------------------ */
  var data = (typeof MINI_CROTCHETS !== "undefined" && MINI_CROTCHETS) ? MINI_CROTCHETS : null;
  var terms = (data && Object.prototype.toString.call(data.terms) === "[object Array]")
    ? data.terms : [];

  /* --- class day / time (appears in hero, term section & location) --------- */
  function setAll(selector, text) {
    if (typeof text !== "string" || !text.length) { return; }
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) { nodes[i].textContent = text; }
  }
  if (data) {
    setAll(".js-class-day",  data.classDay);
    setAll(".js-class-time", data.classTime);
  }

  /* --- render the term dates & fees cards ---------------------------------- */
  (function renderTermCards() {
    var wrap = byId("term-cards");
    if (!wrap) { return; }

    if (!terms.length) {
      wrap.innerHTML =
        '<p class="term-cards__empty">Term dates are being updated. Please ' +
        '<a href="mailto:joya@minicrotchets.co.uk">get in touch</a> for the latest dates and fees.</p>';
      return;
    }

    var html = "";
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i] || {};
      var title = t.title || "Term " + (i + 1);

      var weeks = (typeof t.weeks === "string" && t.weeks.length)
        ? (/week/i.test(t.weeks) ? t.weeks : t.weeks + " weeks")
        : null;

      /* Dates & half-term are formatted here so every term reads the same way */
      var rows = [
        { label: "Dates",     value: formatDateRange(t.startDate, t.endDate), wide: true },
        { label: "Length",    value: weeks },
        { label: "Half term", value: formatShortDay(t.halfTermDate) },
        { label: "Drop-in",   value: t.dropIn, fee: true },
        { label: "Full term", value: t.fullTerm, fee: true }
      ];

      html += '<article class="term-card">';
      html += '<h3 class="term-card__title">' + escapeHTML(title) + "</h3>";
      html += '<dl class="term-card__list">';
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        if (typeof row.value !== "string" || !row.value.length) { continue; } /* skip missing */
        var cls = "term-card__row" + (row.fee ? " term-card__row--fee" : "") + (row.wide ? " term-card__row--wide" : "");
        html += '<div class="' + cls + '">';
        html += '<dt class="term-card__key">' + escapeHTML(row.label) + "</dt>";
        html += '<dd class="term-card__val">' + escapeHTML(row.value) + "</dd>";
        html += "</div>";
      }
      html += "</dl>";
      html += "</article>";
    }
    wrap.innerHTML = html;
  })();

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* --- footer year --------------------------------------------------------- */
  (function setYear() {
    var el = byId("year");
    if (el) { el.textContent = String(new Date().getFullYear()); }
  })();

  /* --- smooth scrolling for on-page links, with focus for accessibility ---- */
  (function smoothScroll() {
    var header = document.querySelector(".site-header");
    function headerOffset() { return header ? header.offsetHeight : 0; }

    document.addEventListener("click", function (evt) {
      var link = evt.target.closest ? evt.target.closest('a[href^="#"]') : null;
      if (!link) { return; }
      var id = link.getAttribute("href");
      if (!id || id === "#") { return; }
      var target = document.querySelector(id);
      if (!target) { return; }

      evt.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset() - 8;
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: reduce ? "auto" : "smooth" });

      /* move keyboard focus to the section for screen-reader / keyboard users */
      if (!target.hasAttribute("tabindex")) { target.setAttribute("tabindex", "-1"); }
      target.focus({ preventScroll: true });

      /* keep the URL clean-ish but reflect the section for shareability */
      if (history && history.replaceState) { history.replaceState(null, "", id); }
    });
  })();

})();
