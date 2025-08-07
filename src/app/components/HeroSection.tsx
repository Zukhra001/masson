"use client";
import React from "react";
import "@/app/globals.css";
import { useLanguage } from "../context/LanguageContext";

const texts = {
  ru: {
    title: "Великая ложа Казахстана",
    desc: "Великая ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года. Официально признана международными масонскими ложами мира.",
    buttonText: "Вступить в ложу",
    buttonAriaLabel: "Подать заявку на вступление в Великую Ложу Казахстана"
  },
  en: {
    title: "Grand Lodge of Kazakhstan", 
    desc: "Grand Lodge of Kazakhstan — the only regular and recognized Masonic organization in the Republic of Kazakhstan since 2016. Officially recognized by international masonic lodges worldwide.",
    buttonText: "Join the Lodge",
    buttonAriaLabel: "Apply to join the Grand Lodge of Kazakhstan"
  },
  kz: {
    title: "Қазақстанның Ұлы Ложасы",
    desc: "Қазақстанның Ұлы Ложасы — 2016 жылдан бастап Қазақстан Республикасындағы жалғыз мойындалған масондық ұйым. Әлемдік халықаралық масондық ложалармен ресми түрде мойындалған.",
    buttonText: "Ложаға қосылу",
    buttonAriaLabel: "Қазақстанның Ұлы Ложасына қосылу үшін өтінім беру"
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section 
      id="home"
      className="relative w-full mt-[30px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[95px] h-[90vh] sm:h-[85vh] md:h-[95vh] lg:h-[95vh] xl:h-[95vh]"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* GIF для мобильных устройств */}
      <img 
        src="/masson.gif" 
        alt={
          lang === 'ru' ? 'Масонская церемония - символы и ритуалы Великой Ложи Казахстана' :
          lang === 'en' ? 'Masonic ceremony - symbols and rituals of Grand Lodge of Kazakhstan' :
          'Масондық рәсім - Қазақстанның Ұлы Ложасының символдары мен ритуалдары'
        }
        className="w-full h-full md:hidden block object-cover" 
        draggable={false}
        loading="eager"
      />
      
      {/* GIF для десктопа (остается без изменений) */}
      <img 
        src="/masson.gif" 
        alt={
          lang === 'ru' ? 'Масонские символы и традиции - история Великой Ложи Казахстана с 2016 года' :
          lang === 'en' ? 'Masonic symbols and traditions - history of Grand Lodge of Kazakhstan since 2016' :
          '2016 жылдан бастап Қазақстанның Ұлы Ложасының тарихы - масондық символдар мен дәстүрлер'
        }
        className="w-full h-auto md:h-full hidden md:block object-cover md:min-h-0" 
        draggable={false}
        loading="eager"
      />
      
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center lg:justify-end px-4 md:px-12 pb-12 sm:pb-20 md:pb-16 lg:pb-20">
        <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-4 md:gap-8">
          <div className="md:max-w-[55%]">
            <h1 
              id="hero-title"
              className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-0"
            >
              {texts[lang]?.title}
            </h1>
          </div>

          <div className="md:max-w-[40%] w-full">
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-light mb-4 leading-relaxed">
              {texts[lang]?.desc}
            </p>
            <a 
              href="#join"
              className="inline-block w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition font-semibold text-sm md:text-base lg:text-lg text-center"
              aria-label={texts[lang]?.buttonAriaLabel}
            >
              {texts[lang]?.buttonText}
            </a>
          </div>
        </div>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": lang === 'ru' ? "Великая ложа Казахстана" : 
                    lang === 'en' ? "Grand Lodge of Kazakhstan" :
                    "Қазақстанның Ұлы Ложасы",
            "foundingDate": "2016",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KZ",
              "addressRegion": "Алматы"
            },
            "description": texts[lang]?.desc,
            "sameAs": [
              "https://masson.vercel.app"
            ],
            "memberOf": {
              "@type": "Organization", 
              "name": "International Masonic Organizations"
            }
          })
        }}
      />
    </section>
  );
};

export default HeroSection;