import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { getAdminAuth } from "@/lib/admin/auth";
import { SignIn } from "../session-controls";

export default async function AdminLogin() {
  const auth = getAdminAuth();
  if (auth && await auth.api.getSession({ headers: await headers() })) redirect("/admin");
  return <div className="admin-card">
    <LockKeyhole size={25} aria-hidden="true" /><p className="eyebrow">Sahas Tours</p><h1>Admin sign-in</h1>
    {auth ? <SignIn /> : <p>Private administration is unavailable until it has been configured.</p>}
  </div>;
}
