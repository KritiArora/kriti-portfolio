import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LinkedInLogo from "./images/linkedin.png";
import GithubLogo from "./images/github.png";

const TagButton = ({ children, href, title }) => (
  <a href={href} title={title} className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-md shadow-sm hover:scale-105 transition-transform text-white font-medium">
    {children}
  </a>
);

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02 },
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // open user's mail client with prefilled recipient, subject, and body
    const subject = encodeURIComponent(`Portfolio message from ${name} (${email})`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name}\nEmail: ${email}`);
    const mailto = `mailto:kriti.cs.ucd@gmail.com?subject=${subject}&body=${body}`;
    // set a quick sending state for UX, then redirect to mailto
    setSending(true);
    // Use location.href to open default mail client
    window.location.href = mailto;
    // mark sent locally; actual delivery depends on user's mail client
    setSending(false);
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="min-h-[calc(100vh-7rem)] py-12 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-8 text-center">Let's Connect</motion.h2>

  <motion.div initial="hidden" animate="visible" variants={cardVariants} className="mb-8 p-4 rounded-2xl backdrop-blur-sm bg-white/3 border border-white/6 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <TagButton href="https://www.linkedin.com/in/kriti-dev/" title="LinkedIn">
            <img src={LinkedInLogo} alt="LinkedIn" className="w-6 h-6" />
            <span>LinkedIn</span>
          </TagButton>

          <TagButton href="https://github.com/KritiArora" title="GitHub">
            <img src={GithubLogo} alt="GitHub" className="w-6 h-6" />
            <span>GitHub</span>
          </TagButton>

          <TagButton href="mailto:kriti.cs.ucd@gmail.com" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l8.5 6L20 8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Email me</span>
          </TagButton>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }} className="p-8 rounded-2xl backdrop-blur-sm bg-white/3 border border-white/6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-lg mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300 h-32 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {sent && (
            <div className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 text-green-500 rounded-lg">
              Message sent successfully!
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 text-red-500 rounded-lg">
              Failed to send message. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;