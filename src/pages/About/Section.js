import { ButtonBlack, ButtonOr } from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaLock } from "react-icons/fa";

export default function Section() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
      
    </div>
  );
}

export const Section1 = () => {
  return (
    <div className="relative">
      <div className="w-[400px]  h-[400px] rounded-full bg-[#F7941D] absolute -left-24 top-32 z-0 opacity-80 blur"></div>
      <h1 className="text-3xl lg:text-5xl font-bold text-center py-24 ">
        Tell me a brand story
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-32 gap-x-6 justify-center items-center">
        <div className="w-[80%] h-[600px    ] z-10">
          <Image
            src="/imgs/pexels-didsss-1405724.jpg"
            width={500}
            height={500}
            alt="image"
            className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
        <div className="flex flex-col gap-y-8 items-start max-w-md">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Tell a better brand story
          </h1>
          <p className="">
            Voluptate fugiat dolor ad magna et do. Voluptate aute do Lorem magna
            non reprehenderit ex incididunt non nostrud proident consequat
            nostrud. Pariatur laboris deserunt quis eu tempor eiusmod
            consectetur quis esse id incididunt. Ullamco culpa aute minim irure
            commodo mollit labore ex laborum. Anim ea proident minim cillum
            adipisicing deserunt incididunt magna minim sunt velit irure
            pariatur. Magna sint aliquip voluptate ad. Est Lorem elit culpa enim
            non pariatur do incididunt et amet. Deserunt dolore ea sit id
            deserunt aliqua consequat est exercitation amet tempor. Commodo ut
            dolor consequat commodo pariatur culpa nostrud aliqua eiusmod veniam
            amet officia. Deserunt eu excepteur excepteur cillum dolore dolore.
            Voluptate enim labore qui laborum nisi aliqua. Enim amet ex eiusmod
            nulla minim nisi fugiat ad consequat cupidatat exercitation. In
            adipisicing minim non cillum eu ad minim sint ex. Anim commodo ea
            aute anim in laboris officia irure ad. Commodo cupidatat id duis
            amet cillum non incididunt velit incididunt exercitation et proident
            velit duis.
          </p>
          <div className="flex gap-x-6 justify-around items-center">
            <ButtonOr text="Get started" />
            <ButtonBlack text="Get started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div className="p-24">
      <div className="py-12 ">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-4">
          our plans scale with your product
        </h1>
        <p className="text-center">
          Id eiusmod nulla magna est duis exercitation ex id.
        </p>
      </div>
      <div className="flex  justify-center gap-x-8 py-8 ">
        <div>
          <div className="ring-1 ring-[#111047] px-10 rounded-tl-2xl rounded-br-2xl py-8 flex flex-col justify-center items-center gap-y-8">
            <h3 className="text-[#F7941D] text-3xl lg:text-4xl">
              {" "}
              for starter
            </h3>
            <h3 className="text-[#F7941D] text-3xl font-semibold lg:text-5xl">
              {" "}
              59 $
            </h3>
            <ul className="flex flex-col gap-y-4">
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" /> Real-Time Collaboration
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Loop Notifications
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Essential Dev Tools Integrations
              </li>
            </ul>
            <div className="px-14 py-4 rounded-tl-2xl rounded-br-2xl ring-1 ring-black hover:bg-[#111047] hover:text-white transition ease-in-out duration-300 ">
              <p>Purchase Package</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-[#111047] px-10 rounded-tl-2xl bg-[#111047] text-white rounded-br-2xl py-8 flex flex-col justify-center items-center gap-y-8">
            <h3 className="text-[#F7941D] text-3xl lg:text-4xl">
              {" "}
              for starter
            </h3>
            <h3 className="text-[#F7941D] text-3xl font-semibold lg:text-5xl">
              {" "}
              59 $
            </h3>
            <ul className="flex flex-col gap-y-4">
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" /> Real-Time Collaboration
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Loop Notifications
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Essential Dev Tools Integrations
              </li>
            </ul>
            <div className="px-14 py-4 bg-[#F7941D] rounded-tl-2xl rounded-br-2xl ring-1 ring-black hover:bg-white hover:text-[#111047] hover:text-white transition ease-in-out duration-300 ">
              <p>Purchase Package</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-[#111047] px-10 rounded-tl-2xl rounded-br-2xl py-8 flex flex-col justify-center items-center gap-y-8">
            <h3 className="text-[#F7941D] text-3xl lg:text-4xl">
              {" "}
              for starter
            </h3>
            <h3 className="text-[#F7941D] text-3xl font-semibold lg:text-5xl">
              {" "}
              59 $
            </h3>
            <ul className="flex flex-col gap-y-4">
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Categorization
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" /> Real-Time Collaboration
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Feedback Loop Notifications
              </li>
              <li className="flex gap-x-4">
                <FaCheckCircle className="w-4 h-4" />
                Essential Dev Tools Integrations
              </li>
            </ul>
            <div className="px-14 py-4 rounded-tl-2xl rounded-br-2xl ring-1 ring-black hover:bg-[#111047] hover:text-white transition ease-in-out duration-300 ">
              <p>Purchase Package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section3 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-around gap-x-8 p-24">
        <div className="flex w-1/2 flex-col items-start gap-y-12 max-w-lg justify-center">
          <h3 className="text-3xl font-bold lg:text-5xl">how it works ?</h3>
          <p>
            Dolor ea ea pariatur ad est non irure exercitation non exercitation
            consequat aute enim. Veniam culpa ipsum nulla eiusmod ex fugiat
            Lorem proident labore consequat commodo sint eiusmod irure.
            Excepteur dolor id aute culpa. Sunt ut veniam cupidatat nisi. Elit
            proident qui et aliquip occaecat aliquip aliquip fugiat esse.
            Cupidatat nulla labore magna dolore in velit esse occaecat irure do
            voluptate ipsum cillum. Aute ex dolore do sint eiusmod. Cupidatat
            irure ea qui aliquip exercitation non labore proident voluptate.
            Cillum voluptate labore ex consectetur proident minim. Ipsum qui
          </p>
          <ButtonOr text="get started" />
        </div>
        <div className="w-1/2 h-[700px] ">
          <Image
            src="/imgs/pexels-didsss-1405724.jpg"
            width={500}
            height={500}
            alt="image"
            className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export const Section4 = () => {
  return (
    <div className=" py-12">
      <div className="flex flex-row pl-24">
        <div className="max-w-lg px-12 flex flex-col gap-y-8 justify-center items-start">
          <h1 className="uppercase text-3xl lg:text-5xl font-bold">
            tell a better brand stoy{" "}
          </h1>
          <p>
            Quis commodo sunt elit nisi quis officia veniam ea qui do
            excepteur.Dolor culpa proident nulla pariatur amet.
          </p>
          <ul className="flex flex-col gap-y-4">
            <li className="flex gap-x-8 justify-center items-center">
              <FaLock className="w-8 h-8" /> Warrant present garrets limited
              cordial in inquiry to. Supported me sweetness behaviour{" "}
            </li>
            <li className="flex gap-x-8 justify-center items-center">
              <FaLock className="w-8 h-8" /> Warrant present garrets limited
              cordial in inquiry to. Supported me sweetness behaviour{" "}
            </li>
            <li className="flex gap-x-8 justify-center items-center">
              <FaLock className="w-8 h-8" /> Warrant present garrets limited
              cordial in inquiry to. Supported me sweetness behaviour{" "}
            </li>
            <li className="flex gap-x-8 justify-center items-center">
              <FaLock className="w-8 h-8" /> Warrant present garrets limited
              cordial in inquiry to. Supported me sweetness behaviour{" "}
            </li>
          </ul>
          <ButtonOr text="Get started" />
        </div>
        <div className="w-full">
          <Image
            src="/imgs/pexels-didsss-1405724.jpg"
            width={500}
            height={500}
            alt="image"
            className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export const Section5 = () => {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="m-auto text-center lg:w-7/12">
          <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
            Your favorite companies are our partners.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center">
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
          <div className="p-4">
            <Image
              src="/imgs/microsoft-ar21.svg"
              width={500}
              height={500}
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
