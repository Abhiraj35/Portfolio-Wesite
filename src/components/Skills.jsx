import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode, FaCss3,FaFigma,FaGithub,FaGitAlt    } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SpotlightCard from "./SpotlightCard";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl lg:text-6xl font-thin">
        Skills
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 px-4 ">
        <div className="flex flex-col items-center gap-4 rounded-2xl border-4 border-neutral-800 p-4">
          <h2 className="text-center text-2xl font-semibold ">Frontend</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                  <FaHtml5 className="text-4xl text-red-400 " />
                </div>
                
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />

            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaCss3 className="text-4xl text-cyan-400"/>
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiJavascriptFill className="text-4xl text-yellow-400"/>
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />

            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiReactjsLine className="text-4xl text-cyan-400" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />

            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiTailwindCssFill className="text-4xl text-cyan-400" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <TbBrandFramerMotion className="text-4xl text-cyan-400" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
          </div>
        </div>
        

        {/* <div className="flex flex-col items-center gap-4 rounded-2xl border-4 border-neutral-800 p-4 min-w-80">
          <h2 className="text-center text-2xl font-semibold ">
            Backend
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaNode className="text-4xl " />
                </div>
              }
            />

            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                  <SiMongodb className="text-4xl text-green-500" />
                </div>
              }
            />
          </div>
        </div> */}

        <div className="flex flex-col items-center gap-4 rounded-2xl border-4 border-neutral-800 p-4 min-w-70">
          <h2 className="text-center text-2xl font-semibold">
            Other
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 ">
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaFigma  className="text-4xl " />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />

            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                  <SiCanva className="text-4xl text-[#34BBD1]" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                  <FaGithub  className="text-4xl text-white" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
            <SpotlightCard
              children={
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                  <FaGitAlt   className="text-4xl text-orange-400" />
                </div>
              }
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


