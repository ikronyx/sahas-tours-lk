import { betterAuth } from "better-auth";
import { getMigrations } from "better-auth/db/migration";
import { closeSync, mkdirSync, openSync, unlinkSync } from "node:fs";
import { dirname } from "node:path";
import { Writable } from "node:stream";
import { createInterface } from "node:readline/promises";
import { adminOptions, openAdminDatabase } from "../lib/admin/options.mjs";

async function bootstrap() {
  const values = adminOptions();
  if (!values) throw new Error("Set BETTER_AUTH_URL, BETTER_AUTH_SECRET and ADMIN_DB_PATH first.");
  if (!process.stdin.isTTY) throw new Error("Run setup in an interactive terminal.");
  process.umask(0o077);

  const { dbPath, ...options } = values;
  mkdirSync(dirname(dbPath), { recursive: true, mode: 0o700 });
  const lockPath = dbPath + ".setup-lock";
  const lock = openSync(lockPath, "wx", 0o600);
  let database;
  try {
    database = openAdminDatabase(dbPath, true);
    const config = { ...options, database };
    const migrations = await getMigrations(config);
    await migrations.runMigrations();
    if (database.prepare('SELECT 1 FROM "user" LIMIT 1').get()) {
      throw new Error("An administrator already exists. Setup is for the first account only.");
    }

    let muted = false;
    const output = new Writable({ write(chunk, _encoding, done) {
      if (!muted) process.stdout.write(chunk);
      done();
    } });
    const prompt = createInterface({ input: process.stdin, output, terminal: true });
    prompt.on("SIGINT", () => prompt.close());
    const askSecret = async question => {
      process.stdout.write(question);
      muted = true;
      try { return await prompt.question(""); }
      finally { muted = false; process.stdout.write("\n"); }
    };

    try {
      const email = (await prompt.question("Admin email: ")).trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Enter a valid email address.");
      const password = await askSecret("Admin password (16–128 characters): ");
      const confirm = await askSecret("Repeat password: ");
      if (password !== confirm || password.length < 16 || password.length > 128) {
        throw new Error("Passwords must match and contain 16–128 characters.");
      }
      // This CLI instance has no HTTP handler and never runs in the web server.
      const bootstrapAuth = betterAuth({
        ...config,
        emailAndPassword: { ...options.emailAndPassword, disableSignUp: false, autoSignIn: false },
      });
      await bootstrapAuth.api.signUpEmail({ body: { name: "Sahas Tours Admin", email, password } });
      console.log("First administrator created. Sign in at /admin/login.");
    } finally {
      prompt.close();
    }
  } finally {
    database?.close();
    closeSync(lock);
    unlinkSync(lockPath);
  }
}

bootstrap().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
