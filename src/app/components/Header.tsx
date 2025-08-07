"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const navLinks = [
  {
    label: { ru: "Главная", en: "Home", kz: "Басты бет" },
    href: "#home",
    active: true,
  },
  {
    label: { ru: "Наши ложи", en: "Our Lodges", kz: "Біздің ложалар" },
    href: "https://mason.org.kz/en/#submenu:more2",
  },
  {
    label: {
      ru: "Мировое признание",
      en: "World Recognition",
      kz: "Әлемдік мойындау",
    },
    href: "#recognition",
  },
  {
    isLogo: true,
    href: "",
  },
  { 
    label: { ru: "Совет ВО", en: "Grand Council", kz: "Ұлы Кеңес" }, 
    href: "#council",
  },
  { 
    label: { ru: "Контакты", en: "Contacts", kz: "Байланыс" }, 
    href: "https://mason.org.kz/en/contacts/",
  },
  {
    label: {
      ru: "Как стать масоном",
      en: "How to become a mason",
      kz: "Қалай масон болуға болады",
    },
    href: "#join",
    isButton: true,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const navLinksWithoutLogo = navLinks.filter((l) => !l.isLogo);
  const logoTexts = {
    ru: { main: 'Великая Ложа', sub: 'Казахстана' },
    en: { main: 'Grand Lodge', sub: 'of Kazakhstan' },
    kz: { main: 'Қазақстанның', sub: 'Ұлы Ложасы' }
  };

  return (
    <header 
      className="w-full fixed top-0 left-0 z-50 h-[70px] sm:h-[75px] md:h-[70px] lg:h-[80px] xl:h-[95px] flex items-center bg-[linear-gradient(to_right,rgba(11,19,19,0.6),rgba(9,22,34,0.6))] bg-[length:100%_100%] bg-no-repeat backdrop-blur-xl sm:backdrop-blur-[75px]"
      role="banner"
    >
      <nav 
        className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 relative h-full"
        role="navigation"
        aria-label={lang === 'ru' ? 'Главная навигация' : lang === 'en' ? 'Main navigation' : 'Негізгі навигация'}
      >
        <div className="lg:hidden w-full flex flex-col items-center justify-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col text-left">
              <span className="text-[#FFD700] text-sm sm:text-base font-semibold leading-tight">
                {logoTexts[lang].main}
              </span>
              <span className="text-white text-xs sm:text-sm font-light leading-tight">
                {logoTexts[lang].sub}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt={lang === 'ru' ? 'Логотип Великой Ложи Казахстана - масонская организация' : 
                   lang === 'en' ? 'Grand Lodge of Kazakhstan logo - masonic organization' : 
                   'Қазақстанның Ұлы Ложасының логотипі - масондық ұйым'}
              width={70}
              height={44}
              className="w-[70px] h-[44px] sm:w-[80px] sm:h-[51px] md:w-[90px] md:h-[58px]"
              priority
            />
          </div>
          
          <button
            className={`absolute right-0 flex items-center justify-center z-50 p-2.5 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
              open
                ? 'bg-[#1a1a2e] border-[#FFD700]/60 shadow-lg shadow-[#FFD700]/20'
                : 'bg-black/40 border-[#FFD700]/20 hover:border-[#FFD700]/40'
            }`}
            onClick={() => setOpen(!open)}
            aria-label={lang === 'ru' ? 'Открыть главное меню' : lang === 'en' ? 'Open main menu' : 'Негізгі мәзірді ашу'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative">
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-all duration-300 origin-center ${
                  open ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-all duration-300 ${
                  open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-all duration-300 origin-center ${
                  open ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex w-full justify-center items-center">
          <div className="flex flex-wrap gap-2 lg:gap-4 xl:gap-8 2xl:gap-10 items-center justify-center w-full">
            {navLinks.map((link, idx) =>
              link.isLogo ? (
                <div key="logo" className="flex items-center justify-center mx-2 xl:mx-4">
                  <Image
                    src="/logo.png"
                    alt={lang === 'ru' ? 'Великая Ложа Казахстана - официальный логотип масонской организации' : 
                         lang === 'en' ? 'Grand Lodge of Kazakhstan - official masonic organization logo' : 
                         'Қазақстанның Ұлы Ложасы - масондық ұйымның ресми логотипі'}
                    width={75}
                    height={48}
                    className="xl:w-[90px] xl:h-[57px]"
                    priority
                  />
                </div>
              ) : link.isButton ? (
                <div key={idx} className="flex-shrink-0">
                  <a
                    href={link.href}
                    className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-2 border border-[#C1C9CC] rounded-2xl xl:rounded-3xl text-[#C1C9CC] text-xs lg:text-sm xl:text-base 2xl:text-lg font-light hover:bg-[#C1C9CC] hover:text-black transition-all duration-200 text-center whitespace-nowrap"
                    aria-label={lang === 'ru' ? 'Узнать как стать членом Великой Ложи Казахстана' : 
                                lang === 'en' ? 'Learn how to become a member of Grand Lodge of Kazakhstan' : 
                                'Қазақстанның Ұлы Ложасының мүшесі болу жолдарын біліңіз'}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label[lang]}
                  </a>
                </div>
              ) : (
                <a
                  key={idx}
                  href={link.href || "#"}
                  className={`text-[#EAF8FF] font-light text-xs lg:text-sm xl:text-base 2xl:text-lg px-1 lg:px-2 py-1 whitespace-nowrap ${
                    link.active ? "border-b-2 border-white" : "opacity-40 hover:opacity-70"
                  } transition-all duration-200`}
                  aria-current={link.active ? 'page' : undefined}
                  target={link.href?.startsWith('http') ? '_blank' : undefined}
                  rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label?.[lang]}
                </a>
              )
            )}
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`fixed inset-0 w-full h-screen bg-[#0a0a1a] z-40 transform transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0f0f1f]"></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-32 h-32 border border-[#FFD700]/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 border border-[#FFD700]/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#FFD700]/5 rounded-full animate-pulse delay-500"></div>
          </div>

          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-[#FFD700] transition-all duration-300 bg-black/30 rounded-full hover:bg-black/50 hover:scale-110 z-50 backdrop-blur-sm border border-[#FFD700]/20"
            onClick={() => setOpen(false)}
            aria-label={lang === 'ru' ? 'Закрыть главное меню' : lang === 'en' ? 'Close main menu' : 'Негізгі мәзірді жабу'}
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="flex flex-col h-full justify-center items-center px-6 py-20 sm:px-8 sm:py-16 relative z-10 safe-area-inset">
            <div className={`mb-8 sm:mb-12 transform transition-all duration-700 delay-300 ${
              open ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-3xl p-4 sm:p-6 backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt={lang === 'ru' ? 'Логотип Великой Ложи Казахстана' : 
                       lang === 'en' ? 'Grand Lodge of Kazakhstan logo' : 
                       'Қазақстанның Ұлы Ложасының логотипі'}
                  width={100}
                  height={64}
                  className="sm:w-[120px] sm:h-[77px] drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-xs sm:max-w-sm">
              <div className={`transform transition-all duration-500 ${
                open 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center justify-center bg-[rgba(4,4,4,0.3)] backdrop-blur-sm rounded-2xl p-2 border border-[#FFD700]/20">
                  <div className="flex gap-1" role="group" aria-label={lang === 'ru' ? 'Выбор языка' : lang === 'en' ? 'Language selection' : 'Тіл таңдау'}>
                    {['ru', 'en', 'kz'].map((langCode) => (
                      <button
                        key={langCode}
                        onClick={() => {
                          setLang(langCode as "ru" | "en" | "kz");
                        }}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          lang === langCode
                            ? 'bg-[#FFD700] text-black shadow-lg'
                            : 'text-white/70 hover:text-[#FFD700] hover:bg-white/10'
                        }`}
                        aria-pressed={lang === langCode}
                        aria-label={
                          langCode === 'ru' ? 'Русский язык' : 
                          langCode === 'en' ? 'English language' : 
                          'Қазақ тілі'
                        }
                      >
                        {langCode === 'ru' ? 'Рус' : langCode === 'en' ? 'Eng' : 'Қаз'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {navLinksWithoutLogo.map((link, idx) => (
                <div
                  key={idx}
                  className={`transform transition-all duration-500 ${
                    open 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  {link.isButton ? (
                    <a
                      href={link.href || "#"}
                      className="block w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl sm:rounded-2xl text-black text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-[#FFD700]/30 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-center"
                      onClick={() => setOpen(false)}
                      aria-label={lang === 'ru' ? 'Информация о том, как стать масоном в Казахстане' : 
                                  lang === 'en' ? 'Information on how to become a mason in Kazakhstan' : 
                                  'Қазақстанда масон болу туралы ақпарат'}
                      target={link.href?.startsWith('http') ? '_blank' : undefined}
                      rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label[lang]}
                    </a>
                  ) : (
                    <a
                      href={link.href || "#"}
                      className={`block w-full text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 backdrop-blur-sm ${
                        link.active 
                          ? "text-[#FFD700] bg-[#FFD700]/15 border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/20" 
                          : "text-white hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/10 hover:to-transparent border border-white/10"
                      }`}
                      onClick={() => setOpen(false)}
                      aria-current={link.active ? 'page' : undefined}
                      target={link.href?.startsWith('http') ? '_blank' : undefined}
                      rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label?.[lang]}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className={`mt-8 sm:mt-16 transform transition-all duration-700 delay-1000 ${
              open ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-2 mx-auto"></div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/5 via-transparent to-transparent pointer-events-none"></div>
        </div>
        {open && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;