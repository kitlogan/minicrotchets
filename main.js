/* ============================================================================
   MINI CROTCHETS — main.js
   ----------------------------------------------------------------------------
   Reads the term data from content.js and fills in:
     • the "Next term starts on ..." line in the hero, and
     • the "Term dates & fees" cards.
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

  /* "2026-09-10" -> "Thursday 10 September 2026" (British format).           */
  function formatLongDate(value) {
    var d = parseISODate(value);
    if (!d) { return null; }
    try {
      return d.toLocaleDateString("en-GB", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
      });
    } catch (e) {
      return null; /* very old browser without Intl — fall back silently */
    }
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

  /* --- work out which term is "next" --------------------------------------- */
  function pickNextTerm(list) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var dated = [];
    for (var i = 0; i < list.length; i++) {
      var d = parseISODate(list[i] && list[i].startDate);
      if (d) { dated.push({ term: list[i], date: d }); }
    }
    if (!dated.length) { return list.length ? list[0] : null; }

    dated.sort(function (a, b) { return a.date - b.date; });

    /* first term that starts today or later */
    for (var j = 0; j < dated.length; j++) {
      if (dated[j].date >= today) { return dated[j].term; }
    }
    /* everything is in the past — show the most recent term as a gentle fallback */
    return dated[dated.length - 1].term;
  }

  /* --- render the hero "next term" line ------------------------------------ */
  (function renderNextTerm() {
    var line = byId("next-term");
    if (!line) { return; }

    var next = terms.length ? pickNextTerm(terms) : null;
    var nice = next ? formatLongDate(next.startDate) : null;

    if (nice) {
      line.innerHTML = "";
      var label = document.createElement("span");
      label.className = "next-term__label";
      label.textContent = "Next term starts on ";
      var date = document.createElement("strong");
      date.className = "next-term__date";
      date.textContent = nice;
      line.appendChild(label);
      line.appendChild(date);
      line.hidden = false;
    } else {
      /* No usable date — keep a warm, non-broken message. */
      line.textContent = "New term dates are just below — do get in touch to book your place.";
      line.hidden = false;
    }
  })();

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

    /* rows we show inside each card, in order */
    var rows = [
      { key: "dates",    label: "Dates", wide: true },
      { key: "weeks",    label: "Length", suffix: " weeks" },
      { key: "halfTerm", label: "Half term" },
      { key: "dropIn",   label: "Drop-in" },
      { key: "fullTerm", label: "Full term" }
    ];

    var html = "";
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i] || {};
      var title = t.title || "Term " + (i + 1);

      html += '<article class="term-card">';
      html += '<h3 class="term-card__title">' + escapeHTML(title) + "</h3>";
      html += '<dl class="term-card__list">';
      for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        var value = t[row.key];
        if (typeof value !== "string" || !value.length) { continue; } /* skip missing */
        var display = value;
        if (row.suffix && !/week/i.test(value)) { display = value + row.suffix; }
        var isFee = (row.key === "dropIn" || row.key === "fullTerm");
        var cls = "term-card__row" + (isFee ? " term-card__row--fee" : "") + (row.wide ? " term-card__row--wide" : "");
        html += '<div class="' + cls + '">';
        html += '<dt class="term-card__key">' + escapeHTML(row.label) + "</dt>";
        html += '<dd class="term-card__val">' + escapeHTML(display) + "</dd>";
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
