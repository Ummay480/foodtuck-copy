import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource | null | undefined) => {
  if (!source) {
    // Default image agar source undefined/null ho
    return "/default-image.jpg";
  }
  return builder.image(source).url(); // Ensure `.url()` is called
};
