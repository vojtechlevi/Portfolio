"use client";
import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ReactTyped } from "react-typed";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 4,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // Duration of each item's animation
    },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="relative h-screen flex flex-col justify-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto  pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-7xl min-w-[80%] lg:min-w-[50%] font-bold"
      >
        Hi! 👋
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl min-w-[80%] lg:min-w-[50%] font-bold"
      >
        I&apos;m Levi Ekström
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative mt-4 h-28 text-base md:text-lg lg:text-xl dark:text-text-dark"
      >
        <ReactTyped
          strings={[
            "- Studying web development with a passion for creating awesome websites. Continually learning and experimenting with new technologies to bring creative visions to life.",
          ]}
          typeSpeed={10}
          startDelay={1000}
          showCursor={false}
        />
        <motion.div
          className="flex gap-4 mt-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center"
              variants={itemVariants}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-2xl dark:text-[#959595]"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
