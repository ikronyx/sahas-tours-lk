import { getAdminAuth } from "@/lib/admin/auth";

export const runtime = "nodejs";

function handle(request: Request) {
  const { pathname } = new URL(request.url);
  const allowed = request.method === "GET"
    ? pathname === "/api/auth/get-session"
    : ["/api/auth/sign-in/email", "/api/auth/sign-out"].includes(pathname);
  if (!allowed) return new Response(null, { status: 404 });

  const auth = getAdminAuth();
  if (!auth) return new Response(null, { status: 503 });
  return auth.handler(request);
}
export const GET = handle;
export const POST = handle;
