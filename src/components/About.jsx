import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl lg:text-6xl font-thin">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={aboutImg} alt="about img" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6  tracking-wider">
              {/* {ABOUT_TEXT} */}I am a 2nd year B-Tech student with a strong
              interest in <span className="font-bold text-amber-100">front-end development</span>, embedded systems, and IoT. I
              have experience working with HTML, CSS, Tailwind CSS, and
              JavaScript, and I am currently improving my skills in React.js. I
              enjoy building projects that enhance user experience and solving
              problems through technology. Beyond web development, I have a
              background in <span className="font-bold text-amber-100">problem-solving with data structures and algorithms</span>.
              I am continuously working on strengthening my logical thinking and
              coding skills. I am always open to learning new technologies and
              collaborating on projects that help me grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
