import { emailRouter } from "@/server/routers/email-router";
import { j } from "./jstack";
import { cors } from "hono/cors";

const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:8080",
  "https://jconet.co.uk",
  "https://backend.jconet.co.uk",
]);

/**
 * This is your base API.
 * Here, you can handle errors, not-found responses, cors and more.
 *
 * @see https://jstack.app/docs/backend/app-router
 */
const api = j
  .router()
  .basePath("/api")
  .use(
    cors({
      origin: (origin) =>
        origin && allowedOrigins.has(origin) ? origin : "https://jconet.co.uk",
      credentials: true,
      allowHeaders: [
        "x-is-superjson",
        "Authorization",
        "content-type",
        "Content-Type",
      ],
      exposeHeaders: ["x-is-superjson"],
    })
  )
  .onError(j.defaults.errorHandler);

/**
 * This is the main router for your server.
 * All routers in /server/routers should be added here manually.
 */
const appRouter = j.mergeRouters(api, {
  email: emailRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
