import React from "react";

export default function StickyNavButton({ id, icon, text, onClick }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center gap-2">
      {icon}
      <button
        id={id}
        onClick={onClick ? onClick : () => scrollToSection(id)}
        className="
          flex
          items-center
          lg:dark:hover:bg-[#2e2e2e] 
          lg:hover:bg-[#dddddd]
          rounded-lg
          py-2
          pr-2
          relative
          transition-bg
          duration-200
          ease-in
          w-full
          transition-colors
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
            duration-200
            ease-in-out
            whitespace-nowrap
          "
        >
          {text}
        </span>
      </button>
    </div>
  );
}
