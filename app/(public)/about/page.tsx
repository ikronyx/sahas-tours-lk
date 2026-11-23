import { Banner, EnquiryBand, Photo, TextLink } from "@/components/editorial";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata("About Sahas Tours", "Sahas Tours is a Sri Lankan tour operator based in Malabe. Explore suggested routes for local and international travellers.", "/about");

export default function About() {
  return <><Banner title="About Sahas Tours" description="A Sri Lankan tour operator based in Malabe." place="nuwara-eliya" />
    <section className="shell section home-welcome"><div className="welcome-photo"><Photo place="galle" sizes="(max-width: 760px) 92vw, 48vw" /></div>
      <div className="welcome-copy"><h2>Journeys around Sri Lanka</h2><p>We help travellers explore Sri Lanka, whether they’re visiting from overseas or getting to know another part of the island. Start with a suggested route and share the places, experiences and pace you have in mind.</p><p>Our itinerary ideas span the Cultural Triangle, tea country, national parks and the southern coast.</p><TextLink href="/tours">Browse tour itineraries</TextLink></div>
    </section><EnquiryBand /></>;
}
