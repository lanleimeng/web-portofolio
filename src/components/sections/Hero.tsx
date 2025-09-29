import { Button } from "../ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8EBD0] via-[#CDE6F5] to-[#DCC8F0]" />
      
      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-[1px]" />
      
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#F9D3B4]/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#DCC8F0]/25 backdrop-blur-sm rounded-xl border border-white/30" />
      
      {/* Content Container with Glass Effect */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
          <h1 className="text-5xl md:text-7xl mb-6 text-gray-800 drop-shadow-lg">
            Ramon Silvanus Sebayang
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto drop-shadow-md">
            Web Developer & Flutter 
          </p>
          <Button 
            onClick={scrollToProjects}
            className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-gray-800 px-8 py-6 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            size="lg"
          >
            <span className="drop-shadow-sm">View My Work</span>
          </Button>
        </div>
      </div>
      
      {/* Ambient Light Effects */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#B8EBD0]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-[#DCC8F0]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#F9D3B4]/20 rounded-full blur-2xl" />
    </section>
  );
}