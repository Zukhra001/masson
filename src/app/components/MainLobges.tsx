"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const texts = {
  ru: {
    mainTitle: "Основные ложи в Казахстане",
    grandLodgeTitle: "Великая ложа Казахстана",
    foundedLabel: "Основано в 2016",
    dateFoundedLabel: "Дата основания:",
    languageLabel: "Язык проведения работ:",
    heroImageAlt: "Собрание масонов Великой Ложи Казахстана - торжественная церемония братства",
    backgroundImageAlt: "Масонское собрание - традиционная встреча членов организации",
    lodgeLogoAlt: "Логотип Великой Ложи Казахстана - символ единственной официальной масонской организации в РК",
    lodges: [
      {
        title: "Достопочтенная ложа №1 «Алихан Букейханов»",
        founded: "2016",
        location: "Казахский, русский",
        description: "Первая масонская ложа в Казахстане, названная в честь выдающегося государственного деятеля",
        slug: "alihan-bukeikhanov"
      },
      {
        title: "Достопочтенная ложа №2 «Свет Востока»",
        founded: "2016",
        location: "Казахский, русский", 
        description: "Ложа, символизирующая просвещение и духовное развитие братьев",
        slug: "svet-vostoka"
      },
      {
        title: "Достопочтенная ложа №3 «United Nomadic Brothers»",
        founded: "2016",
        location: "Английский",
        description: "Международная ложа для англоязычных братьев кочевых народов",
        slug: "united-nomadic-brothers"
      },
      {
        title: "Достопочтенная ложа №4 «Байтерек»",
        founded: "2017",
        location: "Казахский, русский",
        description: "Ложа, названная в честь символа Казахстана - дерева жизни Байтерек",
        slug: "baiterek"
      },
      {
        title: "Достопочтенная ложа №5 «А.С. Пушкин»",
        founded: "2018",
        location: "Русский",
        description: "Ложа, посвященная великому русскому поэту Александру Сергеевичу Пушкину",
        slug: "pushkin"
      },
    ],
  },
  en: {
    mainTitle: "Main Lodges\nin Kazakhstan",
    grandLodgeTitle: "Grand Lodge of Kazakhstan",
    foundedLabel: "Founded in 2016",
    dateFoundedLabel: "Date Founded:",
    languageLabel: "Working Language:",
    heroImageAlt: "Freemasons meeting of Grand Lodge of Kazakhstan - ceremonial brotherhood gathering",
    backgroundImageAlt: "Masonic assembly - traditional meeting of organization members",
    lodgeLogoAlt: "Grand Lodge of Kazakhstan logo - symbol of the only official masonic organization in RK",
    lodges: [
      {
        title: "Worshipful Lodge No. 1 «Alikhan Bukeikhanov»",
        founded: "2016",
        location: "Kazakh, Russian",
        description: "First masonic lodge in Kazakhstan, named after the outstanding statesman",
        slug: "alihan-bukeikhanov"
      },
      {
        title: "Worshipful Lodge No. 2 «Light of the East»",
        founded: "2016",
        location: "Kazakh, Russian",
        description: "Lodge symbolizing enlightenment and spiritual development of brothers",
        slug: "light-of-east"
      },
      {
        title: "Worshipful Lodge No. 3 «United Nomadic Brothers»",
        founded: "2016",
        location: "English",
        description: "International lodge for English-speaking brothers of nomadic peoples",
        slug: "united-nomadic-brothers"
      },
      {
        title: "Worshipful Lodge No. 4 «Baiterek»",
        founded: "2017",
        location: "Kazakh, Russian",
        description: "Lodge named after Kazakhstan's symbol - the tree of life Baiterek",
        slug: "baiterek"
      },
      {
        title: "Worshipful Lodge No. 5 «A.S. Pushkin»",
        founded: "2018",
        location: "Russian",
        description: "Lodge dedicated to the great Russian poet Alexander Sergeevich Pushkin",
        slug: "pushkin"
      },
    ],
  },
  kz: {
    mainTitle: "Қазақстандағы негізгі ложалар",
    grandLodgeTitle: "Қазақстанның Ұлы Ложасы",
    foundedLabel: "2016 жылы құрылған",
    dateFoundedLabel: "Құрылған күні:",
    languageLabel: "Жұмыс тілі:",
    heroImageAlt: "Қазақстанның Ұлы Ложасының масондар жиналысы - салтанатты бауырластық рәсімі",
    backgroundImageAlt: "Масондық жиналыс - ұйым мүшелерінің дәстүрлі кездесуі",
    lodgeLogoAlt: "Қазақстанның Ұлы Ложасының логотипі - ҚР-дағы жалғыз ресми масондық ұйымның символы",
    lodges: [
      {
        title: "Құрметті ложа №1 «Әлихан Бөкейханов»",
        founded: "2016",
        location: "Қазақ, орыс",
        description: "Қазақстандағы алғашқы масондық ложа, көрнекті мемлекет қайраткерінің есімімен аталған",
        slug: "alihan-bukeikhanov"
      },
      {
        title: "Құрметті ложа №2 «Шығыс жарығы»",
        founded: "2016",
        location: "Қазақ, орыс",
        description: "Бауырлардың ағарту мен рухани дамуын бейнелейтін ложа",
        slug: "shygys-zharygy"
      },
      {
        title: "Құрметті ложа №3 «United Nomadic Brothers»",
        founded: "2016",
        location: "Ағылшын",
        description: "Көшпенді халықтардың ағылшын тілді бауырларына арналған халықаралық ложа",
        slug: "united-nomadic-brothers"
      },
      {
        title: "Құрметті ложа №4 «Бәйтерек»",
        founded: "2017",
        location: "Қазақ, орыс",
        description: "Қазақстанның символы - өмір ағашы Бәйтерек есімімен аталған ложа",
        slug: "baiterek"
      },
      {
        title: "Құрметті ложа №5 «А.С. Пушкин»",
        founded: "2018",
        location: "Орыс",
        description: "Ұлы орыс ақыны Александр Сергеевич Пушкинге арналған ложа",
        slug: "pushkin"
      },
    ],
  },
};

