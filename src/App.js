import React from "react";
import "./App.css";
import TitlesAndIcons from "./secrtions/TitlesAndIcons";
import AboutSection from "./secrtions/AboutSection";
import SkillSection from "./secrtions/SkillSection";

function App() {
  return (
    <div className="App">
      <div className="navigation"></div>
      <TitlesAndIcons />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
