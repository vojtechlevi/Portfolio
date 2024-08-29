import { motion } from "framer-motion";
import { useRef } from "react";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Projects() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
  };

  return (
    <div id="projects" className="mt-4 px-5 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[400px] p-4 group relative rounded-xl lg:hover:scale-105 transform transition-transform duration-200 ease-in-out bg-white dark:bg-background-darkcontainer dark:text-text-dark border dark:border-background-darkborder "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full object-contain rounded-lg"
              src={project.video}
              playsInline
              autoPlay
              loop
              muted
              onLoadStart={(e) => (e.target.currentTime = 0)}
            />
            <div className="mt-4 flex flex-col">
              <h2 className="text-xl font-bold mb-2 dark:text-text-light ">
                {project.name}
              </h2>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm font-thin">{project.extra}</p>
              <p className="text-xs mt-2">{project.text}</p>
              <div className="absolute bottom-4 left-4 flex gap-4 mt-8 dark:text-text-light">
                <a href={project.github}>
                  <FaGithub size={18} />
                </a>
                <a href={project.website}>
                  <TbWorld size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Tesla Clone",
    description: "Created with ReactJS & Tailwind",
    text: "A project crafted to mirror the sleek aesthetics and features of Tesla's website.",
    video: "/videos/tesla.mov",
    github: "https://github.com/vojtechlevi/tesla-reactjs",
    website: "https://tesla-reactjs-seven.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description: "Created with ReactJS, Tailwind & Firebase",
    text: "An educational project that recreates a modern streaming platform, highlighting responsive design and seamless integration with Firebase.",
    video: "/videos/netflix.mov",
    github: "https://github.com/vojtechlevi/netflix-reactjs",
    website: "https://netflix-reactjs-xi.vercel.app/",
  },
  {
    name: "Lindholmen Stories",
    description: "Created with NextJS, Tailwind & Supabase",
    text: "A collaborative back to school project bringing together creativity and technology to showcase the unique stories of Lindholmen.",
    extra: "(only mobile design)",
    video: "/videos/lindholmen.mov",
    github: "https://github.com/lillastormen/project-lindholmen",
    website: "https://project-lindholmen-theta.vercel.app/",
  },
];
