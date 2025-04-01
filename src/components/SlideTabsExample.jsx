import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SlideTabsExample = () => {
  return (
    <div className="flex items-center justify-center pt-6 fixed top-0 left-0 right-0">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav aria-label="Main Navigation">
      <ul
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
        className="flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        {[
          "Home",
          "Pricing",
          "Features",
          "Docs",
          "Blog",
        ].map((label) => (
          <Tab key={label} setPosition={setPosition}>
            {label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default SlideTabsExample;
