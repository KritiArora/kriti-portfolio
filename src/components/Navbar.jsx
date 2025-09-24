import React, { useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = ({ onButtonClick, active }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = navRef.current;
      if (!el) return;
      if (window.scrollY > 20) {
        el.classList.add("scrolled");
      } else {
        el.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-[#191825] bg-opacity-80 backdrop-blur-md z-50">
      <div className="flex justify-center items-center h-20 max-w-[1240px] mx-auto px-4">
        <ul className="flex flex-row flex-wrap justify-center gap-1 md:gap-2 lg:gap-4">
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("home")}
              className={`nav-link ${active === "home" ? "active" : ""}`}
              aria-current={active === "home" ? "page" : undefined}
            >
              Home
            </button>
          </li>
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("workexperience")}
              className={`nav-link ${active === "workexperience" ? "active" : ""}`}
              aria-current={active === "workexperience" ? "page" : undefined}
            >
              Work Experience
            </button>
          </li>
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("skills")}
              className={`nav-link ${active === "skills" ? "active" : ""}`}
              aria-current={active === "skills" ? "page" : undefined}
            >
              Skills
            </button>
          </li>
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("projects")}
              className={`nav-link ${active === "projects" ? "active" : ""}`}
              aria-current={active === "projects" ? "page" : undefined}
            >
              Projects
            </button>
          </li>
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("outreach")}
              className={`nav-link ${active === "outreach" ? "active" : ""}`}
              aria-current={active === "outreach" ? "page" : undefined}
            >
              Outreach
            </button>
          </li>
          <li className="p-2 md:p-4 font-normal text-xm md:text-xm lg:text-xl font-serif hover:scale-105 transition duration-300">
            <button
              onClick={() => onButtonClick("contact")}
              className={`nav-link ${active === "contact" ? "active" : ""}`}
              aria-current={active === "contact" ? "page" : undefined}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;