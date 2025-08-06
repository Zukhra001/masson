"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
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
  const [videoLoaded, setVideoLoaded] = useState(false);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (video && !showFallback) {
      try {
        video.currentTime = 0;
        await video.play();
        setVideoLoaded(true);
      } catch (error) {
        console.log('Video play failed:', error);
        setShowFallback(true);
      }
    }
  }, [showFallback]);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // Страница скрыта
      return;
    } else {
      // Страница видима - перезапускаем видео
      setTimeout(() => {
        playVideo();
      }, 100);
    }
  }, [playVideo]);

  const handleScroll = useCallback(() => {
    const video = videoRef.current;
    if (video && videoLoaded && !showFallback) {
      const rect = video.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && video.paused) {
        playVideo();
      }
    }
  }, [playVideo, videoLoaded, showFallback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fallbackTimer: NodeJS.Timeout;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      playVideo();
    };

    const handleCanPlay = () => {
      clearTimeout(fallbackTimer);
      playVideo();
    };

    const handleError = () => {
      console.log('Video error occurred');
      setShowFallback(true);
      clearTimeout(fallbackTimer);
    };

    const handleLoadStart = () => {
      fallbackTimer = setTimeout(() => {
        if (!videoLoaded) {
          console.log('Video loading timeout');
          setShowFallback(true);
        }
      }, 5000);
    };

    // Event listeners для видео
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Event listeners для страницы
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Попытка немедленного воспроизведения
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [playVideo, handleVisibilityChange, handleScroll, videoLoaded]);

  return (
    <section className="relative w-full mt-[30px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[95px] h-[90vh] sm:h-[85vh] md:h-[95vh] lg:h-[95vh] xl:h-[95vh]">
      {!showFallback && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
        className="w-full h-full hidden md:block object-cover" 
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