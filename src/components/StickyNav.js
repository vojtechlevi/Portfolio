"use client";
import { BriefcaseBusiness, Code, Send } from "lucide-react";

export default function StickyNav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="gap-4 py-4 fixed top-1/2 left-0 transform -translate-y-1/2 z-50 flex flex-col bg-gray-800 text-white rounded-r-lg shadow-lg overflow-hidden w-12 hover:w-48 transition-all duration-300 ease-in-out group">
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
          hover:bg-gray-700
          transition
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
          hover:bg-gray-700
          transition
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
          hover:bg-gray-700
          transition
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
    </div>
  );
}
