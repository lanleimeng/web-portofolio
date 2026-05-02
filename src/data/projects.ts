export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  bgColor: string;
  liveUrl: string;
  githubUrl: string;
  type: 'web' | 'mobile' | 'platform';
  date: string;
  metrics: {
    performance: number;
    accessibility: number;
    complexity: number;
  };
  features: string[];
  skills: { name: string; level: number }[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Job-Finder Web App",
    description: "A responsive web dashboard built with React, TypeScript, and Express, featuring real-time data visualization and user management.",
    image: "/projects/jobfinder.png",
    technologies: ["React", "Express", "MongoDB", "TypeScript", "Tailwind"],
    bgColor: "bg-[#f8d7da]",
    liveUrl: "https://jobfinder-fawn.vercel.app/",
    githubUrl: "https://github.com/lanleimeng/jobfinder.git",
    type: "web",
    date: "2024",
    metrics: {
      performance: 92,
      accessibility: 88,
      complexity: 75,
    },
    features: [
      "Real-time job search and filtering",
      "Advanced user dashboard",
      "Application tracking system",
      "Responsive mobile design",
      "Real-time data visualization",
    ],
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Express", level: 80 },
      { name: "UI/UX Design", level: 82 },
      { name: "Database Design", level: 78 },
    ],
    caseStudy: {
      challenge: "Build a scalable job portal that could handle thousands of daily users with complex filtering requirements.",
      solution: "Implemented server-side pagination, optimized database queries with indexing, and used React hooks for efficient state management.",
      result: "Achieved 92% Lighthouse performance score and reduced load time by 40% compared to initial version.",
    },
  },
  {
    id: 2,
    title: "POS & Inventory Mobile App",
    description: "A mobile POS and inventory management app designed to help businesses track sales, manage stock, and monitor daily operations in real time.",
    image: "/projects/logogreen_tablet.PNG",
    technologies: ["Flutter", "MySQL", "Dart"],
    bgColor: "bg-[#cde6f5]",
    liveUrl: "#",
    githubUrl: "https://github.com/BBBIJI/Finals_POS.git",
    type: "mobile",
    date: "2023",
    metrics: {
      performance: 95,
      accessibility: 90,
      complexity: 85,
    },
    features: [
      "Point of Sale system with receipt printing",
      "Real-time inventory tracking",
      "Sales analytics and reports",
      "Offline functionality",
      "Multi-location support",
    ],
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 83 },
      { name: "Mobile UX", level: 88 },
      { name: "Database", level: 80 },
      { name: "Business Logic", level: 82 },
    ],
    caseStudy: {
      challenge: "Create a mobile app that works seamlessly offline and syncs data when reconnected, with complex inventory calculations.",
      solution: "Used SQLite for local storage with Firebase sync, implemented efficient offline queuing, and custom conflict resolution.",
      result: "Successfully deployed to 50+ retail locations with 98% uptime and seamless offline experience.",
    },
  },
  {
    id: 3,
    title: "EM.U - Event Management Platform",
    description: "A comprehensive event management platform featuring admin portal, participant registration, QR check-in, real-time analytics dashboard, and detailed reporting capabilities.",
    image: "/projects/emyu.jpg",
    technologies: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Tailwind"],
    bgColor: "bg-[#f8d7da]",
    liveUrl: "https://app.dhanifudin.com/",
    githubUrl: "https://github.com/dhanifudin/yorindo.git",
    type: "platform",
    date: "2024",
    metrics: {
      performance: 88,
      accessibility: 92,
      complexity: 88,
    },
    features: [
      "Admin event creation and management",
      "Participant registration with validation",
      "QR code check-in system",
      "Real-time analytics dashboard",
      "Detailed event reporting",
      "Email notifications",
    ],
    skills: [
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "fastify", level: 95 },
      { name: "Real-time Systems", level: 85 },
      { name: "Analytics", level: 80 },
    ],
    caseStudy: {
      challenge: "Build a scalable event platform that handles thousands of concurrent check-ins with real-time updates.",
      solution: "Implemented WebSocket for real-time updates, optimized QR scanning with efficient algorithms, and used caching strategies.",
      result: "Successfully managed 5000+ attendees per event with zero check-in delays and real-time analytics.",
    },
  },
  {
    id: 4,
    title: "Company Profile Website",
    description: "A modern company profile website built with Next.js, Tailwind CSS, and TypeScript, designed for fast performance and clean user experience.",
    image: "/projects/tbu.png",
    technologies: ["HTML", "CSS", "TypeScript", "Next.js", "Tailwind"],
    bgColor: "bg-[#cde6f5]",
    liveUrl: "https://www.tigabayangutama.com/",
    githubUrl: "https://github.com/lanleimeng/landingpage-tbu.git",
    type: "web",
    date: "2023",
    metrics: {
      performance: 96,
      accessibility: 94,
      complexity: 60,
    },
    features: [
      "SEO optimized landing page",
      "Mobile responsive design",
      "Contact form integration",
      "Service showcase section",
      "Team portfolio",
      "Blog integration",
    ],
    skills: [
      { name: "Next.js", level: 88 },
      { name: "Tailwind", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "SEO", level: 82 },
      { name: "Web Performance", level: 89 },
    ],
    caseStudy: {
      challenge: "Create a high-performing corporate website that ranks well in search engines and loads instantly.",
      solution: "Used Next.js for SSR/SSG, optimized images with next/image, implemented lazy loading, and structured data markup.",
      result: "Achieved 96% Lighthouse score, top Google rankings for key terms, and 40% increase in lead generation.",
    },
  },
];
