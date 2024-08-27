// src/components/Skills.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Git", icon: faGit },
];

export default function Skills() {
  return (
    <div id="skills" className=" container mx-auto shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex gap-4 flex-wrap items-center justify-center ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col text-center justify-center items-center min-w-24 max-h-24"
          >
            <FontAwesomeIcon icon={skill.icon} className="text-4xl mb-2" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
