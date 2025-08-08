import React from "react";

import pic from "./img/final1.png"; // Adjusted path to the img folde

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="relative max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28 bg-black text-white min-h-screen flex items-center overflow-hidden"
      >
        {/* Animated Particle Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
        </div>

        <div className="w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 lg:space-y-20">
                <span className="inline-block text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium tracking-wide uppercase">
                  Welcome In My Feed
                </span>
                
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="text-white block">Hello!</span>
                    <span className="text-white block">I'm <span className="text-red-700">Shivam</span></span>
                    <span className="text-red-700 block">Tripathi</span>
                  </h1>
                  
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-700 min-h-[1.5em] sm:min-h-[2em]">
                    <ReactTyped
                      strings={["Developer", "Programmer", "Coder", "App Developer"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop={true}
                    />
                  </div>
                </div>

                {/* Social Media and Tech Stack Section */}
                <div className="flex flex-col  sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-8 lg:mt-10">
                  {/* Available on */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="ml-4 font-semibold text-xs sm:text-sm lg:text-base xl:text-lg mb-2 sm:mb-3 lg:mb-4 text-gray-200 tracking-wider uppercase">
                      Available on
                    </h3>
                    <ul className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 lg:gap-4">
                      <li className="group">
                        <a 
                          href="https://github.com/Jordancoder13/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-red-700/20 border border-gray-700 hover:border-red-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-700/25 transform group-hover:-translate-y-0.5"
                        >
                          <FaGithub className="text-sm sm:text-base lg:text-lg text-gray-300 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group">
                        <a 
                          href="https://www.linkedin.com/in/shivam-tripathi-625b78256/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 transform group-hover:-translate-y-0.5"
                        >
                          <FaLinkedin className="text-sm sm:text-base lg:text-lg text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group">
                        <a 
                          href="https://www.youtube.com/@CodeDiariesandAI" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-red-600/20 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 transform group-hover:-translate-y-0.5"
                        >
                          <IoLogoYoutube className="text-sm sm:text-base lg:text-lg text-gray-300 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Currently working on */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-semibold text-xs sm:text-sm lg:text-base xl:text-lg mb-2 sm:mb-3 lg:mb-4 text-gray-200 tracking-wider uppercase">
                      Currently working on
                    </h3>
                    <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 lg:gap-4">
                      <div className="group">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-green-600/20 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25 transform group-hover:-translate-y-0.5">
                          <SiMongodb className="text-sm sm:text-base lg:text-lg text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                      <div className="group">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-gray-600/20 border border-gray-700 hover:border-gray-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-500/25 transform group-hover:-translate-y-0.5">
                          <SiExpress className="text-sm sm:text-base lg:text-lg text-gray-300 group-hover:text-gray-200 group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                      <div className="group">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 transform group-hover:-translate-y-0.5">
                          <FaReact className="text-sm sm:text-base lg:text-lg text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                      <div className="group">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800/50 hover:bg-green-600/20 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25 transform group-hover:-translate-y-0.5">
                          <FaNodeJs className="text-sm sm:text-base lg:text-lg text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300">
                  <img
                    src={pic}
                    className="w-76 h-116 xs:w-84 xs:h-132 sm:w-92 sm:h-148 md:w-100 md:h-164 lg:w-92 lg:h-148 xl:w-100 xl:h-164 2xl:w-112 2xl:h-180 object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Shivam Tripathi"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute inset-0 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -inset-1  rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
