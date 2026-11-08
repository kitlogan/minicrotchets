# How to update your term dates & fees

A simple, step-by-step guide you can follow yourself — no computer knowledge
needed. You do everything on the GitHub **website**; there's nothing to install,
and nothing can be permanently broken (there's an "undo" at the end).

- You only ever edit **one file**, called **`content.js`**.
- You'll usually do this **once a year**, when you set the whole year's dates and prices.
- When you save, the website updates itself in about a minute.

---

## The one thing to learn: writing dates

Every date is written **year, then month, then day, with dashes** — like this:

> **`2026-09-10`**  means  **10 September 2026**

A few more examples:

| You want | You type |
|---|---|
| 7 January 2027 | `2027-01-07` |
| 18 March 2027 | `2027-03-18` |
| 3 June 2027 | `2027-06-03` |

Always use **two digits** for the month and day (so January is `01`, the 7th is
`07`). That's it — the website turns `2026-09-10` into a tidy "10 Sep 2026" for
you, so every term always looks neat and the same. **You never format dates yourself.**

---

## Step 1 — Open the file

1. Go to **github.com** and **sign in** (use the email and password you set up;
   if you've forgotten it, use "Forgot password" on the sign-in page).
2. Open your **`minicrotchets`** repository (it's listed on your GitHub home page).
3. In the list of files, click **`content.js`**.

> 📷 *[Screenshot placeholder: the file list with `content.js` circled]*

---

## Step 2 — Start editing

Near the top-right of the file, click the **pencil ✏️ icon** ("Edit this file").
The file opens so you can type into it.

> 📷 *[Screenshot placeholder: the pencil / Edit icon circled]*

---

## Step 3 — Change the values (only the words inside the `"quotation marks"`)

Each term is a block that looks like this:

```
    {
      title:        "Autumn Term 2026",
      startDate:    "2026-09-10",
      endDate:      "2026-12-10",
      halfTermDate: "2026-10-29",
      weeks:        "13",
      dropIn:       "£7.50",
      fullTerm:     "£65"
    },
```

For each term, set these **seven** things:

| Label | What to put | Example |
|---|---|---|
| `title` | The term's name | `"Spring Term 2028"` |
| `startDate` | **First class** — as year-month-day | `"2028-01-06"` |
| `endDate` | **Last class** — as year-month-day | `"2028-03-24"` |
| `halfTermDate` | **Half-term** (no class) — as year-month-day | `"2028-02-17"` |
| `weeks` | How many weeks | `"11"` |
| `dropIn` | Price per visit | `"£7.50"` |
| `fullTerm` | Price for the whole term | `"£55"` |

**Change only the words between the `"quotation marks"`.** Leave everything else —
the labels on the left (`title:`, `startDate:` …), the quotation marks `"`, the
commas `,` and the curly brackets `{ }` — exactly where they are.

### Before → after example

Say Autumn term will start a week later. You'd change **just this one line**:

**Before**
```
      startDate:    "2026-09-10",
```
**After**
```
      startDate:    "2026-09-17",
```

Everything else stays the same.

> 📷 *[Screenshot placeholder: an edited line highlighted]*

*(The class **day and time** are at the very top of the file — `classDay` and
`classTime` — in case they ever change. You won't usually touch these.)*

---

## Step 4 — Save (this is called "committing")

1. Scroll to the **top-right** and click the green **Commit changes…** button.
2. A little box pops up. In the first line, type a short note so you remember
   what you did, e.g. **`Update term dates for 2028`**.
3. Leave everything else as it is and click the green **Commit changes** button.

> 📷 *[Screenshot placeholder: the "Commit changes" box with a message typed in]*

---

## Step 5 — Check it worked

1. Wait about **one minute** (the website is rebuilding).
2. Open your website and **refresh** (pull down on a phone, or press refresh):
   **https://kitlogan.github.io/minicrotchets/** — *(this becomes
   **minicrotchets.co.uk** once the domain is connected).*
3. Check the **Term dates & fees** cards — they should show your new
   information.

That's it — you're done! 🎉

---

## If it looks broken — the undo button

Nothing is ever lost. To put the file back exactly as it was:

1. On GitHub, open **`content.js`** again.
2. Click **History** (top-right of the file).
3. Open the version from **just before** your change, click the **`⋯`** menu →
   **Revert changes** (or copy the old text back), and **Commit** it.

The site returns to how it was within a minute. Then you can try again slowly.

### The four things that break it (and how to avoid them)

- ❌ **A date not in `year-month-day` form** — it must look like `"2028-01-06"`.
- ❌ **Deleting a quotation mark `"`** — every value needs one at each end: `"like this"`.
- ❌ **Deleting a comma `,`** at the end of a line — keep them where they are.
- ❌ **Changing a label** on the left (like `fullTerm:`) — only change the words **inside the quotes**.

If in doubt, use the undo button above — nothing is harmed.

---

*This is the only file you ever need to touch. If you'd like a second pair of
eyes before committing, copy your new lines into an email first.*
