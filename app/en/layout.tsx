import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://memorydiary.ru"),
  title: "Memory Diary — Digital Memorial for Your Loved Ones",
  description: "Create an eternal digital memorial. Upload memories, photos and voice — AI will let you hear and see your loved one again.",
  openGraph: {
    type: "website",
    url: "https://memorydiary.ru/en",
    title: "Memory Diary — Digital Memorial for Your Loved Ones",
    description: "Create an eternal digital memorial. Upload memories, photos and voice — AI will let you hear and see your loved one again.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Memory Diary" }],
    siteName: "Memory Diary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Diary — Digital Memorial for Your Loved Ones",
    description: "Create an eternal digital memorial. AI avatar and chatbot let your family feel the presence of your loved one again.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://memorydiary.ru/en",
    languages: {
      ru: "https://memorydiary.ru",
      en: "https://memorydiary.ru/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
