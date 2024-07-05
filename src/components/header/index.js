"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col py-4 px-10 pcecran">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/home" className="text-gray-700 hover:text-gray-900">Option 1</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/products" className="text-gray-700 hover:text-gray-900">Option 2</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">Option 3</Link>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <motion.div whileHover={{ scale: 1.1 }}>
              <button onClick={toggleSearchBar} className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </motion.div>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/">
                <Image src="/logo/logo.png" alt="Logo" width={250} height={100} />
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4 ml-auto uppercase font-bold">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/src/pages/Home/Homepage.js" className="text-gray-700 transition ease-in-out duration-300 hover:text-gray-900 hover:text-[#F7941D]">home</Link>
            </motion.div>
            <span className="text-gray-300">|</span>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/src/pages/Services/Services.js" className="text-gray-700 transition ease-in-out duration-300 hover:text-gray-900 hover:text-[#F7941D]">services</Link>
            </motion.div>
            <span className="text-gray-300">|</span>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/option3" className="text-gray-700 transition ease-in-out duration-300 hover:text-gray-900 hover:text-[#F7941D]">about us</Link>
            </motion.div>
            <span className="text-gray-300">|</span>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/option4" className="text-gray-700 transition ease-in-out duration-300 hover:text-gray-900 hover:text-[#F7941D]">contact</Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col py-4 px-10 petitecran">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/">
                <Image src="/logo/logo.png" alt="Logo" width={150} height={50} />
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <motion.div whileHover={{ scale: 1.1 }}>
              <button onClick={toggleSearchBar} className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/profile" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900">
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
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="fixed left-0 top-0 h-full bg-white p-5 space-y-4 w-64 uppercase font-bold">
              <button 
                onClick={toggleSidebar} 
                className="text-gray-700 hover:text-gray-900 absolute top-4 right-4"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <Link href="/home" className="block text-gray-700 hover:text-gray-900">home</Link>
              <Link href="/products" className="block text-gray-700 hover:text-gray-900">services</Link>
              <Link href="/about" className="block text-gray-700 hover:text-gray-900">about us</Link>
              <Link href="/option1" className="block text-gray-700 hover:text-gray-900">contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
