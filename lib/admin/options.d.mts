import type { BetterAuthOptions } from "better-auth";
import type { DatabaseSync } from "node:sqlite";

export function adminOptions(): (BetterAuthOptions & { dbPath: string }) | null;
export function openAdminDatabase(path: string, allowCreate?: boolean): DatabaseSync;
