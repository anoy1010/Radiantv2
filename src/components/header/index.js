"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FiArrowRight } from "react-icons/fi";
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLinks from "../Transition";

export const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Header = ({ isInHeroSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };

  // Applique les styles uniquement sur la page d'accueil
  const headerClass = isHome
    ? scrollPosition > 50
      ? "bg-white text-[#111047] shadow-md transition-all duration-300"
      : "bg-transparent text-white transition-all duration-300"
    : "bg-white text-[#111047] shadow-md transition-all duration-300"; // Styles par défaut pour les autres pages

  const linkClass = isHome
    ? scrollPosition > 50
      ? "text-[#111047] hover:text-[#F7941D] transition-colors duration-300"
      : "text-white hover:text-gray-200 transition-colors duration-300"
    : "text-[#111047] hover:text-[#F7941D] transition-colors duration-300"; // Styles par défaut pour les autres pages

  const { scrollY } = useViewportScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 50],
    ["rgb(255, 255, 255)", "rgb(17, 16, 71)"]
  );

  return (
    <motion.header
      style={{
        background: isHome ? headerBackground : "rgba(255, 255, 255, 1)", // Applique l'effet de transition de fond uniquement sur la page d'accueil
        color: isHome ? textColor : "rgb(17, 16, 71)", // Applique l'effet de transition de couleur du texte uniquement sur la page d'accueil
      }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <header className={`fixed w-full z-50 ${headerClass}`}>
        <div className="container mx-auto flex flex-col py-4 px-10 pcecran">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 ml-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <button onClick={toggleSearchBar} className={linkClass}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/profile" className={linkClass}>
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/cart" className={linkClass}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </motion.div>
            </div>
          </div>
          <hr
            className={`my-2 ${isHome ? "border-white" : "border-gray-300"}`}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/">
                  <Image
                    src="/logo/logo.png"
                    alt="Logo"
                    width={250}
                    height={100}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center space-x-8 ml-auto uppercase font-bold">
              <motion.div whileHover={{ scale: 1.1 }}>
                <TransitionLinks
                  href="/"
                  className={`transition ease-in-out duration-300 ${linkClass}`}
                >
                  home
                </TransitionLinks>
              </motion.div>
              <motion.div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`transition ease-in-out duration-300 uppercase ${linkClass}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  services
                </button>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-[400px] p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="horizontal"
                      aria-labelledby="options-menu"
                    >
                      <div className="grid grid-cols-2 gap-8">
                        <a href="#">
                          <img
                            className="mb-2 h-14 w-full rounded object-cover"
                            src="/imgs/blog/4.png"
                            alt="Placeholder image"
                          />
                          <h4 className="mb-0.5 text-sm font-medium">
                            Lorem ipsum dolor
                          </h4>
                          <p className="text-xs text-neutral-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet illo quidem eos.
                          </p>
                        </a>
                        <a href="#">
                          <img
                            className="mb-2 h-14 w-full rounded object-cover"
                            src="/imgs/blog/5.png"
                            alt="Placeholder image"
                          />
                          <h4 className="mb-0.5 text-sm font-medium">
                            Lorem ipsum dolor
                          </h4>
                          <p className="text-xs text-neutral-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet illo quidem eos.
                          </p>
                        </a>
                      </div>
                      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
                        <span>View more</span>
                        <FiArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <TransitionLinks
                  href="/vitrine/pages/About"
                  className={`transition ease-in-out duration-300 ${linkClass}`}
                >
                  about us
                </TransitionLinks>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <TransitionLinks
                  href="/vitrine/pages/Contact"
                  className={`transition ease-in-out duration-300 ${linkClass}`}
                >
                  contact
                </TransitionLinks>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col py-4 px-10 petitecran">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/">
                  <Image
                    src="/logo/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <motion.div whileHover={{ scale: 1.1 }}>
                <button
                  onClick={toggleSearchBar}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isSearchBarOpen && (
            <motion.div
              className="container mx-auto py-4 px-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="fixed left-0 top-0 h-full bg-white p-5 space-y-4 w-64 uppercase font-bold">
                <button
                  onClick={toggleSidebar}
                  className="text-gray-700 hover:text-gray-900 absolute top-4 right-4"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <Link
                  href="/home"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  home
                </Link>
                <Link
                  href="/products"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  services
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  about us
                </Link>
                <Link
                  href="/option1"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.header>
  );
};

export default Header;
