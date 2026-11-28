import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BedDouble, ChevronDown, Clock3, MapPin } from "lucide-react";
import { Banner, Breadcrumb, EnquiryBand, Intro, TourCard } from "@/components/editorial";
import { WhatsApp } from "@/components/whatsapp";
import { inclusionTopics, isDestinationStop, photos, tours, tourStopName } from "@/lib/content";
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
        <section>
          <h2>Day by day</h2>
          <ol className="itinerary-list">
            {tour.days.map(({ title, area, detail, overnight }, index) => (
              <li key={title}>
                <details open={index === 0}>
                  <summary>
                    <span className="day-index">Day <strong>{String(index + 1).padStart(2, "0")}</strong></span>
                    <span className="day-heading"><span className="day-area">{area}</span><span className="day-title">{title}</span></span>
                    <span className="day-chevron" aria-hidden="true"><ChevronDown size={17} /></span>
                  </summary>
                  <div className="day-detail">
                    <p>{detail}</p>
                    {overnight && <p className="day-overnight"><BedDouble size={16} aria-hidden="true" /> Overnight in {overnight}</p>}
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </section>
        <section><h2>Confirm inclusions</h2><p>Ask Sahas Tours to confirm what is included for your dates and group.</p><ul className="detail-list">{inclusionTopics.map(topic => <li key={topic}>{topic}</li>)}</ul></section>
      </div>
      <aside className="itinerary-aside"><p className="eyebrow">At a glance</p><h2>Trip overview</h2><p className="location"><Clock3 size={18} aria-hidden="true" /> {tour.days.length} suggested days</p><p className="location"><MapPin size={18} aria-hidden="true" /> Route stops</p>
        <ul>
          {tour.stops.map(stop => (
            <li key={stop}>
              {isDestinationStop(stop) ? (
                <Link href={`/destinations/${stop}`}>{tourStopName(stop)}<ArrowUpRight size={15} aria-hidden="true" /></Link>
              ) : (
                <span className="route-stop-label">{tourStopName(stop)}</span>
              )}
            </li>
          ))}
        </ul>
        <WhatsApp tourName={tour.name} />
      </aside>
    </div>
    <section className="shell section related"><Intro title="Other routes in Sri Lanka" /><div className="card-grid">{tours.filter(item => item.slug !== slug).map(item => <TourCard key={item.slug} tour={item} />)}</div></section>
    <EnquiryBand tourName={tour.name} />
  </>;
}
