import type { MetadataRoute } from "next";
import { components } from "@/data/components";

const BASE = "https://anexui.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const componentPages: MetadataRoute.Sitemap = components.map((c) => ({
    url: `${BASE}/docs/components/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: BASE,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/docs/getting-started`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/docs/theming`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/docs/changelog`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/docs/components`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/builder`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...componentPages,
  ];
}
