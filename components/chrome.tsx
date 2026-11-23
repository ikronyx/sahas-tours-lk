import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { navigation, site } from "@/lib/site";
import Navigation from "./navigation";
import { WhatsApp } from "./whatsapp";

export function Brand() {
  return <Link href="/" className="brand">
    <span className="brand-mark" aria-hidden="true" />
    <span className="brand-wordmark">Sahas<small> TOURS</small></span>
  </Link>;
}
export function Header() {
  return <header className="site-header"><div className="shell header-inner">
    <Brand />
    <Navigation items={navigation} />
    <WhatsApp className="button header-action" />
  </div></header>;
}
export function Footer() {
  return <footer className="site-footer bg-dark text-on-dark">
    <div className="shell footer-grid">
      <div><Brand /><p>Sri Lanka tours, destinations and experiences.</p></div>
      <div><h2>Explore</h2><ul>{navigation.slice(1, 5).map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>
      <div><h2>Sahas Tours</h2><ul>{navigation.slice(5).map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul><p className="location"><MapPin size={17} aria-hidden="true" />{site.address}</p></div>
      <div className="footer-contact"><h2>Plan a trip</h2><WhatsApp className="button button-primary" /></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getUTCFullYear()} Sahas Tours</span><a href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a></div>
  </footer>;
}
