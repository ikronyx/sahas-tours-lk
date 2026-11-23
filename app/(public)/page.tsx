import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Compass,
  MapPin,
  Route,
  Trees,
} from "lucide-react";
import {
  DestinationCard,
  EnquiryBand,
  ExperienceCard,
  Intro,
  Photo,
  TextLink,
  TourCard,
} from "@/components/editorial";
import { HeroVideo } from "@/components/hero-video";
import { MotionScope } from "@/components/motion-scope";
import { WhatsApp } from "@/components/whatsapp";
import { destinations, experiences, tours } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata(
  "Sahas Tours | Sri Lanka Tours & Itineraries",
  "Discover Sri Lanka through suggested itineraries, island destinations and local experiences. Plan your trip with Sahas Tours on WhatsApp.",
  "/",
);

export default function Home() {
  return (
    <MotionScope>
      <section className="home-hero">
        <HeroVideo />
        <div className="shell hero-content">
          {/* <p className="eyebrow" data-motion-enter><span /> SRI LANKA TOURS</p> */}
          <h1 data-motion-enter>
            See Sri Lanka
            <br />
            <em>your way.</em>
          </h1>
          <p className="hero-copy" data-motion-enter>
            From ancient rock fortresses and tea country to wild landscapes and
            the southern coast.
          </p>
          <div className="hero-actions" data-motion-enter>
            <WhatsApp />
            <Link href="/tours" className="button button-outline">
              Explore tours <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="shell hero-bottom">
          <a href="#welcome">
            <ArrowDown size={17} aria-hidden="true" /> Discover the island
          </a>
          <Link href="/destinations/sigiriya">
            <MapPin size={17} aria-hidden="true" /> Explore Sigiriya
          </Link>
        </div>
      </section>
      <section className="home-welcome shell section" id="welcome">
        <div className="welcome-photo" data-motion-reveal>
          <Photo place="ella" sizes="(max-width: 760px) 92vw, 48vw" />
          <span>
            <MapPin size={15} aria-hidden="true" /> Nine Arch Bridge, Ella
          </span>
        </div>
        <div className="welcome-copy" data-motion-reveal>
          <p className="eyebrow">Welcome to Sahas Tours</p>
          <h2>Take the scenic route.</h2>
          <p>
            Spend a morning above the tea valleys, walk through a centuries-old
            fort, or leave an afternoon free by the sea. We bring Sri Lanka’s
            landscapes and local experiences together in journeys you can shape
            around your interests.
          </p>
          <TextLink href="/about">Meet Sahas Tours</TextLink>
          <div className="welcome-links">
            <Link href="/tours">
              <Route aria-hidden="true" size={24} /> Explore routes
            </Link>
            <Link href="/destinations">
              <Compass aria-hidden="true" size={24} /> Find places
            </Link>
            <Link href="/experiences">
              <Trees aria-hidden="true" size={24} /> Things to do
            </Link>
          </div>
        </div>
      </section>
      <section className="why-strip" data-motion-reveal>
        <div className="shell">
          <div>
            <p className="eyebrow">Why Sri Lanka?</p>
            <h2>A change of scenery in a day.</h2>
          </div>
          <p>
            You can start among tea estates and finish on the coast. Give
            yourself a few more days and add ancient cities, forest trails or
            the open grasslands of a national park.
          </p>
        </div>
      </section>
      <section className="shell section">
        <Intro
          label="Destinations"
          title="Where to go"
          description="Start with the places you’d most like to see."
          href="/destinations"
          linkLabel="All destinations"
        />
        <div className="destination-grid" data-motion-stagger>
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>
      <section className="experience-section bg-dark text-on-dark">
        <div className="shell section">
          <Intro
            label="Things to do"
            title="Experiences across the island"
            href="/experiences"
            linkLabel="All experiences"
          />
          <div className="experience-grid" data-motion-stagger>
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        </div>
      </section>
      <section className="shell section">
        <Intro
          label="Tour packages"
          title="Find your route"
          description="Three suggested journeys, each with a day-by-day plan."
          href="/tours"
          linkLabel="All tours"
        />
        <div className="card-grid" data-motion-stagger>
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>
      <EnquiryBand />
    </MotionScope>
  );
}
