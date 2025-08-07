"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, LayoutGroup } from "framer-motion";

const languages = [
  { 
    code: "ru", 
    label: "Рус",
    fullName: "Русский",
    locale: "ru-KZ"
  },
  { 
    code: "en", 
    label: "Eng",
    fullName: "English", 
    locale: "en-US"
  },
  { 
    code: "kz", 
    label: "Қаз",
    fullName: "Қазақша",
    locale: "kk-KZ"
  },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className="hidden md:flex items-center justify-center bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] rounded-[34px] px-5 md:px-2 h-[48px] md:h-[55px] text-[16px] md:text-[17px] font-semibold shadow-lg"
      role="group"
      aria-label="Выбор языка сайта / Language selection / Сайт тілін таңдау"
    >
      <LayoutGroup>
        {languages.map((l, idx) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code as "ru" | "en" | "kz")}
              className={`relative flex items-center justify-center px-3 md:px-2 py-2 md:py-1.5 rounded-[24px] font-semibold transition-all duration-300 focus:outline-none
                ${isActive ? "text-[#686F75] mr-2 md:mr-1.5 scale-105" : "text-[#686F75] opacity-40 hover:opacity-80"}
                ${idx !== languages.length - 1 ? "mr-2 md:mr-1.5" : ""}
              `}
              aria-current={isActive}
              aria-pressed={isActive}
              aria-label={`${l.fullName} - ${isActive ? 'текущий язык' : 'переключить язык'}`}
              title={`Переключить на ${l.fullName}`}
              lang={l.locale}
              type="button"
            >
              {isActive && (
                <motion.div
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-[24px] bg-[#EAF8FF] shadow"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          );
        })}
      </LayoutGroup>
      <label className="sr-only" htmlFor="language-select">
        Выберите язык сайта
      </label>
      <select
        id="language-select"
        className="sr-only"
        value={lang}
        onChange={(e) => setLang(e.target.value as "ru" | "en" | "kz")}
        aria-hidden="true"
        tabIndex={-1}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} lang={l.locale}>
            {l.fullName}
          </option>
        ))}
      </select>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://masson.vercel.app/#website",
            "inLanguage": languages.map(l => l.locale),
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://masson.vercel.app/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;