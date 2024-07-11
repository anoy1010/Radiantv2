import React from "react";
import Image from "next/image";




export default function Section() {
  return (
    <div>
      <Section1 />
      <Section2 />
     
    </div>
  );
}

export const Section1 = () => {
  return (
    <div className="mb-24">
      <div className="py-24 md:px-12 lg:px-24">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Sharing is Caring
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore
              sunt, debitis dolorum officia aliquid explicabo? Excepturi,
              voluptate4
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width={1000}
                  height={667}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-primary">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div className="mb-24">
      <div className="py-18">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              loading="lazy"
              width={220}
              height={220}
               src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width={220}
              height={220}
               src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="member photo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width={220}
              height={220}
               src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="member photo"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width={220}
              height={220}
               src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="member photo"
              className="relative h-12 w-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width={220}
              height={220}
               src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Get Started now
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Be part of millions people around the world using tailus in modern
              User Interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-tl-2xl before:rounded-br-2xl before:bg-orange-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Get Started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-tl-2xl before:rounded-br-2xl before:border before:border-gray-200 before:bg-gray-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



