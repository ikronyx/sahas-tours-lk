import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsApp({ tourName, className = "button button-primary" }: { tourName?: string; className?: string }) {
  const href = whatsappLink(tourName);
  if (!href) return null;
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    <MessageCircle aria-hidden="true" size={19} /> Enquire on WhatsApp
  </a>;
}
