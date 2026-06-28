import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { profileData } from "../data/profile";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 hover:bg-neutral-900/60 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                    <FaAward className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-neutral-400 font-medium mb-4">
                  Issued by {cert.issuer}
                </p>
              </div>

              {cert.link && cert.link !== "#" ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition mt-4 self-start"
                >
                  Verify Certificate
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 cursor-not-allowed mt-4 self-start">
                  Credential URL Placeholder
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
