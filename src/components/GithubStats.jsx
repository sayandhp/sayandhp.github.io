import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeFork, FaCode } from "react-icons/fa6";
import { profileData } from "../data/profile";
import { projectsData } from "../data/projects";

const GithubStats = () => {
  // Generate mock contribution grid data
  // 53 weeks, 7 days per week
  const generateContributions = () => {
    const data = [];
    const colors = [
      "bg-neutral-900",        // 0 commits
      "bg-emerald-950/60",     // 1-2 commits
      "bg-emerald-900/80",     // 3-4 commits
      "bg-emerald-700",        // 5-6 commits
      "bg-emerald-500"         // 7+ commits
    ];

    for (let i = 0; i < 53 * 7; i++) {
      // Create random distribution weighted towards low activity
      const r = Math.random();
      let colorIndex = 0;
      if (r > 0.85) colorIndex = 4;
      else if (r > 0.7) colorIndex = 3;
      else if (r > 0.5) colorIndex = 2;
      else if (r > 0.25) colorIndex = 1;

      data.push({
        day: i,
        commits: colorIndex === 0 ? 0 : Math.floor(Math.random() * 8) + 1,
        color: colors[colorIndex]
      });
    }
    return data;
  };

  const contributions = generateContributions();
  const pinnedRepos = projectsData.slice(0, 3); // display first 3 projects as pinned

  return (
    <section id="github-stats" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">GitHub Activity</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Contribution Graph Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FaGithub className="w-6 h-6 text-white" />
                <h3 className="text-lg font-bold text-white">
                  Contributions Calendar
                </h3>
              </div>
              <a
                href={`https://github.com/${profileData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                @{profileData.github}
              </a>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[700px] flex flex-col gap-1">
                {/* Simulated Grid representing days of the year */}
                <div className="grid grid-flow-col grid-rows-7 gap-1 h-28">
                  {contributions.map((item) => (
                    <div
                      key={item.day}
                      className={`w-3 h-3 rounded-sm ${item.color} transition duration-200 hover:scale-125 cursor-pointer`}
                      title={`${item.commits} commits`}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between mt-4 px-2 text-xs text-neutral-500">
                  <span>Learn more about Sayandh's contributions on GitHub</span>
                  <div className="flex items-center gap-1">
                    <span>Less</span>
                    <div className="w-3 h-3 rounded-sm bg-neutral-900" />
                    <div className="w-3 h-3 rounded-sm bg-emerald-950/60" />
                    <div className="w-3 h-3 rounded-sm bg-emerald-900/80" />
                    <div className="w-3 h-3 rounded-sm bg-emerald-700" />
                    <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pinned Repositories */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaGithub className="w-5 h-5 text-neutral-400" />
              Pinned Repositories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pinnedRepos.map((repo, index) => (
                <motion.a
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-5 hover:border-neutral-700 hover:bg-neutral-900/60 transition group flex flex-col justify-between h-44"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="w-4 h-4 text-blue-400" />
                      <span className="font-semibold text-white text-sm truncate group-hover:text-blue-400 transition-colors">
                        {repo.title.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        {repo.tags[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaStar className="w-3 h-3 text-neutral-600" /> 1
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeFork className="w-3 h-3 text-neutral-600" /> 0
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
