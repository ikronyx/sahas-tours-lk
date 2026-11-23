import type { Metadata } from "next";
import { site } from "./site";

export function publicMetadata(title: string, description: string, path: string, image = "/images/sigiriya.webp"): Metadata {
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [image], type: "website", siteName: site.name, locale: "en_LK" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
