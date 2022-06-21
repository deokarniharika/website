/** @type {import('next-sitemap').IConfig} */
const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'https://localhost:3000';

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
