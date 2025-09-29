import { Code, Smartphone, Database, Globe, Server, Layers } from "lucide-react";

const skills = [
  {
    name: "Flutter",
    icon: Smartphone,
    color: "bg-[#B8EBD0]", // mint
    iconColor: "text-[#2d5a3d]"
  },
  {
    name: "JavaScript/TypeScript",
    icon: Code,
    color: "bg-[#F9D3B4]", 
    iconColor: "text-[#8b4513]"
  },
  {
    name: "React/Next.js",
    icon: Globe,
    color: "bg-[#DCC8F0]",
    iconColor: "text-[#6b46c1]"
  },
  {
    name: "Tailwind CSS",
    icon: Layers,
    color: "bg-[#CDE6F5]", 
    iconColor: "text-[#1e40af]"
  },
  {
    name: "REST API",
    icon: Server,
    color: "bg-[#B8EBD0]", 
    iconColor: "text-[#2d5a3d]"
  },
  {
    name: "Express",
    icon: Server,
    color: "bg-[#F9D3B4]", 
    iconColor: "text-[#8b4513]"
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "bg-[#DCC8F0]", 
    iconColor: "text-[#6b46c1]"
  },
  {
    name: "Mongoose",
    icon: Database,
    color: "bg-[#CDE6F5]", 
    iconColor: "text-[#1e40af]"
  }
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-white/20 to-transparent relative">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CDE6F5]/10 via-transparent to-[#B8EBD0]/10 backdrop-blur-sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glass Header */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl inline-block">
            <h2 className="text-4xl mb-4 text-gray-800 drop-shadow-lg">Skills & Technologies</h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              I work with modern technologies to build scalable and efficient applications.
            </p>
          </div>
        </div>
        
        {/* Glass Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glass Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              
              {/* Colored Glow Background */}
              <div className={`absolute inset-0 ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`} />
              
              <div className="relative z-10">
                {/* Icon with Glass Background */}
                <div className="flex justify-center mb-4">
                  <div className="backdrop-blur-md bg-white/30 p-3 rounded-2xl border border-white/40 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <skill.icon className={`w-12 h-12 ${skill.iconColor} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`} />
                  </div>
                </div>
                
                {/* Skill Name with Glass Background */}
                <div className="backdrop-blur-sm bg-white/20 px-3 py-1 rounded-full border border-white/30 inline-block">
                  <h3 className={`${skill.iconColor} group-hover:scale-105 transition-transform duration-200 drop-shadow-sm`}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Glass CTA */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 inline-flex items-center gap-4 rounded-3xl px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="w-4 h-4 bg-gradient-to-r from-[#B8EBD0] to-[#CDE6F5] rounded-full animate-pulse shadow-lg" />
            <span className="text-gray-800 drop-shadow-sm">Always learning and exploring new technologies!</span>
            <div className="w-4 h-4 bg-gradient-to-r from-[#F9D3B4] to-[#DCC8F0] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}