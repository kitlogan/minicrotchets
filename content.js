/* ============================================================================
   MINI CROTCHETS — TERM DATES & FEES
   ============================================================================

   ★ THIS IS THE ONLY FILE YOU EVER NEED TO EDIT. ★

   Once a year you set the three terms for the year here, and the website
   updates itself: the "Next term starts on ..." line at the top of the page
   and the "Term dates & fees" cards both come from what you type below.

   HOW TO EDIT (there is a full picture guide in UPDATING-TERM-DATES.md):
     • Only change the words INSIDE the "quotation marks".
     • Keep every quotation mark  "  and every comma  ,  exactly where it is.
     • Don't delete the labels on the left (like  fullTerm: ).
     • Dates are written for the computer as  YEAR-MONTH-DAY  (e.g. 2026-09-10).
       The website turns them into tidy dates for you (e.g. "10 Sep 2026"),
       so they always look neat and consistent — you never format them yourself.
     • When you're done, save/commit. The site updates in about a minute.

   IF SOMETHING LOOKS BROKEN after an edit:
     Don't worry — nothing is lost. Open this file's "History" on GitHub and
     restore the previous version (see UPDATING-TERM-DATES.md, last section).
   ============================================================================ */

var MINI_CROTCHETS = {

  /* -- When the class runs (shown at the top of the page) ------------------ */
  classDay:  "Thursdays",         /* e.g. "Thursdays"            */
  classTime: "9:30–10:00am",      /* e.g. "9:30–10:00am"         */


  /* ========================================================================
     THE THREE TERMS
     ------------------------------------------------------------------------
     There are three terms below (Autumn, Spring, Summer). Each one is a block
     that starts with  {  and ends with  },  — change only the words in quotes.

     For each term, fill in these SEVEN things:
       title         – the term's name, e.g. "Autumn Term 2026"
       startDate     – the FIRST class, as  YEAR-MONTH-DAY   e.g. "2026-09-10"
       endDate       – the LAST class,  as  YEAR-MONTH-DAY   e.g. "2026-12-10"
       halfTermDate  – the half-term (no class), as YEAR-MONTH-DAY  "2026-10-29"
       weeks         – how many weeks, e.g. "13"
       dropIn        – the pay-per-visit price, e.g. "£7.50"
       fullTerm      – the whole-term price, e.g. "£65"

     ⭐ The three dates MUST be in  YEAR-MONTH-DAY  form with dashes
        (e.g. "2027-01-07" means the 7th of January 2027). The website prints
        them out neatly for you, so every term always looks the same.
     ======================================================================== */
  terms: [

    {
      title:        "Autumn Term 2026",
      startDate:    "2026-09-10",
      endDate:      "2026-12-10",
      halfTermDate: "2026-10-29",
      weeks:        "13",
      dropIn:       "£7.50",
      fullTerm:     "£65"
    },

    {
      title:        "Spring Term 2027",
      startDate:    "2027-01-07",
      endDate:      "2027-03-18",
      halfTermDate: "2027-02-18",
      weeks:        "10",
      dropIn:       "£7.50",
      fullTerm:     "£50"
    },

    {
      title:        "Summer Term 2027",
      startDate:    "2027-04-15",
      endDate:      "2027-07-08",
      halfTermDate: "2027-06-03",
      weeks:        "12",
      dropIn:       "£7.50",
      fullTerm:     "£60"
    }

  ]

  /* ↑↑↑  Nothing below here needs changing. You're all done — save/commit.  */
};