const lodges = [
  {
    img: "/cards/cards1.png",
  },
  {
    img: "/cards/cards2.png",
  },
  {
    img: "/cards/cards3.jpg",
  },
  {
    img: "/cards/cards4.jpg",
  },
  {
    img: "/cards/cards5.png",
  },
];

export default function MainLodges() {
  const { lang } = useLanguage();
  const currentTexts = texts[lang];

  return (
    <div className="relative" id="lodges">
      <section 
        className="relative w-full h-[480px] sm:h-[600px] md:h-[700px] lg:h-screen bg-blue-700 text-white overflow-hidden rounded-[20px] sm:rounded-[40px] lg:rounded-[80px]"
        role="banner"
        aria-labelledby="lodges-main-title"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/sobr2.jpg"
            alt={currentTexts.heroImageAlt}
            fill
            className="object-cover object-center filter grayscale brightness-125 contrast-75"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 blur-sm opacity-40"
            style={{
              background: `linear-gradient(to bottom, rgba(13, 21, 40, 0.7), rgba(0, 0, 0, 0.7))`,
            }}
            aria-hidden="true"
          />

          <div
            className="absolute top-0 left-0 w-full h-[30%] pointer-events-none opacity-50 blur-xl"
            style={{
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 1) 0%,
                  rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                  to right,
                  rgba(11, 19, 19, 1) 0%,
                  rgba(11, 19, 19, 1) 30%,
                  rgba(10, 20, 26, 1) 50%,
                  rgba(9, 22, 34, 1) 70%,
                  rgba(9, 22, 34, 1) 100%
                )
              `,
              backgroundBlendMode: 'multiply',
            }}
            aria-hidden="true"
          />
          <div 
            className="absolute h-[10%] inset-0 bg-gradient-to-b from-black/100 via-black/50 to-transparent rounded-[20px] sm:rounded-[40px] lg:rounded-[80px]" 
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex items-start justify-center h-full py-20 sm:py-32 lg:py-40">
          <div className="text-center px-4">
            <h1
              id="lodges-main-title"
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight leading-[0.9] whitespace-pre-line"
              style={{
                color: "#F4B860",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {currentTexts.mainTitle}
            </h1>
          </div>
        </div>
      </section>
      <div
        className="relative z-0 -mt-20 sm:-mt-32 md:-mt-40 pt-20 sm:pt-32 md:pt-40 min-h-screen p-4 sm:p-6 md:p-8"
        style={{
          background: `linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(0, 0, 0, 0.7))`,
        }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/sobr4.jpg"
            alt={currentTexts.backgroundImageAlt}
            fill
            className="object-cover filter blur-xl brightness-200 opacity-20"
            style={{
              transform: "scaleX(-1)",
              WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            sizes="100vw"
            loading="lazy"
          />
          <div
            className="absolute inset-0 blur-sm opacity-10"
            style={{
              background: `linear-gradient(to bottom, rgba(13, 21, 40, 0.7), rgba(0, 0, 0, 0.7))`,
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10">
          <header
            className="rounded-[16px] sm:rounded-[20px] md:rounded-[24px] px-4 sm:px-6 md:px-8 py-4 sm:py-6 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl"
            style={{
              background: "radial-gradient(circle at center bottom, #0A141A 0%, #2A251C 50%, #1A1611 100%)",
            }}
          >
            <Image
              src="/logo.png"
              alt={currentTexts.lodgeLogoAlt}
              width={288}
              height={176}
              className="rounded-full w-16 h-10 sm:w-24 md:w-32 sm:h-20 lg:w-40 lg:h-24 xl:w-72 xl:h-44"
              priority
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                {currentTexts.grandLodgeTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400">
                {currentTexts.foundedLabel}
              </p>
            </div>
          </header>
          <svg
            className="absolute top-32 sm:top-40 md:top-48 lg:top-52 xl:top-56 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block"
            width="min(100vw, 1528px)"
            height="160"
            style={{ pointerEvents: "none" }}
            viewBox="0 0 1528 160"
            aria-hidden="true"
          >
            <defs>
              <style>
                {`.connection-line { fill: none; stroke: #2C2F38; stroke-width: 2; }`}
              </style>
            </defs>
            <path d="M 764 40 L 764 70" className="connection-line" />
            <path d="M 764 70 Q 764 80 754 80" className="connection-line" />
            <path d="M 764 70 Q 764 80 774 80" className="connection-line" />
            <path d="M 754 80 L 158 80 Q 148 80 148 90" className="connection-line" />
            <path d="M 754 80 L 474 80 Q 464 80 464 90" className="connection-line" />
            <path d="M 774 80 L 1054 80 Q 1064 80 1064 90" className="connection-line" />
            <path d="M 774 80 L 1370 80 Q 1380 80 1380 90" className="connection-line" />
            <path d="M 764 80 L 764 120" className="connection-line" />
            <path d="M 148 90 L 148 120" className="connection-line" />
            <path d="M 464 90 L 464 120" className="connection-line" />
            <path d="M 1064 90 L 1064 120" className="connection-line" />
            <path d="M 1380 90 L 1380 120" className="connection-line" />
          </svg>
          <section 
            className="flex justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32"
            aria-labelledby="lodges-grid-title"
          >
            <h2 id="lodges-grid-title" className="sr-only">
              {lang === 'ru' ? 'Список всех лож Великой Ложи Казахстана' :
               lang === 'en' ? 'List of all lodges of Grand Lodge of Kazakhstan' :
               'Қазақстанның Ұлы Ложасының барлық ложаларының тізімі'}
            </h2>
            <div className="hidden xl:block w-full max-w-7xl">
              <div className="flex justify-between gap-3" role="list">
                {lodges.slice(0, 5).map((lodge, idx) => (
                  <article
                    key={idx}
                    role="listitem"
                    className="rounded-[24px] px-4 py-6 shadow-lg flex flex-col items-center text-sm flex-1 max-w-xs h-[414px] hover:transform hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                      border: "0.2px solid #211C14",
                    }}
                  >
                    <div className="w-full h-[180px] flex justify-center items-center mb-10">
                      <Image
                        src={lodge.img}
                        alt={`Эмблема ${currentTexts.lodges[idx].title} - ${currentTexts.lodges[idx].description}`}
                        width={113}
                        height={180}
                        className="object-contain max-w-[113px] max-h-[180px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between text-center">
                      <h3 className="text-[15px] font-semibold text-white leading-tight px-2">
                        {currentTexts.lodges[idx].title}
                      </h3>
                      <div className="mt-auto space-y-1">
                        <p className="text-[12px] text-gray-400 mb-2">
                          <span className="sr-only">{currentTexts.dateFoundedLabel}</span>
                          {currentTexts.dateFoundedLabel} {currentTexts.lodges[idx].founded}
                        </p>
                        <p className="text-[12px] text-gray-400">
                          {currentTexts.languageLabel}
                        </p>
                        <p className="text-[12px] text-gray-400">
                          {currentTexts.lodges[idx].location}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto" role="list">
              {lodges.slice(0, 5).map((lodge, idx) => (
                <article
                  key={idx}
                  role="listitem"
                  className="rounded-[20px] px-4 py-5 shadow-lg flex flex-col items-center text-sm h-[350px] hover:transform hover:scale-105 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                    border: "0.2px solid #211C14",
                  }}
                >
                  <div className="w-full h-[140px] flex justify-center items-center mb-6">
                    <Image
                      src={lodge.img}
                      alt={`Эмблема ${currentTexts.lodges[idx].title} - ${currentTexts.lodges[idx].description}`}
                      width={90}
                      height={140}
                      className="object-contain max-w-[90px] max-h-[140px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between text-center">
                    <h3 className="text-[16px] font-semibold text-white leading-tight px-2 mb-4">
                      {currentTexts.lodges[idx].title}
                    </h3>
                    <div className="mt-auto space-y-1">
                      <p className="text-[14px] text-gray-400 mb-2">
                        {currentTexts.dateFoundedLabel} {currentTexts.lodges[idx].founded}
                      </p>
                      <p className="text-[14px] text-gray-400">
                        {currentTexts.languageLabel}
                      </p>
                      <p className="text-[14px] text-gray-400">
                        {currentTexts.lodges[idx].location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid md:hidden grid-cols-1 gap-4 max-w-sm mx-auto" role="list">
              {lodges.slice(0, 5).map((lodge, idx) => (
                <article
                  key={idx}
                  role="listitem"
                  className="rounded-[16px] px-4 py-4 shadow-lg flex items-center gap-4 text-sm min-h-[120px] hover:bg-gray-800/20 transition-colors duration-300"
                  style={{
                    background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                    border: "0.2px solid #211C14",
                  }}
                >
                  <div className="flex-shrink-0 w-[60px] h-[80px] flex justify-center items-center">
                    <Image
                      src={lodge.img}
                      alt={`Эмблема ${currentTexts.lodges[idx].title}`}
                      width={50}
                      height={80}
                      className="object-contain max-w-[50px] max-h-[80px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xs font-semibold text-white leading-tight mb-3">
                      {currentTexts.lodges[idx].title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-[10px] text-gray-400">
                        {currentTexts.dateFoundedLabel} {currentTexts.lodges[idx].founded}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {currentTexts.languageLabel} {currentTexts.lodges[idx].location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": currentTexts.mainTitle,
            "description": lang === 'ru' ? "Полный список всех лож Великой Ложи Казахстана" :
                          lang === 'en' ? "Complete list of all lodges of Grand Lodge of Kazakhstan" :
                          "Қазақстанның Ұлы Ложасының барлық ложаларының толық тізімі",
            "itemListElement": currentTexts.lodges.map((lodge, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Organization",
                "name": lodge.title,
                "foundingDate": lodge.founded,
                "description": lodge.description,
                "parentOrganization": {
                  "@type": "Organization",
                  "name": currentTexts.grandLodgeTitle
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "KZ",
                  "addressRegion": "Алматы"
                }
              }
            }))
          })
        }}
      />
    </div>
  );
}