import React from "react";
import { PROJECTS } from "../constants";
import SpotlightCard from "./SpotlightCard";
import ScrollFadeIn from "./scrollTriger/ScrollFadeIn";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 px-4 py-12">
      <h1 className="mb-16 text-center md:text-4xl text-3xl font-thin text-white">Selected Projects</h1>
      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <ScrollFadeIn key={index} delay={index * 0.2}>
            <SpotlightCard
              spotlightColor="none"
              className="relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden py-10 px-6 hover:scale-[1.02] transition-all ease-in-out duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Project Image */}
                <div className="w-full lg:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl object-cover w-full h-auto max-h-64"
                  />
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-2/3 text-left space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-neutral-400">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-900/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition"
                      >
                        <FaGithub size={18} /> GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition"
                      >
                        <FaExternalLinkAlt size={16} /> Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
