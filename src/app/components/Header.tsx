"use client";

import React, { useState } from "react";
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
    href: "#",
  },
  {
    label: {
      ru: "Мировое признание",
      en: "World Recognition",
      kz: "Әлемдік мойындау",
    },
    href: "#",
  },
  {
    isLogo: true,
  },
  { label: { ru: "Совет ВО", en: "Council", kz: "Кеңес" }, href: "#" },
  { label: { ru: "Контакты", en: "Contacts", kz: "Байланыс" }, href: "#" },
  {
    label: {
      ru: "Как стать масоном",
      en: "How to join",
      kz: "Қалай масон болуға болады",
    },
    href: "#",
    isButton: true,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const navLinksWithoutLogo = navLinks.filter((l) => !l.isLogo);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[rgba(4,4,4,0.8)] lg:bg-[rgba(4,4,4,0.1)] backdrop-blur-[75px] border-b border-[#C1C9CC] h-[70px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[95px] flex items-center">
      <nav className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 relative h-full">

        <div className="lg:hidden flex items-center justify-start">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl px-2 py-1">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={60}
              height={38}
              className="sm:w-[70px] sm:h-[44px] md:w-[80px] md:h-[51px]"
              priority
            />
          </div>
        </div>
        <div className="hidden lg:flex w-full justify-center items-center">
          <div className="flex flex-wrap gap-2 lg:gap-4 xl:gap-8 2xl:gap-10 items-center justify-center w-full">
            {navLinks.map((link, idx) =>
              link.isLogo ? (
                <div key="logo" className="flex items-center justify-center mx-2 xl:mx-4">
                  <Image
                    src="/logo.png"
                    alt="Логотип"
                    width={75}
                    height={48}
                    className="xl:w-[90px] xl:h-[57px]"
                    priority
                  />
                </div>
              ) : link.isButton ? (
                <div key={idx} className="flex-shrink-0">
                  <button className="px-3 py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-2 border border-[#C1C9CC] rounded-2xl xl:rounded-3xl text-[#C1C9CC] text-xs lg:text-sm xl:text-base 2xl:text-lg font-light hover:bg-[#C1C9CC] hover:text-black transition-all duration-200 text-center whitespace-nowrap">
                    {link.label[lang]}
                  </button>
                </div>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-[#EAF8FF] font-light text-xs lg:text-sm xl:text-base 2xl:text-lg px-1 lg:px-2 py-1 whitespace-nowrap ${
                    link.active ? "border-b-2 border-white" : "opacity-40 hover:opacity-70"
                  } transition-all duration-200`}
                >
                  {link.label?.[lang]}
                </a>
              )
            )}
          </div>
        </div>
        <button
  className={`lg:hidden flex items-center justify-center z-50 p-2 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
    open
      ? 'bg-[#1a1a2e] border-[#FFD700]/40'
      : 'bg-black/40 border-[#FFD700]/20'
  }`}
  onClick={() => setOpen(!open)}
  aria-label="Открыть меню"
>
  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative">
    <span
      className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-transform duration-300 origin-center ${
        open ? 'rotate-45' : '-translate-y-2'
      }`}
    />
    <span
      className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-all duration-300 ${
        open ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <span
      className={`absolute top-1/2 left-0 w-full h-0.5 bg-[#FFD700] transition-transform duration-300 origin-center ${
        open ? '-rotate-45' : 'translate-y-2'
      }`}
    />
  </div>
</button>

        <div
          className={`fixed top-0 right-0  w-72 sm:w-80 md:w-76 bg-[#1d1d2b] rounded-2xl shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } flex flex-col pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 border-l border-[#FFD700]/20`}
        >
          <button
            className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-[#FFD700] transition-colors duration-200 bg-black/20 rounded-full hover:bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="flex justify-center mb-8 sm:mb-20 md:mb-12 ">
            <Image
              src="/logo.png"
              alt="Логотип"
              width={100}
              height={51}
              className="sm:w-[60px] sm:h-[87px] md:w-[100px] md:h-[64px]"
              priority
            />
          </div>

          <div className="flex flex-col space-y-2 sm:space-y-5 md:space-y-6">
            {navLinksWithoutLogo.map((link, idx) =>
              link.isButton ? (
                <button
                  key={idx}
                  className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 border border-[#FFD700] rounded-2xl sm:rounded-3xl text-[#FFD700] text-sm sm:text-base md:text-lg font-medium hover:bg-[#FFD700] hover:text-black transition-all duration-200 w-full text-center shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label[lang]}
                </button>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-white font-medium text-sm sm:text-base md:text-lg py-2 sm:py-2.5 md:py-3 border-b border-transparent hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-200 ${
                    link.active ? "border-b-2 border-[#FFD700] text-[#FFD700]" : "hover:opacity-100"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label?.[lang]}
                </a>
              )
            )}
          </div>

          <div className="mt-auto mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
          </div>
        </div>

        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;