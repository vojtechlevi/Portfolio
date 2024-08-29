import React from "react";

export default function StickyNavButton({ id, icon, text, onClick }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center gap-8 w-full mt-3 ">
      {icon}
      <button
        id={id}
        onClick={onClick ? onClick : () => scrollToSection(id)}
        className="
          flex
          flex-col
          items-center
          lg:dark:hover:bg-[rgb(46,46,46)] 
          lg:hover:bg-[#dddddd]
          lg:py-2
          rounded-lg
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
            opacity-0
            transform
            -translate-y-3
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-200
            ease-in-out
            text-sm
          "
        >
          {text}
        </span>
      </button>
    </div>
  );
}
