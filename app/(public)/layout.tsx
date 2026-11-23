import { Footer, Header } from "@/components/chrome";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <div id="top"><a href="#main-content" className="skip-link">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></div>;
}
