import React from "react";
import Navbar from "./components/navbar/Navbar";
import Herosection from "./components/herosection/Herosection";
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import './App.css'


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Herosection />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
