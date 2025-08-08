import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Animated Particle Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
          {/* Additional floating particles with different sizes */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-large-${i}`}
              className="absolute w-2 h-2 bg-red-700/10 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
          {/* Tiny sparkle particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
      <Toaster /> 
    </>
  );
}

export default App;
