/* ============================================================================
   MINI CROTCHETS — term dates & fees        ★ THE ONLY FILE YOU EVER EDIT ★
   ============================================================================
   Once a year, set the three terms below and the website updates itself —
   the "Next term starts on …" line and the "Term dates & fees" cards.

   THE RULES  (there's a full step-by-step guide in UPDATING-TERM-DATES.md):
     • Change only the words INSIDE the "quotation marks".
     • Keep every  "  and every  ,  where it is, and don't change the labels.
     • Write every date as  YEAR-MONTH-DAY   (2026-09-10 means 10 Sep 2026).
       The website prints dates out tidily for you, so every term always
       looks the same — you never format a date yourself.
     • Save (commit) when done; the site updates in about a minute.
     • Went wrong? Nothing is lost — see the "undo" section in the guide.
   ============================================================================ */

var MINI_CROTCHETS = {

  /* When the class runs (rarely changes) */
  classDay:  "Thursdays",      /* e.g. "Thursdays"     */
  classTime: "9:30–10:00am",   /* e.g. "9:30–10:00am"  */

  /* The three terms. The first is labelled to show what each line means;
     the other two follow exactly the same pattern. */
  terms: [

    {
      title:        "Autumn Term 2026",   /* the term's name                 */
      startDate:    "2026-09-10",         /* first class    (year-month-day)  */
      endDate:      "2026-12-10",         /* last class     (year-month-day)  */
      halfTermDate: "2026-10-29",         /* half-term off  (year-month-day)  */
      weeks:        "13",                 /* how many weeks                   */
      dropIn:       "£7.50",              /* price per visit                  */
      fullTerm:     "£65"                 /* price for the whole term         */
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
};
