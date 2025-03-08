import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: apiVersion, 
});
