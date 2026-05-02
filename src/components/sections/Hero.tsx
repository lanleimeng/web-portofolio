import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useParallax } from "../../hooks/useScrollAnimation";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const { ref, offset } = useParallax(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        ref={ref}
        style={{ y: offset }}
        className="absolute inset-0 bg-gradient-to-br from-[#B8EBD0] via-[#CDE6F5] to-[#DCC8F0]" 
      />
      
      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-[1px]" />
      
      {/* Floating Glass Elements with Animation */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-24 h-24 bg-[#F9D3B4]/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#DCC8F0]/25 backdrop-blur-sm rounded-xl border border-white/30" 
      />
      
      {/* Content Container with Glass Effect */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl mb-6 text-gray-800 drop-shadow-lg"
          >
            Ramon Silvanus Sebayang
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto drop-shadow-md"
          >
            Web Developer & Flutter Enthusiast
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              onClick={scrollToProjects}
              className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-gray-800 px-8 py-6 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              size="lg"
            >
              <motion.span 
                className="drop-shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                View My Work
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Animated Ambient Light Effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 bg-[#B8EBD0]/20 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-56 h-56 bg-[#DCC8F0]/15 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#F9D3B4]/20 rounded-full blur-2xl" 
      />

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex items-start justify-center p-2">
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gray-800 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}