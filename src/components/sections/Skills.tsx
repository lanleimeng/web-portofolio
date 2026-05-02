import { Code, Smartphone, Database, Globe, Server, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const skillsData = [
  {
    name: "Flutter",
    icon: Smartphone,
    color: "bg-[#B8EBD0]",
    iconColor: "text-[#2d5a3d]",
    proficiency: 85,
  },
  {
    name: "JavaScript/TypeScript",
    icon: Code,
    color: "bg-[#F9D3B4]",
    iconColor: "text-[#8b4513]",
    proficiency: 90,
  },
  {
    name: "React/Next.js",
    icon: Globe,
    color: "bg-[#DCC8F0]",
    iconColor: "text-[#6b46c1]",
    proficiency: 92,
  },
  {
    name: "Tailwind CSS",
    icon: Layers,
    color: "bg-[#CDE6F5]",
    iconColor: "text-[#1e40af]",
    proficiency: 88,
  },
  {
    name: "REST API",
    icon: Server,
    color: "bg-[#B8EBD0]",
    iconColor: "text-[#2d5a3d]",
    proficiency: 87,
  },
  {
    name: "Express",
    icon: Server,
    color: "bg-[#F9D3B4]",
    iconColor: "text-[#8b4513]",
    proficiency: 85,
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "bg-[#DCC8F0]",
    iconColor: "text-[#6b46c1]",
    proficiency: 83,
  },
  {
    name: "Mongoose",
    icon: Database,
    color: "bg-[#CDE6F5]",
    iconColor: "text-[#1e40af]",
    proficiency: 82,
  },
];

const chartColors = [
  "#B8EBD0",
  "#F9D3B4",
  "#DCC8F0",
  "#CDE6F5",
  "#B8EBD0",
  "#F9D3B4",
  "#DCC8F0",
  "#CDE6F5",
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent via-white/20 to-transparent relative">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CDE6F5]/10 via-transparent to-[#B8EBD0]/10 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glass Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl inline-block">
            <h2 className="text-4xl mb-4 text-gray-800 drop-shadow-lg">Skills & Technologies</h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              I work with modern technologies to build scalable and efficient applications.
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Grid - Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-4 text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Colored Glow Background */}
                <div className={`absolute inset-0 ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon with Glass Background */}
                  <div className="flex justify-center mb-3">
                    <div className="backdrop-blur-md bg-white/30 p-2 rounded-xl border border-white/40 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <skill.icon className={`w-6 h-6 ${skill.iconColor} drop-shadow-md`} />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className={`${skill.iconColor} text-sm font-semibold group-hover:scale-105 transition-transform duration-200 drop-shadow-sm`}>
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{skill.proficiency}%</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 drop-shadow-lg">Proficiency Levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" stroke="rgba(128,128,128,0.5)" />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} stroke="rgba(128,128,128,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="proficiency" radius={[0, 8, 8, 0]}>
                  {skillsData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={chartColors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Glass CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 inline-flex items-center gap-4 rounded-3xl px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="w-4 h-4 bg-gradient-to-r from-[#B8EBD0] to-[#CDE6F5] rounded-full animate-pulse shadow-lg" />
            <span className="text-gray-800 drop-shadow-sm">Always learning and exploring new technologies!</span>
            <div className="w-4 h-4 bg-gradient-to-r from-[#F9D3B4] to-[#DCC8F0] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}