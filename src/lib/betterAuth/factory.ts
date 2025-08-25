import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/postgres-js";

export type AuthEnv = {
  DATABASE_URL: string;
  BETTER_AUTH_SECRET: string;
  NEXT_PUBLIC_SITE_URL?: string;
  COOKIE_DOMAIN?: string;
};

const db = drizzle(process.env.DATABASE_URL ?? "");

export const createAuth = (env: AuthEnv) => {
  const db = drizzle(env.DATABASE_URL ?? "");

  return betterAuth({
    secret: env.BETTER_AUTH_SECRET ?? "",
    database: drizzleAdapter(db, { provider: "pg" }),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
    },
    baseURL: env.NEXT_PUBLIC_SITE_URL ?? "https://jconet.co.uk",
    cookies: {
      domain: env.COOKIE_DOMAIN ?? undefined,
      sameSite: "lax",
      secure: true,
    },
  });
};
