# Mini Crotchets — website

A single-page, static marketing site for **Mini Crotchets**, a toddler music
class in Ropley, Hampshire. No framework, no build step, no backend — just
hand-written HTML, CSS and a little vanilla JavaScript, hosted free on
**GitHub Pages** at **minicrotchets.co.uk**.

> **Owner (Joya):** to change term dates and fees, you only ever edit one file —
> `content.js`. There's a friendly step-by-step guide in
> **[UPDATING-TERM-DATES.md](UPDATING-TERM-DATES.md)**. You don't need anything below.

---

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — one scrolling page. |
| `styles.css` | All the styling. |
| `main.js` | Reads `content.js` and fills in the term/fees cards; handles smooth scrolling. |
| **`content.js`** | **The only file the owner edits** — term dates, half-terms and fees. |
| `assets/img/` | Logo, the five mascot rings, and the class photos. |
| `CNAME` | Tells GitHub Pages the custom domain is `minicrotchets.co.uk`. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (no Jekyll processing). |
| `UPDATING-TERM-DATES.md` | The owner's crib sheet for updating dates. |

## Preview locally

No tooling needed. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly as a `file://` also works, but a local server
best matches how GitHub Pages serves it.)

---

## Deploying to GitHub Pages (first time)

1. **Create the repository.** On GitHub, create a new repo (e.g. `minicrotchets`).
   Public is fine and simplest for Pages.

2. **Push this folder to it:**
   ```bash
   git remote add origin https://github.com/<your-username>/minicrotchets.git
   git branch -M main
   git push -u origin main
   ```

3. **Turn on GitHub Pages:** repo **Settings → Pages** →
   **Source: Deploy from a branch** → **Branch: `main`**, **Folder: `/ (root)`** → **Save**.
   Your site goes live at `https://<your-username>.github.io/minicrotchets/` within a minute or two.

4. **Point the custom domain at GitHub Pages.** (The site is first published on
   the `github.io` URL above; do this step when you're ready to move
   `minicrotchets.co.uk` off WordPress.) At your domain registrar / DNS host, set:

   **Apex domain `minicrotchets.co.uk` → four A records:**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   *(optional but recommended — the matching IPv6 AAAA records):*
   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```
   **`www` subdomain → CNAME → `<your-username>.github.io`**

   Then in **Settings → Pages → Custom domain**, enter `minicrotchets.co.uk`
   and Save (this creates the `CNAME` file in the repo automatically), wait for
   the DNS check to go green, and tick **Enforce HTTPS**. (DNS can take up to a
   few hours to propagate.)

That's it — no paid hosting, no management fee. After launch you can retire the
old WordPress site.

---

## Common developer edits

### Add another video
The channel has more clips than the three embedded. To add one, open
`index.html`, find the `VIDEOS` section, copy one `<figure class="video">…</figure>`
block, and change the YouTube ID in **both** the `src` and the `title`. The
`src` uses the privacy-friendly `youtube-nocookie.com/embed/<ID>?rel=0` form.

### Add the streaming (Spotify / Apple / YouTube Music) links
Music streaming is a Phase-2 item — the buttons are in place but currently point
back to the music section and show *"Streaming links coming very soon."* When the
album is distributed:
1. In `index.html`, find the `MUSIC` section (search for `data-placeholder`).
2. Replace each button's `href="#music"` with the real streaming URL, e.g.
   `href="https://open.spotify.com/album/…"`.
3. Delete the `data-placeholder="…"` attribute and the
   `<p class="music__soon">…</p>` "coming soon" line.

### Swap in higher-resolution photos / real brand artwork
Replace files in `assets/img/` keeping the **same filenames** and the site
picks them up automatically. If filenames change, update the `src` in `index.html`.

---

## Notes on assets

- **Photos** and the **pink wordmark** (`logo.png`) were migrated from the old
  WordPress media library (2016-era web JPEGs — modest resolution; higher-res
  originals can be dropped in later using the same filenames).
- The **five mascot rings** (`assets/img/mascots/ring-*.png`) — teddy, tambourine,
  duck, drum and bird — were cut from Joya's "Board Flyer" artwork as individual
  transparent circles. They're the real brand device (five *separate*,
  non-overlapping rings, one mascot each). Cleaner vector/PNG exports from the
  OneDrive artwork can replace them using the same filenames.
- All copy is the real copy from the current site.

## Design intent

Warm, playful and gentle — genuinely musical, not slick-corporate. Palette is
built around the brand pink `#ec008c`, with the five mascot-ring colours (blue,
green, yellow, orange) as accents. Mobile-first, accessible (semantic HTML, alt
text, visible focus states, good contrast, reduced-motion support).
