"use client";

import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { GiCctvCamera, GiWalk, GiDoorHandle } from "react-icons/gi";
import { RiAlarmWarningFill } from "react-icons/ri";
import { LuMonitorPlay } from "react-icons/lu";
import { FaDoorOpen } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArchitecture } from "react-icons/md";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlider from "./TestimonialSlider";
import { FaCheckCircle } from "react-icons/fa";

export const Section1 = ({ title, stitle }) => {
  const serviceData = [
    {
      icon: GiCctvCamera,
      title: "Camera Surveillance",
      description: "Pour garder un oeil sur votre magasin étant chez vous.",
    },
    {
      icon: GiDoorHandle,
      title: "Serrure Electronique",
      description:
        "Connect the tools you already use to get more from them every time you work.",
    },
    {
      icon: GiWalk,
      title: "Détecteur mouvement",
      description:
        "Connect the tools you already use to get more from them every time you work.",
    },
    {
      icon: FaDoorOpen,
      title: "Detecteur d'ouverture",
      description:
        "Connect the tools you already use to get more from them every time you work.",
    },
    {
      icon: RiAlarmWarningFill,
      title: "Système Alarme",
      description:
        "Alerte en cas d'intrusion et d'incendie tout usager à titre préventif.",
    },
    {
      icon: LuMonitorPlay,
      title: "Dispositif de visionnage",
      description:
        "Alerte en cas d'intrusion et d'incendie tout usager à titre préventif.",
    },
  ];
  return (
    <div className="flex flex-col py-12 px-8 justify-center items-center lg:py-32 gap-y-[16px] lg:gap-y-[28px] lg:px-24">
      <div className=" lg:max-w-xl text-center flex flex-col justify-center items-center">
        <h1 className="text-[#F7941D] w-auto lg:max-w-2xl text-[24px] lg:text-[40px]">
          {title}
        </h1>
        <p className="text-[#939598] text-[12px] lg:text-[16px] py-4">
          {stitle}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-8 lg:max-w-5xl w-full">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center lg:px-14 lg:text-left lg:items-start lg:justify-start gap-y-4 shadow-xl rounded-lg p-8 shadow-md"
          >
            <div className="rounded-full p-4 w-fit bg-[#E6E7E8]">
              <service.icon className="w-8 h-8 text-[#F7941D]" />
            </div>
            <h3 className="font-bold text-[14px] lg:text-xl">
              {service.title}
            </h3>
            <p className="text-[10px] lg:text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div className="flex flex-col py-12 lg:py-32 gap-y-12 lg:gap-y-32 px-8 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:gap-y-[20px]">
        <div className=" flex flex-col lg:max-w-xl gap-y-12">
          <div className="bg-black text-white flex w-48 lg:max-w-64 rounded-full  items-center justify-center gap-x-4">
            <MdArchitecture className="text-3xl" />
            <p className="text-[12px]">Nos packs specialises </p>
          </div>
          <h2 className="text-[#F7941D] text-[24px] lg:text-[40px] ">
            Pack surveillance : Gardez un œil sur votre commerce à distance
            24h/24 et 7j/7.
          </h2>
          <p className="text-[12px] lg:text-[16px]">
            Le pack surveillance est la combinaison parfaite d&apos;une caméra
            et d&apos;un visionneur pour vous offrir une solution de sécurité
            complète et efficace. Garde un œil vigilant sur votre domicile ou
            votre commerce 24h/24 et 7j/7 et enregistre des images et des vidéos
            en haute définition pour une identification précise des individus et
            des événements. Enfin un visionneur qui vous permet de visualiser
            les images et les vidéos capturées par la caméra en temps réel.
          </p>
        </div>
        <div>
          <Image
            src="/img_sect2.png"
            width={500}
            height={500}
            className=""
            alt="image"
          />
        </div>
      </div>
      <div>
        <div className="flex  flex-col-reverse lg:flex-row lg;flex-row-reverse justify-around items-center">
          <div className="flex flex-row  justify-between gap-x-14 items-center w-[400px]">
            <Image
              src="/img3_sect2.png"
              width={400}
              height={500}
              className="object-cover"
              alt="image"
            />
            <Image
              src="/img2_sect2.png"
              width={400}
              height={500}
              className="object-cover"
              alt="image"
            />
          </div>
          <div className=" flex flex-col items-end text-end lg:max-w-xl gap-y-12">
            <div className="bg-black text-white flex w-48 lg:max-w-64 rounded-full items-center justify-center gap-x-4">
              <MdArchitecture className="text-3xl" />
              <p className="text-[12px]">Nos packs specialises </p>
            </div>
            <h2 className="text-[#F7941D] text-[24px] lg:text-[40px] ">
              Pack Contrôle : Contrôler les accès à votre commerce en toute
              sécurité.
            </h2>
            <p className="text-[12px] lg:text-[16px]">
              Les détecteurs de mouvement PIR et les Wireless Magnet Shock
              Detector sont des éléments essentiels d&apos;un système de
              sécurité efficace pour votre commerce. Ils détectent les
              vibrations et les chocs sur les portes et les fenêtres de votre
              commerce et aussi déclenchent une alarme en cas d&apos;ouverture
              ou de bris de verre, vous avertissant d&apos;une tentative
              d&apos;effraction.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-col lg:flex-row items-center gap-y-[20px]">
        <div className=" flex flex-col lg:max-w-xl gap-y-12">
          <div className="bg-black text-white flex w-48 lg:max-w-64 rounded-full items-center justify-center gap-x-4">
            <MdArchitecture className="text-3xl" />
            <p className="text-[12px]">Nos packs specialises </p>
          </div>
          <h2 className="text-[#F7941D] text-[24px] lg:text-[40px]  ">
            Pack Alarme : Dissuadez les cambriolages et les vols avec notre
            système d&apos;alarme performant.
          </h2>
          <p className="text-[12px] lg:text-[16px]">
            Le Pack Alarme est la solution idéale pour dissuader les
            cambriolages et les vols dans votre maison. Notre système
            d&apos;alarme performant est conçu pour vous offrir une protection
            optimale et une tranquillité d&apos;esprit inestimable, Le système
            d&apos;alarme est facile à installer et à utiliser. Vous pouvez
            l&apos;activer et le désactiver à distance depuis votre smartphone
            ou votre tablette. et est disponible en plusieurs versions pour
            s&apos;adapter à tous types de commerce et à tous les budgets.
          </p>
        </div>
        <div>
          <Image
            src="/img4_sect2.png"
            width={500}
            height={500}
            className=""
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export const Section3 = ({ title, stitle }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 5000);
  };

  return (
    <div className="">
      <div className="flex flex-col h-screen justify-around items-center">
        <div className="lg:max-w-3xl text-center flex flex-col justify-center items-center">
          <h1 className="text-[#F7941D] w-auto lg:max-w-2xl text-[24px] lg:text-[40px]">{title}</h1>
          <p className="text-[#939598] text-[12px] lg:text-[16px] py-4">{stitle}</p>
        </div>
        <div className="">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export const Section4 = ({ title, stitle }) => {
  
  return (
    <div>
      <div className="flex flex-col lg:h-screen justify-around items-center">
        <div className="lg:max-w-3xl text-center flex flex-col justify-center items-center">
          <h1 className="text-[#F7941D] w-auto lg:max-w-2xl text-[24px] lg:text-[40px]">{title}</h1>
          <p className="text-[#939598] text-[12px] lg:text-[16px] py-4">{stitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-24 lg:gap-x-8">
          <div className="flex flex-col px-12 py-12 rounded-tl-2xl rounded-br-2xl shadow-xl  justify-center items-center gap-y-8">
            <div className="flex flex-col gap-y-4 items-center">
              <h1 className="text-2xl">Serenite</h1>
              <h2 className="text-4xl font-medium">
                37.000<span className="text-2xl font-medium">FCFA</span>
              </h2>
            </div>
            <div>
              <ul className=" flex flex-col font-medium justify-center items-center gap-y-2">
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className="text-black text-md" />
                  <p className="text-[10px] lg:text-[16px]">Feedback Categorization</p>
                </li>
                <li className="flex items-center gap-x-6">
                  <FaCheckCircle className="text-black text-md" />
                  <p className="text-[10px] lg:text-[16px]">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className="text-black text-md" />
                  <p className="text-[10px] lg:text-[16px]">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className="text-black text-md" />
                  <p className="text-[10px] lg:text-[16px]">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className="text-black text-md" />
                  <p className="text-[10px] lg:text-[16px]">Feedback Categorization</p>
                </li>
              </ul>
            </div>
            <button className="text-[#F7941D] capitalize ring-1 ring-[#F7941D] px-12 rounded-tl-2xl rounded-br-2xl py-4 hover:bg-[#F7941D] hover:text-white transition ease duration-300 ">
              <p> purchase package</p>
            </button>
          </div>
          <div className="flex flex-col -translate-y-[20px] px-12 py-12 rounded-tl-2xl rounded-br-2xl shadow-xl  justify-center items-center gap-y-8 bg-black ">
            <div className="flex flex-col gap-y-4 items-center text-white">
              <h1 className="text-2xl">Essentiel</h1>
              <h2 className="text-4xl font-medium">
                59.000<span className="text-2xl font-medium">FCFA</span>
              </h2>
            </div>
            <div>
              <ul className=" flex flex-col font-medium justify-center items-center gap-y-2 text-white">
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
              </ul>
            </div>
            <button className="hover:text-[#F7941D] hover:bg-white  capitalize ring-1 ring-[#F7941D] px-12 rounded-tl-2xl rounded-br-2xl py-4 bg-[#F7941D] text-white transition ease duration-300 ">
              <p> purchase package</p>
            </button>
          </div>
          <div className="flex flex-col  px-12 py-12 rounded-tl-2xl rounded-br-2xl shadow-xl  justify-between items-center gap-y-8  ">
            <div className="flex flex-col gap-y-4 items-center text-center max-w-[200px] ">
              <h1 className="text-2xl">Budget</h1>
              <h2 className="text-3xl font-medium">Faites votre choix !</h2>
            </div>
            <div>
              <ul className=" flex flex-col font-medium justify-center items-center gap-y-2 ">
                <li className="flex  items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
                <li className="flex items-center gap-x-6">
                  <FaCheckCircle className=" text-md" />
                  <p className="text-sm">Feedback Categorization</p>
                </li>
              </ul>
            </div>
            <button className="text-[#F7941D] hover:  capitalize ring-1 ring-[#F7941D] px-12 rounded-tl-2xl rounded-br-2xl py-4 hover:bg-[#F7941D] hover:text-white transition ease duration-300 ">
              <p> purchase package</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SocialMediaContent = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 2000);
  };

  return (
   <div className="max-h-2xl">
     <div className="flex flex-col py-12 lg:py-24 gap-y-12 lg:gap-y-24 justify-around items-center px-4">
      <div className="lg:max-w-3xl text-center flex flex-col justify-center items-center">
        <h1 className="text-[#F7941D] w-auto lg:max-w-2xl text-[24px] lg:text-[40px]">
          Rejoignez-nous sur les réseaux sociaux
        </h1>
      </div>
      <div className="w-full max-w-md">
        <div className="flex flex-col lg:flex-row rounded-xl bg-black p-4 gap-y-4 lg:gap-y-0 lg:gap-x-4">
          <input
            type="email"
            placeholder="Entrer votre adresse mail"
            value={email}
            onChange={handleEmailChange}
            className="flex-1 p-4 text-white bg-black placeholder-gray-400 outline-none rounded-tl-2xl lg:rounded-tl-none rounded-br-2xl lg:rounded-br-none"
          />
          <motion.button
            onClick={handleSubmit}
            className="bg-[#f7941d] rounded-tl-2xl lg:rounded-tl-none lg:rounded-tr-2xl rounded-br-2xl text-white p-4 flex items-center justify-center w-full lg:w-auto"
            whileHover={{
              y: [0, -10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="flex items-center justify-center w-6 h-6 border-4 border-t-4 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                Commencez
                <FiArrowRight className="ml-2" />
              </>
            )}
          </motion.button>
        </div>
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="flex text-[12px] lg:text-[16px] justify-center items-center lg:max-w-2xl bottom-4 bg-black text-white p-4 rounded shadow-lg"
            >
              Un mail vous a été envoyé. Veuillez consulter votre boîte mail.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
   </div>
  );
};

export default function SectionAll() {
  return (
    <div>
      <Section1
        title="Des packs évolutifs pour répondre à vos besoins"
        stitle="Une grande enseigne peut opter pour un pack de sécurité complet comprenant l'ensemble des solutions de sécurité dont elle a besoin."
      />
      <Section2 />
      <Section3
        title="Découvrez pourquoi nos clients Nous adorent"
        stitle="Recommandé par des clients satisfaits"
      />
      <Section4
        title="Quels plan choisissez vous pour votre sécurité ?"
        stitle="in virtual space through communication platforms."
      />
      <SocialMediaContent />
    </div>
  );
}
