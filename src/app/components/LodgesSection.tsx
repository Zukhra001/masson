"use client";

import Image from "next/image";

const lodges = [
  {
    title: "Достопочтенная ложа №1 «Алибек Букейханов»",
    img: "/lodges/lodge1.png",
    founded: "2016",
    location: "Казахстан, г. Астана",
  },
  {
    title: "Достопочтенная ложа №2 «Свет Востока»",
    img: "/lodges/lodge2.png",
    founded: "2016",
    location: "Казахстан, г. Алматы",
  },
  {
    title: "Достопочтенная ложа №3 «United Nomadic Brothers»",
    img: "/lodges/lodge3.png",
    founded: "2016",
    location: "Казахстан, г. Алматы",
  },
  {
    title: "Достопочтенная ложа №4 «Ақиқат»",
    img: "/lodges/lodge4.png",
    founded: "2017",
    location: "Казахстан, г. Астана",
  },
  {
    title: "Достопочтенная ложа №5 «А.С. Пушкин»",
    img: "/lodges/lodge5.png",
    founded: "2018",
    location: "Казахстан, г. Алматы",
  },
];

export default function LodgesSection() {
  return (
    <>
      <section className="relative w-full bg-[#0B0F1A] text-white pt-32 pb-40 px-4 md:px-12 overflow-hidden rounded-t-[80px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sobr2.jpg"
            alt="Freemasons"
            fill
            className="object-cover object-top opacity-100 grayscale brightness-150 contrast-100 rounded-t-[80px]"
          />
          <div
            className="absolute inset-0 rounded-t-[80px] bg-[linear-gradient(to_right,#0B1313,#091622)] pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 7%, transparent 65%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 7%, transparent 65%)",
            }}
          />
        </div>
        <div className="relative z-30 text-center max-w-6xl mx-auto">
          <h2 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[100px] xl:text-[120px] 2xl:text-[173px] font-extrabold tracking-tight text-[#F4B860] leading-tight">
            Основные ложи
            <br />в Казахстане
          </h2>
        </div>
      </section>

      <section className="relative w-full text-white px-4 md:px-12 pb-24 pt-40 rounded-b-[80px]">

        <div
          className="absolute inset-0 rounded-b-[80px] z-10"
          style={{
            backgroundImage: `url('/nighty.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(30px) brightness(200%) contrast(175%)",
            opacity: 0.8,
          }}
        />

        <div
          className="absolute inset-0 rounded-b-[80px] z-20"
          style={{
            backgroundImage: `url('/backlines.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(35px)",
            opacity: 0.7,
            transform: "scaleX(-1)",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-50 max-w-[1528px] mx-auto">
          <div className="rounded-[24px] px-6 py-6 shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gradient-to-b from-[#0A141A] via-[#2A251C] to-[#1A1611]">
            <Image
              src="/logo.png"
              alt="Великая ложа Казахстана"
              width={200}
              height={130}
              className="rounded-full"
            />
            <div className="text-center md:text-left">
              <h3 className="text-[32px] md:text-[48px] font-semibold text-white">
                Великая ложа Казахстана
              </h3>
              <p className="text-[18px] md:text-[23px] text-gray-400">
                Основана в 2016
              </p>
            </div>
          </div>
          <div className="w-[2px] h-8 bg-[#2C2F38] mx-auto mt-6 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
            {lodges.map((lodge, idx) => (
              <div
                key={idx}
                className="rounded-[24px] px-4 py-6 shadow-lg flex flex-col items-center text-sm"
                style={{
                  background: `linear-gradient(180deg, #1A1611 0%, #0A141A 100%)`,
                  border: "0.2px solid #211C14",
                }}
              >
                <div className="w-full h-[180px] flex justify-center items-center mb-6">
                  <Image
                    src={lodge.img}
                    alt={lodge.title}
                    width={113}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-center space-y-2">
                  <h4 className="text-[12px] font-semibold text-white leading-tight">
                    {lodge.title}
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Дата основания: {lodge.founded}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Язык проведения работ:
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {lodge.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
