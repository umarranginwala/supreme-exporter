# Supreme Exporter

Production-oriented static site for Gujarat export leads (chicory, dehydrated onion & garlic, spices).

## Preview locally

```bash
cd ~/Documents/Supreme-Exporter
python3 -m http.server 8080
```

Open http://localhost:8080

## Configure contacts

Edit `js/config.js` (email, phone, WhatsApp, GA4, domain).

## Deploy

See `GO-LIVE.md` for Netlify/Vercel steps, FormSubmit confirmation, and Search Console.

## Structure

- `products/chicory.html` · `onion-garlic.html` · `spices.html` — verticals
- `faq.html` — SEO FAQ + lead CTAs
- `privacy.html` · `terms.html` — legal
- `netlify.toml` · `vercel.json` · `_headers` — hosting

## Stable public site (GitHub Pages)
- https://umarranginwala.github.io/supreme-exporter/
- Repo: https://github.com/umarranginwala/supreme-exporter
