import { ButtonBlack, ButtonOr } from "@/components/button/Button";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

function Section() {
  return (
    <div className="p-16 lg:p-24 space-y-14">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Section;

export const Section1 = () => {
  return (
    <div className="">
      <div className="flex flex-col py-8 lg:flex-row lg:justify-around gap-x-8">
        <div className="bg-white rounded-t-full w-96 "> </div>
        <div className="flex flex-col items-center lg:items-start gap-y-16 text-[#111047]">
          <h1 className="text-3xl lg:text-6xl font-bold">how it works ?</h1>
          <p className="text-sm md:text-[18px] lg:max-w-lg leading-relaxed">
            Enim adipisicing ipsum reprehenderit anim deserunt commodo anim
            minim dolore ojjpojp ojpojkp et ea ea. Esse aliquip eiusmod do proident officia
            reprehenderit eiusmod qui enim aliqua voluptate ipsum. Nostrud
            labore duis Lorem dolor in ullamco amet. Eu deserunt exercitation
            minim laboris duis velit consequat ea est anim occaecat minim.
            Proident nulla anim qui ea. Et est voluptate amet id magna.aliquip
            eiusmod do proident officia reprehenderit eiusmod qui enim aliqua
            voluptate ipsum. Nostrud labore duis Lorem dolor in ullamco amet. Eu
            deserunt exercitation minim laboris duis velit consequat ea est anim
            occaecat minim. Proident nulla anim qui ea. Et est voluptate amet id
            magna.
          </p>
          <ButtonOr text="Commencez" />
        </div>
      </div>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div>
      <div className="flex flex-col  py-12 md:py-16 lg:py-24 lg:flex-row lg:justify-around gap-y-16 lg:gap-x-8">
        <div className="flex flex-col items-center lg:items-start gap-y-8 md:gap-y-12 lg:gap-y-16 text-[#111047]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            How it works?
          </h1>
          <p className="text-sm md:text-base lg:text-lg lg:max-w-lg leading-relaxed">
            Enim adipisicing ipsum reprehenderit anim deserunt commodo anim
            minim dolore et ea ea. Esse aliquip eiusmod do proident officia
            reprehenderit eiusmod qui enim aliqua voluptate ipsum. Nostrud
            labore duis Lorem dolor in ullamco amet. Eu deserunt exercitation
            minim laboris duis velit consequat ea est anim occaecat minim.
            Proident nulla anim qui ea. Et est voluptate amet id magna.
          </p>
          <ButtonOr text="Commencez" />
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <div className="bg-white lg:block absolute -top-20 sm:-top-40 right-0 w-24 h-24 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full hidden z-10"></div>
          <div className="bg-white w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="bg-[#111047] blur-2xl rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shadow-2xl shadow-[#111047]"></div>
          </div>
          <div className="bg-white hidden lg:block absolute -left-20 sm:-left-40 top-0 w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full"></div>
          <div className="bg-white hidden lg:block absolute bottom-0 -left-20 sm:-left-40 w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const imageSection = [
  { link: "/imgs/pexels-wdnet-226746.jpg", id: "1" },
  { link: "/imgs/pexels-didsss-1405724.jpg", id: "2" },
  { link: "/imgs/pexels-eye4dtail-792032.jpg", id: "3" },
];

export const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1.1,
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
    <div className="py-12 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row lg:justify-around gap-y-16 lg:gap-x-8">
        <div className="flex flex-col items-center  justify-center lg:items-start gap-y-8 md:gap-y-12 lg:gap-y-16 text-[#111047]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            How it works?
          </h1>
          <p className="text-sm md:text-base lg:text-lg lg:max-w-lg leading-relaxed">
            Enim adipisicing ipsum reprehenderit anim deserunt commodo anim
            minim dolore et ea ea. Esse aliquip eiusmod do proident officia
            reprehenderit eiusmod qui enim aliqua voluptate ipsum. Nostrud
            labore duis Lorem dolor in ullamco amet. Eu deserunt exercitation
            minim laboris duis velit consequat ea est anim occaecat minim.
            Proident nulla anim qui ea. Et est voluptate amet id magna.
          </p>
          <ButtonOr text="Commencez" />
        </div>
        <div className="w-full lg:w-1/3">
          <Slider {...settings}>
            {imageSection.map((image, index) => (
              <div key={image.id} className="p-2">
                <Image
                  src={image.link}
                  alt={`Image ${image.id}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};


const images = [
  "/imgs/pexels-eye4dtail-792032.jpg",
  "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg",
  "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg",
  "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg",
  "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg",
];

export const Section4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const images = [
    { src: "/imgs/pexels-eye4dtail-792032.jpg", alt: "Image 1" },
    { src: "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg", alt: "Image 2" },
    { src: "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg", alt: "Image 3" },
    { src: "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg", alt: "Image 4" },
    { src: "/imgs/luca-bravo-hFzIoD0F_i8-unsplash.jpg", alt: "Image 5" },
  ];

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-12 justify-center items-center ">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl max-w-2xl text-[#111047] text-center">
          The benefits that will make you comfort
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#111047] max-w-3xl text-center">
          Occaecat nostrud cupidatat sit esse sunt anim officia commodo
          voluptate magna aliquip officia ullamco. Laboris officia reprehenderit
          occaecat Lorem fugiat nulla sint magna culpa Lorem. Culpa voluptate
          anim fugiat tempor aute elit nisi consectetur tempor. Exercitation
          duis laboris sint quis amet minim ut esse labore. Ea qui reprehenderit
          labore incididunt. Ipsum anim quis laborum mollit fugiat tempor.
        </p>
      </div>
      <div>
        <div className="bg-[#FFF7EB] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-rows-5 lg:grid-cols-7 gap-4">
            <div className="bg-red-400 row-span-5 col-span-2 overflow-hidden">
              <a onClick={() => openLightbox(0)} className="cursor-pointer">
                <Image
                  src={images[0].src}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  layout="responsive"
                  alt={images[0].alt}
                />
              </a>
            </div>
            <div className="row-span-1 col-span-5">
              <h3 className="text-orange-500 text-sm md:text-[16px] lg:text-[18px] font-semibold">
                Nos compétence
              </h3>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111047]">
                Immersive beautiful co-working space gallery
              </h1>
            </div>
            {images.slice(1).map((image, index) => (
              <div
                key={index + 1}
                className={`bg-red-400 ${index === 0 || index === 2 ? 'row-span-2 col-span-3' : 'row-span-2 col-span-2'} overflow-hidden`}
              >
                <a onClick={() => openLightbox(index + 1)} className="cursor-pointer">
                  <Image
                    src={image.src}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    layout="responsive"
                    alt={image.alt}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideshowLightbox
        images={images.map(img => ({ src: img.src, alt: img.alt }))}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => setIsOpen(false)}
        startIndex={lightboxImageIndex}
      />
    </div>
  );
};

export const Section5 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-around gap-y-16 lg:gap-x-8">
        <div className="flex flex-col items-center  justify-center lg:items-start gap-y-8 md:gap-y-12 lg:gap-y-16 text-[#111047]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            How it works?
          </h1>
          <p className="text-sm md:text-base lg:text-lg lg:max-w-lg leading-relaxed">
            Enim adipisicing ipsum reprehenderit anim deserunt commodo anim
            minim dolore et ea ea. Esse aliquip eiusmod do proident officia
            reprehenderit eiusmod qui enim aliqua voluptate ipsum. Nostrud
            labore duis Lorem dolor in ullamco amet. Eu deserunt exercitation
            minim laboris duis velit consequat ea est anim occaecat minim.
            Proident nulla anim qui ea. voluptate amet id magna.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <ButtonOr text="Commencez" />
            <ButtonBlack text="en Savoir plus" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[calc(90%+50px)] h-[calc(100%+50px)] border border-black transform -translate-x-32 -translate-y-30 z-0 animate-move1"></div>
          <div className="absolute w-[calc(70%+100px)] h-[calc(90%+100px)] border border-black transform translate-x-32 translate-y-[300px] z-0 animate-move2"></div>
          <div className="absolute w-[calc(110%+50px)] h-[calc(100%+50px)] border border-black transform -translate-x-10 -translate-y-10 z-0 animate-move3"></div>
          <div className="bg-white w-80 h-80 lg:h-full z-10"></div>
        </div>
      </div>
    </div>
  );
};



