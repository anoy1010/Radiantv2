import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ButtonBlack, ButtonOr } from "../button/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const HeroHome = () => {
  return (
    <div
      style={{ backgroundImage: "url('/hero_back.png')" }}
      className="relative h-screen bg-cover bg-center flex items-center px-4 md:px-16 lg:px-32"
    >
      <div className="flex flex-col justify-center gap-y-4 lg:max-w-xl bg-white bg-opacity-80 p-6 md:p-8 rounded-md">
        <div className="bg-white w-[200px] lg:max-w-[300px] px-4 py-1 flex justify-center rounded-full">
          <h4 className="text-[#F7941D] text-sm md:text-base">
            Version 2.0 release
          </h4>
        </div>
        <h1 className="text-[#160637] text-3xl md:text-4xl lg:text-5xl leading-snug">
          Protégez vos biens et vos clients : Packs sécurité sur-mesure
        </h1>
        <h3 className="text-[16px] md:text-[18px] lg:max-w-lg leading-relaxed">
          Des solutions de sécurité pour vous permettre de travailler en toute
          sérénité. Dissuadez les cambriolages et les vols et surveillez votre
          commerce à distance 24h/24 et 7j/7.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 lg:max-w-md justify-between mt-4">
          <ButtonOr text="Commencez" />
          <ButtonBlack text="En savoir plus" />
        </div>
      </div>
    </div>
  );
};

export const HeroServices = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  justify-around relative">
        <div className="bg-[#111047] w-full h-80 -skew-y-12 absolute bottom-0 z-0"></div>
        <div className="flex flex-col gap-y-8 px-24 justify-center py-24 z-10">
          <h1 className="text-[#160637] max-w-sm font-bold text-3xl md:text-4xl lg:text-6xl leading-snug">
            Tell a better brand story
          </h1>
          <h3 className="text-[16px] md:text-[18px] lg:max-w-lg leading-relaxed">
            Des solutions de sécurité pour vous permettre de travailler en toute
            sérénité. Dissuadez les cambriolages et les vols et surveillez votre
            commerce à distance 24h/24 et 7j/7.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 lg:max-w-md justify-between mt-4">
            <ButtonOr text="Commencez" />
            <ButtonBlack text="En savoir plus" />
          </div>
          <div class="flex flex-col md:flex-row gap-x-0 md:gap-x-12 mt-24 lg:max-w-xl p-4 md:p-6 bg-black/40 lg:bg-white/20 backdrop-blur-md rounded-md">
            <p class="max-w-full md:max-w-md text-sm text-white mb-4 md:mb-0">
              resolving neglected sir tolerably but existence conveying for
              tolerably but for tolerably but.
            </p>
            <ButtonOr text="Commencez" />
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center z-0">
            <div class="bg-[#F7941D] blur-2xl rounded-full w-60 h-60 shadow-2xl shadow-[#F7941D] md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"></div>
          </div>

          <div class="z-10 flex px-6 md:px-24 gap-x-8 md:gap-x-14 relative">
            <div class="w-24 md:w-40 h-[300px] md:h-[450px] bg-white"></div>
            <div class="w-24 md:w-40 h-[300px] md:h-[450px] bg-white translate-y-8 md:translate-y-16"></div>
            <div class="w-24 md:w-40 h-[300px] md:h-[450px] bg-white translate-y-16 md:translate-y-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const slides = [
  {
    img1: "/imgs/pexels-didsss-1405724.jpg",
    img2: "/imgs/pexels-csmned-7228617.jpg",
    img3: "/imgs/pexels-csmned-7228617.jpg",
    titre: "Tell a better brand story",
    text: "Officia dolor id voluptate mollit.Reprehenderit elit irure sint ea reprehenderit amet.",
    id: "1",
  },
  {
    img1: "/imgs/pexels-didsss-1405724.jpg",
    img2: "/imgs/pexels-csmned-7228617.jpg",
    img3: "/imgs/pexels-csmned-7228617.jpg",
    titre: "Tell a better brand a new story",
    text: "Officia dolor id voluptate mollit.Reprehenderit elit irure sint ea reprehenderit amet.",
    id: "2",
  },
];

gsap.registerPlugin(ScrollTrigger);


export const HeroAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    if (textRefs.current[activeIndex]) {
      gsap.fromTo(
        textRefs.current[activeIndex],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          scale: 0.5,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: index * 0.2,
        }
      );

      // Parallax effect
      gsap.to(slide, {
        y: 50,
        scrollTrigger: {
          trigger: slide,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="relative flex-1 flex flex-row justify-center" ref={(el) => (slidesRef.current[index] = el)}>
              <div className="w-80  ">
                <Image
                  src={slide.img1}
                  alt={`Image ${slide.id} - 1`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className=" object-cover"
                />
              </div>
              <div className="w-80">
                <Image
                  src={slide.img2}
                  alt={`Image ${slide.id} - 2`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className=" object-cover"
                />
              </div>
              <div className="w-80">
                <Image
                  src={slide.img3}
                  alt={`Image ${slide.id} - 3`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className=" object-cover"
                />
              </div>
            </div>
            <div
              className="flex-1 p-8 flex justify-center items-center flex-col"
              ref={(el) => (textRefs.current[index] = el)}
              style={{ opacity: 1, transform: "translateY(20px)" }}
            >
              <h1 className="text-3xl font-bold text-[#111047]">{slide.titre}</h1>
              <p className="text-lg text-[#111047] max-w-lg text-center">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .bubble {
          border-radius: 50%;
          overflow: hidden;
          width: 150px;
          height: 150px;
          margin: 10px;
          position: relative;
        }
      `}</style>
    </div>
  );
};