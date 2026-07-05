# Blue Leaf Labs — website

Static site built with **Astro**, edited through **Sveltia CMS**, hosted on **Cloudflare Pages**.
Content lives as Markdown in `src/content/`; the design system is fixed in `src/styles/global.css`
and a small set of components, so pages can't drift the way the Wix sections did.

---

## 1. Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to ./dist
npm run preview    # serve the built site
```

Node 18.20+ / 20+ required.

---

## 2. Deploy to Cloudflare Pages

Cloudflare Pages (not GitHub Pages) is the host, chosen deliberately: Pages can run
**Pages Functions / Workers**, so the interactive research demos you want later (a live
osmotic-power calculator, a HeatShield map) can run on the same domain. GitHub Pages is
static-only and couldn't.

1. Push this folder to a GitHub repo under your org, e.g. `blueleaflabs/website`.
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/blueleaflabs/website.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** →
   pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. You get a `*.pages.dev` URL to check first.

### Point the domain (do this carefully — email must keep working)
1. In Pages → your project → **Custom domains** → add `www.blueleaflabs.org` and
   `blueleaflabs.org`.
2. Cloudflare tells you which DNS records to set. **Before** cutover, lower your current DNS
   TTL (e.g. to 5 min) so you can roll back fast.
3. **Keep your existing MX records** (and any SPF/DKIM/TXT for `hello@blueleaflabs.org`)
   unchanged. Only the A/AAAA/CNAME records for the website change. If you move DNS to
   Cloudflare, re-create the MX/TXT records exactly as they are today, or email breaks.
4. Verify the site loads on the domain, then restore a normal TTL.

`public/_redirects` already sends the old blog paths to the new ones (`/blog → /writing`,
`/post/* → /writing/*`). Every other path (`/research/osmotic-power`, `/about`, the legal
pages) is preserved exactly, so existing links keep working with no redirect.

---

## 3. Connect the CMS (Sveltia)

The editor lives at **`/admin`** (e.g. `https://www.blueleaflabs.org/admin`). It commits
Markdown straight to this repo over the GitHub API — no separate database.

**One-time setup — GitHub login:**
1. Open `public/admin/config.yml` and set `repo:` to your real repo (`owner/name`).
2. GitHub needs an OAuth relay so the CMS can log you in. The simplest path is the
   free **`sveltia-cms-auth`** Cloudflare Worker:
   - Create a GitHub OAuth App (Settings → Developer settings → OAuth Apps).
     Homepage URL = your site; **Authorization callback URL** = the worker URL (below).
   - Deploy `sveltia-cms-auth` (github.com/sveltia/sveltia-cms-auth) as a Worker, and set
     its `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` to the OAuth App's values.
   - Put the worker's URL into `config.yml` as `base_url:` (uncomment that line).
3. Go to `/admin`, click **Login with GitHub**, and you're in. Saving in the CMS creates a
   Git commit, which triggers a Cloudflare Pages rebuild automatically.

Collections in the CMS: **Research**, **Writing (The Measured View)**, **Watt Workshops**,
**Talks & Interviews** — each maps to a folder in `src/content/`.

---

## 4. Images — add them to any page

All images go through the CMS media library or `public/images/`.

**Via the CMS (easiest):** any entry with a **Hero image** field (every collection has one) —
click it, upload, done. The file lands in `public/images/uploads/` and the page renders it.
Inside a body, use the image button in the Markdown editor to insert one inline.

**By hand:** drop a file in `public/images/` and reference it:
- In a project/post body (Markdown):
  ```md
  ![Alt text describing the figure](/images/red-cell-power-curve.png)
  ```
- As a captioned figure, use raw HTML in the body:
  ```html
  <figure class="fig">
    <img src="/images/red-cell-power-curve.png" alt="RED cell power output vs. load resistance" />
    <figcaption>Fig 1. Power output across a load sweep, OsmoFlux benchtop cell.</figcaption>
  </figure>
  ```

**Image rule (see the design brief):** images are evidence, not decoration — real data
figures (styled to the chart palette) and real, consistently desaturated photos only. No
stock or AI images. Always write alt text.

---

## 5. Everyday content workflow

**Add a research project:** CMS → Research → New → fill the fields (the "At a glance" panel
is built from `methods`, `dataSources`, `outputs`, `repo`, `publicationUrl`). Set
`published: true`. Order controls its position.

**Write a post:** CMS → Writing → New. It stays hidden until `published: true`.
(Two posts from the old site are already here as drafts — paste their full bodies in and
flip `published` on when ready.)

**Add an analysis** (shorter than a project, e.g. the Rush Enterprises CNG memo): same
Research collection, set **Kind = analysis**. It appears under "Analyses" on `/research`.

**Un-publish anything:** set `published: false`. It leaves the site on the next build.

---

## 6. Launch a held section (Workshops / Talks / Writing)

These are built and styled but hidden from the nav and sitemap until you have real content.
To turn one on:
1. Add at least one real entry (CMS), `published: true`.
2. In `src/data/site.ts`, set that section's `live: true`.
3. Commit. It now appears in the nav, footer, and sitemap.

The homepage's multi-pillar grid returns automatically once two or more sections are live.

---

## 7. Still to fill in

- **Legal pages** (`/terms-conditions`, `/privacy-policy`, `/accessibility-statement`):
  routes and slugs are preserved; paste your existing text into
  `src/pages/*.astro` (or copy from the current Wix site).
- **Blog bodies:** the two migrated posts have their intros only — paste the full text.
- **About page:** remove the yellow dev note before launch.
- **OG/social preview image:** add `public/og.png` (1200×630) and a
  `<meta property="og:image">` in `src/layouts/Base.astro` for clean link previews.

---

## Structure

```
src/
  content/{research,posts,workshops,talks}/   Markdown content (CMS-edited)
  content.config.ts                           collection schemas
  data/site.ts                                org facts, nav, live sections
  layouts/Base.astro                          head, fonts, header, footer
  components/                                 Header, Footer
  pages/                                      routes (slugs preserved)
  styles/global.css                           the whole design system
public/
  admin/                                      Sveltia CMS (config.yml, index.html)
  images/                                     image assets + CMS uploads/
  _redirects                                  old blog paths -> new
```
