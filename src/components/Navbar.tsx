'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items with routes
  const navItems = [
    { 
      to: "/features", 
      label: "Features",
      isActive: location.pathname === "/features" 
    },
    { 
      to: "/faq", 
      label: "FAQ",
      isActive: location.pathname === "/faq"
    },
    { 
      to: "/contact", 
      label: "Contact",
      isActive: location.pathname === "/contact"
    }
  ];

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
          <img 
            src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/logo.svg" 
            alt="Logo" 
            className='h-10 w-10'
          />
          SEWANTIKA
        </Link>
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors duration-300 ${
                item.isActive 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button asChild>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </motion.nav>
  );
}