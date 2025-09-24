import React from "react";
import { motion } from "framer-motion";

const Tag = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-white/95 shadow-sm">
    {children}
  </span>
);

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02 },
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    whileHover="hover"
    variants={cardVariants}
    transition={{ duration: 0.32, ease: "easeOut" }}
    className="backdrop-blur-sm bg-white/3 border border-white/6 rounded-2xl overflow-hidden"
  >
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-start mb-4">
        {project.repoUrl ? (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-2xl font-bold text-white hover:underline">
            {project.title}
          </a>
        ) : (
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        )}
      </div>
      <p className="text-white/80 mb-6 text-base leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, index) => (
          <Tag key={index}>{tech}</Tag>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Reddit Clone",
      description: "A Reddit-like platform with advanced user authentication using JWT and Spring Security, supporting posts, likes and comments.",
      repoUrl: null,
      technologies: ["Angular", "Java", "Spring Boot", "Spring Security"]
    },
    {
      title: "Distributed Job Scheduler",
      description: "A Spring Boot job scheduler with Redis queues, PostgreSQL storage, and Prometheus + Grafana integration for monitoring.",
      repoUrl: null,
      technologies: ["Spring Boot", "Redis", "PostgreSQL", "Docker", "Prometheus"]
    },
    {
      title: "AI Resume Matcher",
      description: "An AI-powered recruiter tool using FastAPI and OpenAI embeddings to match resumes with job descriptions and a Streamlit frontend for non-technical users.",
      repoUrl: null,
      technologies: ["Python", "FastAPI", "TensorFlow", "Pinecone"]
    },
    {
      title: "Placement Software, IEEE MSIT",
      description: "Created a placement portal using Java and Spring Boot with role-based access for students, admins, and recruiters. Optimized MySQL queries and enabled real-time job posting notifications to improve coordination.",
      repoUrl: null,
      technologies: ["Java", "Spring Boot", "MySQL", "Notifications"]
    },
    {
      title: "LLM Research Assistant Chatbot",
      description: "LLM-based chatbot that answers research questions from uploaded PDFs, notes, or CSVs using LangChain + OpenAI and a FAISS vector store; tuned prompts for citation-based, grounded answers.",
      repoUrl: null,
      technologies: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"]
    },
    {
      title: "University Selector",
      description: "Data analysis and web-scraping project to aid international students in university selection using Selenium, NumPy, and Keras for visualizations and modeling.",
      repoUrl: null,
      technologies: ["Python", "Selenium", "NumPy", "Keras", "Matplotlib"]
    },
  ];

  return (
    <section className="min-h-[calc(100vh-7rem)] py-10 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
          <p className="mt-2 text-sm text-white/80 max-w-2xl mx-auto">Selected projects and ideas — click a card for more.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
