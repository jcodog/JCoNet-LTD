import { jstack } from "jstack";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "hono/adapter";
import { getWorkerAuth } from "@/lib/betterAuth/workers";
import { HTTPException } from "hono/http-exception";

export interface Env {
  Bindings: {
    // Cloudflare
    R2: KVNamespace;

    // Secrets and vars
    DATABASE_URL: string;
    MAILCHANNELS_API_KEY: string;
    MC_DKIM_PRIVATE_KEY: string;
    MC_DKIM_SELECTOR: string;
    MC_DKIM_DOMAIN: string;
    BETTER_AUTH_SECRET: string;
    NEXT_PUBLIC_SITE_URL: string;
    COOKIE_DOMAIN: string;
    MARBLE_API_URL: string;
    MARBLE_WORKSPACE_KEY: string;
  };
}

export const j = jstack.init<Env>();

/**
 * Type-safely injects database into all procedures
 * @see https://jstack.app/docs/backend/middleware
 *
 * For deployment to Cloudflare Workers
 * @see https://developers.cloudflare.com/workers/tutorials/postgres/
 */
const databaseMiddleware = j.middleware(async ({ c, next }) => {
  const { DATABASE_URL } = env(c);

  const db = drizzle(DATABASE_URL);

  return await next({ db });
});

/**
 * Type-safely injects authentiation into the protected procedures
 *
 * This works with betterauth by extracting the auth session from the headers
 */
const authMiddleware = j.middleware(async ({ c, next }) => {
  const auth = getWorkerAuth(c);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) throw new HTTPException(401, { message: "Unauthorized" });

  return next({ auth, session, user: session.user });
});

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware);

/**
 * Private (authenticated) procedures
 *
 * This is used for interacting with data reliant on user sessions and security checks
 */
export const privateProcedure = publicProcedure.use(authMiddleware);
