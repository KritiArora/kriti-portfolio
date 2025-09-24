import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Name from "./components/name";
import Resume from "./components/resume";
import Skills from "./components/skills";
import ContactForm from "./components/contact";
import Projects from "./components/projects";
import ProfileImage from './components/images/profile.jpg';
import WorkExperience from "./components/workExperience";
import Outreach from "./components/outreach";
import KritiPhoto from "./components/images/KritiPhoto.jpeg";


function App() {
  const [activeComponent, setActiveComponent] = useState("workexperience");

  const handleButtonClick = (buttonName) => {
    setActiveComponent(buttonName.toLowerCase());
  };

  return (
    <div className="min-h-screen">
      <Navbar onButtonClick={handleButtonClick} active={activeComponent} />
      <div className="pt-24">
        {activeComponent === "home" && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[calc(100vh-12rem)] items-center">
              <div className="lg:col-span-7 space-y-8">
                <Name />
              </div>
              <div className="lg:col-span-5 mt-6 lg:mt-0 flex justify-center lg:justify-end items-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden glass-effect p-2 profile-ring">
                  <img src={KritiPhoto} alt="Kriti" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeComponent === "skills" && <Skills/>}
        {activeComponent === "projects" && <Projects/>}
        {activeComponent === "outreach" && <Outreach/>}
        {activeComponent === "contact" && <ContactForm/>}
        {activeComponent === "workexperience" && <WorkExperience/>}
      </div>
  {/* removed extra floating profile bubble to avoid duplicate placeholder */}
    </div>
  );
}

export default App;