import { createClient } from 'next-sanity';

export const config = {
    projectId: 'grwonbtj',  // Replace with your Sanity Project ID
    dataset: 'production',         // You can change this if you use a different dataset
    apiVersion: '2023-01-01',      // Use a specific API version
    useCdn: true,                  // Use the CDN for faster response times
};

export const sanityClient = createClient(config);
