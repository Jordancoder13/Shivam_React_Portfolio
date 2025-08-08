import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="relative max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
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

      <div className="space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
        {/* Heading Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-bold mb-3 sm:mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
            Below are the details to reach out to me!
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Address */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20">
            <div className="flex justify-center mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-red-600/30">
                <FaMapMarkerAlt className="text-black h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Address</h3>
            <p className="text-xs sm:text-sm text-gray-300">Bangalore, India</p>
          </div>

          {/* Contact Number */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20">
            <div className="flex justify-center mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-red-600/30">
                <RiContactsFill className="text-black h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Contact Number</h3>
            <p className="text-xs sm:text-sm text-gray-300">+91 797 *** 1448</p>
          </div>

          {/* Email Address */}
          <a 
            href="mailto:shivamtripathi74237@gmail.com"
            className="block focus:outline-none"
          >
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer group focus:outline-none">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 transition-all duration-300">
                  <MdEmail className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Email Address</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-red-400 transition-colors duration-200 break-all sm:break-normal">
                shivamtripathi74237@gmail.com
              </p>
            </div>
          </a>

          {/* Download Resume */}
          <a 
            href="https://drive.google.com/file/d/1y7grnNpptkr_Vh0eZqxZmZda64z4oUIF/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer group focus:outline-none">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 transition-all duration-300">
                  <IoMdDownload className="text-white h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Download Resume</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">Click to View Resume</p>
            </div>
          </a>
        </div>

        {/* Have a Question Section */}
        <div className="text-center bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border border-red-700/30 rounded-xl p-6 sm:p-8 backdrop-blur-lg shadow-xl shadow-red-900/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-white">
            Have a <span className="font-bold text-red-400 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Question?</span>
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgBmZo6yHnpEn0bfyWXIj1KYQXxODDbK-vCQM4vuTeH3JW1A/viewform?usp=sf_link"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 border border-red-500/30 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
