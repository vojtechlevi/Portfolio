"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { BriefcaseBusiness, Code, Send, Moon, Sun } from "lucide-react";

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
      } transition-all duration-300 ease-in-out group lg:hover:w-48 lg:w-12`}
      onClick={toggleNav}
    >
      {/* Projects Button */}
      <div className="flex items-center gap-4">
        <BriefcaseBusiness className="flex-shrink-0" size={20} />
        <button
          id="projects"
          onClick={() => scrollToSection("projects")}
          className="
          flex
          items-center
          lg:dark:hover:bg-[#2e2e2e] 
          lg:hover:bg-[#dddddd]
          rounded-lg
          py-2
          pr-2
          relative
          transition-all
          duration-200
          ease-in
          w-full
        "
        >
          <span
            className="
            ml-4
            opacity-0
            transform
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            ease-in-out
            whitespace-nowrap
          "
          >
            Projects
          </span>
        </button>
      </div>

      {/* Skills Button */}
      <div className="flex items-center gap-4">
        <Code className="flex-shrink-0" size={20} />
        <button
          onClick={() => scrollToSection("skills")}
          className="
          flex
          items-center
          lg:dark:hover:bg-[#2e2e2e] 
          lg:hover:bg-[#dddddd]
          rounded-lg
          py-2
          pr-2
          relative
          transition-all
          duration-200
          ease-in
          w-full
        "
        >
          <span
            className="
            ml-4
            opacity-0
            transform
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            ease-in-out
            whitespace-nowrap
          "
          >
            Tech Stack
          </span>
        </button>
      </div>

      {/* Contact Button */}
      <div className="flex items-center gap-4 ">
        <Send className="flex-shrink-0" size={20} />
        <button
          onClick={() => scrollToSection("contact")}
          className="
          flex
          items-center
          lg:dark:hover:bg-[#2e2e2e] 
          lg:hover:bg-[#dddddd]
          rounded-lg
          py-2
          pr-2
          relative
          transition-all
          duration-200
          ease-in
          w-full
        "
        >
          <span
            className="
            ml-4
            opacity-0
            transform
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            ease-in-out
            whitespace-nowrap
          "
          >
            Contact
          </span>
        </button>
      </div>
      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        {darkMode ? (
          <Moon className="flex-shrink-0" size={20} />
        ) : (
          <Sun className="flex-shrink-0" size={20} />
        )}{" "}
        <button
          onClick={toggleDarkMode}
          className="
          flex
          items-center
          lg:dark:hover:bg-[#2e2e2e] 
          lg:hover:bg-[#dddddd]
          rounded-lg
          py-2
          pr-2
          relative
          transition-all
          duration-300
          ease-in
          w-full
        "
        >
          {/* Dark mode icon (sun/moon) */}
          <p
            className="
            ml-4
            opacity-0
            transform
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            ease-in-out
            whitespace-nowrap
          "
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </button>
      </div>
    </motion.div>
  );
}
