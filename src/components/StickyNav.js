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
      className={`gap-4 py-4 px-3 fixed top-96 left-0 transform -translate-y-1/2 z-50 flex flex-col dark:bg-background-darkcontainer bg-white dark:text-text-dark rounded-r-lg shadow-lg overflow-hidden w-12 ${
        isExpanded ? "w-48" : "w-12"
      } transition-all duration-200 ease-in group lg:hover:w-48 lg:w-12`}
      onClick={toggleNav}
    >
      {/* Projects Button */}
      <StickyNavButton
        id="projects"
        icon={
          <BriefcaseBusiness
            onClick={toggleNav}
            className="flex-shrink-0"
            size={18}
          />
        }
        text="Projects"
      />

      {/* Skills Button */}
      <StickyNavButton
        id="skills"
        icon={<Code className="flex-shrink-0" size={18} />}
        text="Tech Stack"
      />

      {/* Contact Button */}
      <StickyNavButton
        id="contact"
        icon={<Send className="flex-shrink-0" size={18} />}
        text="Contact"
      />

      {/* Download CV Button */}
      <StickyNavButton
        icon={<File className="flex-shrink-0" size={18} />}
        text="Download CV"
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
        text={darkMode ? "Light Mode" : "Dark Mode"}
        onClick={toggleDarkMode}
      />
    </motion.div>
  );
}
