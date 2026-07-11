# Coach Aymen — Coaching / Lessons / Advertising Website

A static, multilingual (English / French / Arabic) website with 8 pages:
`index.html` (Home), `about.html`, `coaching.html`, `lessons.html`,
`advertising.html`, `partnerships.html`, `testimonials.html`, `contact.html`.

## How the language switcher works
- Click **EN / FR / AR** in the header, on any page, any time.
- Arabic automatically switches the whole page to right-to-left layout.
- The chosen language carries over automatically when you click to another page,
  via a `?lang=xx` link in the URL — no cookies, no login required.
- All text lives in one file: `js/translations.js`. To edit any wording,
  find the matching key (e.g. `home.title`) under `en`, `fr`, and `ar` and edit the string.

## Photos
Every image on the site is currently a **placeholder** (from picsum.photos) with a
short "story" caption written as an example. To swap in real photos:
1. Add your image files into the `images/` folder (e.g. `images/bakery-queue.jpg`).
2. In the relevant `.html` file, find the matching `<img src="https://picsum.photos/seed/...">`
   tag and replace the `src` with `images/bakery-queue.jpg`.
3. Update the caption text in `js/translations.js` if needed (each image's title/story
   is a translation key like `home.s1title` / `home.s1text`).

If you'd like to send over your own photos or short video clips (saved from your
TikTok account, or any other source you own), share them directly and they can be
dropped straight into these slots.

## Publishing to GitHub Pages
1. Create a new repository on GitHub (e.g. `aicha-rahal-website`).
2. Upload all files in this folder (keeping the `css/` and `js/` folders as-is)
   to the root of that repository.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`.
5. Save — GitHub will give you a live URL, typically
   `https://<your-username>.github.io/aicha-rahal-website/`, within a minute or two.
6. Any time you edit a file and push it to GitHub, the live site updates automatically.

## Structure
```
index.html
about.html
coaching.html
lessons.html
advertising.html
partnerships.html
testimonials.html
contact.html
css/style.css
js/translations.js   ← all EN/FR/AR copy lives here
js/main.js            ← language-switching logic
images/                ← put your real photos here
```
