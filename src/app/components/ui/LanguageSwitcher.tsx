"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { motion, LayoutGroup } from "framer-motion";

const languages = [
  { code: "ru", label: "Рус" },
  { code: "en", label: "Eng" },
  { code: "kz", label: "Қаз" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="hidden md:flex items-center justify-center bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] rounded-[34px] px-5 md:px-2 h-[48px] md:h-[55px] text-[16px] md:text-[17px] font-semibold shadow-lg">
      <LayoutGroup>
        {languages.map((l, idx) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code as "ru" | "en" | "kz")}
              className={`relative flex items-center justify-center px-3 md:px-2 py-2 md:py-1.5 rounded-[24px] font-semibold transition-all duration-300
                ${isActive ? "text-[#686F75] mr-2 md:mr-1.5 scale-105" : "text-[#686F75] opacity-40 hover:opacity-80"}
                ${idx !== languages.length - 1 ? "mr-2 md:mr-1.5" : ""}
              `}
              aria-current={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-[24px] bg-[#EAF8FF] shadow"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          );
        })}
      </LayoutGroup>
    </div>
  );
};

export default LanguageSwitcher;
