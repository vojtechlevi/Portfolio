"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { BriefcaseBusiness, Code, Send, Moon, Sun, File } from "lucide-react";
import StickyNavButton from "./Buttons";

export default function StickyNav() {
  const [darkMode, setDarkMode] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Update with the actual path to your CV file
    link.download = "resume.pdf"; // Update with the desired file name
    link.click();
  };

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      style={{ willChange: "opacity, transform" }}
      className={`
        w-[90%]
        md:w-[70%]
        lg:w-[50%]
        gap-2
        p-2 
        fixed 
        top-0 left-1/2 transform -translate-x-1/2 
        z-50 
        flex
        items-center
        dark:bg-background-darkcontainer 
        dark:text-text-light
        bg-white
        
        `}
      onClick={toggleNav}
    >
      {/* Projects Button */}
      <StickyNavButton
        id="projects"
        icon={<BriefcaseBusiness className="flex-shrink-0 w-4" />}
        text="Projects"
        darkMode={darkMode}
      />

      {/* Contact Button */}
      <StickyNavButton
        id="contact"
        icon={<Send className="flex-shrink-0 w-4" />}
        text="Contact"
        darkMode={darkMode}
      />

      {/* Download CV Button */}
      <StickyNavButton
        icon={<File className="flex-shrink-0 w-4" />}
        text="Resumé"
        onClick={downloadCV}
        darkMode={darkMode}
      />

      {/* Dark Mode Toggle */}
      <StickyNavButton
        icon={
          darkMode ? (
            <Moon className="flex-shrink-0 w-4" />
          ) : (
            <Sun className="flex-shrink-0 w-4" />
          )
        }
        text="Mode"
        onClick={toggleDarkMode}
        darkMode={darkMode}
      />
    </motion.div>
  );
}
