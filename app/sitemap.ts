import type { MetadataRoute } from "next";
import { destinations, experiences, tours } from "@/lib/content";
import { navigation, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navigation.map(item => item.href),
    ...tours.map(tour => `/tours/${tour.slug}`),
    ...destinations.map(place => `/destinations/${place.slug}`),
    ...experiences.map(experience => `/experiences/${experience.slug}`),
  ];
  return paths.map(path => ({ url: new URL(path, site.url).href }));
}
