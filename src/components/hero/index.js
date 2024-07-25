import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ButtonBlack, ButtonOr } from "../button/Button";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaRegArrowAltCircleDown } from "react-icons/fa";


const VideoSlider = [
  {link:"/video/video1.mp4"},
  {link:"/video/video2.mp4"},
  {link:"/video/video3.mp4"},
]

export const HeroVideoHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHeroSection(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ajustez ce seuil selon vos besoins
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setIsInHeroSection]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 8000,
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: dots => (
      <div
        style={{
          bottom: '80px',
          padding: '10px'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
          height: "12px",
          border: "2px solid orange",
          borderRadius: "50%",
          backgroundColor: i === activeIndex ? "orange" : "transparent"
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="w-[100%]" ref={heroRef}>
      <Slider {...settings} className="w-full">
        {VideoSlider.map((video, index) => (
          <div key={index} className="w-full">
            <video 
              className="w-full h-screen object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src={video.link} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        ))}
      </Slider>
      <ScrollLink 
        to="HeroHome" 
        smooth={true} 
        duration={500} 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2  text-white px-4 py-2 rounded-full cursor-pointer   "
      >
      <FaRegArrowAltCircleDown className="h-12 w-12 transition hover:scale-125"/>
      </ScrollLink>
    </div>
  )
};

export const HeroHome = () => {
  return (
    <div
     id="HeroHome"
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
          <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-12 mt-24 lg:max-w-xl p-4 md:p-6 bg-black/40 lg:bg-white/20 backdrop-blur-md rounded-md">
            <p className="max-w-full md:max-w-md text-sm text-white mb-4 md:mb-0">
              resolving neglected sir tolerably but existence conveying for
              tolerably but for tolerably but.
            </p>
            <ButtonOr text="Commencez" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="bg-[#F7941D] blur-2xl rounded-full w-60 h-60 shadow-2xl shadow-[#F7941D] md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"></div>
          </div>

          <div className="z-10 flex px-6 md:px-24 gap-x-8 md:gap-x-14 relative">
            <div className="w-24 md:w-40 h-[300px] md:h-[450px] bg-white"></div>
            <div className="w-24 md:w-40 h-[300px] md:h-[450px] bg-white translate-y-8 md:translate-y-16"></div>
            <div className="w-24 md:w-40 h-[300px] md:h-[450px] bg-white translate-y-16 md:translate-y-32"></div>
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

export const HeroAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    if (textRefs.current[activeIndex]) {
      textRefs.current[activeIndex].classList.add("fade-in");
    }
  }, [activeIndex]);

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      slide.classList.add("slide-in");
      slide.style.animationDelay = `${index * 0.2}s`;
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
          <div
            key={slide.id}
            className="flex flex-col lg:flex-row gap-8 justify-center items-center"
          >
            <div
              className="relative flex-1 flex flex-row justify-center"
              ref={(el) => (slidesRef.current[index] = el)}
            >
              <div className="w-80">
                <Image
                  src={slide.img1}
                  alt={`Image ${slide.id} - 1`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="w-80">
                <Image
                  src={slide.img2}
                  alt={`Image ${slide.id} - 2`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="w-80">
                <Image
                  src={slide.img3}
                  alt={`Image ${slide.id} - 3`}
                  layout="responsive"
                  width={500}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="flex-1 p-8 flex justify-center items-center flex-col"
              ref={(el) => (textRefs.current[index] = el)}
              style={{ opacity: 1, transform: "translateY(20px)" }}
            >
              <h1 className="text-3xl font-bold text-[#111047]">
                {slide.titre}
              </h1>
              <p className="text-lg text-[#111047] max-w-lg text-center">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slide-in {
          opacity: 0;
          transform: translateY(50px);
          animation: slideIn 1.5s forwards;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1s forwards;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export const HeroContact = () => {
  return (
    <div>
      <div className="relative w-full">
        <div className="py-8 flex flex-col gap-y-8">
          <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
            <div className="flex justify-around items-center flex-wrap gap-12 lg:gap-0">
              <div className="lg:w-5/12 space-y-8">
                <span className="flex space-x-2">
                  <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                  <span className="font-medium text-gray-600 dark:text-gray-400">
                    New this summer
                  </span>
                </span>
                <h1 className="text-4xl font-bold md:text-6xl dark:text-white">
                  The New <br /> Way To Discover{" "}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Booking Company-Wide Savings, Invoicing and reporting docs.
                </p>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-tl-2xl rounded-br-2xl transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max"
                  >
                    <span className="block text-white font-semibold">
                      Shop now
                    </span>
                  </button>
                  <button
                    type="button"
                    title="Start buying"
                    className="group w-full py-3 px-6 text-center rounded-tl-2xl rounded-br-2xl transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                      Our showreel
                    </span>
                  </button>
                </div>
              </div>

              <div className="hidden relative md:block  lg:flex lg:items-center lg:justify-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-[24rem] h-[24rem] rounded-full bg-orange-400"
                ></div>
                <Image
                  src="/imgs/smartLock.png"
                  width={500}
                  height={500}
                  className="relative ml-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="px-24 w-full">
            <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
              <a href="" className="hidden space-x-4 md:flex md:items-center">
                <Image
                  className="w-14 h-14 rounded-full object-cover"
                  src="/imgs/pexels-didsss-1405724.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="text-gray-600 da/rk:text-gray-400">
                  <span className="text-sm">Question ?</span>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    Talk to our assistant
                  </p>
                </div>
              </a>
              <div>
                <a
                  href="#"
                  className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  Facebook /
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  YouTube /{" "}
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-700 dark:text-gray-300 dark:hover:text-red-400"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
