import React from "react";
import { HERO_CONTENT } from "../constants";
import Button from "./Button.jsx";
import { motion } from "motion/react";

 
const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center  lg:items-start text-left">
            <h1
              className="text-5xl pb-4 font-thin -tracking-tight lg:mt-10 lg:text-6xl text-white "
            >
              Abhiraj Kumar
            </h1>
            <span
              
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl tracking-tight font-thin"
            >
              Frontend Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
            <Button children={"Download CV"} />
          </div>
        </div>

        {/* photo */}
        {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center lg:justify-end">
            <img src={profilePic} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
