const DOMAIN = 'https://thereisnoearthb.org';

export const ORG_NAME = 'There Is No Earth B';
export const HOME_OG_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz44hjQyD5X8pfnnCl6P0E0NHKzShcMgERcB3M1TA9btKrdvJc7wtOrrZ5&s=10';
export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  ? DOMAIN
  : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : '';
