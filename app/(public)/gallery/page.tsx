import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Banner, EnquiryBand, Photo } from "@/components/editorial";
import { destinations, photos } from "@/lib/content";
import { photoCredits } from "@/lib/photo-credits";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata("Sri Lanka Photo Gallery", "See Sri Lanka’s rock fortresses, hill country, southern coastline and wildlife in the Sahas Tours photo gallery.", "/gallery");

export default function Gallery() {
  return <><Banner title="A closer look at Sri Lanka" label="Gallery" description="From the Cultural Triangle to the island’s southern shores." />
    <section className="shell section gallery-grid" aria-label="Destination photographs">{destinations.map(({ slug, region }) => <figure key={slug}>
      <div className="gallery-image"><Photo place={slug} sizes="(max-width: 640px) 90vw, 45vw" /></div>
      <figcaption><Link href={`/destinations/${slug}`}><span>{photos[slug].name}<small>{region}</small></span><ArrowUpRight size={20} aria-hidden="true" /></Link></figcaption>
    </figure>)}</section>
    <section id="photo-credits" className="shell photo-credits"><details><summary>Photography credits</summary>
      <ul>{photoCredits.map(credit => <li key={credit.url}><a href={credit.url}>{credit.place} by {credit.author}</a>{credit.license ? <> · <a href={credit.license.url}>{credit.license.name}</a> · resized and converted to WebP</> : " · Unsplash"}</li>)}</ul>
    </details></section><EnquiryBand /></>;
}
