import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectsData } from "../data/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // Get all unique tags from projects
  const allTags = ["All", ...new Set(projectsData.flatMap((project) => project.tags))];

  const filteredProjects = selectedTag === "All"
    ? projectsData
    : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-300 ${
                selectedTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:bg-neutral-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group flex flex-col justify-between bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 hover:bg-neutral-900/60 transition duration-300"
              >
                <div>
                  {/* Top Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                      Project 0{project.id}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition duration-200"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-neutral-400 hover:text-white transition duration-200"
                        aria-label={`View live demo for ${project.title}`}
                        onClick={(e) => {
                          if (project.demo === "#") {
                            e.preventDefault();
                            alert("Demo link placeholder. You can replace this link in src/data/projects.js");
                          }
                        }}
                      >
                        <FaArrowUpRightFromSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded bg-neutral-950 text-neutral-500 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
