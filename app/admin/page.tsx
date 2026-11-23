import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { getAdminAuth } from "@/lib/admin/auth";
import { SignOut } from "./session-controls";

export default async function Admin() {
  const auth = getAdminAuth();
  const session = auth ? await auth.api.getSession({ headers: await headers() }) : null;
  if (!session) redirect("/admin/login");
  return <div className="admin-card">
    <LockKeyhole size={25} aria-hidden="true" /><p className="eyebrow">Sahas Tours</p><h1>Administration</h1>
    <p>Signed in as <strong>{session.user.email}</strong>.</p><SignOut />
  </div>;
}
