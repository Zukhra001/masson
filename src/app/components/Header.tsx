"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const navLinks = [
  {
    label: { ru: "Главная", en: "Home", kz: "Басты бет" },
    href: "#",
    active: true,
  },
  {
    label: { ru: "Наши ложи", en: "Our Lodges", kz: "Біздің ложалар" },
    href: "#lodges",
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
  },
  { label: { ru: "Совет ВО", en: "Council", kz: "Кеңес" }, href: "#council" },
  { label: { ru: "Контакты", en: "Contacts", kz: "Байланыс" }, href: "#contacts" },
  {
    label: {
      ru: "Как стать масоном",
      en: "How to join",
      kz: "Қалай масон болуға болады",
    },
    href: "#join",
    isButton: true,
  },
];

const languages = [
  { code: "ru", label: "Рус" },
  { code: "en", label: "Eng" },
  { code: "kz", label: "Қаз" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const navLinksWithoutLogo = navLinks.filter((l) => !l.isLogo);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const handleLanguageChange = useCallback((langCode: "ru" | "en" | "kz") => {
    setLang(langCode);
    setLangDropdownOpen(false);
  }, [setLang]);

  const toggleLangDropdown = useCallback(() => {
    setLangDropdownOpen(prev => !prev);
  }, []);

  const closeLangDropdown = useCallback(() => {
    setLangDropdownOpen(false);
  }, []);

  // Добавляем обработчик кликов вне dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdownOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 h-[70px] sm:h-[75px] md:h-[70px] lg:h-[110px] xl:h-[130px] flex flex-col items-center bg-[linear-gradient(to_right,rgba(11,19,19,0.6),rgba(9,22,34,0.6))] bg-[length:100%_100%] bg-no-repeat backdrop-blur-xl sm:backdrop-blur-[75px]">
      <nav 
        className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 relative h-[70px] sm:h-[75px] md:h-[70px] lg:h-[85px] xl:h-[100px] flex-1 lg:mt-4 xl:mt-6"
        role="navigation"
        aria-label="Главная навигация"
      >
        <div className="hidden lg:flex absolute top-1/2 right-6 xl:right-12 transform -translate-y-1/2 z-10">
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={toggleLangDropdown}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-xl px-3 py-2 border border-[#1e3a8a]/20 text-white/90 hover:text-[#1e3a8a] hover:border-[#1e3a8a]/40 transition-all duration-300"
              type="button"
              aria-label="Выбрать язык"
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
            >
              <span className="text-sm font-medium">
                {lang === 'ru' ? 'Рус' : lang === 'en' ? 'Eng' : 'Қаз'}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {langDropdownOpen && (
              <div 
                className="absolute right-0 top-full mt-2 bg-black/80 backdrop-blur-md rounded-xl border border-[#1e3a8a]/20 shadow-lg shadow-black/50 min-w-[120px] z-20"
                role="menu"
                aria-orientation="vertical"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code as "ru" | "en" | "kz")}
                    className={`w-full text-left px-4 py-2 text-sm transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                      lang === l.code
                        ? 'bg-[#1e3a8a] text-white font-medium'
                        : 'text-white/80 hover:text-[#1e3a8a] hover:bg-white/10'
                    }`}
                    role="menuitem"
                    type="button"
                  >
                    {l.code === 'ru' ? 'Русский' : l.code === 'en' ? 'English' : 'Қазақша'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:hidden w-full flex flex-col items-center justify-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col text-left">
              <span className="text-[#FFD700] text-sm sm:text-base font-semibold leading-tight">
                {lang === 'ru' ? 'Великая Ложа' : lang === 'en' ? 'Grand Lodge' : 'Қазақстанның'}
              </span>
              <span className="text-white text-xs sm:text-sm font-light leading-tight">
                {lang === 'ru' ? 'Казахстана' : lang === 'en' ? 'of Kazakhstan' : 'Ұлы Ложасы'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Логотип Великой Ложи Казахстана"
              width={70}
              height={44}
              className="w-[70px] h-[44px] sm:w-[80px] sm:h-[51px] md:w-[90px] md:h-[58px]"
              priority
              quality={90}
            />
          </div>
          
          <button
            className={`absolute right-0 flex items-center justify-center z-50 p-2.5 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
              open
                ? 'bg-[#1a1a2e] border-[#FFD700]/60 shadow-lg shadow-[#FFD700]/20'
                : 'bg-black/40 border-[#FFD700]/20 hover:border-[#FFD700]/40'
            }`}
            onClick={toggleMenu}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            type="button"
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

        <div className="hidden lg:flex w-full items-center">
          <div className="flex-1 flex items-center justify-end gap-2 lg:gap-4 xl:gap-8 2xl:gap-10 pr-2 xl:pr-4">
            {navLinks.slice(0, 3).map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`text-[#EAF8FF] font-light text-xs lg:text-sm xl:text-base 2xl:text-lg px-1 lg:px-2 py-1 whitespace-nowrap ${
                  link.active ? "border-b-2 border-white" : "opacity-40 hover:opacity-70"
                } transition-all duration-200`}
              >
                {link.label?.[lang]}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center mx-2 xl:mx-4">
            <Image
              src="/logo.png"
              alt="Логотип Великой Ложи Казахстана"
              width={75}
              height={48}
              className="xl:w-[90px] xl:h-[57px]"
              priority
              quality={90}
            />
          </div>
          <div className="flex-1 flex items-center justify-start gap-2 lg:gap-4 xl:gap-8 2xl:gap-10 pl-2 xl:pl-4">
            {navLinks.slice(4, 6).map((link, idx) => (
              <a
                key={idx + 4}
                href={link.href}
                className={`text-[#EAF8FF] font-light text-xs lg:text-sm xl:text-base 2xl:text-lg px-1 lg:px-2 py-1 whitespace-nowrap ${
                  link.active ? "border-b-2 border-white" : "opacity-40 hover:opacity-70"
                } transition-all duration-200`}
              >
                {link.label?.[lang]}
              </a>
            ))}
            {navLinks.find(link => link.isButton) && (
              <div className="flex-shrink-0 ml-2 lg:ml-4">
                <button 
                  className="px-3 py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-2 border border-[#C1C9CC] rounded-2xl xl:rounded-3xl text-[#C1C9CC] text-xs lg:text-sm xl:text-base 2xl:text-lg font-light hover:bg-[#C1C9CC] hover:text-black transition-all duration-200 text-center whitespace-nowrap"
                  type="button"
                >
                  {navLinks.find(link => link.isButton)?.label?.[lang]}
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`fixed inset-0 w-full h-screen bg-[#0a0a1a] z-40 transform transition-all duration-500 ease-in-out lg:hidden overflow-hidden ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          aria-hidden={!open}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0f0f1f]" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 border border-[#FFD700]/10 rounded-full animate-pulse" />
            <div className="absolute bottom-40 left-10 w-24 h-24 border border-[#FFD700]/20 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#FFD700]/5 rounded-full animate-pulse delay-500" />
          </div>

          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-[#FFD700] transition-all duration-300 bg-black/30 rounded-full hover:bg-black/50 hover:scale-110 z-50 backdrop-blur-sm border border-[#FFD700]/20"
            onClick={closeMenu}
            aria-label="Закрыть меню"
            type="button"
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="flex flex-col h-full justify-center items-center px-6 py-20 sm:px-8 sm:py-16 relative z-10 safe-area-inset">
            <div className={`mb-8 sm:mb-12 transform transition-all duration-700 delay-300 ${
              open ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-3xl p-4 sm:p-6 backdrop-blur-sm border border-[#FFD700]/30 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Логотип Великой Ложи Казахстана"
                  width={100}
                  height={64}
                  className="sm:w-[120px] sm:h-[77px] drop-shadow-2xl"
                  priority={false}
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
            <div className={`transform transition-all duration-500 ${
              open 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center justify-center bg-[rgba(4,4,4,0.3)] backdrop-blur-sm rounded-2xl p-2 border border-[#FFD700]/20">
                <div className="flex gap-1" role="radiogroup" aria-label="Выбор языка">
                  {(['ru', 'en', 'kz'] as const).map((langCode) => (
                    <button
                      key={langCode}
                      onClick={() => handleLanguageChange(langCode)}
                      className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        lang === langCode
                          ? 'bg-[#FFD700] text-black shadow-lg'
                          : 'text-white/70 hover:text-[#FFD700] hover:bg-white/10'
                      }`}
                      role="radio"
                      aria-checked={lang === langCode}
                      type="button"
                    >
                      {langCode === 'ru' ? 'Рус' : langCode === 'en' ? 'Eng' : 'Қаз'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-xs sm:max-w-sm mt-6">
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
                    <button
                      className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-xl sm:rounded-2xl text-black text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-[#FFD700]/30 transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                      onClick={closeMenu}
                      type="button"
                    >
                      {link.label[lang]}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`block w-full text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 backdrop-blur-sm ${
                        link.active 
                          ? "text-[#FFD700] bg-[#FFD700]/15 border border-[#FFD700]/40 shadow-lg shadow-[#FFD700]/20" 
                          : "text-white hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/10 hover:to-transparent border border-white/10"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label?.[lang]}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className={`mt-8 sm:mt-16 transform transition-all duration-700 delay-1000 ${
              open ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`} aria-hidden="true">
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mt-2 mx-auto" />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        </div>
        {open && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
      <div className="hidden lg:flex w-full max-w-[1920px] mx-auto justify-center pb-3 xl:pb-4">
        <span className="text-gray-400 text-sm xl:text-base font-light tracking-wider">
          {lang === 'ru' ? 'Великая Ложа Казахстана' : lang === 'en' ? 'Grand Lodge of Kazakhstan' : 'Қазақстанның Ұлы Ложасы'}
        </span>
      </div>
    </header>
  );
};

export default Header;