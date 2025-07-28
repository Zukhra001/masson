"use client";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  ru: {
    subtitle: "Великий Мастер Великой Ложи Казахстана",
    name: "Айдар Алпысбай",
    description: "Добродетель — это основа нашей морали и этики. Пусть честность, справедливость и доброта будут твоими постоянными ориентирами. В каждом действии и решении стремись к высокому стандарту морали, отражая внутреннюю чистоту и уважение к окружающим."
  },
  en: {
    subtitle: "Grand Master of the Grand Lodge of Kazakhstan",
    name: "Aidar Alpysbay",
    description: "Virtue is the foundation of our morality and ethics. Let honesty, justice and kindness be your constant guides. In every action and decision, strive for a high standard of morality, reflecting inner purity and respect for others."
  },
  kz: {
    subtitle: "Қазақстанның Ұлы Ложасының Ұлы Шебері",
    name: "Айдар Алпысбай",
    description: "Ізгілік — біздің моральдық пен этикамыздың негізі. Адалдық, әділдік және мейірбандық сіздің тұрақты бағдарыңыз болсын. Әрбір іс-әрекет пен шешімде жоғары моральдық стандартқа ұмтылыңыз, ішкі тазалық пен қоршағандарға құрметті көрсетіңіз."
  }
};

export default function Info() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="w-full relative aspect-[16/12] overflow-hidden rounded-[80px]">
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
        <Image
          src="/master1.png"
          alt="Background"
          fill
          priority
          className="object-cover w-auto h-[1440px] rounded-[80px]"
          style={{ zIndex: 0 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent rounded-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center md:pb-20">
        <p className="text-sm text-white md:text-base mb-2">
          {t.subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl text-white font-bold">
          {t.name}
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-white md:text-base">
          {t.description}
        </p>
      </div>
    </section>
  );
}