import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false }, title: "Private administration" };
export const dynamic = "force-dynamic";
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <main className="admin-shell">{children}</main>;
}
