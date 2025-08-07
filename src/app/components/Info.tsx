"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    subtitle: "Великий Мастер Великой Ложи Казахстана",
    name: "Айдар Алпысбай",
    description:
      "Добродетель — это основа нашей морали и этики. Пусть честность, справедливость и доброта будут твоими постоянными ориентирами. В каждом действии и решении стремись к высокому стандарту морали, отражая внутреннюю чистоту и уважение к окружающим.",
  },
  en: {
    subtitle: "Grand Master of the Grand Lodge of Kazakhstan",
    name: "Aidar Alpysbay",
    description:
      "Virtue is the foundation of our morality and ethics. Let honesty, justice and kindness be your constant guides. In every action and decision, strive for a high standard of morality, reflecting inner purity and respect for others.",
  },
  kz: {
    subtitle: "Қазақстанның Ұлы Ложасының Ұлы Шебері",
    name: "Айдар Алпысбай",
    description:
      "Ізгілік — біздің моральдық пен этикамыздың негізі. Адалдық, әділдік және мейірбандық сіздің тұрақты бағдарыңыз болсын. Әрбір іс-әрекет пен шешімде жоғары моральдық стандартқа ұмтылыңыз, ішкі тазалық пен қоршағандарға құрметті көрсетіңіз.",
  },
};

export default function Info() {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  return (
    <section 
      className="w-full relative flex items-end min-h-[600px] md:h-screen overflow-hidden rounded-[40px] sm:rounded-[80px]"
      aria-labelledby="grand-master-title"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/master1.png"
          alt={`${t.name} - ${t.subtitle}`}
          fill
          priority={false}
          loading="lazy"
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent rounded-[40px] sm:rounded-[80px]" 
          aria-hidden="true"
        />
      </div>
      
      <div className="relative z-10 w-full px-4 pb-10 text-center text-white md:pb-20">
        <header>
          <p className="text-sm md:text-base mb-2 text-gray-200">
            {t.subtitle}
          </p>
          <h1 
            id="grand-master-title"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.name}
          </h1>
        </header>
        
        <blockquote className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-gray-100">
          {t.description}
        </blockquote>
      </div>
    </section>
  );
}