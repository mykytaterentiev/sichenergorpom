import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error - CSS import for global styles
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sep.zp.ua'),
  title: "SICHENERGOPROM - Інноваційні рішення для енергетики та автоматизації",
  description: "ТОВ «СІЧЕНЕРГОПРОМ» - провідна українська компанія у сфері електромонтажних робіт, виробництва електророзподільної апаратури, інжинірингу та спорудження об'єктів електропостачання. 17+ років досвіду, 200+ успішних проектів.",
  keywords: "електромонтажні роботи, енергетика, автоматизація, електророзподільна апаратура, інжиніринг, Запоріжжя, SICHENERGOPROM, СІЧЕНЕРГОПРОМ",
  authors: [{ name: "SICHENERGOPROM" }],
  creator: "SICHENERGOPROM",
  publisher: "SICHENERGOPROM",
  openGraph: {
    title: "SICHENERGOPROM - Інноваційні рішення для енергетики та автоматизації",
    description: "Професійні електромонтажні роботи та енергетичні рішення від експертів з 17+ років досвіду",
    url: "https://www.sep.zp.ua",
    siteName: "SICHENERGOPROM",
    images: [
      {
        url: "/images/logo_sichenergoprom.png",
        width: 800,
        height: 600,
        alt: "SICHENERGOPROM Logo",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SICHENERGOPROM - Інноваційні рішення для енергетики",
    description: "Професійні електромонтажні роботи та енергетичні рішення",
    images: ["/images/logo_sichenergoprom.png"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/logo_sichenergoprom.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
