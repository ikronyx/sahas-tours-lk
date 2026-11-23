import { Banner, EnquiryBand, ExperienceCard } from "@/components/editorial";
import { experiences } from "@/lib/content";
import { publicMetadata } from "@/lib/seo";

const description = "Plan time for Sri Lanka’s historic places, hill-country walks, wildlife and coastal towns.";
export const metadata = publicMetadata("Sri Lanka Attractions & Experiences", description, "/experiences", "/images/nuwara-eliya.webp");
export default function Experiences() {
  return <><Banner title="Things to do in Sri Lanka" label="Experiences" description={description} place="nuwara-eliya" />
    <section className="shell section" aria-label="Browse experiences"><div className="experience-grid">{experiences.map(item => <ExperienceCard key={item.slug} experience={item} />)}</div></section><EnquiryBand /></>;
}
