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
    <div id="projects" className=" p-10 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" p-4 group relative rounded-xl hover:scale-105 transform transition-transform duration-200 ease-in-out bg-white dark:bg-background-darkcontainer dark:text-text-dark border dark:border-background-darkborder "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full object-contain rounded-lg"
              src={project.video}
              loop
              muted
              onLoadStart={(e) => (e.target.currentTime = 0)}
            />
            <div className="mt-4 flex flex-col">
              <h2 className="text-xl font-bold mb-2 ">{project.name}</h2>
              <p className="text-xs">{project.description}</p>
              <div className="flex gap-4 mt-8">
                <a href={project.github}>
                  <FaGithub size={16} />
                </a>
                <a href={project.website}>
                  <TbWorld size={16} />
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
    video: "/videos/tesla.mov",
    github: "https://github.com/vojtechlevi/tesla-reactjs",
    website: "https://tesla-reactjs-seven.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description: "Created with ReactJS, Tailwind & Firebase",
    video: "/videos/netflix.mov",
    github: "https://github.com/vojtechlevi/netflix-reactjs",
    website: "https://netflix-reactjs-xi.vercel.app/",
  },
  {
    name: "Lindholmen Stories",
    description: "Created with NextJS, Tailwind & Supabase",
    video: "/videos/lindholmen.mov",
    github: "https://github.com/lillastormen/project-lindholmen",
    website: "https://project-lindholmen-theta.vercel.app/",
  },
];
