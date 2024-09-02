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
            className=" p-4 group relative rounded-xl lg:hover:scale-105 transform transition-transform duration-200 ease-in-out bg-white dark:bg-background-darkcontainer dark:text-text-dark border dark:border-background-darkborder "
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
              <p className="text-sm font-light">{project.extra}</p>
              <p className="text-xs mt-2 pb-14">{project.text}</p>
              <div className="absolute bottom-4 left-4 flex w-full justify-between mt-8 dark:text-text-light items-center">
                <div className="flex gap-4">
                  <a href={project.github}>
                    <FaGithub size={18} />
                  </a>
                  <a href={project.website}>
                    <TbWorld size={18} />
                  </a>
                </div>
                <div className="text-[10px] flex mr-8 gap-4 flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-2 border rounded dark:border-zinc-600 dark:bg-zinc-800 dark:text-[#959595]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
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
    text: "A project crafted to mirror the sleek aesthetics and features of Tesla's website.",
    video: "/videos/tesla.mov",
    github: "https://github.com/vojtechlevi/tesla-reactjs",
    website: "https://tesla-reactjs-seven.vercel.app/",
    tech: ["ReactJS", "Tailwind"],
  },
  {
    name: "Netflix Clone",
    text: "An educational project that recreates a modern streaming platform, highlighting responsive design and seamless integration with Firebase.",
    video: "/videos/netflix.mov",
    github: "https://github.com/vojtechlevi/netflix-reactjs",
    website: "https://netflix-reactjs-xi.vercel.app/",
    tech: ["ReactJS", "Tailwind", "Firebase"],
  },
  {
    name: "Lindholmen Stories",
    text: "A collaborative back to school project bringing together creativity and technology to showcase the unique stories of Lindholmen.",
    extra: "(only mobile design)",
    video: "/videos/lindholmen.mov",
    github: "https://github.com/lillastormen/project-lindholmen",
    website: "https://project-lindholmen-theta.vercel.app/",
    tech: ["ReactJS", "Tailwind", "Supabase"],
  },
];
