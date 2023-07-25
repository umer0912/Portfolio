import React from "react";
import index from "./index.css";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact";
import Services from "./Services";
// Unused import: Example is not used in the App component.
// import Example from "./example";

const App = () => {
  return (
    <>
      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Project Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default App;
