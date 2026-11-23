import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { destinations, experiences, photos, tours, type Place } from "@/lib/content";
import { MotionScope } from "./motion-scope";
import { WhatsApp } from "./whatsapp";

export function Photo({ place, sizes, priority = false, decorative = false, wide = false }: { place: Place; sizes: string; priority?: boolean; decorative?: boolean; wide?: boolean }) {
  const photo = photos[place];
  return <Image src={wide && place === "sigiriya" ? "/images/sigiriya-hero.webp" : photo.src} alt={decorative ? "" : photo.alt} fill preload={priority} sizes={sizes} quality={85} style={{ objectPosition: photo.position }} />;
}
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
}
export function Intro({ label, title, description, href, linkLabel }: { label?: string; title: string; description?: string; href?: string; linkLabel?: string }) {
  return <div className="section-intro" data-motion-reveal>
    <div>{label && <p className="eyebrow">{label}</p>}<h2>{title}</h2>{description && <p className="lead">{description}</p>}</div>
    {href && <TextLink href={href}>{linkLabel}</TextLink>}
  </div>;
}
export function Banner({ label, title, description, place }: { label?: string; title: string; description: string; place?: Place }) {
  return <section className={place ? "page-banner has-photo" : "page-banner"}>
    {place && <Photo place={place} sizes="100vw" priority decorative />}
    <MotionScope>
      <div className="shell banner-content">
        {label && <p className="eyebrow" data-motion-enter>{label}</p>}
        <h1 data-motion-enter>{title}</h1>
        <p data-motion-enter>{description}</p>
      </div>
    </MotionScope>
  </section>;
}
export function Breadcrumb({ section, href, name }: { section: string; href: string; name: string }) {
  return <nav className="breadcrumbs shell" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li><Link href={href}>{section}</Link></li><li aria-current="page">{name}</li></ol></nav>;
}
export function DestinationCard({ destination }: { destination: typeof destinations[number] }) {
  const { slug, region, teaser } = destination;
  return <article className="destination-card">
    <Link href={`/destinations/${slug}`} className="destination-link">
      <Photo place={slug} sizes="(max-width: 640px) 88vw, (max-width: 950px) 46vw, 33vw" decorative />
      <div className="destination-copy"><span>{region}</span><h3>{photos[slug].name}</h3><p>{teaser}</p></div>
      <span className="round-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
    </Link>
  </article>;
}
export function TourCard({ tour }: { tour: typeof tours[number] }) {
  return <article className="tour-card">
    <Link href={`/tours/${tour.slug}`} className="tour-image" aria-label={`${tour.theme}: View ${tour.name} itinerary`}>
      <Photo place={tour.photo} sizes="(max-width: 640px) 90vw, (max-width: 950px) 45vw, 33vw" decorative />
      <span className="card-tag">{tour.theme}</span>
    </Link>
    <div className="tour-body">
      <p className="tour-meta"><Clock3 size={16} aria-hidden="true" /> {tour.days.length} days <span aria-hidden="true">·</span> Suggested itinerary</p>
      <h3><Link href={`/tours/${tour.slug}`}>{tour.name}</Link></h3><p>{tour.summary}</p>
      <Link className="card-cta" href={`/tours/${tour.slug}`}>View itinerary <ArrowRight size={17} aria-hidden="true" /><span className="sr-only"> for {tour.name}</span></Link>
    </div>
  </article>;
}
export function ExperienceCard({ experience }: { experience: typeof experiences[number] }) {
  return <article className="experience-card"><Link href={`/experiences/${experience.slug}`}>
    <div className="experience-image"><Photo place={experience.photo} sizes="(max-width: 640px) 90vw, (max-width: 950px) 45vw, 25vw" decorative /></div>
    <div className="experience-copy"><h3>{experience.name}</h3><ArrowUpRight size={21} aria-hidden="true" /></div>
    <p>{experience.description}</p>
  </Link></article>;
}
export function EnquiryBand({ tourName }: { tourName?: string }) {
  return <section className="enquiry-band bg-deep text-on-dark"><div className="shell enquiry-inner">
    <div><p className="eyebrow"><MapPin size={15} aria-hidden="true" /> Sri Lanka</p><h2>{tourName ? "Make this route your own" : "Where would you like to go?"}</h2>
    <p>{tourName ? "Share your dates, group size and the stops you’d like to include." : "Tell us what you’d like to see and how many days you have."}</p></div>
    <WhatsApp tourName={tourName} />
  </div></section>;
}
