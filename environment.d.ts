declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      BETTER_AUTH_SECRET: string;
      NEXT_PUBLIC_SITE_URL: string;
      COOKIE_DOMAIN: string;
    }
  }
}

export default {};
