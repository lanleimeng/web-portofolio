import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, CheckCircle2, BarChart3 } from 'lucide-react';
import type { Project } from '../data/projects';
import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('challenge');

  if (!project) return null;

  const sections = [
    {
      id: 'challenge',
      title: 'Challenge',
      icon: '🎯',
      content: project.caseStudy.challenge,
    },
    {
      id: 'solution',
      title: 'Solution',
      icon: '💡',
      content: project.caseStudy.solution,
    },
    {
      id: 'result',
      title: 'Result',
      icon: '🚀',
      content: project.caseStudy.result,
    },
  ];

  const chartData = project.skills.map((skill) => ({
    name: skill.name,
    value: skill.level,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border-b border-white/20 p-8 flex justify-between items-start">
              <div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block px-3 py-1 backdrop-blur-md bg-white/30 border border-white/40 rounded-full text-sm font-semibold text-gray-700 mb-3 capitalize"
                >
                  {project.type}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl font-bold text-gray-800 drop-shadow-lg"
                >
                  {project.title}
                </motion.h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={onClose}
                className="p-2 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-800" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Project Image & Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="aspect-video rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <BarChart3 size={28} className="text-blue-500" />
                    Project Metrics
                  </h3>

                  {[
                    { label: 'Performance', value: project.metrics.performance, color: 'from-green-400 to-blue-500' },
                    { label: 'Accessibility', value: project.metrics.accessibility, color: 'from-purple-400 to-pink-500' },
                    { label: 'Complexity', value: project.metrics.complexity, color: 'from-yellow-400 to-orange-500' },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{metric.label}</span>
                        <span className="text-lg font-bold text-gray-700">{metric.value}%</span>
                      </div>
                      <div className="w-full h-2 backdrop-blur-md bg-white/20 rounded-full overflow-hidden border border-white/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-700 leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20"
              >
                {project.description}
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      className="flex items-start gap-3 backdrop-blur-md bg-white/20 p-4 rounded-xl border border-white/30"
                    >
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Case Study</h3>
                <div className="space-y-3">
                  {sections.map((section) => (
                    <motion.div
                      key={section.id}
                      className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedSection(expandedSection === section.id ? null : section.id)
                        }
                        className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{section.icon}</span>
                          <span className="font-bold text-gray-800">{section.title}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-gray-700" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedSection === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/20 p-4 bg-white/10 text-gray-800 leading-relaxed"
                          >
                            {section.content}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Radar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills Used</h3>
                <div className="backdrop-blur-md bg-white/20 p-6 rounded-2xl border border-white/30">
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={chartData}>
                      <PolarGrid stroke="rgba(255,255,255,0.2)" />
                      <PolarAngleAxis dataKey="name" tick={{ fill: 'rgba(55,65,81,0.7)' }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: 'rgba(55,65,81,0.5)' }} />
                      <Radar name="Proficiency" dataKey="value" stroke="#b8ebd0" fill="#b8ebd0" fillOpacity={0.25} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 backdrop-blur-md bg-white/30 border border-white/40 rounded-full font-semibold text-gray-800 shadow-lg hover:bg-white/40 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 pt-4"
              >
                {project.liveUrl !== '#' && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 backdrop-blur-md bg-white/40 border border-white/60 rounded-xl font-bold text-gray-800 hover:bg-white/50 transition-colors text-center"
                  >
                    🌐 View Live
                  </motion.a>
                )}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 backdrop-blur-md bg-white/40 border border-white/60 rounded-xl font-bold text-gray-800 hover:bg-white/50 transition-colors text-center"
                >
                  💻 View Code
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
