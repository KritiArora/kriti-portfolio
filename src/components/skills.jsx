import React from 'react';
import { motion } from 'framer-motion';
import CLogo from "./skills/c.png";
import CPPLogo from "./skills/cpp.png";
import DockerLogo from "./skills/docker.png";
import FlaskLogo from "./skills/flask.svg";
import GitLogo from "./skills/git.png";
import GitLabLogo from "./skills/gitlab.png";
import HTMLLogo from "./skills/html.png";
import JavaLogo from "./skills/java.png";
import JSLogo from "./skills/js.png";
import KubLogo from "./skills/k8s.png";
import LinuxLogo from "./skills/linux.svg";
import MongoLogo from "./skills/mongo.png";
import SQLLogo from "./skills/mysql.svg";
import PythonLogo from "./skills/python.svg";
import ReactLogo from "./skills/react.png";
import SelLogo from "./skills/selenium.svg";
import TailwindLogo from "./skills/tailwind.png";
import VimLogo from "./skills/vim.png";
import BashLogo from "./skills/bash.svg";
import animation from "./skill.json";
import Lottie from "react-lottie";

const Tag = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-white/95 shadow-sm">
    {children}
  </span>
);

// InfoWidget removed from Skills page per request; sidebar will show focused quick actions and education only.

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
  hover: { scale: 1.02, boxShadow: '0 20px 40px rgba(2,6,23,0.6)' }
};

const SkillCard = ({ title, logos, extraIcons, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    variants={cardVariants}
    whileHover="hover"
    className="backdrop-blur-sm bg-white/3 border border-white/6 rounded-2xl p-6 mb-8"
  >
    <h2 className="text-left font-semibold text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">{title}</h2>
    <div className="flex flex-wrap gap-4 items-center">
      {logos && logos.map((logo, idx) => (
        <div key={idx} className="hover:scale-110 transition-transform duration-200">
          <img src={logo.src} alt={logo.alt} className="w-12 h-12" />
        </div>
      ))}

      {extraIcons && extraIcons.map((it, i) => (
        <a key={i} href={it.href} target="_blank" rel="noreferrer" className="hover:opacity-90">
          <img src={it.src} alt={it.alt} className="w-10 h-10" />
        </a>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
  };

  const skillGroups = [
    {
      title: "Languages",
      logos: [
        { src: JavaLogo, alt: "Java" },
        { src: JSLogo, alt: "JavaScript" },
        { src: PythonLogo, alt: "Python" },
        { src: CLogo, alt: "C" },
        { src: CPPLogo, alt: "C++" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      logos: [
        { src: ReactLogo, alt: "React" },
        { src: FlaskLogo, alt: "Flask" },
        { src: TailwindLogo, alt: "Tailwind" }
      ]
    },
    {
      title: "Databases & Search",
      logos: [
        { src: MongoLogo, alt: "MongoDB" },
        { src: SQLLogo, alt: "MySQL" }
      ]
    },
    {
      title: "Cloud & DevOps",
      logos: [
        { src: DockerLogo, alt: "Docker" },
        { src: KubLogo, alt: "Kubernetes" },
        { src: GitLogo, alt: "Git" }
      ]
    },
    {
      title: "Tools & Testing",
      logos: [
        { src: GitLabLogo, alt: "GitLab" },
        { src: SelLogo, alt: "Selenium" },
        { src: BashLogo, alt: "Bash" }
      ]
    }
  ];

  const externalLogos = {
    aws: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', href: 'https://aws.amazon.com', alt: 'AWS' },
    elastic: { src: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg', href: 'https://www.elastic.co', alt: 'Elastic' },
    kafka: { src: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg', href: 'https://kafka.apache.org/', alt: 'Kafka' },
    jenkins: { src: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg', href: 'https://www.jenkins.io', alt: 'Jenkins' },
    grafana: { src: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg', href: 'https://grafana.com', alt: 'Grafana' },
    postgresql: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg', href: 'https://www.postgresql.org', alt: 'PostgreSQL' },
    oracle: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg', href: 'https://www.oracle.com/', alt: 'Oracle' },
    redis: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg', href: 'https://redis.io', alt: 'Redis' },
    tensorflow: { src: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', href: 'https://www.tensorflow.org', alt: 'TensorFlow' },
    typescript: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', href: 'https://www.typescriptlang.org/', alt: 'TypeScript' },
    angular: { src: 'https://angular.io/assets/images/logos/angular/angular.svg', href: 'https://angular.io', alt: 'Angular' },
    nodejs: { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', href: 'https://nodejs.org', alt: 'Node.js' }
  };

  return (
    <section className="min-h-[calc(100vh-7rem)] py-10 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute -left-28 -top-20 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-indigo-700 opacity-16 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-left font-bold text-3xl md:text-4xl font-serif text-white mb-6">Education</h1>
            <div className="backdrop-blur-sm bg-white/3 border border-white/6 rounded-2xl p-6 mb-6">
              <div className="text-white/90 grid grid-cols-1 md:grid-cols-2 gap-4">
                <article className="p-4 bg-white/3 rounded-md">
                  <h3 className="font-semibold text-white text-lg">University of California — M.S. Computer Science</h3>
                  <p className="text-sm text-white/80">Sep 2022 - Mar 2025 | Davis, CA</p>
                  <p className="mt-2 text-sm text-white/80">GPA: <span className="font-medium">3.98/4.0</span></p>
                  <ul className="mt-3 text-sm list-disc list-inside text-white/80">
                    <li>Coursework: Software Engineering, Algorithms, ML, AI, Information Security</li>
                    <li>Teaching Assistant in Public Speaking — Tutored 300+ students</li>
                  </ul>
                </article>

                <article className="p-4 bg-white/3 rounded-md">
                  <h3 className="font-semibold text-white text-lg">Guru Gobind Singh Indraprastha University — B.Tech Computer Science</h3>
                  <p className="text-sm text-white/80">Aug 2016 - Sep 2020 | Delhi, India</p>
                  <p className="mt-2 text-sm text-white/80">Graduated top 1% of class</p>
                  <p className="mt-2 text-sm text-white/80">Published: F-RBM for Text Summarization (Taylor & Francis)</p>
                </article>
              </div>
            </div>

            <h1 className="text-left font-bold text-3xl md:text-4xl font-serif text-white mb-6">Tech Stack</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillGroups.map((group, index) => (
                <SkillCard
                  key={index}
                  index={index}
                  title={group.title}
                  logos={group.logos}
                  extraIcons={
                    group.title === 'Frameworks & Libraries'
                      ? [externalLogos.angular, externalLogos.typescript]
                      : group.title === 'Cloud & DevOps'
                      ? [externalLogos.aws, externalLogos.nodejs]
                      : group.title === 'Databases & Search'
                      ? [externalLogos.elastic, externalLogos.postgresql, externalLogos.oracle]
                      : group.title === 'Tools & Testing'
                      ? [externalLogos.kafka, externalLogos.jenkins, externalLogos.grafana, externalLogos.redis, externalLogos.tensorflow]
                      : null
                  }
                />
              ))}

              <div className="md:col-span-2">
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    'TypeScript', 'AWS', 'ElasticSearch', 'Kafka', 'Jenkins', 'Prometheus', 'Grafana',
                    'Spring Boot', 'Spring Security', 'PostgreSQL', 'Oracle', 'Redis', 'Pinecone', 'TensorFlow'
                  ].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* aside removed - Education now shows at top and Tech Stack follows */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
