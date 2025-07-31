"use client";

import React from "react";
import "@/app/globals.css";
import { useLanguage } from "../context/LanguageContext";

const texts = {
  ru: {
    title: "Великая ложа Казахстана",
    desc: "Великая ложа Казахстана Grand Lodge of Qazaqstan ООО Великая ложа Казахстана — единственная регулярная и общепризнанная масонская организация в Республике Казахстан с 2016 года",
  },
  en: {
    title: "Grand Lodge of Kazakhstan",
    desc: "Grand Lodge of Kazakhstan — the only regular and recognized Masonic organization in the Republic of Kazakhstan since 2016",
  },
  kz: {
    title: "Қазақстанның Ұлы Ложасы",
    desc: "Қазақстанның Ұлы Ложасы — Қазақстан Республикасындағы жалғыз мойындалған масондық ұйым (2016 жылдан бастап)",
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative w-full mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[95px] min-h-[70vh] sm:min-h-[60vh] md:min-h-0">
      <img
        src="/masson.gif"
        alt="masons"
        className="w-full h-auto md:h-full block object-cover min-h-[70vh] sm:min-h-[60vh] md:min-h-0"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 z-20 flex items-end md:items-center lg:items-end px-4 md:px-12 pb-12 sm:pb-16 md:pb-16 lg:pb-20">
        <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-6 md:gap-8">
          <div className="md:max-w-[55%]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
              {texts[lang]?.title}
            </h1>
          </div>

          <div className="md:max-w-[40%] w-full">
            <p className="text-white/70 text-sm sm:text-base md:text-lg font-light mb-4 leading-relaxed">
              {texts[lang]?.desc}
            </p>
            <button className="w-full md:w-auto bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-gray-200 transition font-semibold text-sm md:text-base lg:text-lg">
              {lang === "ru" ? "Вступить" : lang === "en" ? "Join" : "Қосылу"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;