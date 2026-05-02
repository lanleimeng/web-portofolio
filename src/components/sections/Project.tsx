import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { projectsData } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "../ProjectCard";
import { ProjectFilter } from "../ProjectFilter";
import { ProjectModal } from "../ProjectModal";
import { Sparkles } from "lucide-react";

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get all unique technologies
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const typeMatch = !selectedType || project.type === selectedType;
      const techMatch =
        !selectedTech || project.technologies.includes(selectedTech);
      return typeMatch && techMatch;
    });
  }, [selectedType, selectedTech]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-transparent via-[#f8f9fa]/30 to-transparent relative"
    >
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8EBD0]/5 via-transparent to-[#F9D3B4]/5 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glass Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl mb-8 inline-block">
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={28} className="text-blue-500" />
              <h2 className="text-4xl font-bold text-gray-800 drop-shadow-lg">
                Featured Projects
              </h2>
              <Sparkles size={28} className="text-blue-500" />
            </motion.div>
        
          </div>
        </motion.div>

        {/* Filters */}
        <ProjectFilter
          selectedType={selectedType}
          selectedTech={selectedTech}
          onTypeChange={setSelectedType}
          onTechChange={setSelectedTech}
          allTechs={allTechs}
        />

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <p className="text-gray-700 font-semibold">
            Showing{" "}
            <span className="text-blue-600 font-bold">
              {filteredProjects.length}
            </span>{" "}
            project{filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                project={project}
                onViewDetails={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No projects match your filters. Try adjusting your selection!
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}