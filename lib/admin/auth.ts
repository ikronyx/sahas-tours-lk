import { betterAuth } from "better-auth";
import { existsSync } from "node:fs";
import { adminOptions, openAdminDatabase } from "./options.mjs";

function createAuth() {
  const values = adminOptions();
  if (!values) return null;
  const { dbPath, ...options } = values;
  if (!existsSync(dbPath)) return null;
  return betterAuth({ ...options, database: openAdminDatabase(dbPath) });
}

let auth: ReturnType<typeof createAuth> = null;

export function getAdminAuth() {
  if (!auth) {
    try {
      auth = createAuth();
    } catch (error) {
      console.error("Sahas Tours private admin configuration is unavailable.", error);
    }
  }
  return auth;
}
