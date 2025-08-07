"use client";

import React, { useCallback } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

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

  const handleLanguageChange = useCallback((langCode: "ru" | "en" | "kz") => {
    setLang(langCode);
  }, [setLang]);

  return (
    <div 
      className="hidden md:flex items-center justify-center bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] rounded-[34px] px-5 md:px-2 h-[48px] md:h-[55px] text-[16px] md:text-[17px] font-semibold shadow-lg"
      role="radiogroup"
      aria-label="Выбор языка сайта"
    >
      {languages.map((l, idx) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => handleLanguageChange(l.code as "ru" | "en" | "kz")}
            className={`relative flex items-center justify-center px-3 md:px-2 py-2 md:py-1.5 rounded-[24px] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
              ${isActive 
                ? "text-[#686F75] mr-2 md:mr-1.5 scale-105 bg-[#EAF8FF] shadow" 
                : "text-[#686F75] opacity-40 hover:opacity-80 hover:scale-105"
              }
              ${idx !== languages.length - 1 ? "mr-2 md:mr-1.5" : ""}
            `}
            role="radio"
            aria-checked={isActive}
            aria-label={`${l.fullName} - ${isActive ? 'текущий язык' : 'переключить язык'}`}
            title={`Переключить на ${l.fullName}`}
            lang={l.locale}
            type="button"
          >
            <span className="relative z-10">{l.label}</span>
          </button>
        );
      })}
      <label className="sr-only" htmlFor="language-select">
        Выберите язык сайта
      </label>
      <select
        id="language-select"
        className="sr-only"
        value={lang}
        onChange={(e) => handleLanguageChange(e.target.value as "ru" | "en" | "kz")}
        aria-hidden="true"
        tabIndex={-1}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} lang={l.locale}>
            {l.fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;