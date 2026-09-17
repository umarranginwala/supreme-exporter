# Go-live checklist — Supreme Exporter

## Done in repo
- [x] Three product verticals + market pages
- [x] Privacy + Terms
- [x] IEC / legal name (SUPREME ENTERPRISE · AFAFS5839J)
- [x] Quote form wired to FormSubmit.co via `js/config.js`
- [x] Thank-you page for form redirects
- [x] FAQ page with FAQPage schema (SEO)
- [x] High-intent export landers (`/export/` — chicory, onion, cumin, UAE, USA, Saudi, Malaysia, UK, Singapore)
- [x] Evidence snapshot (`EVIDENCE.md`)
- [x] Netlify / Vercel deploy configs + security headers
- [x] Central contact config (`js/config.js`)
- [x] WhatsApp float (shows when `whatsapp` is set in config)

## You must complete before advertising the URL
1. Edit `js/config.js`: set real `email`, `phone`, `phoneDisplay`, `whatsapp` (country code + number), optional `ga4`
2. Confirm FormSubmit email: submit one test enquiry, click the confirmation link FormSubmit sends to that inbox
3. Register / point domain DNS to Netlify or Vercel; set `domain` in config to match
4. Replace Unsplash images with your product photos when available
5. Google Search Console → add property → submit `https://YOURDOMAIN/sitemap.xml`
6. Optional: APEDA / FSSAI / Spices Board numbers on About once you have membership IDs

## Deploy (Netlify example)
```bash
cd ~/Documents/Supreme-Exporter
# drag-drop folder in Netlify UI, or:
npx netlify deploy --prod --dir=.
```

## Deploy (Vercel example)
```bash
cd ~/Documents/Supreme-Exporter
npx vercel --prod
```

## First SEO actions after DNS
- Search Console sitemap
- Request indexing for `/`, `/products/`, `/faq.html`, `/products/chicory.html`, `/products/onion-garlic.html`, `/products/spices.html`
- Build 1 LinkedIn company post linking to the quote page

### Credentials applied from company records (same IEC)
- Email: `info@supremevalves.in`
- Phone / WhatsApp: `+91 97732 78770`
- GST: `24AFAFS5839J1ZQ`
- Still confirm FormSubmit for `info@supremevalves.in` and deploy domain.

## Fastest deploy (no CLI)

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `Supreme-Exporter` folder onto the page
3. Copy the `*.netlify.app` URL
4. Optional: add custom domain in Netlify Domain settings
5. Submit that URL’s `/sitemap.xml` in Google Search Console
6. Send one test enquiry to confirm FormSubmit for `info@supremevalves.in`

## Live preview tunnel (2026-09-17 17:46 UTC)
- Temporary public URL: https://avenue-exhibits-accommodations-bob.trycloudflare.com
- Note: trycloudflare tunnels are ephemeral (not for Google ranking). Use Netlify Drop for a stable URL.

## Stable public site (GitHub Pages)
- https://umarranginwala.github.io/supreme-exporter/
- Repo: https://github.com/umarranginwala/supreme-exporter
