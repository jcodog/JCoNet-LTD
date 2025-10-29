import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jconet.co.uk/sitemap.xml",
    host: "https://jconet.co.uk",
  };
}
