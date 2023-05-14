import { createClient, groq } from 'next-sanity';
import config from './config';
import { cache } from 'react';

const sanityClient = createClient(config);

const clientFecth = cache(sanityClient.fetch.bind(sanityClient));

export async function getPages() {
  return clientFecth(
    groq`*[_type == "page" && defined(slug.current)]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string) {
  return clientFecth(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      text
    }`,
    { slug }
  );
}