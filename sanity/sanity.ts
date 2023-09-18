import { createClient, groq } from 'next-sanity';
import config from './config';
import { cache } from 'react';

export const sanityClient = createClient(config);

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
      "dinoflagalletes": count(*[_type == "dinoflagalletes"]),
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