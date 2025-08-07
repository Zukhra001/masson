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
    imageAlt: "Айдар Алпысбай - Великий Мастер Великой Ложи Казахстана, руководитель масонской организации"
  },
  en: {
    subtitle: "Grand Master of the Grand Lodge of Kazakhstan",
    name: "Aidar Alpysbay",
    description:
      "Virtue is the foundation of our morality and ethics. Let honesty, justice and kindness be your constant guides. In every action and decision, strive for a high standard of morality, reflecting inner purity and respect for others.",
    imageAlt: "Aidar Alpysbay - Grand Master of the Grand Lodge of Kazakhstan, leader of the masonic organization"
  },
  kz: {
    subtitle: "Қазақстанның Ұлы Ложасының Ұлы Шебері",
    name: "Айдар Алпысбай",
    description:
      "Ізгілік — біздің моральдық пен этикамыздың негізі. Адалдық, әділдік және мейірбандық сіздің тұрақты бағдарыңыз болсын. Әрбір іс-әрекет пен шешімде жоғары моральдық стандартқа ұмтылыңыз, ішкі тазалық пен қоршағандарға құрметті көрсетіңіз.",
    imageAlt: "Айдар Алпысбай - Қазақстанның Ұлы Ложасының Ұлы Шебері, масондық ұйымның басшысы"
  },
};

export default function Info() {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  return (
    <section 
      id="grand-master"
      className="w-full relative flex items-end min-h-[600px] sm:min-h-[700px] md:min-h-[80vh] lg:min-h-screen overflow-hidden rounded-[40px] sm:rounded-[80px]"
      aria-labelledby="grand-master-title"
      role="region"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/master1.png"
          alt={t.imageAlt}
          fill
          priority
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent rounded-[40px] sm:rounded-[80px]" 
          aria-hidden="true"
        />
      </div>
      
      <div className="relative z-10 w-full px-4 pb-10 text-center text-white md:pb-20">
        <p 
          className="text-sm md:text-base mb-2 text-white/90"
          role="text"
        >
          {t.subtitle}
        </p>
        
        <h2 
          id="grand-master-title"
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          {t.name}
        </h2>
        
        <blockquote 
          className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-white/95 italic leading-relaxed"
          cite={lang === 'ru' ? 'Великий Мастер Великой Ложи Казахстана' : 
                lang === 'en' ? 'Grand Master of the Grand Lodge of Kazakhstan' :
                'Қазақстанның Ұлы Ложасының Ұлы Шебері'}
        >
          <p>{t.description}</p>
        </blockquote>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Айдар Алпысбай",
            "alternateName": "Aidar Alpysbay",
            "jobTitle": lang === 'ru' ? "Великий Мастер Великой Ложи Казахстана" :
                        lang === 'en' ? "Grand Master of the Grand Lodge of Kazakhstan" :
                        "Қазақстанның Ұлы Ложасының Ұлы Шебері",
            "worksFor": {
              "@type": "Organization",
              "name": lang === 'ru' ? "Великая ложа Казахстана" :
                      lang === 'en' ? "Grand Lodge of Kazakhstan" :
                      "Қазақстанның Ұлы Ложасы"
            },
            "nationality": "KZ",
            "description": lang === 'ru' ? "Великий Мастер и руководитель единственной официальной масонской организации в Казахстане" :
                          lang === 'en' ? "Grand Master and leader of the only official masonic organization in Kazakhstan" :
                          "Қазақстандағы жалғыз ресми масондық ұйымның Ұлы Шебері және басшысы"
          })
        }}
      />
    </section>
  );
}