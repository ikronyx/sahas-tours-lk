import { DatabaseSync } from "node:sqlite";
import { resolve } from "node:path";

export function adminOptions() {
  const baseURL = process.env.BETTER_AUTH_URL?.trim();
  const secret = process.env.BETTER_AUTH_SECRET?.trim();
  const dbPath = process.env.ADMIN_DB_PATH?.trim();
  if (!baseURL || !dbPath || !secret || secret.length < 32) return null;
  const origin = new URL(baseURL);
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname);
  if (origin.origin !== baseURL || (origin.protocol !== "https:" && !(loopback && origin.protocol === "http:"))) {
    throw new Error("BETTER_AUTH_URL must be an HTTPS origin or an HTTP loopback origin.");
  }

  return {
    baseURL,
    secret,
    dbPath: resolve(dbPath),
    trustedOrigins: [origin.origin],
    emailAndPassword: { enabled: true, disableSignUp: true, minPasswordLength: 16, maxPasswordLength: 128 },
    session: { expiresIn: 8 * 60 * 60, updateAge: 60 * 60 },
    rateLimit: { enabled: true, storage: "database", window: 60, max: 80 },
    advanced: { useSecureCookies: origin.protocol === "https:" },
  };
}

export function openAdminDatabase(dbPath, allowCreate = false) {
  const database = new DatabaseSync(dbPath, { allowExtension: false, open: false });
  database.open();
  if (!allowCreate) {
    const ready = database.prepare("select 1 from sqlite_master where type = 'table' and name = 'user'").get();
    if (!ready) {
      database.close();
      throw new Error("Admin database setup required.");
    }
  }
  database.exec("PRAGMA busy_timeout = 5000; PRAGMA foreign_keys = ON;");
  return database;
}
