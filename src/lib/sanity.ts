import { createClient } from '@sanity/client';
export const client = createClient({
    projectId:"yfaabr9s",
    dataset: "production",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2025-02-02',
});