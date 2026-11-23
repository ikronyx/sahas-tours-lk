import { Banner, DestinationCard, EnquiryBand } from "@/components/editorial";
import { destinations } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

const description = "Explore the Cultural Triangle, the central hills and Sri Lanka’s southern coast.";
export const metadata = publicMetadata("Destinations in Sri Lanka", description, "/destinations");

export default function Destinations() {
  return <><Banner title="Destinations in Sri Lanka" description={description} place="sigiriya" />
    <section className="shell section" aria-label="Destination directory"><div className="destination-grid">{destinations.map(place => <DestinationCard key={place.slug} destination={place} />)}</div></section><EnquiryBand /></>;
}
