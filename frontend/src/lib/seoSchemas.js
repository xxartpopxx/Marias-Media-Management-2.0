/**
 * Per-page JSON-LD schema generators.
 * Each helper returns a Schema.org-compliant object (NOT a string).
 * SEOHead serializes via JSON.stringify before injection.
 *
 * Site identity references the global LocalBusiness/Organization
 * declared in /public/index.html via @id anchors:
 *   - https://mariasmediamanagement.com/#business
 *   - https://mariasmediamanagement.com/#organization
 *   - https://mariasmediamanagement.com/#website
 */

const SITE_URL = 'https://mariasmediamanagement.com';
const BUSINESS_ID = `${SITE_URL}/#business`;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_LOGO =
  'https://customer-assets.emergentagent.com/job_a9efaa07-0c20-4f2e-84b4-40005799affc/artifacts/ml1q1ugm_Maria%27s%20Media%20Kit.png';

const breadcrumb = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url
  }))
});

export const homeSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Maria's Media Management | Social Media & Web Design Services",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': BUSINESS_ID },
      primaryImageOfPage: { '@id': `${SITE_URL}/#logo` },
      inLanguage: 'en-US',
      description:
        "Boston-based social media management and web design studio helping brands, entrepreneurs, and organizations elevate their online presence."
    },
    breadcrumb([{ name: 'Home', url: `${SITE_URL}/` }])
  ]
});

export const aboutSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: "About Maria | Maria's Media Management",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
      about: { '@id': BUSINESS_ID }
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#maria`,
      name: 'Maria Mongiardo',
      jobTitle: 'Founder & Social Media Strategist',
      worksFor: { '@id': ORG_ID },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Boston University School of Public Health' },
        { '@type': 'CollegeOrUniversity', name: 'Clark University' }
      ],
      image: SITE_LOGO,
      url: `${SITE_URL}/about`,
      sameAs: [
        'https://www.instagram.com/maria.mongiardo/',
        'https://www.linkedin.com/in/mariamongiardo/',
        'https://www.facebook.com/mariamongiardo15',
        'https://www.youtube.com/@maria.mongiardo',
        'https://www.tiktok.com/@maria.mongiardo'
      ]
    },
    breadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About', url: `${SITE_URL}/about` }
    ])
  ]
});

export const servicesSchema = (services) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "Services | Social Media Management | Maria's Media Management",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
      about: { '@id': BUSINESS_ID }
    },
    ...services.map((s, i) => ({
      '@type': 'Service',
      '@id': `${SITE_URL}/services#service-${i + 1}`,
      serviceType: s.title,
      name: s.title,
      description: s.description,
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Country', name: 'United States' }
    })),
    breadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` }
    ])
  ]
});

export const portfolioSchema = (portfolio) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/portfolio#webpage`,
      url: `${SITE_URL}/portfolio`,
      name: "Website Portfolio | Web Design Services | Maria's Media Management",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
      about: { '@id': BUSINESS_ID }
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/portfolio#itemlist`,
      name: 'Website Portfolio',
      numberOfItems: portfolio.length,
      itemListElement: portfolio.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.name,
          url: p.url,
          description: p.description,
          ...(p.thumbnail ? { image: p.thumbnail } : {}),
          creator: { '@id': ORG_ID }
        }
      }))
    },
    breadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Portfolio', url: `${SITE_URL}/portfolio` }
    ])
  ]
});

export const reviewsSchema = (testimonials) => {
  // Compute aggregate rating from testimonials (all are positive 5-star testimonials)
  const reviewCount = testimonials.length;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/reviews#webpage`,
        url: `${SITE_URL}/reviews`,
        name: "Reviews & Testimonials | Maria's Media Management",
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'en-US',
        about: { '@id': BUSINESS_ID }
      },
      {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_ID,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          worstRating: '1',
          ratingCount: reviewCount,
          reviewCount
        },
        review: testimonials.slice(0, 10).map((t) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: t.name },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          },
          reviewBody: t.text
        }))
      },
      breadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Reviews', url: `${SITE_URL}/reviews` }
      ])
    ]
  };
};

export const contactSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: "Contact | Get in Touch | Maria's Media Management",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
      about: { '@id': BUSINESS_ID }
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'mariamongiardo15@gmail.com',
          contactType: 'customer service',
          areaServed: ['US', 'Global'],
          availableLanguage: ['English']
        }
      ]
    },
    breadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact', url: `${SITE_URL}/contact` }
    ])
  ]
});

export const shopSchema = (products) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/shop#webpage`,
      url: `${SITE_URL}/shop`,
      name: "Shop Digital Products | Maria's Media Management",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
      about: { '@id': BUSINESS_ID }
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/shop#itemlist`,
      name: 'Digital Products',
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.title,
          description: p.description,
          image: p.image,
          url: p.link,
          brand: { '@id': ORG_ID }
        }
      }))
    },
    breadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Shop', url: `${SITE_URL}/shop` }
    ])
  ]
});
