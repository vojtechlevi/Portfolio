"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="relative h-screen flex flex-col justify-center w-full px-8 mx-auto items-center "
    >
      {/* <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3))",
          backgroundSize: "400% 400%",
          animation: "aurora 15s ease infinite",
        }}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div> */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-7xl min-w-[80%] lg:min-w-[50%] font-bold"
      >
        Hi! 👋
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl md:text-6xl min-w-[80%] lg:min-w-[50%]  font-bold"
      >
        I&apos;m Levi Ekström
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative mt-4 h-48 max-w-[80%] lg:max-w-[50%] text-base md:text-lg lg:text-xl dark:text-text-dark"
      >
        <ReactTyped
          strings={[
            "- Studying web development with a passion for creating awesome websites. Continually learning and experimenting with new technologies to bring creative visions to life.",
          ]}
          typeSpeed={10}
          startDelay={1000}
        />
      </motion.div>
      {/* <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style> */}
    </div>
  );
}
