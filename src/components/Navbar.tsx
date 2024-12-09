'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router for navigation
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        isSticky
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-semibold flex items-center gap-2">
        <img src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/logo.svg" alt="Logo" className='h-10 w-10'/>
        SEWANTIKA
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link
            to="/#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </div>
        <Button>Contact</Button>
      </div>
    </motion.nav>
  );
}
