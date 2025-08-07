"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    title: "Наши ценности",
    backgroundAlt: "Лучи света - символ просвещения и знания в масонской традиции",
    values: [
      {
        title: "Свет и Знание",
        description: "Мы стремимся к просвещению и распространению знаний, веря, что свет разума освещает путь к истине.",
        iconAlt: "Символ света и знания - масонская эмблема просвещения",
        keywords: "просвещение, знание, истина, разум"
      },
      {
        title: "Этика и Честь",
        description: "Наша деятельность основывается на высоких моральных стандартах. Мы придерживаемся принципов честности, справедливости и ответственности.",
        iconAlt: "Символ этики и чести - масонские принципы морали",
        keywords: "этика, честь, мораль, справедливость"
      },
      {
        title: "Братство и Единство",
        description: "Мы объединяемся в духе братства, поддерживая друг друга и создавая крепкие связи, основанные на доверии и уважении.",
        iconAlt: "Символ братства и единства - масонская связь между братьями",
        keywords: "братство, единство, доверие, уважение"
      }
    ]
  },
  en: {
    title: "Our Values",
    backgroundAlt: "Rays of light - symbol of enlightenment and knowledge in masonic tradition",
    values: [
      {
        title: "Light and Knowledge",
        description: "We strive for enlightenment and the dissemination of knowledge, believing that the light of reason illuminates the path to truth.",
        iconAlt: "Symbol of light and knowledge - masonic emblem of enlightenment",
        keywords: "enlightenment, knowledge, truth, reason"
      },
      {
        title: "Ethics and Honor",
        description: "Our activities are based on high moral standards. We adhere to the principles of honesty, justice and responsibility.",
        iconAlt: "Symbol of ethics and honor - masonic principles of morality",
        keywords: "ethics, honor, morality, justice"
      },
      {
        title: "Brotherhood and Unity",
        description: "We unite in the spirit of brotherhood, supporting each other and creating strong bonds based on trust and respect.",
        iconAlt: "Symbol of brotherhood and unity - masonic bond between brothers",
        keywords: "brotherhood, unity, trust, respect"
      }
    ]
  },
  kz: {
    title: "Біздің құндылықтарымыз",
    backgroundAlt: "Жарық сәулелері - масондық дәстүрдегі ағарту мен білімнің символы",
    values: [
      {
        title: "Жарық пен Білім",
        description: "Біз ағарту мен білімді тарату үшін күресеміз, ақыл-ойдың жарығы шындыққа апаратын жолды жарықтандырады деп сенеміз.",
        iconAlt: "Жарық пен білім символы - масондық ағарту белгісі",
        keywords: "ағарту, білім, шындық, ақыл"
      },
      {
        title: "Этика мен Намыс",
        description: "Біздің қызметіміз жоғары моральдық стандарттарға негізделген. Біз адалдық, әділдік және жауапкершілік қағидаттарын ұстанамыз.",
        iconAlt: "Этика мен намыс символы - масондық моральдық қағидаттар",
        keywords: "этика, намыс, моральдық, әділдік"
      },
      {
        title: "Бауырластық пен Бірлік",
        description: "Біз бауырластық рухында бірігіп, бір-бірімізді қолдап, сенім мен құрметке негізделген берік байланыстар құрамыз.",
        iconAlt: "Бауырластық пен бірлік символы - масондар арасындағы байланыс",
        keywords: "бауырластық, бірлік, сенім, құрмет"
      }
    ]
  }
};

const ValuesSection = () => {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  const valueIcons = [
    "/light-icon.png",
    "/ethics-icon.png", 
    "/unity-icon.png"
  ];

  return (
    <section 
      id="values"
      className="relative bg-black py-20 px-6 z-30 overflow-hidden"
      aria-labelledby="values-title"
      role="region"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/fon.jpg"
          alt={t.backgroundAlt}
          fill
          className="object-cover object-center"
          style={{
            filter: 'blur(2px) brightness(0.5) contrast(1.3)',
            transform: 'scale(2.9)',
          }}
          sizes="100vw"
          quality={100}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 
            id="values-title"
            className="text-white text-4xl md:text-5xl font-medium"
          >
            {t.title}
          </h2>
        </header>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          role="list"
          aria-label={lang === 'ru' ? 'Основные ценности организации' : 
                      lang === 'en' ? 'Core organizational values' : 
                      'Ұйымның негізгі құндылықтары'}
        >
          {t.values.map((value, index) => (
            <article
              key={index}
              role="listitem"
              className="relative w-[344px] h-[259px] rounded overflow-hidden mx-auto flex flex-col justify-end group hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD700]/20"
              style={{
                background: 'linear-gradient(112.72deg, #0B1313 7.95%, #091622 94.16%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <Image
                src={valueIcons[index]}
                alt={value.iconAlt}
                width={index === 0 ? 750 : index === 1 ? 450 : 700}
                height={index === 0 ? 760 : index === 1 ? 259 : 500}
                className="absolute object-cover z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  top: index === 0 ? '-325px' : index === 1 ? '21px' : '25px',
                  left: index === 0 ? '75px' : index === 1 ? '0px' : '45px',
                  transform: index === 0 ? 'scale(1.3)' : index === 1 ? 'scale(1)' : 'scale(1.4)',
                  filter: 'brightness(0.7)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                  width: 'auto',
                  height: 'auto'
                }}
                quality={100}
                loading="lazy"
              />

              <div className="relative z-20 h-full flex items-end">
                <div className="pl-[20px] pr-6 pb-6 flex flex-col gap-[12px] h-[125px] w-full">
                  <h3 
                    className="text-white text-xl font-medium leading-none group-hover:text-[#FFD700] transition-colors duration-300"
                    id={`value-${index + 1}-title`}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-gray-400 text-[15px] font-light leading-[1.2] font-sans group-hover:text-white/90 transition-colors duration-300"
                    aria-labelledby={`value-${index + 1}-title`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
              <span className="sr-only">{value.keywords}</span>
            </article>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": t.title,
            "description": t.title,
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://masson.vercel.app/#organization",
              "name": lang === 'ru' ? "Великая ложа Казахстана" : 
                      lang === 'en' ? "Grand Lodge of Kazakhstan" :
                      "Қазақстанның Ұлы Ложасы",
              "values": t.values.map(value => value.title),
              "mission": t.values.map(value => value.description).join(' '),
              "knowsAbout": t.values.map(value => value.keywords).join(', ')
            }
          })
        }}
      />
      <div itemScope itemType="https://schema.org/Organization" className="sr-only">
        <h3 itemProp="name">
          {lang === 'ru' ? "Великая ложа Казахстана" : 
           lang === 'en' ? "Grand Lodge of Kazakhstan" :
           "Қазақстанның Ұлы Ложасы"}
        </h3>
        <div itemProp="description">{t.title}</div>
        {t.values.map((value, index) => (
          <div key={index} itemProp="values" itemScope itemType="https://schema.org/DefinedTerm">
            <span itemProp="name">{value.title}</span>
            <span itemProp="description">{value.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;