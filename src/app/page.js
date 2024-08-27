"use client";
import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import StickyNav from "@/components/StickyNav";
import Skills from "@/components/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="max-w-7xl mx-auto px-16 md:px-6 lg:px-8">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <StickyNav />
        </main>
      )}
    </>
  );
}
