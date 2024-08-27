"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl md:text-2xl mt-4">{project.title}</h3>
            <p className="mt-2 text-sm md:text-base">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Project One",
    description: "This is a project",
    image: "/images/project1.jpg",
  },
  {
    title: "Project Two",
    description: "This is another project",
    image: "/images/project2.jpg",
  },
  // Lägg till fler projekt här
];
