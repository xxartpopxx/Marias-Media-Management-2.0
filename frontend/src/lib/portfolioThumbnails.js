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
 */

const MSHOTS_BASE = 'https://s.wordpress.com/mshots/v1/';

export const getPortfolioThumbnail = (site, { w = 800, h = 600 } = {}) => {
  if (site?.thumbnail) return site.thumbnail;
  if (!site?.url) return null;
  return `${MSHOTS_BASE}${encodeURIComponent(site.url)}?w=${w}&h=${h}`;
};
