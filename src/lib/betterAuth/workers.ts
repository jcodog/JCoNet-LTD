import { createAuth } from "@/lib/betterAuth/factory";
import { env } from "hono/adapter";
import { Env } from "@/server/jstack";
import { ContextWithSuperJSON } from "jstack";

let _auth: ReturnType<typeof createAuth> | undefined;

export const getWorkerAuth = (c: ContextWithSuperJSON<Env, any, {}>) => {
  if (!_auth) {
    const e = env(c);

    _auth = createAuth({
      DATABASE_URL: e.DATABASE_URL ?? "",
      BETTER_AUTH_SECRET: e.BETTER_AUTH_SECRET ?? "",
      NEXT_PUBLIC_SITE_URL: e.NEXT_PUBLIC_SITE_URL ?? "",
      COOKIE_DOMAIN: e.COOKIE_DOMAIN,
    });
  }

  return _auth;
};
