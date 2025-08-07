"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    title: "Наши ценности",
    values: [
      {
        title: "Свет и Знание",
        description: "Мы стремимся к просвещению и распространению знаний, веря, что свет разума освещает путь к истине."
      },
      {
        title: "Этика и Честь",
        description: "Наша деятельность основывается на высоких моральных стандартах. Мы придерживаемся принципов честности, справедливости и ответственности."
      },
      {
        title: "Братство и Единство",
        description: "Мы объединяемся в духе братства, поддерживая друг друга и создавая крепкие связи, основанные на доверии и уважении."
      }
    ]
  },
  en: {
    title: "Our Values",
    values: [
      {
        title: "Light and Knowledge",
        description: "We strive for enlightenment and the dissemination of knowledge, believing that the light of reason illuminates the path to truth."
      },
      {
        title: "Ethics and Honor",
        description: "Our activities are based on high moral standards. We adhere to the principles of honesty, justice and responsibility."
      },
      {
        title: "Brotherhood and Unity",
        description: "We unite in the spirit of brotherhood, supporting each other and creating strong bonds based on trust and respect."
      }
    ]
  },
  kz: {
    title: "Біздің құндылықтарымыз",
    values: [
      {
        title: "Жарық пен Білім",
        description: "Біз ағарту мен білімді тарату үшін күресеміз, ақыл-ойдың жарығы шындыққа апаратын жолды жарықтандырады деп сенеміз."
      },
      {
        title: "Этика мен Намыс",
        description: "Біздің қызметіміз жоғары моральдық стандарттарға негізделген. Біз адалдық, әділдік және жауапкершілік қағидаттарын ұстанамыз."
      },
      {
        title: "Бауырластық пен Бірлік",
        description: "Біз бауырластық рухында бірігіп, бір-бірімізді қолдап, сенім мен құрметке негізделген берік байланыстар құрамыз."
      }
    ]
  }
};

const ValuesSection = () => {
  const { lang } = useLanguage();
  const t = React.useMemo(() => translations[lang], [lang]);

  return (
    <section 
      className="relative bg-black py-20 px-6 z-30 overflow-hidden"
      aria-labelledby="values-title"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/fon.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{
            filter: 'blur(2px) brightness(0.5) contrast(1.3)',
            transform: 'scale(2.9)',
          }}
          sizes="100vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 id="values-title" className="text-white text-4xl md:text-5xl font-medium">
            {t.title}
          </h2>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {t.values.map((value, index) => (
            <article
              key={index}
              className="relative w-[344px] h-[259px] rounded overflow-hidden mx-auto flex flex-col justify-end"
              style={{
                background: 'linear-gradient(112.72deg, #0B1313 7.95%, #091622 94.16%)'
              }}
            >
              <div className="absolute inset-0 z-10">
                <Image
                  src={index === 0 ? "/light-icon.png" : index === 1 ? "/ethics-icon.png" : "/unity-icon.png"}
                  alt=""
                  width={index === 0 ? 750 : index === 1 ? 450 : 700}
                  height={index === 0 ? 760 : 259}
                  className="absolute object-cover object-center"
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
                  quality={75}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
              
              <div className="relative z-20 h-full flex items-end">
                <div className="pl-[20px] pr-6 pb-6 flex flex-col gap-[12px] h-[125px] w-[285px]">
                  <h3 className="text-white text-xl font-medium leading-none">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] font-light leading-[1.2] font-sans">
                    {value.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;