import { MapPin, MessageCircle } from "lucide-react";
import { Banner, TextLink } from "@/components/editorial";
import { WhatsApp } from "@/components/whatsapp";
import { site, whatsappLink } from "@/lib/site";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata("Contact Sahas Tours", "Contact Sahas Tours in Malabe about a Sri Lanka itinerary. Share your travel dates and interests on WhatsApp.", "/contact");

export default function Contact() {
  const available = Boolean(whatsappLink());
  return <><Banner title="Contact Sahas Tours" description="Get in touch to plan your journey around Sri Lanka." />
    <section className="shell section contact-grid"><div className="contact-card"><MessageCircle aria-hidden="true" size={28} /><h2>Tour enquiries</h2>
      {available ? <><p>Send your travel dates, group size and the destinations you’re interested in.</p><WhatsApp /></> : <p>WhatsApp enquiries are currently unavailable.</p>}
    </div><div className="contact-card"><MapPin aria-hidden="true" size={28} /><h2>Business address</h2><address>Sahas Tours<br />{site.address}<br />Sri Lanka</address><TextLink href="/tours">Browse tour itineraries</TextLink></div></section>
  </>;
}
