import { ImageWithFallback } from "../ImageWithFallback";
export function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-white/50 to-transparent relative">
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B8EBD0]/5 via-transparent to-[#DCC8F0]/5 backdrop-blur-sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glass Background for Photo */}
              <div className="absolute -inset-8 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B8EBD0]/30 to-[#DCC8F0]/30 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />
              
              {/* Glass Frame */}
              <div className="relative backdrop-blur-lg bg-white/10 p-4 rounded-full border border-white/30 shadow-2xl">
                <ImageWithFallback
                  src="/assets/Profile.jpg"
                  alt="Ramon Silvanus Sebayang"
                  className="relative w-72 h-72 object-cover rounded-full border-2 border-white/40 shadow-inner"
                />
              </div>
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="space-y-6">
            {/* Glass Card for Content */}
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-4xl mb-6 text-gray-800 drop-shadow-lg">About Me</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20 shadow-lg">
                  Hi there! I'm Ramon, a passionate web developer and Flutter enthusiast with a love for creating beautiful, functional digital experiences. I specialize in building modern web applications and mobile apps that not only look great but also provide exceptional user experiences.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}