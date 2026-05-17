import ProjectForm from "./ProjectForm";
import ExperienceJourney from "./ExperienceJourney";

import "./App.css";

import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import WebsiteDevelopment from "./WebsiteDevelopment";

function App() {
  return (
    <>
      {window.location.pathname === "/website-development" ? (
        <WebsiteDevelopment />
      ) : window.location.pathname === "/project-form" ? (
        <ProjectForm />
      ) : window.location.pathname === "/experience-journey" ? (
        <ExperienceJourney />
      ) : (
        <div className="App">
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Experience />
          <Clients />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
