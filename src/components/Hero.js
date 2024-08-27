"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold"
      >
        Hello
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-base md:text-lg lg:text-2xl"
      >
        I&apos;m a Web Developer specializing in building awesome websites.
      </motion.p>
    </div>
  );
}
