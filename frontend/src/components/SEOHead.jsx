import { useEffect } from 'react';

export const SEOHead = ({ 
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png',
  ogType = 'website'
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update or create meta tags
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Open Graph tags
    setMeta('og:title', title, true);
    if (description) setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    if (canonical) setMeta('og:url', canonical, true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    if (description) setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    return () => {
      // Cleanup not strictly necessary but good practice
    };
  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null;
};

export default SEOHead;
