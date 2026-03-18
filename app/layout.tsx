import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://memorydiary.ru"),
  title: "Memory Diary — Цифровой мемориал для ваших близких",
  description: "Создайте вечный цифровой мемориал. Загружайте воспоминания, фотографии и голос — ИИ позволит снова услышать и увидеть дорогого человека.",
  openGraph: {
    type: "website",
    url: "https://memorydiary.ru",
    title: "Memory Diary — Цифровой мемориал для ваших близких",
    description: "Создайте вечный цифровой мемориал. Загружайте воспоминания, фотографии и голос — ИИ позволит снова услышать и увидеть дорогого человека.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Memory Diary" }],
    siteName: "Memory Diary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memory Diary — Цифровой мемориал для ваших близких",
    description: "Создайте вечный цифровой мемориал. ИИ-аватар и чатбот позволят снова ощутить присутствие дорогого человека.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://memorydiary.ru",
    languages: {
      ru: "https://memorydiary.ru",
      en: "https://memorydiary.ru/en",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Memory Diary",
  applicationCategory: "WebApplication",
  description: "Цифровые мемориалы для сохранения памяти о близких. ИИ-аватар, синтез голоса и чатбот.",
  offers: [{ "@type": "Offer", price: "0", priceCurrency: "RUB" }],
  inLanguage: ["ru", "en"],
  url: "https://memorydiary.ru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
