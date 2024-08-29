"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { BriefcaseBusiness, Code, Send, Moon, Sun, File } from "lucide-react";
import StickyNavButton from "./Buttons";

export default function StickyNav() {
  const [darkMode, setDarkMode] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      transition={{ duration: 2 }}
      className={`
        w-[90%]
        md:w-[70%]
        lg:w-[50%]
        gap-2
        px-3 
        fixed 
        top-0 left-1/2 transform -translate-x-1/2 
        z-50 
        flex
        items-center
        dark:bg-background-darkcontainer 
        dark:text-text-light
        rounded-b-lg 
        shadow-lg 
        overflow-hidden
        transition-all
        duration-200
        ease-in
        group
        ${isHovered ? "h-32" : "h-14"}
        ${isExpanded ? "h-32" : "h-14"}
        `}
      onClick={toggleNav}
      onMouseEnter={() => setIsExpanded(!isExpanded)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Projects Button */}
      <StickyNavButton
        id="projects"
        icon={<BriefcaseBusiness onClick={toggleNav} className="" size={18} />}
        text="Projects"
      />

      {/* Contact Button */}
      <StickyNavButton
        id="contact"
        icon={<Send className="flex-shrink-0" size={18} />}
        text="Contact"
      />

      {/* Skills Button */}
      <StickyNavButton
        id="skills"
        icon={<Code className="flex-shrink-0" size={18} />}
        text="Tech"
      />

      {/* Download CV Button */}
      <StickyNavButton
        icon={<File className="flex-shrink-0" size={18} />}
        text="Resumé"
        onClick={downloadCV}
      />

      {/* Dark Mode Toggle */}
      <StickyNavButton
        icon={
          darkMode ? (
            <Moon className="flex-shrink-0" size={18} />
          ) : (
            <Sun className="flex-shrink-0" size={18} />
          )
        }
        text="Mode"
        onClick={toggleDarkMode}
      />
    </motion.div>
  );
}
