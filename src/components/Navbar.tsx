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
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          SaaS Logo
        </Link>
        <div className="hidden md:flex space-x-4">
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
        <Button>Sign Up</Button>
      </div>
    </motion.nav>
  );
}
