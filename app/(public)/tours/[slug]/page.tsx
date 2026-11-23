import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronDown, Clock3, MapPin } from "lucide-react";
import { Banner, Breadcrumb, EnquiryBand, Intro, TourCard } from "@/components/editorial";
import { WhatsApp } from "@/components/whatsapp";
import { inclusionTopics, photos, tours } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return tours.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const match = tours.find(item => item.slug === slug);
  if (!match) notFound();
  return publicMetadata(match.name + " Sri Lanka Itinerary", match.summary, `/tours/${slug}`, photos[match.photo].src);
}
export default async function Itinerary({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find(item => item.slug === slug);
  if (!tour) notFound();

  return <>
    <Banner label={tour.theme} title={tour.name} description={tour.summary} place={tour.photo} />
    <Breadcrumb section="Tours" href="/tours" name={tour.name} />
    <div className="shell detail-grid section">
      <div className="detail-main">
        <section><p className="eyebrow">Suggested itinerary</p><h2>Route overview</h2><p className="lead">{tour.description}</p></section>
        <section><h2>Day by day</h2><ol className="itinerary-list">{tour.days.map(({ title, detail }, i) => <li key={title}>
          <details open={i === 0}><summary><span className="day-index">Day {i + 1}</span><span>{title}</span><ChevronDown size={21} aria-hidden="true" /></summary><p>{detail}</p></details>
        </li>)}</ol></section>
        <section><h2>Confirm inclusions</h2><p>Ask Sahas Tours to confirm what is included for your dates and group.</p><ul className="detail-list">{inclusionTopics.map(topic => <li key={topic}>{topic}</li>)}</ul></section>
      </div>
      <aside className="itinerary-aside"><p className="eyebrow">At a glance</p><h2>Trip overview</h2><p className="location"><Clock3 size={18} aria-hidden="true" /> {tour.days.length} suggested days</p><p className="location"><MapPin size={18} aria-hidden="true" /> Route stops</p>
        <ul>{tour.stops.map(stop => <li key={stop}><Link href={`/destinations/${stop}`}>{photos[stop].name}<ArrowUpRight size={15} aria-hidden="true" /></Link></li>)}</ul>
        <WhatsApp tourName={tour.name} />
      </aside>
    </div>
    <section className="shell section related"><Intro title="Other routes in Sri Lanka" /><div className="card-grid">{tours.filter(item => item.slug !== slug).map(item => <TourCard key={item.slug} tour={item} />)}</div></section>
    <EnquiryBand tourName={tour.name} />
  </>;
}
