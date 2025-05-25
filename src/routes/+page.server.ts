import type { PageServerLoad } from './$types';

// Configure ISR for this specific page
export const config = {
  isr: {
    // Cache for 24 hours
    expiration: 86400,
    // Optional: bypass token for on-demand revalidation
    bypassToken: process.env.VERCEL_REVALIDATE_TOKEN
  }
};

export const load: PageServerLoad = async () => {
  // Your page data loading logic here
  return {
    // Your data
  };
}; 
