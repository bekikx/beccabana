# Ikebana Creations — Website

A simple static site to showcase Ikebana arrangements. No build step required.

## Structure

- `index.html` — page structure (hero, gallery, about, contact)
- `css/style.css` — all styling
- `js/data.js` — your arrangement data: `LESSON_NAMES` (Sogetsu Book 1-3 lesson
  reference) and the `pieces` array (one entry per arrangement)
- `js/main.js` — rendering logic: book tabs, lesson filter, pagination,
  carousel, lightbox
- `images/book1/`, `images/book2/`, `images/book3/` — your converted photos,
  one subfolder per Sogetsu textbook
- `images/profile/` — your About-section portrait
- `LESSON-REFERENCE.md` — printable cheat sheet of every lesson number + title
  for all 3 books, so you don't have to scroll through `data.js` while filling
  in lesson numbers

## Reordering photos

Everything in the gallery is controlled by the order of entries in the
`pieces` array in `js/data.js` — there's no separate reordering tool, you
just edit the array:

- **To change which photo leads a multi-photo carousel** (or reorder its
  detail shots): reorder the filenames inside that piece's `images: [...]`
  array. The first one is the cover shot shown on the card.
- **To change which arrangement shows first when two pieces share a date**
  (e.g. you did two lessons in one day): reorder those two piece *blocks*
  in the `pieces` array. The gallery sorts by date (newest first) and, for
  ties on the same date, keeps whatever order the blocks are in the file.
- **The pieces array doesn't need to stay date-sorted** — you can move any
  block anywhere; the site always re-sorts by date at render time regardless
  of source order (same-date ties aside).

## Filling in lesson numbers

Your photos were converted from HEIC and grouped into sessions by date, with
the book auto-assigned from the year (2024→Book 1, 2025→Book 2, 2026→Book 3).
Since you sometimes skipped ahead within a book, exact lesson numbers had to
be left blank — only you know which lesson each session was. Open
`js/data.js` and fill in the `lesson` field (1-20) for each piece:

```js
{
  id: "2024-02-03",
  book: 1,
  lesson: null,     // <-- change to e.g. 3
  images: ["images/book1/2024-02-03-1.jpg"],
  title: "",        // optional custom title, overrides the lesson name
  description: ""   // optional short note
}
```

Open `LESSON-REFERENCE.md` side-by-side while you do this — it lists every
lesson's title under its number for all 3 books, so you don't need to
cross-reference `LESSON_NAMES` in the code. Once you set the number, the
site automatically looks up and displays the matching title — you don't
need to type the title yourself. Pieces left as `lesson: null` show up
under an "Unassigned" filter chip instead of being hidden. Pieces tagged
`book: "freestyle"` are outside the curriculum and have no lesson number at
all — they live under their own "Freestyle" tab.

Each `images` array holds the main/full-arrangement shot first, then any
detail shots (or sketches) from that same piece — the gallery card shows
them as a swipeable carousel (drag, or click the arrows) with dot
indicators, Instagram-style. Clicking the photo opens the full lightbox.

## Adding your portrait

Save a photo as `images/profile/profile.jpg` — the About section will pick
it up automatically. Until then it shows a placeholder.

## Other things to personalize

- The hero text and `<title>` in `index.html`
- The About section text in `index.html`
- Your email in the Contact section (`mailto:` link in `index.html`)

## Preview locally

Just open `index.html` in a browser, or run a tiny local server:

```bash
cd ikebana-site
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `ikebana-site`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ikebana-site.git
   git push -u origin main
   ```
3. On GitHub: Settings → Pages → Source → select the `main` branch, `/ (root)` folder → Save.
4. Your site will be live at `https://<your-username>.github.io/ikebana-site/` within a minute or two.
