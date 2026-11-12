import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://tnxmd.io.vn/sitemap.xml",
    host: "https://tnxmd.io.vn",
  };
}
