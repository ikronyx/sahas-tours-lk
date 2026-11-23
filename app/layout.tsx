import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/source-serif-4/wght-italic.css";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Sahas Tours | Sri Lanka Tours & Itineraries", template: "%s | Sahas Tours" },
  description: "Explore Sri Lanka with Sahas Tours. Browse suggested itineraries, destinations and experiences across the island.",
  applicationName: site.name,
  openGraph: { type: "website", siteName: site.name, locale: "en_LK" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
