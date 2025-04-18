import React from "react";
import { HERO_CONTENT } from "../constants";
import Button from "./Button.jsx";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className=" border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center  lg:items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:mt-10 lg:text-6xl"
            >
              <div
              className=" font-thin gap-4 text-white flex items-center"
              >

              <motion.span
                className="ml-2 p-1.5 bg-gradient-to-r from-[#00a144] via-[#03B825] to-[#009e22] rounded-full inline-block relative"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h6 className="text-[1rem]">Open For Work</h6>
            </div>
              <h1 className="text-5xl pb-4 font-thin -tracking-tight mt-5 text-white ">
                Abhiraj Kumar
              </h1>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl tracking-tight font-thin"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Button children={"Download CV"} />
            </motion.div>
          </div>
        </div>

        {/* photo */}
        {/* <div className="w-full lg:w-1/2 lg:p-8">
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
