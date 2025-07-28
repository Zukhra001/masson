import React from "react";
import Header from "./components/Header";
import LanguageSwitcher from "@/app/components/ui/LanguageSwitcher";
import { LanguageProvider } from "@/app/context/LanguageContext";

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