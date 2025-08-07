"use client";
import React, { useRef, useEffect, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const fallbackTimer = setTimeout(() => {
        if (video.paused) {
          setShowFallback(true);
        }
      }, 3000);

      const playVideo = async () => {
        try {
          await video.play();
          clearTimeout(fallbackTimer);
        } catch (error) {
          console.log('Autoplay prevented');
          setShowFallback(true);
          clearTimeout(fallbackTimer);
        }
      };

      const handleCanPlay = () => {
        playVideo();
      };

      const handleError = () => {
        setShowFallback(true);
        clearTimeout(fallbackTimer);
      };

      const handleInteraction = () => {
        if (video.paused && !showFallback) {
          playVideo();
        }
      };

      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('error', handleError);
      document.addEventListener('touchstart', handleInteraction, { once: true });
      document.addEventListener('click', handleInteraction, { once: true });

      return () => {
        clearTimeout(fallbackTimer);
        if (video) {
          video.removeEventListener('canplaythrough', handleCanPlay);
          video.removeEventListener('error', handleError);
        }
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, [showFallback]);

  return (<section className="relative w-full mt-[30px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[95px] h-[90vh] sm:h-[85vh] md:h-[95vh] lg:h-[95vh] xl:h-[95vh]">
    {!showFallback && (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full md:hidden block object-cover"
        draggable={false}
        style={{ 
          objectFit: 'cover'
        }}
      >
        <source src="/massongif.mp4" type="video/mp4" />
      </video>
    )}
    {showFallback && (
      <img 
        src="/masson.gif" 
        alt="masons" 
        className="w-full h-full md:hidden block object-cover" 
        draggable={false}
      />
    )}
    <img 
      src="/masson.gif" 
      alt="masons" 
      className="w-full h-auto md:h-full hidden md:block object-cover md:min-h-0" 
      draggable={false} 
    />

    <div className="absolute inset-0 bg-black/40 z-10" />

    <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center lg:justify-end px-4 md:px-12 pb-12 sm:pb-20 md:pb-16 lg:pb-20">
      <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between gap-4 md:gap-8">
        <div className="md:max-w-[55%]">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-0">
            {texts[lang]?.title}
          </h1>
        </div>

        <div className="md:max-w-[40%] w-full">
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-light mb-4 leading-relaxed">
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