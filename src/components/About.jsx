import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/profile";
import avatarImg from "../assets/avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Photo & Mission Card */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 p-2 mb-8">
              <img
                src={avatarImg}
                alt={profileData.name}
                className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-sm text-neutral-300">Sayandh P</span>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="w-full bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Mission Statement</h3>
              <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed">
                "{profileData.about.mission}"
              </p>
            </div>
          </motion.div>

          {/* Bio, Facts, and Focus */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
                {profileData.about.bio}
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.about.facts.map((fact, index) => (
                  <div
                    key={index}
                    className="p-4 bg-neutral-900/40 border border-neutral-800/80 rounded-xl hover:border-neutral-700 transition"
                  >
                    <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                      {fact.label}
                    </span>
                    <span className="text-sm sm:text-base text-neutral-200 font-medium">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Current Focus</h3>
              <ul className="space-y-3">
                {profileData.about.focus.map((focusItem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <span className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {focusItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
