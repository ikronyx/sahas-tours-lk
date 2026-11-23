import { notFound } from "next/navigation";
import { Banner, Breadcrumb, EnquiryBand, Intro, TourCard } from "@/components/editorial";
import { destinations, photos, tours } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find(item => item.slug === slug);
  if (!destination) notFound();
  const photo = photos[destination.slug];
  return publicMetadata(`${photo.name}, Sri Lanka`, destination.teaser, `/destinations/${slug}`, photo.src);
}
export default async function Destination({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find(item => item.slug === slug);
  if (!destination) notFound();
  const name = photos[destination.slug].name;
  const relatedTours = tours.filter(tour => tour.stops.includes(destination.slug));
  return <><Banner label={destination.region} title={name} description={destination.teaser} place={destination.slug} />
    <Breadcrumb section="Destinations" href="/destinations" name={name} />
    <section className="shell section story-grid"><div><h2>Explore {name}</h2><p className="lead">{destination.description}</p></div><div className="highlights"><h2>Highlights</h2><ul className="detail-list">{destination.highlights.map(item => <li key={item}>{item}</li>)}</ul></div></section>
    {relatedTours.length > 0 && <section className="shell section related"><Intro title={`Itineraries featuring ${name}`} /><div className="card-grid">{relatedTours.map(tour => <TourCard key={tour.slug} tour={tour} />)}</div></section>}
    <EnquiryBand />
  </>;
}
