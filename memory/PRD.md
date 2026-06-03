# Maria's Media Management — PRD

## Original Problem Statement
React SPA (Maria's Media Management) marketing site hosted on Netlify. User has been iteratively requesting SEO hardening, including:
- Fix `robots.txt` 39 syntax errors (was returning HTML via SPA fallback)
- Add proper crawling/indexing (robots.txt + sitemap.xml)
- Ensure portfolio includes https://eternalcareco.com/ (Eternal Care)
- 100% SEO enhancement — per-page structured data, canonical URLs, etc.

## Architecture
- Frontend: React (CRA) SPA with React Router
- Hosting: Netlify (configured via `/app/netlify.toml`)
- Backend: none (form submissions handled by Netlify Forms)
- Analytics: Google Analytics + PostHog (deferred-load)

## Tech Stack
- React 18, react-router-dom
- Tailwind + shadcn/ui
- lucide-react icons
- sonner (toasts)
- Framer-style custom animation components

## Key Files
- `/app/frontend/public/index.html` — global meta tags + LocalBusiness/Org/Website/Breadcrumb JSON-LD
- `/app/frontend/public/robots.txt` — proper text file with all crawler directives
- `/app/frontend/public/sitemap.xml` — all routes + portfolio image entries
- `/app/frontend/src/components/SEOHead.jsx` — per-page SEO injector (title, meta, OG, Twitter, canonical, JSON-LD)
- `/app/frontend/src/lib/seoSchemas.js` — per-page Schema.org JSON-LD generators (Home/About/Services/Portfolio/Reviews/Contact/Shop)
- `/app/frontend/src/mock.js` — portfolio, testimonials, products, links (all data)
- `/app/netlify.toml` — caching, security headers, MIME types, SPA fallback with robots/sitemap bypass

## What's Been Implemented
### 2026-02-20 — SEO Phase 2 (Comprehensive Enhancement)
- Enhanced `SEOHead.jsx`: now syncs og:url/twitter:url/robots/googlebot per route + injects per-page JSON-LD
- New `lib/seoSchemas.js` with generators for: WebPage, AboutPage, Service (×N), Person, CollectionPage, ItemList, AggregateRating + Review, ContactPage, ContactPoint, BreadcrumbList (per route)
- Per-page schemas wired into Home, About, Services, Portfolio, Reviews, Contact, Shop
- Portfolio JSON-LD ItemList includes all 34 sites (incl. Eternal Care https://eternalcareco.com/) as CreativeWork entries
- Reviews JSON-LD emits AggregateRating 5.0 (11 reviews) + individual Review nodes — eligible for star-rating rich snippets
- Sitemap.xml: refreshed lastmod=2026-02-20, added 6 image entries for portfolio thumbnails
- robots.txt: relocated `Crawl-delay: 1` inside `User-agent: *` block (was orphan)
- index.html: removed obsolete `revisit-after` meta tag

### Earlier Session — SEO Phase 1
- Fixed robots.txt 39 syntax errors (was being intercepted by SPA `/*` redirect, returning HTML)
- Created proper sitemap.xml
- netlify.toml: added explicit redirect rules + headers (`Content-Type: text/plain`, `application/xml`) for /robots.txt and /sitemap.xml
- Expanded global JSON-LD (LocalBusiness, Organization, WebSite, BreadcrumbList) in index.html
- Confirmed Eternal Care entry present in mock.js portfolio

## Backlog / Roadmap
### P1
- Verify production deployment serves robots.txt + sitemap.xml with correct Content-Type after Netlify deploy
- Submit sitemap to Google Search Console + Bing Webmaster Tools

### P2 (when user asks)
- Move portfolio data from `mock.js` to a real backend (MongoDB) for content management
- Per-portfolio detail routes (`/portfolio/[slug]`) for individual indexable case-study pages
- FAQ schema on a new FAQ section (requires content)
- Pre-rendering / SSR for full crawler visibility of dynamic content

## Test Credentials
N/A — no auth flows in this app

## Notes for Future Agents
- Do not move `robots.txt` / `sitemap.xml` outside `/app/frontend/public/`
- `netlify.toml` redirect block at the bottom (`/*` → `/index.html`) MUST be after the explicit `/robots.txt` and `/sitemap.xml` redirects, else the SPA fallback hijacks them
- Per-page JSON-LD is injected as `<script id="page-jsonld">` — global JSON-LD in index.html stays untouched
- Site URL = `https://mariasmediamanagement.com`
