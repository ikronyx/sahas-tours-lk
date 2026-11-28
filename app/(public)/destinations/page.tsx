import { Banner, DestinationCard, EnquiryBand } from "@/components/editorial";
import { destinations } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

const description = "Explore Sri Lanka’s ancient cities, tea country, northern peninsula and coastline.";
export const metadata = publicMetadata("Destinations in Sri Lanka", description, "/destinations");

export default function Destinations() {
  return <><Banner title="Destinations in Sri Lanka" description={description} place="sigiriya" />
    <section className="shell section" aria-label="Destination directory"><div className="destination-grid">{destinations.slice().sort((a, b) => a.slug.localeCompare(b.slug)).map(place => <DestinationCard key={place.slug} destination={place} />)}</div></section><EnquiryBand /></>;
}
