import { notFound } from "next/navigation";
import { Banner, Breadcrumb, DestinationCard, EnquiryBand, Intro } from "@/components/editorial";
import { destinations, experiences, photos } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return experiences.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = experiences.find(item => item.slug === slug);
  if (!experience) notFound();
  return publicMetadata(`${experience.name} in Sri Lanka`, experience.description, `/experiences/${slug}`, photos[experience.photo].src);
}
export default async function Experience({ params }: Props) {
  const { slug } = await params;
  const item = experiences.find(experience => experience.slug === slug);
  if (!item) notFound();
  const places = destinations.filter(destination => item.places.includes(destination.slug));
  return <><Banner label="Sri Lanka experiences" title={item.name} description={item.description} place={item.photo} />
    <Breadcrumb section="Experiences" href="/experiences" name={item.name} />
    <section className="shell section"><h2>What to explore</h2><ul className="detail-list">{item.ideas.map(idea => <li key={idea}>{idea}</li>)}</ul></section>
    <section className="shell section related"><Intro title="Where to go" /><div className="destination-grid">{places.map(place => <DestinationCard key={place.slug} destination={place} />)}</div></section>
    <EnquiryBand />
  </>;
}
