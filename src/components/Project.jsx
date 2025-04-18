import React from "react";
import { PROJECTS } from "../constants";
import SpotlightCard from "./SpotlightCard";
const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 p-4">
      <h1 className="my-20 text-center text-4xl font-thin">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <SpotlightCard
            children={
              <div
                key={index}
                className="flex flex-wrap lg:justify-around "
              >
                <div className="w-full lg:w-1/4 hover:scale-105 transition-all ease-in-out duration-300">
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="rounded object-cover w-full h-full  "
                  />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">{project.title}</h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>

                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            }
            spotlightColor="none"
            className="relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden my-8 py-10 hover:scale-105 transition-all ease-in-out duration-300"
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
