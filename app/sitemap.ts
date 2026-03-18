import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://memorydiary.ru",
      lastModified: new Date(),
      alternates: {
        languages: {
          ru: "https://memorydiary.ru",
          en: "https://memorydiary.ru/en",
        },
      },
    },
    {
      url: "https://memorydiary.ru/en",
      lastModified: new Date(),
    },
  ];
}
