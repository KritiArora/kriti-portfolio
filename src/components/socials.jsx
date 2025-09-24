import React from "react";
import LinkedInLogo from "./images/linkedin.png";
import GithubLogo from "./images/github.png";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.linkedin.com/in/kriti-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-2 rounded-md shadow-sm hover:scale-105 transition-transform"
      >
        <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-5 h-5" />
        <span className="text-white text-sm">LinkedIn</span>
      </a>
      <a
        href="https://github.com/KritiArora"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-2 rounded-md shadow-sm hover:scale-105 transition-transform"
      >
        <img src={GithubLogo} alt="Github Logo" className="w-5 h-5" />
        <span className="text-white text-sm">GitHub</span>
      </a>
    </div>
  );
};

export default SocialMedia;