import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import config from './config';
import { cache } from 'react';

export const sanityClient = createClient(config);
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

const clientFetch = cache(sanityClient.fetch.bind(sanityClient));

export async function getHome() {
  return clientFetch(
    groq`*[_type == "home"] {
      title,
      description,
      "nav": navigation[] {
        _key,
        title,
        "slug": slug.current
      },
    }[0]`
  );
}

export async function getPages() {
  return clientFetch(
    groq`*[_type == "page" && defined(slug.current)]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string) {
  return clientFetch(
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

export async function phytoplanktonCount() {
  return clientFetch(
    groq`{
      "diatoms": count(*[_type == "diatoms"]),
      "dinoflagellates": count(*[_type == "dinoflagellates"]),
      "other": count(*[_type == "otherPhytoplankton"]),
    }`
  );
}

export async function zooplanktonCount() {
  return clientFetch(
    groq`{
      "molluscs": count(*[_type == "molluscs"]),
      "cnidaria": count(*[_type == "cnidaria"]),
      "foraminifera": count(*[_type == "foraminifera"]),
      "ciliates": count(*[_type == "ciliates"]),
      "other": count(*[_type == "otherZooplankton"]),
    }`
  );
}

export async function crustaceansCount() {
  return clientFetch(
    groq`{
      "copepods": count(*[_type == "copepods"]),
      "nauplii": count(*[_type == "nauplii"]),
      "zoea": count(*[_type == "zoea"]),
      "other": count(*[_type == "otherCrustaceans"]),
    }`
  );
}

export async function wormsCount() {
  return clientFetch(
    groq`{
      "platyhelmithes": count(*[_type == "platyhelmithes"]),
      "polychaeta": count(*[_type == "polychaeta"]),
      "other": count(*[_type == "otherWorms"]),
    }`
  );
}

export async function getGenusList(genus: string) {
  return clientFetch(
    groq`*[_type == $genus] {
      _id,
      title,
      "image": data.image.asset->url,
      "slug": slug.current
    } | order(title)`,
    { genus }
  );
}

export async function getGenusItem(genus: string, slug: string) {
  return clientFetch(
    groq`*[_type == $genus && slug.current == $slug][0] {
      title,
      "hero": data.image.asset->url,
      "images": data.additionalImages[]{"url":asset->url},
      "video": data.video.asset->url,
      "text": data.text
    }`,
    { genus, slug }
  );
}