import React from "react";
import { EDUCATION } from "../constants";
import ScrollFadeIn from "./scrollTriger/ScrollFadeIn";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-thin">Education</h1>
      <div className="flex flex-col gap-8">
        {EDUCATION.map(({ year, degree, institution, description }, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div className="flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h3>{degree}</h3>
                <h6 className="mb-2 font-semibold">{institution}</h6>
                <p className="mb-4 text-neutral-400">{description}</p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Education;
