/** @type {import('next-sitemap').IConfig} */
const DOMAIN = 'https://thereisnoearthb.org';

const BASE_URL = process.env.VERCEL_ENV === 'production'
  ? DOMAIN
  : process.env.VERCEL_ENV === 'preview'
    ? `https://${process.env.VERCEL_URL}`
    : '';

const config = {
  siteUrl: BASE_URL,
  generateRobotsTxt: true,
  exclude: ['/old.sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      BASE_URL + '/old.sitemap.xml',
    ],
  },
};

module.exports = config;
