import { createAuth } from "@/lib/betterAuth/factory";

let _auth: ReturnType<typeof createAuth> | undefined;

export const auth = (() => {
  if (!_auth) {
    _auth = createAuth({
      DATABASE_URL: process.env.DATABASE_URL ?? "",
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ?? "",
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "",
      COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    });
  }

  return _auth;
})();
