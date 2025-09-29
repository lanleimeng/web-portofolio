import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Job-Finder Web App",
    description: "A responsive web dashboard built with React, TypeScript, and Express, featuring real-time data visualization and user management.",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzU4OTY3MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Express", "MongoDB", "TypeScript", "REST API"],
    bgColor: "bg-[#f8d7da]", 
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Flutter Task Manager",
    description: "A cross-platform mobile application for task management with offline capability and cloud synchronization.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTQ1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Flutter", "Firebase", "Dart"],
    bgColor: "bg-[#cde6f5]", // baby blue
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc1ODk2NzM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["JavaScript", "Express", "MongoDB", "Mongoose"],
    bgColor: "bg-[#f8d7da]", // blush pink
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Personal Blog Website",
    description: "A responsive blog platform with CMS integration, SEO optimization, and social media sharing capabilities.",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzU4OTY3MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    bgColor: "bg-[#cde6f5]", // baby blue
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent via-[#f8f9fa]/30 to-transparent relative">
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B8EBD0]/5 via-transparent to-[#F9D3B4]/5 backdrop-blur-sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glass Header */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl mb-8 inline-block">
            <h2 className="text-4xl mb-4 text-gray-800 drop-shadow-lg">Featured Projects</h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              Here are some of my recent projects that showcase my skills in web development and mobile app creation.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] rounded-3xl overflow-hidden group backdrop-blur-xl bg-white/20 border border-white/30">
              <CardContent className="p-0">
                {/* Image Container with Glass Overlay */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Glass Overlay on Image */}
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                
                {/* Content with Glass Effect */}
                <div className="p-6 backdrop-blur-lg bg-white/30 border-t border-white/20">
                  <h3 className="text-xl mb-3 text-gray-800 drop-shadow-sm">{project.title}</h3>
                  <div className="backdrop-blur-sm bg-white/20 p-4 rounded-2xl border border-white/30 mb-4">
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Glass Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 backdrop-blur-md bg-white/30 text-gray-700 rounded-full text-sm border border-white/40 shadow-lg hover:bg-white/40 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Glass Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="backdrop-blur-md bg-white/30 border-white/40 text-gray-700 hover:bg-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="backdrop-blur-md bg-white/30 border-white/40 text-gray-700 hover:bg-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}