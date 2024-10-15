import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div>
      
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster /> 
    </>
  );
}

export default App;
