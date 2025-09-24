import React from "react";

const About = () => {
  return (
      <div className="min-h-[calc(100vh-7rem)] lg:flex justify-center items-center flex-row flex-wrap">
        <div className="lg:w-1/2 sm:w-full md:w-full pl-10 sm:pl-10 md:pl-14">
          <div className="glass-effect p-8 rounded-lg hover-effect">
            <h1 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Software Developer</h1>
            <div className="h-0.5 w-40 md:w-3/4 lg:w-1/2 xl:w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
            <div className="mt-4 space-y-6">
              <p className="text-left font-light text-lg font-serif text-white leading-relaxed">
                A passionate software developer with expertise in building robust and scalable applications. Skilled in both frontend and backend development, with a keen interest in creating efficient, user-friendly solutions.
              </p>
              <p className="text-left font-light text-lg font-serif text-white leading-relaxed">
                Continuously learning and adapting to new technologies while maintaining a strong foundation in software development best practices. Committed to writing clean, maintainable code and delivering high-quality solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full md:w-full lg:pl-10 sm:pl-0 md:pl-0 lg:mt-0 sm:mt-12 md:mt-12">
          <div className="flex flex-col justify-right items-center">
            <div className="flex flex-col justify-between space-y-6 w-full max-w-lg">
              <div className="glass-effect p-6 rounded-lg hover-effect">
                <h2 className="text-left font-bold text-xl md:text-2xl font-serif text-white mb-4">Nationality</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-wrap">
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; Indian</li>
                  </ul>
                </div>
              </div>
              <div className="glass-effect p-6 rounded-lg hover-effect">
                <h2 className="text-left font-bold text-xl md:text-2xl font-serif text-white mb-4">Interests</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-col flex-wrap gap-2">
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; Software Development</li>
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; AI/ML</li>
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; Open Source</li>
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; Technology</li>
                  </ul>
                </div>
              </div>
              <div className="glass-effect p-6 rounded-lg hover-effect">
                <h2 className="text-left font-bold text-xl md:text-2xl font-serif text-white mb-4">Language proficiencies</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-col flex-wrap gap-2">
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; English</li>
                    <li className="text-left font-light text-lg font-serif text-white inline">&bull; Hindi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;