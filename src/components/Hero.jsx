import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { profileData } from "../data/profile";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Engineering Student", "Software Developer", "Technology Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        if (displayText === currentWord) {
          setIsDeleting(true);
          setTypingSpeed(1500); // Wait before starting to delete
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Wait before typing next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden pt-16"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse duration-[6000ms] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse duration-[8000ms] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I am <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">{profileData.name}</span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl font-medium text-neutral-400 mb-8 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a <span className="text-white border-r-2 border-blue-500 pr-1 animate-pulse">{displayText}</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition duration-300"
          >
            Contact Me
          </button>

          <a
            href={profileData.resumeUrl}
            download="Sayandh_P_Resume.pdf"
            onClick={(e) => {
              if (profileData.resumeUrl === "#") {
                e.preventDefault();
                alert("Resume file placeholder. Place your 'resume.pdf' in the public/ folder to enable downloading.");
              }
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition duration-300 flex items-center justify-center gap-2"
          >
            <FaDownload className="text-sm" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection("about")}>
        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
