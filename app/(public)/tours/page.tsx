import { Banner, EnquiryBand } from "@/components/editorial";
import TourExplorer from "@/components/tour-explorer";
import { publicMetadata } from "@/lib/seo";

const description = "Browse suggested Sri Lanka itineraries by travel theme or destination. Pick a route and ask Sahas Tours to shape it around your trip.";
export const metadata = publicMetadata("Sri Lanka Tour Packages", description, "/tours", "/images/ella.webp");

export default function Tours() {
  return <><Banner title="Sri Lanka tour packages" label="Suggested itineraries" description={description} place="ella" />
    <section className="shell section" aria-label="Find a tour"><TourExplorer /></section><EnquiryBand /></>;
}
