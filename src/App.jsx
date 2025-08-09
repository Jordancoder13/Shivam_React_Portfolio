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
        {/* Enhanced Animated Particle Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/15 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
          {/* Additional floating particles with different sizes */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`particle-large-${i}`}
              className="absolute w-2 h-2 bg-red-700/8 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
          {/* Tiny sparkle particles */}
          {[...Array(35)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
          {/* Moving gradient orbs */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-32 h-32 bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Navigation */}
        <div className="relative z-30">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="scroll-smooth">
            <section className="min-h-screen flex items-center">
              <Home />
            </section>
            
            <section className="min-h-screen flex items-center">
              <About />
            </section>
            
            <section className="min-h-screen flex items-center">
              <Experience />
            </section>
            
            <section className="min-h-screen flex items-center">
              <Projects />
            </section>
            
            <section className="min-h-screen flex items-center">
              <Contact />
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#fff',
              border: '1px solid #374151',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
