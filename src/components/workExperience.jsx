import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layers, Server, Cpu, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "S&P Global",
    period: "Aug 2020 — Aug 2022",
    summary:
      "Built scalable data-driven features and performed platform migrations while improving performance and reducing costs.",
    highlights: [
      "Built a real-time corporate actions dashboard using Python and FastAPI.",
      "Migrated legacy systems to AWS EC2 and introduced CI/CD for zero-downtime deploys.",
      "Designed a Kafka-based alerting system to reduce incident response time.",
    ],
    tech: ["Python", "FastAPI", "Kafka", "AWS", "Docker"],
  },
  {
    role: "Software Engineer Intern",
    company: "ILife Technologies",
    period: "Jun 2024 — Aug 2024",
    summary:
      "Designed and deployed backend services and optimized front-end performance for better user engagement.",
    highlights: [
      "Built Spring Boot microservices for premium calculations.",
      "Optimized React frontend by lazy-loading and code-splitting.",
    ],
    tech: ["Spring Boot", "React", "PostgreSQL", "Java"],
  },
  {
    role: "Graduate Student Researcher",
    company: "UC Davis Health",
    period: "Mar 2024 — Present",
    summary:
      "Research and engineering work on medical imaging and HIPAA-compliant data pipelines for large-scale ML workflows.",
    highlights: [
      "Pioneered a CNN-based diagnostic pipeline for microscopy images.",
      "Architected HIPAA-compliant data pipelines on AWS to process EMR records.",
    ],
    tech: ["Python", "CNNs", "AWS", "S3", "Machine Learning"],
  },
];

const Tag = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-white/95 shadow-sm">
    {children}
  </span>
);

const InfoWidget = ({ title, icon: Icon, children, accent = "from-indigo-600 to-purple-600" }) => (
  <div className={`p-4 rounded-xl bg-gradient-to-br ${accent} text-white shadow-xl ring-1 ring-white/6`}>
    <div className="flex items-start gap-3">
      <div className="p-2 bg-white/8 rounded-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="mt-2 text-xs text-white/90">{children}</div>
      </div>
    </div>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02, boxShadow: "0 20px 40px rgba(2,6,23,0.6)" },
};

const WorkExperience = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 -top-24 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-indigo-700 opacity-18 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white -tracking-tighter">Work Experience</h1>
          <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">Selected roles focused on building reliable systems and delightful UIs. Expand a card to see highlights and technologies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="lg:col-span-2 grid gap-6">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company + idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                transition={{ duration: 0.45, ease: "easeOut" }}
                whileHover="hover"
                className="backdrop-blur-sm bg-white/3 border border-white/6 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                      <span className="text-sm text-white/70">@</span>
                      <h4 className="text-lg font-medium text-white/90">{exp.company}</h4>
                    </div>
                    <div className="mt-2 text-sm text-white/80">{exp.summary}</div>
                  </div>

                  <div className="text-xs text-white/70">{exp.period}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="text-sm text-indigo-300 hover:text-indigo-200 font-medium"
                    aria-expanded={open === idx}
                    aria-controls={`exp-${idx}-details`}
                  >
                    {open === idx ? "Hide details" : `Show more (${exp.highlights.length})`}
                  </button>

                  <AnimatePresence initial={false}>
                    {open === idx && (
                      <motion.div
                        id={`exp-${idx}-details`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="mt-3 overflow-hidden"
                      >
                        <ul className="list-disc list-inside space-y-2 text-sm text-white/85">
                          {exp.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="lg:col-span-1 sticky top-28 self-start space-y-4">
            <InfoWidget title="Frontend Approach" icon={Code} accent="from-indigo-600 to-purple-600">
              Fast, accessible, and component-driven UIs. Prefers measured improvements.
            </InfoWidget>

            <InfoWidget title="Backend Approach" icon={Server} accent="from-slate-700 to-slate-600">
              Reliable services, observability, and secure defaults for production systems.
            </InfoWidget>

            <InfoWidget title="Vision for Data & AI" icon={Sparkles} accent="from-indigo-600 to-purple-600">
              Use ML to improve clinical workflows with privacy-first data practices and robust ops.
            </InfoWidget>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

