"use client";
import Image from 'next/image';
import React from 'react';
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    title: "Уважаемые читатели!",
    description: "На территории Республики Казахстан вы можете посетить сайт только одной постоянной организации — Казахской Высшей ложи (КЛ), признанной и занимающейся работой со стороны постоянных высших лож мира. Хранитель древних традиций ордена Свободных каменщиков (масонов) и содействующий широкому распространению масонского света в нашей стране и других государствах.",
    backgroundAlt: "Масонские символы и архитектура - фоновое изображение традиций Великой Ложи Казахстана"
  },
  en: {
    title: "Dear Readers!",
    description: "On the territory of the Republic of Kazakhstan, you can visit the website of only one permanent organization — the Kazakh Higher Lodge (KL), recognized and working with permanent grand lodges around the world. Guardian of ancient traditions of the Order of Free and Accepted Masons (Freemasons) and promoting the widespread dissemination of Masonic light in our country and other states.",
    backgroundAlt: "Masonic symbols and architecture - background image of Grand Lodge of Kazakhstan traditions"
  },
  kz: {
    title: "Құрметті оқырмандар!",
    description: "Қазақстан Республикасының аумағында сіз тек бір тұрақты ұйымның веб-сайтын - әлемнің тұрақты жоғары ложаларымен мойындалған және жұмыс істейтін Қазақстанның Жоғары Ложасына (ҚЖЛ) барысыз. Еркін және Қабылданған Тас қалаушылар (Масондар) орденінің ежелгі дәстүрлерінің сақшысы және біздің елімізде және басқа мемлекеттерде масондық жарықтың кең таралуына ықпал етуші.",
    backgroundAlt: "Масондық символдар мен сәулет - Қазақстанның Ұлы Ложасының дәстүрлерінің фондық суреті"
  }
};

export default function MasonicSection() {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  return (
    <section 
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen text-white overflow-hidden"
      id="about"
      role="region"
      aria-labelledby="masonic-section-title"
    >
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt={t.backgroundAlt}
          fill
          className="object-cover object-center z-0 transition-all duration-500 ease-in-out"
          style={{ filter: 'brightness(1.1)' }}
          priority
          sizes="100vw"
        />
        <div 
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent" 
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 flex items-end justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen px-4 sm:px-6 lg:px-8 pb-20">
        <article className="text-center max-w-3xl mx-auto relative">
          <div 
            className="absolute inset-2 -mx-20 sm:-mx-70 bg-black/78 z-0 rounded-md" 
            aria-hidden="true"
          />
          
          <div className="relative z-10 p-6">
            <header>
              <h2 
                id="masonic-section-title"
                className="text-3xl md:text-5xl font-medium mb-4 text-white"
              >
                {t.title}
              </h2>
            </header>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xs md:text-base leading-relaxed text-gray-300">
                {t.description}
              </p>
            </div>
          </div>
        </article>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": t.title,
            "description": t.description,
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://masson.vercel.app/#organization",
              "name": lang === 'ru' ? "Великая Ложа Казахстана" :
                      lang === 'en' ? "Grand Lodge of Kazakhstan" :
                      "Қазақстанның Ұлы Ложасы",
              "description": t.description,
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KZ",
                "addressRegion": "Алматы"
              },
              "knowsAbout": [
                lang === 'ru' ? "масонство" : lang === 'en' ? "freemasonry" : "масондық",
                lang === 'ru' ? "древние традиции" : lang === 'en' ? "ancient traditions" : "ежелгі дәстүрлер",
                lang === 'ru' ? "братство" : lang === 'en' ? "brotherhood" : "бауырластық"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": lang === 'ru' ? "Главная" : lang === 'en' ? "Home" : "Басты бет",
                  "item": "https://masson.vercel.app/"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": lang === 'ru' ? "О нас" : lang === 'en' ? "About Us" : "Біз туралы",
                  "item": "https://masson.vercel.app/#about"
                }
              ]
            }
          })
        }}
      />
      <div className="sr-only">
        <h3>
          {lang === 'ru' ? 'Ключевые особенности Великой Ложи Казахстана' :
           lang === 'en' ? 'Key features of Grand Lodge of Kazakhstan' :
           'Қазақстанның Ұлы Ложасының негізгі ерекшеліктері'}
        </h3>
        <ul>
          <li>{lang === 'ru' ? 'Единственная официальная масонская организация в Казахстане' :
               lang === 'en' ? 'Only official masonic organization in Kazakhstan' :
               'Қазақстандағы жалғыз ресми масондық ұйым'}</li>
          <li>{lang === 'ru' ? 'Международное признание великими ложами мира' :
               lang === 'en' ? 'International recognition by grand lodges worldwide' :
               'Әлемдік ұлы ложалардың халықаралық мойындауы'}</li>
          <li>{lang === 'ru' ? 'Хранитель древних масонских традиций' :
               lang === 'en' ? 'Guardian of ancient masonic traditions' :
               'Ежелгі масондық дәстүрлердің сақшысы'}</li>
          <li>{lang === 'ru' ? 'Действует с 2016 года' :
               lang === 'en' ? 'Operating since 2016' :
               '2016 жылдан бастап жұмыс істейді'}</li>
        </ul>
      </div>
    </section>
  );
}