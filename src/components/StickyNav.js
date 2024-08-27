"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { BriefcaseBusiness, Code, Send, Moon, Sun } from "lucide-react";

export default function StickyNav() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="gap-4 py-4 fixed top-1/2 left-0 transform -translate-y-1/2 z-50 flex flex-col dark:bg-background-darkcontainer bg-white dark:text-text-dark rounded-r-lg shadow-lg overflow-hidden w-12 hover:w-48 transition-all duration-300 ease-in-out group"
    >
      {/* Projects Button */}
      <button
        id="projects"
        onClick={() => scrollToSection("projects")}
        className="
          flex
          items-center
          py-2
          pl-4
          pr-2
          dark:hover:bg-[#2e2e2e]
          hover:bg-[#dddddd]
          
          relative
          w-full
        "
      >
        <BriefcaseBusiness className="flex-shrink-0" size={20} />
        <span
          className="
            ml-2
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

      {/* Skills Button */}
      <button
        onClick={() => scrollToSection("skills")}
        className="
          flex
          items-center
          py-2
          pl-4
          pr-2
          dark:hover:bg-[#2e2e2e]
          hover:bg-[#eeeeee]
          relative
          w-full
        "
      >
        <Code className="flex-shrink-0" size={20} />
        <span
          className="
            ml-2
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

      {/* Contact Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className="
          flex
          items-center
          py-2
          pl-4
          pr-2
          dark:hover:bg-[#2e2e2e]
          hover:bg-[#eeeeee]
          relative
          w-full
        "
      >
        <Send className="flex-shrink-0" size={20} />
        <span
          className="
            ml-2
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
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className=" flex items-center py-2 px-4 hover:bg-[#eeeeee] dark:hover:bg-[#2e2e2e]"
      >
        {darkMode ? (
          <Moon className="flex-shrink-0" size={20} />
        ) : (
          <Sun className="flex-shrink-0" size={20} />
        )}{" "}
        {/* Dark mode icon (sun/moon) */}
        <p
          className="
            ml-2
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
    </motion.div>
  );
}
