import { useEffect } from 'react';

/**
 * SEOHead — manages per-route SEO tags & JSON-LD structured data.
 *
 * Updates on mount (and prop change):
 *  - <title>
 *  - meta: description, keywords, robots
 *  - Open Graph: og:title, og:description, og:type, og:image, og:url
 *  - Twitter Card: twitter:card, twitter:title, twitter:description, twitter:image, twitter:url
 *  - <link rel="canonical">
 *  - Injects/updates per-page JSON-LD <script id="page-jsonld">
 */
export const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png',
  ogType = 'website',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  schema = null
}) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (key, content, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      if (!href) return;
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Standard meta
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', robots);
    setMeta('googlebot', robots);

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonical, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:url', canonical);

    // Canonical
    setLink('canonical', canonical);

    // Per-page JSON-LD schema (replaces previous page schema if any)
    const SCRIPT_ID = 'page-jsonld';
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = SCRIPT_ID;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, robots, schema]);

  return null;
};

export default SEOHead;
