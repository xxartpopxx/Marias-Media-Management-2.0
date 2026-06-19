/**
 * Portfolio thumbnail helpers.
 *
 * For each portfolio site:
 *  - If a custom `thumbnail` is provided in mock.js, use it
 *  - Otherwise, generate a WordPress mShots screenshot URL (free, no API key)
 *
 * mShots reference: https://github.com/Automattic/mShots
 * Endpoint shape: https://s.wordpress.com/mshots/v1/<URL-ENCODED-TARGET>?w=&h=
 * The service caches and returns a placeholder for first-time URLs until generated,
 * then serves the real screenshot indefinitely.
 *
 * Microlink (fallback) reference: https://microlink.io/docs/api/parameters/screenshot
 * Used automatically by the <img onError> handler in Portfolio.jsx when mShots fails.
 */

const MSHOTS_BASE = 'https://s.wordpress.com/mshots/v1/';
const MICROLINK_BASE = 'https://api.microlink.io/';

export const getPortfolioThumbnail = (site, { w = 800, h = 600 } = {}) => {
  if (site?.thumbnail) return site.thumbnail;
  if (!site?.url) return null;
  return `${MSHOTS_BASE}${encodeURIComponent(site.url)}?w=${w}&h=${h}`;
};

/**
 * Returns a Microlink screenshot URL for the given site, used as an
 * onError fallback when mShots returns a 403 / fails to load.
 */
export const getFallbackThumbnail = (site) => {
  if (!site?.url) return null;
  const params = new URLSearchParams({
    url: site.url,
    screenshot: 'true',
    embed: 'screenshot.url',
    meta: 'false',
    'viewport.width': '1200',
    'viewport.height': '900',
  });
  return `${MICROLINK_BASE}?${params.toString()}`;
};
