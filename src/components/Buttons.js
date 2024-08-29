import React from "react";

export default function StickyNavButton({ id, icon, text, onClick, darkMode }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    document.activeElement.blur();
  };
  return (
    <div className="flex flex-col items-center w-full ">
      <button
        id={id}
        onClick={onClick ? onClick : () => scrollToSection(id)}
        className={`
          flex
          flex-col
          items-center
          focus:hover:bg-none
          rounded-lg
          py-1
          gap-1
          relative
          transition-bg
          duration-200
          ease-in
          w-full
          transition-colors
          ${darkMode ? "hover-bg-dark" : "hover-bg-light"}
          
        `}
      >
        {icon}
        <span className="text-[10px] md:text-xs">{text}</span>
      </button>
    </div>
  );
}
