import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import anf from  "./images/anf.jpeg";
import swe1 from  "./images/swe1.jpeg";
import avensis from  "./images/avensis.jpeg";
import snp from  "./images/snp.jpeg";
import cds from  "./images/TeamPhotoClassPresentationCDSS2024.png";
import schoolvisit from  "./images/schoolvisit.jpeg";





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

const Card = ({ children }) => (
  <motion.div initial="hidden" animate="visible" whileHover="hover" variants={cardVariants} transition={{ duration: 0.32, ease: "easeOut" }} className="backdrop-blur-sm bg-white/3 border border-white/6 rounded-2xl p-6">
    {children}
  </motion.div>
);

const DraggableImages = () => {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calc = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;
      const outerW = outer.getBoundingClientRect().width;
      const innerW = track.scrollWidth;
      const maxDrag = Math.max(0, innerW - outerW);
      setConstraints({ left: -maxDrag, right: 0 });
    };

    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const images = [ cds, swe1, avensis, snp,anf, schoolvisit];

  return (
    <div ref={outerRef} className="overflow-x-auto rounded-2xl" style={{ WebkitOverflowScrolling: 'touch' }} tabIndex={0}>
      <motion.div className="overflow-visible px-4 py-2">
        <motion.div ref={trackRef} drag="x" dragConstraints={constraints} className="flex gap-4" style={{ cursor: 'grab', touchAction: 'pan-y' }}>
          {images.map((src, i) => (
            <div key={i} className="w-80 h-44 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 via-purple-700 to-slate-800">
              <img src={src} alt={`outreach-${i + 1}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Outreach = () => {
  return (
    <section className="min-h-[calc(100vh-7rem)] py-10 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-white">Outreach</h1>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">I enjoy sharing knowledge and contributing to the frontend community — through talks, open-source work, mentorship, and writing.</p>
        </div>

        {/* swipeable header images: 5 placeholders (draggable with dynamic constraints) */}
        <div className="mb-8">
          <div ref={null} className="overflow-hidden rounded-2xl">
            <motion.div className="overflow-hidden">
              {/* trackRef is the inner draggable container */}
              {/* outerRef is the visible viewport */}
              {/* We'll compute dragMax = innerWidth - outerWidth and set dragConstraints={{ left: -dragMax, right: 0 }} */}
              <DraggableImages />
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-white">Leadership & Awards</h3>
            <ul className="mt-3 list-disc list-inside text-white/85 space-y-2">
              <li>Head, Communication Department — TA in Public Speaking</li>
              <li>S&P Global Star Award — recipient for exceptional performance</li>
              <li>IEEE Women in Engineering — Chairperson for promoting women in STEM</li>
              <li>Chief organiser of Publicity and Sponsorship department of annual college fest</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-white">Talks & Workshops</h3>
            <ul className="mt-3 list-disc list-inside text-white/85 space-y-2">
              <li>"Modern Component Design" — Guest workshop at FrontendConf (2024)</li>
              <li>Attended Grace Hopper Celebration (GHC) — 2024</li>
              <li>Attended Grace Hopper Celebration (GHC) — 2023</li>
              <li>Attended SWE Conference — 2024</li>
              <li>"Performance for React Apps" — Meetup series (2023)</li>
            </ul>
            <a href="#" className="mt-4 inline-block text-sm text-blue-400 hover:underline">See full list</a>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-white">Open Source</h3>
            <p className="mt-3 text-white/85">Contributed to component libraries, accessibility tooling, and developer tooling. I focus on high-impact PRs and clear documentation.</p>

            <a href="https://github.com/KritiArora" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-blue-400 hover:underline">View contributions</a>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-white">Community Events & Mentorship</h3>
            <p className="mt-2 text-white/85">If you'd like me to speak or run a workshop for your team or community, please reach out — I tailor sessions to the audience and goals.</p>
            <p className="mt-3 text-white/85">I also mentor early-career developers; mentorship slots are limited. Email to apply or to request a session.</p>
            <div className="mt-4 text-sm text-white/80">Typical session topics: Component Design, Accessibility Checklist, React Performance, Testing Strategies.</div>
            <div className="mt-4">
              <a href="mailto:kriti.cs.ucd@gmail.com" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md">Get in touch</a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
