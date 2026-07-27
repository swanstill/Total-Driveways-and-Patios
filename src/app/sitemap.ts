import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://totaldrivewaysandpatios.co.uk";

  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services/block-paving", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/resin-driveways", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/tarmac-driveways", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/patios", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/landscaping", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
