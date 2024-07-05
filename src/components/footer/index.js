import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin  } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-[#111047]">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex justify-center items-center"
            >
              <Image 
                src="/logo/logov.png"
                width={200}
                height={200}
              />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm  ">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-2xl font-bold tracking-wide">Contacts</p>
            <div className="flex">
              <p className="mr-1">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +225 0150 007 007 <br /> +225 0715 37 37 37
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@Radiant.ci
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Cocody, Abidjan ,Côte d&apos;Ivoire
              </a>
            </div>
          </div>
          <div>
            <span className="font-bold text-2xl tracking-wide ">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <BsFacebook className="w-6 h-6 text-[#111047] transition ease-in-out duration-300 hover:text-[#F7941D] hover:opacity-100 opacity-75 hover:-translate-y-2" />
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
               <BsInstagram className="w-6 h-6 text-[#111047] transition ease-in-out duration-300 hover:text-[#F7941D] hover:opacity-100 opacity-75 hover:-translate-y-2" />
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <BsLinkedin className="w-6 h-6 text-[#111047] transition ease-in-out duration-300 hover:text-[#F7941D] hover:opacity-100 opacity-75 hover:-translate-y-2" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center items-center pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024 by{" "}
            <span className="font-bold text-lg">KOGNITIV</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
