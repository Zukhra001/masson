import React from "react";
import type { Metadata } from 'next';
import Header from "./components/Header";
import LanguageSwitcher from "@/app/components/ui/LanguageSwitcher";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata: Metadata = {
  title: 'Великая Ложа Казахстана | Официальный сайт масонской организации',
  description: 'Великая Ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года. 5 действующих лож в Алматы.',
  keywords: 'масоны Казахстан, великая ложа Казахстан, масонская организация Алматы, масонство Казахстан, масонские ложи, регулярное масонство',
  authors: [{ name: 'Великая Ложа Казахстана' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: 'https://masson.vercel.app',
    title: 'Великая Ложа Казахстана | Официальный сайт масонской организации',
    description: 'Единственная регулярная масонская организация в Казахстане. 5 действующих лож, международное признание.',
    siteName: 'Великая Ложа Казахстана',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Великая Ложа Казахстана | Официальная масонская организация',
    description: 'Единственная регулярная масонская организация в Казахстане с 2016 года.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white">
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