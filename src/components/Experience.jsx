import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";
import { profileData } from "../data/profile";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-6">
          {profileData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 last:mb-0 pl-8 relative"
            >
              {/* Icon Marker */}
              <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 border-4 border-neutral-950 text-white text-xs">
                <FaBriefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 transition">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-neutral-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base text-neutral-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2">
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Key Highlights
                    </span>
                    <ul className="list-disc pl-4 space-y-1.5 text-neutral-300 text-sm">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
