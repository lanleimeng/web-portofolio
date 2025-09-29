import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Project";
import { Skills } from "./components/sections/Skills";

import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8EBD0]/20 via-white to-[#DCC8F0]/20 relative">
      {/* Global Glass Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        
        <Toaster />
        
        {/* Glass Footer */}
        <footer className="backdrop-blur-xl bg-white/20 border-t border-white/30 py-8 px-6 shadow-2xl relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Glass Dots */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-[#B8EBD0] to-[#CDE6F5] rounded-full shadow-lg backdrop-blur-sm border border-white/40" />
              <div className="w-3 h-3 bg-gradient-to-r from-[#F9D3B4] to-[#DCC8F0] rounded-full shadow-lg backdrop-blur-sm border border-white/40" />
              <div className="w-3 h-3 bg-gradient-to-r from-[#DCC8F0] to-[#B8EBD0] rounded-full shadow-lg backdrop-blur-sm border border-white/40" />
              <div className="w-3 h-3 bg-gradient-to-r from-[#CDE6F5] to-[#F9D3B4] rounded-full shadow-lg backdrop-blur-sm border border-white/40" />
            </div>
            
            {/* Glass Text Container */}
            <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl px-6 py-3 inline-block shadow-lg">
              <p className="text-gray-800 drop-shadow-sm">
                © 2025 Ramon Silvanus Sebayang. Crafted with passion and modern web technologies.
              </p>
            </div>
          </div>
          
          {/* Ambient Footer Glow */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#B8EBD0]/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#DCC8F0]/10 rounded-full blur-3xl" />
        </footer>
      </div>
    </div>
  );
}