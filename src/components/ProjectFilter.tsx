import { motion } from 'framer-motion';

interface ProjectFilterProps {
  selectedTech: string | null;
  onTechChange: (tech: string | null) => void;
  allTechs: string[];
}

export function ProjectFilter({
  selectedTech,
  onTechChange,
  allTechs,
}: ProjectFilterProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col gap-6"
    >
   
      {/* Tech Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider drop-shadow-sm">
          Technology
        </h3>
        <div className="flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTechChange(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
              selectedTech === null
                ? 'bg-white/40 border-white/60 text-gray-800 shadow-lg'
                : 'bg-white/20 border-white/30 text-gray-700 hover:bg-white/30'
            }`}
          >
            All Technologies
          </motion.button>
          {allTechs.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTechChange(tech)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                selectedTech === tech
                  ? 'bg-white/40 border-white/60 text-gray-800 shadow-lg'
                  : 'bg-white/20 border-white/30 text-gray-700 hover:bg-white/30'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
