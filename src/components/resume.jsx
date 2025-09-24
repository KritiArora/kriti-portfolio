import React from "react";

const Resume = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-white">KRITI KRITI</h1>
          <div className="mt-3 text-sm text-white/70 flex flex-wrap gap-4">
            <span>kakriti623@gmail.com</span>
            <span>|</span>
            <span>+1 (530) 746-1462</span>
            <span>|</span>
            <span>Davis, CA (Ready to relocate)</span>
            <span>|</span>
            <a className="text-blue-300 hover:underline" href="https://linkedin.com/in/kriti-dev" target="_blank" rel="noreferrer">linkedin.com/in/kriti-dev</a>
          </div>
        </header>

        <div className="grid md:grid-cols-1 gap-6">
          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="flex flex-col gap-3">
              <button
                className="glass-effect px-6 py-3 font-semibold text-lg text-white rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                onClick={() => window.open("https://docs.google.com/document/d/1fvozztIhL1NWmrFvUIvF2XS9xaJhQjexn5etDRSyWbs/edit?pli=1&tab=t.0")}
              >
                View Resume
              </button>
              <a className="text-sm text-white/80 hover:underline" href="mailto:kakriti623@gmail.com">Email me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
