# Blush Beauty by Sajida

A responsive static salon website for Blush Beauty by Sajida, Sargodha.

## Project files

- `index.html` — page structure and content
- `style.css` — custom styles and animations
- `script.js` — mobile menu, smooth scrolling, booking form and image fallbacks
- `tailwind.config.js` — Tailwind build configuration (the deployed site uses the generated local CSS)

## Run locally

Open `index.html` directly, or run a small local server from this folder:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Upload to GitHub

1. Create a new empty repository on GitHub, for example `blush-beauty-by-sajida`.
2. Open a terminal inside this folder and run:

```bash
git init
git add .
git commit -m "Create Blush Beauty salon website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/blush-beauty-by-sajida.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Publish with GitHub Pages

On GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then click **Save**.

The site uses online Google Fonts, Unsplash images and YouTube thumbnails for some visual assets. The Tailwind CSS build and icon fallbacks are local, so layout and icons do not depend on a CDN.
