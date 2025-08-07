import React from "react";
import { Metadata } from "next";
import Header from "./components/Header";
import LanguageSwitcher from "@/app/components/ui/LanguageSwitcher";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Великая ложа Казахстана | Официальная масонская организация",
    template: "%s | Великая ложа Казахстана"
  },
  description: "Великая ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года",
  keywords: "масонская ложа, Казахстан, масоны, Великая ложа, регулярное масонство, Алматы",
  authors: [{ name: "Великая ложа Казахстана" }],
  creator: "Великая ложа Казахстана",
  publisher: "Великая ложа Казахстана",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: 'https://masson.vercel.app',
    title: 'Великая ложа Казахстана',
    description: 'Единственная регулярная масонская организация в Казахстане',
    siteName: 'Великая ложа Казахстана',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Великая ложа Казахстана',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Великая ложа Казахстана',
    description: 'Единственная регулярная масонская организация в Казахстане',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  metadataBase: new URL('https://masson.vercel.app'),
  alternates: {
    canonical: 'https://masson.vercel.app',
    languages: {
      'ru': 'https://masson.vercel.app',
      'en': 'https://masson.vercel.app/en',
      'kk': 'https://masson.vercel.app/kz',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/masson.gif" as="image" type="image/gif" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="#0B1313" />
        <meta name="msapplication-navbutton-color" content="#0B1313" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Великая ложа Казахстана",
              "alternateName": ["Grand Lodge of Kazakhstan", "Қазақстанның Ұлы Ложасы"],
              "url": "https://masson.vercel.app",
              "logo": "https://masson.vercel.app/logo.png",
              "foundingDate": "2016",
              "foundingLocation": {
                "@type": "Place",
                "name": "Алматы, Казахстан"
              },
              "sameAs": [
                "https://masons.kz"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "KZ",
                "availableLanguage": ["Russian", "English", "Kazakh"]
              }
            })
          }}
        />
      </head>
      <body 
        className="bg-black text-white antialiased"
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          <Header />
          <div className="w-full flex justify-center top-[65px] md:top-[120px] fixed z-50">
            <LanguageSwitcher />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}