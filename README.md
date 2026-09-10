# Blush Beauty by Sajida

A responsive static salon website for Blush Beauty by Sajida, Sargodha.

## Project files

- `index.html` — page structure and content
- `style.css` — custom styles and animations
- `script.js` — mobile menu, smooth scrolling, booking form and image fallbacks
- `tailwind.config.js` — Tailwind theme configuration used by the CDN

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

The site uses online Google Fonts, Tailwind CDN, Unsplash images and YouTube thumbnails, so visitors need an internet connection for all visual assets. The main icons also have local CSS fallbacks, so they remain visible if Font Awesome is unavailable in a preview.
