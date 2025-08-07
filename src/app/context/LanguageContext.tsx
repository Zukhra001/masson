"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Lang = "ru" | "en" | "kz";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "ru",
  setLang: () => {},
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage должен использоваться внутри LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("ru");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "kz" || stored === "ru") {
        setLangState(stored);
      }
      setIsLoaded(true);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("lang", newLang);
        document.documentElement.lang = newLang === "kz" ? "kk" : newLang;
      } catch (error) {
        console.warn('Не удалось сохранить язык в localStorage:', error);
      }
    }
  }, []);
  useEffect(() => {
    if (isLoaded && typeof document !== "undefined") {
      document.documentElement.lang = lang === "kz" ? "kk" : lang;
    }
  }, [lang, isLoaded]);

  const value = React.useMemo(() => ({
    lang,
    setLang
  }), [lang, setLang]);
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};