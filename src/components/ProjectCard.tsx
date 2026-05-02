import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import type { Project } from '../data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const rotateX = (mousePosition.y - 0.5) * 20;
  const rotateY = (mousePosition.x - 0.5) * -20;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className="h-full"
    >
      <motion.div
        animate={
          isHovered
            ? {
                rotateX,
                rotateY,
                z: 50,
              }
            : {
                rotateX: 0,
                rotateY: 0,
                z: 0,
              }
        }
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          transformStyle: 'preserve-3d',
          transformPerspective: '1200px',
        }}
        className="relative w-full h-full"
      >
        {/* Background Light Effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
            }}
            className="absolute w-32 h-32 bg-white/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}

        {/* Card Container */}
        <motion.div
          whileHover={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
          className="relative h-full backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl overflow-hidden group shadow-2xl hover:shadow-3xl transition-shadow"
        >
          {/* Gradient Border Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              isHovered
                ? 'from-white/30 via-transparent to-white/10 opacity-100'
                : 'from-white/10 via-transparent to-white/5 opacity-0'
            } rounded-3xl transition-opacity duration-300 pointer-events-none`}
          />

          {/* Image Container */}
          <div className="relative overflow-hidden h-48 bg-white/5">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Type Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4 px-3 py-1 backdrop-blur-md bg-white/40 border border-white/60 rounded-full text-xs font-bold text-gray-800 capitalize shadow-lg"
            >
              {project.type}
            </motion.div>

            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="absolute top-4 right-4 px-3 py-1 backdrop-blur-md bg-white/40 border border-white/60 rounded-full text-xs font-bold text-gray-800 shadow-lg"
            >
              {project.date}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 backdrop-blur-lg bg-white/20 border-t border-white/20 relative z-10">
            {/* Title */}
            <motion.h3
              animate={isHovered ? { x: 5 } : { x: 0 }}
              className="text-xl font-bold text-gray-800 drop-shadow-sm mb-2"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              animate={
                isHovered
                  ? { opacity: 1, height: 'auto' }
                  : { opacity: 0.7, height: '2.5rem' }
              }
              transition={{ duration: 0.3 }}
              className="text-sm text-gray-700 line-clamp-2 mb-4 overflow-hidden"
            >
              {project.description}
            </motion.p>

            {/* Metrics Bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 space-y-2 text-xs"
            >
              {[
                { label: 'Performance', value: project.metrics.performance },
                { label: 'A11y', value: project.metrics.accessibility },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">{metric.label}:</span>
                  <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-2 py-1 backdrop-blur-md bg-white/30 border border-white/40 rounded-full text-xs font-semibold text-gray-700 shadow-sm hover:bg-white/40 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-semibold text-gray-600">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewDetails}
                className="flex-1 px-3 py-2 backdrop-blur-md bg-white/40 border border-white/60 rounded-xl font-bold text-gray-800 hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Zap size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Details</span>
              </motion.button>

              {project.liveUrl !== '#' && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 backdrop-blur-md bg-white/30 border border-white/40 rounded-xl font-bold text-gray-800 hover:bg-white/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  <span>Live</span>
                </motion.a>
              )}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 backdrop-blur-md bg-white/30 border border-white/40 rounded-xl font-bold text-gray-800 hover:bg-white/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Github size={16} className="group-hover:-rotate-12 transition-transform" />
                <span>Code</span>
              </motion.a>
            </div>
          </div>

          {/* Shine Effect */}
          {isHovered && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
