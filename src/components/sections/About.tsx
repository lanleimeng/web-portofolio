import { ImageWithFallback } from "../ImageWithFallback";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent via-white/50 to-transparent relative">
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B8EBD0]/5 via-transparent to-[#DCC8F0]/5 backdrop-blur-sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Photo */}
          <motion.div 
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Glass Background for Photo */}
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(184, 235, 208, 0.3)", "0 0 0 20px rgba(184, 235, 208, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-8 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" 
              />
              
              {/* Ambient Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-[#B8EBD0]/30 to-[#DCC8F0]/30 rounded-full blur-xl" 
              />
              
              {/* Glass Frame */}
              <div className="relative backdrop-blur-lg bg-white/10 p-4 rounded-full border border-white/30 shadow-2xl">
                <ImageWithFallback
                  src="/assets/Profile.jpg"
                  alt="Ramon Silvanus Sebayang"
                  className="relative w-72 h-72 object-cover rounded-full border-2 border-white/40 shadow-inner"
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Glass Card for Content */}
            <motion.div 
              className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl"
              whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
            >
              <h2 className="text-4xl mb-6 text-gray-800 drop-shadow-lg">About Me</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20 shadow-lg"
                >
                  Hi there! I'm Ramon, a passionate web developer and Flutter enthusiast with a love for creating beautiful, functional digital experiences. I specialize in building modern web applications and mobile apps that not only look great but also provide exceptional user experiences.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}