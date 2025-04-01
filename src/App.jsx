import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
// import SlideTabsExample from "./components/SlideTabsExample.jsx";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
// import SpotlightCard from './components/SpotlightCard';

const App = () => {
  useEffect(() => {
    /// Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="top-4 absolute inset-x-0 container mx-auto md:px-8 px-4">
        {/* <SlideTabsExample /> */}
          <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Project />
        <Contact />
        
        {/* card */}
        {/* <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          // Content goes here
        </SpotlightCard> */}
      </div>
    </div>
  );
};

export default App;

