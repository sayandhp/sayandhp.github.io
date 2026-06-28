import React from "react";
import { profileData } from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand/Logo */}
        <div className="cursor-pointer text-sm font-semibold text-neutral-400 hover:text-white transition" onClick={scrollToTop}>
          Sayandh P
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 text-center sm:text-left">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>

        {/* Short notice */}
        <p className="text-[10px] text-neutral-600 font-sans tracking-wide">
          Designed with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
