# Mark Scripsick — Portfolio

A fast, static personal portfolio built with [Astro](https://astro.build).
It's **content-driven**: you add projects and certifications by creating one
markdown file each — you never touch layout or HTML.

**Live site:** https://markscripsick.github.io

---

## The two things you'll do most

### ✅ 1. Add a new project

1. Create a new file in `src/content/projects/`, e.g.
   `src/content/projects/my-cool-build.md`. (The file name becomes the URL:
   `/projects/my-cool-build`.)
2. Paste this template and edit the values:

   ```markdown
   ---
   title: My Cool Build
   date: 2026-01-15
   summary: One or two sentences describing the project.
   skills:
     - SolidWorks
     - Robotics
   heroImage: /images/projects/my-cool-build/hero.jpg
   heroAlt: Describe the hero image for screen readers
   gallery:
     - src: /images/projects/my-cool-build/photo-1.jpg
       alt: Describe this image
       caption: Optional caption shown in the lightbox.
     - src: /images/projects/my-cool-build/render-1.png
       alt: SolidWorks render of the assembly
   featured: true        # show on the home page? true / false
   # externalLink: https://github.com/you/repo
   # externalLinkLabel: View on GitHub
   # embedUrl: https://...   # optional 3D/CAD embed (see "3D models" below)
   # draft: true             # set while writing to hide it from the site
   ---

   Write the build story here in **markdown**. Add headings, lists, links,
   and images however you like.
   ```

3. Add your images: drop them in `public/images/projects/my-cool-build/`
   and reference them by the path `/images/projects/my-cool-build/<file>`.
   Use web-sized images (≈1600px wide max, JPG/PNG/WebP) so the page loads fast.

That's it. The project automatically appears on the Projects page, in the
skill filter, and (if `featured: true`) on the home page.

### ✅ 2. Add a certification

1. Create a file in `src/content/certifications/`, e.g.
   `src/content/certifications/cswp.md`.
2. Paste and edit:

   ```markdown
   ---
   name: Certified SolidWorks Professional (CSWP)
   issuer: Dassault Systèmes
   status: completed          # "completed" or "in-progress"
   date: 2026-05-01           # omit for in-progress
   credentialUrl: https://...  # optional verification link
   logo: /images/certifications/solidworks.svg   # optional
   order: 20                   # higher numbers show first
   ---

   Optional note about the certification.
   ```

The certification shows up automatically on the Certifications page, with an
"In progress" or "Completed" badge.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install        # first time only — installs dependencies
npm run dev        # start the dev server
```

Then open the URL it prints (usually http://localhost:4321). The site
auto-reloads as you edit files.

Other commands:

```bash
npm run build      # build the production site into dist/
npm run preview    # preview the production build locally
npm run gen:assets # regenerate placeholder images / OG card / résumé (see below)
```

---

## How deploys work

Deployment is automatic. **Every time you push to the `main` branch**, a
GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and
publishes it to GitHub Pages. You don't run any deploy command yourself.

You can watch a deploy under the repo's **Actions** tab. A push typically goes
live in 1–2 minutes.

> One-time setup (already done at first launch): in the repo on GitHub, go to
> **Settings → Pages** and set **Source = GitHub Actions**.

---

## Editing your name, contact info, and résumé

- **Name, role, tagline, email, LinkedIn, GitHub, nav menu:** all live in
  [`src/config.ts`](src/config.ts). Edit there — it flows everywhere.
- **Résumé:** replace `public/resume.pdf` with your real PDF (keep the same
  filename). The "Download résumé" buttons link to it automatically.
- **About bio & skills:** edit `src/pages/about.astro`.
- **Social-share preview image** (`public/og-image.png`) and favicon
  (`public/favicon.svg`): replace the files, or re-run `npm run gen:assets`
  after editing `scripts/generate-assets.mjs`.

---

## Image galleries

Every project supports a gallery — just list images under `gallery:` in the
frontmatter (see the template above). They render as a responsive grid with an
accessible click-to-zoom lightbox (arrow keys / Esc work). No code needed.

## 3D models (future)

Project pages already support an optional **`embedUrl`** frontmatter field. Set
it to a Sketchfab embed URL, an Onshape public-document link, or a hosted glTF
viewer, and an interactive viewer section appears on that project's page.
To upgrade to a fancier in-page glTF viewer later, see the notes in
[`src/components/ModelViewer.astro`](src/components/ModelViewer.astro) — it's the
only file you'd touch.

---

## Using a custom domain later

If you buy a domain (e.g. `markscripsick.com`):

1. Create a file `public/CNAME` containing just your domain:
   ```
   markscripsick.com
   ```
2. In `astro.config.mjs`, change `site` to `https://markscripsick.com`.
3. At your domain registrar, add DNS records pointing to GitHub Pages
   (four `A` records to GitHub's IPs, plus a `CNAME` for `www`). GitHub's
   guide: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.
4. In **Settings → Pages → Custom domain**, enter the domain and enable
   "Enforce HTTPS".

Push to `main` and the workflow redeploys to the new domain.

---

## Project structure

```
src/
  config.ts              ← your name, contact info, nav (edit this)
  content.config.ts      ← defines the project/cert fields (rarely touched)
  content/
    projects/            ← one .md file per project
    certifications/      ← one .md file per certification
  components/            ← reusable UI (cards, gallery, model viewer)
  layouts/BaseLayout.astro
  pages/                 ← one file per route
  styles/global.css      ← colors & typography (CSS variables at the top)
public/
  images/                ← your images (referenced from frontmatter)
  resume.pdf             ← replace with your résumé
  favicon.svg, og-image.png
.github/workflows/deploy.yml  ← auto-deploy to GitHub Pages
```

Built with Astro · content collections · deployed on GitHub Pages.
