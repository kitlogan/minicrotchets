# How to update your term dates & fees

A step-by-step guide for updating the Mini Crotchets website yourself — no
computer knowledge needed, just follow along. You do everything on the GitHub
**website**; there's nothing to install and nothing can be permanently broken
(there's an "undo" at the end of this guide).

You only ever edit **one file**, called **`content.js`**. When you save it, the
website updates itself about a minute later.

You'll typically do this **once a year**, when you set the whole year's dates and prices.

---

## Before you start

- You'll need to **sign in to GitHub** (the free website where the site lives).
  Use the email and password you set up. *(If you've forgotten it, use
  "Forgot password" on the GitHub sign-in page.)*
- Have your new **term dates, half-term dates and prices** written down in front of you.

> 📷 *[Screenshot placeholder: the GitHub sign-in page]*

---

## Step 1 — Open the file

1. Go to **github.com** and sign in.
2. Open your Mini Crotchets repository (it's on your GitHub home page — likely
   called **`minicrotchets`**). Click its name.
3. In the list of files, click **`content.js`**.

> 📷 *[Screenshot placeholder: the file list with `content.js` circled]*

---

## Step 2 — Start editing

Near the top-right of the file, click the **pencil ✏️ icon** ("Edit this file").

> 📷 *[Screenshot placeholder: the pencil / Edit icon circled]*

The file will open so you can type into it.

---

## Step 3 — Change only the words inside the quotation marks

Scroll down to the three term "blocks". Each looks like this:

```
    {
      title:     "Autumn Term 2026",
      startDate: "2026-09-10",
      dates:     "Thursday 10 September – 10 December 2026",
      weeks:     "13",
      halfTerm:  "29 October 2026",
      dropIn:    "£7.50",
      fullTerm:  "£65"
    },
```

**Change only the words between the "quotation marks".** Leave everything else —
the labels on the left (`title:`, `dates:` …), the quotation marks `"`, the
commas `,` and the curly brackets `{ }` — exactly where they are.

### The seven things to fill in for each term

| Label | What to put | Example |
|---|---|---|
| `title` | The term's name | `"Spring Term 2028"` |
| `startDate` | The **first day**, written for the computer as **year-month-day** | `"2028-01-06"` |
| `dates` | The dates written normally, for people to read | `"Thursday 6 January – 24 March 2028"` |
| `weeks` | How many weeks | `"11"` |
| `halfTerm` | The half-term date | `"17 February 2028"` |
| `dropIn` | The pay-per-visit price | `"£7.50"` |
| `fullTerm` | The whole-term price | `"£55"` |

> ⭐ **The most important one is `startDate`.** It must be in
> **year-month-day** form with dashes, e.g. `"2028-01-06"` for the 6th of
> January 2028. That's the only one the computer reads to work out which term is
> "next" — so please double-check it. The other dates you can write however
> reads nicely.

### Before → after example

Say Autumn term now starts a week later. You'd change **just these two lines**:

**Before**
```
      startDate: "2026-09-10",
      dates:     "Thursday 10 September – 10 December 2026",
```

**After**
```
      startDate: "2026-09-17",
      dates:     "Thursday 17 September – 10 December 2026",
```

Everything else stays the same.

> 📷 *[Screenshot placeholder: an edited line highlighted]*

---

## Step 4 — Save (this is called "committing")

1. Scroll to the **top-right** and click the green **Commit changes…** button.
2. A little box pops up. In the first line, type a short note so you remember
   what you did, for example: **`Update term dates for 2027/28`**.
3. Leave everything else as it is and click the green **Commit changes** button
   in the box.

> 📷 *[Screenshot placeholder: the "Commit changes" box with a message typed in]*

---

## Step 5 — Check it worked

1. Wait about **one minute** (GitHub is rebuilding the site).
2. Go to **minicrotchets.co.uk** and **refresh the page** (pull down on a phone,
   or press the refresh button).
3. Check the **"Next term starts on …"** line near the top and the **Term dates &
   fees** cards further down — they should show your new information.

That's it — you're done! 🎉

---

## If it looks broken — the undo button

Don't worry, nothing is lost. If the site looks wrong after an edit (for
example a date didn't appear), you can put the file back exactly as it was:

1. On GitHub, open **`content.js`** again.
2. Click **History** (top-right of the file).
3. Click the version **just before** your last change.
4. Click the **"..."** menu (or the **Revert** option) and choose to restore /
   revert to that version, then **Commit** it.

The site will go back to how it was a minute later. Then you can try your edit
again more slowly.

### The three things that break it (and how to avoid them)

- ❌ **Deleting a quotation mark `"`** — every value needs one at each end:
  `"like this"`.
- ❌ **Deleting a comma `,`** at the end of a line — keep them where they are.
- ❌ **Changing a label** on the left (like turning `fullTerm:` into something
  else) — only change the words **inside the quotes**.

If in doubt, use the undo button above and nothing is harmed.

---

*Need a hand? This is the only file you ever need to touch. If you'd like a
second pair of eyes before committing, you can always copy your new lines into
an email first.*
