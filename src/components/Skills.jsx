import React from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiPython, SiCplusplus, SiHtml5, 
  SiReact, SiVite, SiTailwindcss, SiNodedotjs, 
  SiGithub
} from "react-icons/si";
import { TbBrandVisualStudio } from "react-icons/tb";
import { FaLightbulb, FaGear, FaGraduationCap } from "react-icons/fa6";
import { skillsData } from "../data/skills";

const iconMap = {
  SiJavascript: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
  SiPython: <SiPython className="w-6 h-6 text-[#3776AB]" />,
  SiCplusplus: <SiCplusplus className="w-6 h-6 text-[#00599C]" />,
  SiHtml5: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
  SiReact: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
  SiVite: <SiVite className="w-6 h-6 text-[#646CFF]" />,
  SiTailwindcss: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
  SiNodedotjs: <SiNodedotjs className="w-6 h-6 text-[#5FA04E]" />,
  SiGithub: <SiGithub className="w-6 h-6 text-white" />,
  TbBrandVisualStudio: <TbBrandVisualStudio className="w-6 h-6 text-[#007ACC]" />,
  FaLightbulb: <FaLightbulb className="w-6 h-6 text-yellow-400" />,
  FaGear: <FaGear className="w-6 h-6 text-blue-400" />,
  FaGraduationCap: <FaGraduationCap className="w-6 h-6 text-green-400" />
};

const Skills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Skills Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((categoryGroup, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 transition duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
                {categoryGroup.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {categoryGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 p-3 bg-neutral-950/50 rounded-xl border border-neutral-800/40 hover:bg-neutral-900 transition duration-200"
                  >
                    <div className="flex-shrink-0 p-2 bg-neutral-900 rounded-lg">
                      {iconMap[skill.icon] || <FaGear className="w-6 h-6 text-neutral-400" />}
                    </div>
                    <span className="text-neutral-200 font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
