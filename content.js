/* ============================================================================
   MINI CROTCHETS — TERM DATES & FEES
   ============================================================================

   ★ THIS IS THE ONLY FILE YOU EVER NEED TO EDIT. ★

   Once a year you set the three terms for the year here, and the website
   updates itself: the "Next term starts on ..." line at the top of the page
   and the "Term dates & fees" table both come from what you type below.

   HOW TO EDIT (there is a full picture guide in UPDATING-TERM-DATES.md):
     • Only change the words INSIDE the "quotation marks".
     • Keep every quotation mark  "  and every comma  ,  exactly where it is.
     • Don't delete the labels on the left (like  fullTerm: ).
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
       title      – the term's name, e.g. "Autumn Term 2026"
       startDate  – the FIRST day, written for a computer as  YEAR-MONTH-DAY
                    (this is the ONLY date that must be in 2026-09-10 style —
                     it is used to work out which term is coming next)
       dates      – the dates written normally, for people to read
       weeks      – how many weeks, e.g. "13"
       halfTerm   – the half-term date, e.g. "29 October 2026"
       dropIn     – the pay-per-visit price, e.g. "£7.50"
       fullTerm   – the whole-term price, e.g. "£65"
     ======================================================================== */
  terms: [

    {
      title:     "Autumn Term 2026",
      startDate: "2026-09-10",                              /* YEAR-MONTH-DAY */
      dates:     "Thursday 10 September – 10 December 2026",
      weeks:     "13",
      halfTerm:  "29 October 2026",
      dropIn:    "£7.50",
      fullTerm:  "£65"
    },

    {
      title:     "Spring Term 2027",
      startDate: "2027-01-07",                              /* YEAR-MONTH-DAY */
      dates:     "Thursday 7 January – 18 March 2027",
      weeks:     "10",
      halfTerm:  "18 February 2027",
      dropIn:    "£7.50",
      fullTerm:  "£50"
    },

    {
      title:     "Summer Term 2027",
      startDate: "2027-04-15",                              /* YEAR-MONTH-DAY */
      dates:     "Thursday 15 April – 8 July 2027",
      weeks:     "12",
      halfTerm:  "3 June 2027",
      dropIn:    "£7.50",
      fullTerm:  "£60"
    }

  ]

  /* ↑↑↑  Nothing below here needs changing. You're all done — save/commit.  */
};
