"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    structure: "Структура",
    mission: "Миссия ценности цели",
    structureVLK: "Структура ВЛК",
    council: "Совет Великих Офицеров",
    documents: "Учредительные документы",
    recognitions: "Международные признания",
    library: "Библиотека",
    constitution: "Конституция",
    media: "Информация в СМИ",
    dictionary: "Словарь терминов",
    books: "Популярные книги о масонстве",
    candidate: "Кандидату",
    faq: "Часто задаваемые вопросы",
    preparing: "Подготовка к интервью",
    form: "Анкета кандидата",
    logoAlt: "Логотип Великой Ложи Казахстана - официальный символ масонской организации",
    copyright: "© 2024 Великая Ложа Казахстана. Все права защищены.",
    address: "г. Алматы, Республика Казахстан",
    email: "info@grandlodge.kz"
  },
  en: {
    structure: "Structure",
    mission: "Mission Values Goals",
    structureVLK: "GLK Structure",
    council: "Council of Grand Officers",
    documents: "Founding Documents",
    recognitions: "International Recognitions",
    library: "Library",
    constitution: "Constitution",
    media: "Media Information",
    dictionary: "Dictionary of Terms",
    books: "Popular Books on Freemasonry",
    candidate: "For Candidates",
    faq: "Frequently Asked Questions",
    preparing: "Interview Preparation",
    form: "Candidate Application",
    logoAlt: "Grand Lodge of Kazakhstan logo - official symbol of masonic organization",
    copyright: "© 2024 Grand Lodge of Kazakhstan. All rights reserved.",
    address: "Almaty, Republic of Kazakhstan",
    email: "info@grandlodge.kz"
  },
  kz: {
    structure: "Құрылым",
    mission: "Миссия құндылықтар мақсаттар",
    structureVLK: "ҰЛД құрылымы",
    council: "Ұлы Офицерлер Кеңесі",
    documents: "Құрылтай құжаттары",
    recognitions: "Халықаралық мойындаулар",
    library: "Кітапхана",
    constitution: "Конституция",
    media: "БАҚ-тағы ақпарат",
    dictionary: "Терминдер сөздігі",
    books: "Масондық туралы танымал кітаптар",
    candidate: "Кандидатқа",
    faq: "Жиі қойылатын сұрақтар",
    preparing: "Сұхбатқа дайындық",
    form: "Кандидат анкетасы",
    logoAlt: "Қазақстанның Ұлы Ложасының логотипі - масондық ұйымның ресми символы",
    copyright: "© 2024 Қазақстанның Ұлы Ложасы. Барлық құқықтар қорғалған.",
    address: "Алматы қ., Қазақстан Республикасы",
    email: "info@grandlodge.kz"
  }
};

const FooterSection = () => {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  const footerLinks = {
    structure: [
      { href: "https://masons.kz/goals", text: t.mission, external: true },
      { href: "https://masons.kz/structure", text: t.structureVLK, external: true },
      { href: "https://masons.kz/orgstructura", text: t.council, external: true },
      { href: "#", text: t.documents, external: false },
      { href: "https://masons.kz/recognitions", text: t.recognitions, external: true }
    ],
    library: [
      { href: "https://masons.kz/constitution", text: t.constitution, external: true },
      { href: "#", text: t.media, external: false },
      { href: "https://masons.kz/dictionary", text: t.dictionary, external: true },
      { href: "https://masons.kz/books", text: t.books, external: true }
    ],
    candidate: [
      { href: "https://masons.kz/faq", text: t.faq, external: true },
      { href: "https://masons.kz/preparing", text: t.preparing, external: true },
      { href: "https://masons.kz/candidateform", text: t.form, external: true }
    ]
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-gray-400 py-6 px-3 sm:py-12 sm:px-6 md:py-20 md:px-8"
      style={{
        background: 'linear-gradient(to right, #0B1313, #091622)'
      }}
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="footer-heading" className="sr-only">
          {lang === 'ru' ? 'Информация о сайте' : 
           lang === 'en' ? 'Site information' : 
           'Сайт туралы ақпарат'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 lg:gap-16 place-items-center lg:place-items-start">
          <div className="flex justify-center lg:justify-start w-full">
            <Link 
              href="/" 
              className="block w-28 h-12 sm:w-44 sm:h-18 relative hover:opacity-80 transition-opacity duration-200"
              aria-label={lang === 'ru' ? 'Вернуться на главную страницу Великой Ложи Казахстана' :
                          lang === 'en' ? 'Return to Grand Lodge of Kazakhstan homepage' :
                          'Қазақстанның Ұлы Ложасының басты бетіне оралу'}
            >
              <Image
                src="/logo.png"
                alt={t.logoAlt}
                fill
                sizes="(max-width: 640px) 7rem, (max-width: 768px) 11rem, 11rem"
                className="object-contain"
                loading="lazy"
              />
            </Link>
          </div>
          <nav className="w-full text-center lg:text-left" aria-labelledby="structure-heading">
            <h3 
              id="structure-heading"
              className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4"
            >
              {t.structure}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed" role="list">
              {footerLinks.structure.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <nav className="w-full text-center lg:text-left" aria-labelledby="library-heading">
            <h3 
              id="library-heading"
              className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4"
            >
              {t.library}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed" role="list">
              {footerLinks.library.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <nav className="w-full text-center lg:text-left" aria-labelledby="candidate-heading">
            <h3 
              id="candidate-heading"
              className="text-white text-sm sm:text-lg font-bold mb-2 sm:mb-4"
            >
              {t.candidate}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed" role="list">
              {footerLinks.candidate.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://masson.vercel.app/#organization",
            "name": lang === 'ru' ? "Великая Ложа Казахстана" :
                    lang === 'en' ? "Grand Lodge of Kazakhstan" :
                    "Қазақстанның Ұлы Ложасы",
            "url": "https://masson.vercel.app",
            "logo": "https://masson.vercel.app/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": t.email,
              "contactType": "customer service",
              "availableLanguage": ["Russian", "English", "Kazakh"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KZ",
              "addressRegion": "Алматы",
              "addressLocality": "Алматы"
            },
            "foundingDate": "2016",
            "sameAs": ["https://masson.vercel.app"]
          })
        }}
      />
    </footer>
  );
};

export default FooterSection;