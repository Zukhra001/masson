"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Lang = "ru" | "en" | "kz";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isLoading: boolean;
}

const STORAGE_KEY = 'masson-site-language';
const DEFAULT_LANG: Lang = 'ru';
export const SUPPORTED_LANGUAGES = {
  ru: {
    code: 'ru',
    name: 'Русский',
    nativeName: 'Русский',
    locale: 'ru-KZ',
    direction: 'ltr',
    region: 'Kazakhstan'
  },
  en: {
    code: 'en',
    name: 'English', 
    nativeName: 'English',
    locale: 'en-US',
    direction: 'ltr',
    region: 'International'
  },
  kz: {
    code: 'kz',
    name: 'Kazakh',
    nativeName: 'Қазақша',
    locale: 'kk-KZ', 
    direction: 'ltr',
    region: 'Kazakhstan'
  }
} as const;
const detectBrowserLanguage = (): Lang => {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  
  const browserLang = navigator.language || navigator.languages?.[0];
  
  if (browserLang?.startsWith('ru')) return 'ru';
  if (browserLang?.startsWith('kk') || browserLang?.startsWith('kz')) return 'kz';
  if (browserLang?.startsWith('en')) return 'en';
  
  return DEFAULT_LANG;
};

const detectUrlLanguage = (): Lang | null => {
  if (typeof window === 'undefined') return null;
  
  const path = window.location.pathname;
  if (path.startsWith('/ru')) return 'ru';
  if (path.startsWith('/en')) return 'en'; 
  if (path.startsWith('/kz')) return 'kz';
  
  return null;
};

const LanguageContext = createContext<LanguageContextProps>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  isLoading: true,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        const urlLang = detectUrlLanguage();
        const storedLang = localStorage.getItem(STORAGE_KEY) as Lang | null;
        const browserLang = detectBrowserLanguage();
        
        let initialLang: Lang = DEFAULT_LANG;
        
        if (urlLang && Object.keys(SUPPORTED_LANGUAGES).includes(urlLang)) {
          initialLang = urlLang;
        } else if (storedLang && Object.keys(SUPPORTED_LANGUAGES).includes(storedLang)) {
          initialLang = storedLang;
        } else {
          initialLang = browserLang;
        }
        
        setLangState(initialLang);
        localStorage.setItem(STORAGE_KEY, initialLang);
        document.documentElement.lang = SUPPORTED_LANGUAGES[initialLang].locale;
        document.documentElement.dir = SUPPORTED_LANGUAGES[initialLang].direction;
        
      } catch (error) {
        console.warn('Failed to initialize language:', error);
        setLangState(DEFAULT_LANG);
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    if (!Object.keys(SUPPORTED_LANGUAGES).includes(newLang)) {
      console.warn(`Unsupported language: ${newLang}`);
      return;
    }

    try {
      setLangState(newLang);
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = SUPPORTED_LANGUAGES[newLang].locale;
      document.documentElement.dir = SUPPORTED_LANGUAGES[newLang].direction;
      const metaLang = document.querySelector('meta[http-equiv="content-language"]');
      if (metaLang) {
        metaLang.setAttribute('content', SUPPORTED_LANGUAGES[newLang].locale);
      } else {
        const newMetaLang = document.createElement('meta');
        newMetaLang.setAttribute('http-equiv', 'content-language');
        newMetaLang.setAttribute('content', SUPPORTED_LANGUAGES[newLang].locale);
        document.head.appendChild(newMetaLang);
      }
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', 'language_change', {
          'language': newLang,
          'previous_language': lang
        });
      }
      
    } catch (error) {
      console.error('Failed to set language:', error);
    }
  }, [lang]);
  const contextValue = React.useMemo(() => ({
    lang,
    setLang,
    isLoading
  }), [lang, setLang, isLoading]);
  if (isLoading) {
    return (
      <LanguageContext.Provider value={contextValue}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
            <p className="text-white text-sm">
              {lang === 'ru' ? 'Загрузка...' : 
               lang === 'en' ? 'Loading...' : 
               'Жүктеу...'}
            </p>
          </div>
        </div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://masson.vercel.app/#website",
            "name": lang === 'ru' ? "Великая Ложа Казахстана" : 
                    lang === 'en' ? "Grand Lodge of Kazakhstan" :
                    "Қазақстанның Ұлы Ложасы",
            "inLanguage": Object.values(SUPPORTED_LANGUAGES).map(l => l.locale),
            "availableLanguage": Object.values(SUPPORTED_LANGUAGES).map(l => ({
              "@type": "Language",
              "name": l.name,
              "alternateName": l.nativeName
            })),
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "inLanguage": SUPPORTED_LANGUAGES[lang].locale
            }
          })
        }}
      />
      {Object.entries(SUPPORTED_LANGUAGES).map(([code, langInfo]) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={langInfo.locale}
          href={`https://masson.vercel.app${code === 'ru' ? '' : '/' + code}`}
        />
      ))}
      <link
        rel="canonical"
        href={`https://masson.vercel.app${lang === 'ru' ? '' : '/' + lang}`}
      />
    </LanguageContext.Provider>
  );
};
export const useLanguageInfo = () => {
  const { lang } = useLanguage();
  return SUPPORTED_LANGUAGES[lang];
};
export const useAvailableLanguages = () => {
  return Object.values(SUPPORTED_LANGUAGES);
};

export default LanguageContext;