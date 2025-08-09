import React from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaPhone } from "react-icons/fa";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {/* Address */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 h-32 sm:h-36 flex flex-col justify-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-black-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-orange-600/30 group-hover:shadow-orange-600/50 transition-all duration-300">
                <FaMapMarkerAlt className="text-black h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Address</h3>
            <p className="text-xs sm:text-sm text-gray-300">Bhopal, MP, India</p>
          </div>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+91797441448?text=Hello%20Shivam!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer group focus:outline-none h-32 sm:h-36 flex flex-col justify-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-green-500 to-black-600 rounded-full p-3 sm:p-3.5 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300">
                  <FaWhatsapp className="text-black h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-green-400">WhatsApp</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-green-400 transition-colors duration-200">+91 7974444148</p>
            </div>
          </a>

          {/* Call Now */}
          <a 
            href="tel:+91797441448"
            className="block focus:outline-none"
          >
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group focus:outline-none h-32 sm:h-36 flex flex-col justify-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-black-600 rounded-full p-3 sm:p-3.5 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                  <FaPhone className="text-black h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-blue-400">Call Now</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200">+91 7974444148</p>
            </div>
          </a>

          {/* Email Address */}
          <a 
            href="mailto:shivamtripathi7877@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Shivam,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss..."
            className="block focus:outline-none"
          >
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer group focus:outline-none h-32 sm:h-36 flex flex-col justify-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-black-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-600/50 transition-all duration-300">
                  <MdEmail className="text-black h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Email Address</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">
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
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-lg p-4 sm:p-5 text-center hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20 cursor-pointer group focus:outline-none h-32 sm:h-36 flex flex-col justify-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-red-600 to-black-700 rounded-full p-3 sm:p-3.5 shadow-lg shadow-red-600/30 group-hover:shadow-red-600/50 transition-all duration-300">
                  <IoMdDownload className="text-black h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-red-400">Download Resume</h3>
              <p className="text-xs sm:text-sm text-gray-300 hover:text-red-400 transition-colors duration-200">Click to View Resume</p>
            </div>
          </a>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/+91797441448?text=Hello%20Shivam!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 border border-green-400/30 focus:outline-none gap-2"
          >
            <FaWhatsapp className="text-lg" />
            Message on WhatsApp
          </a>
          <a
            href="tel:+91797441448"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 border border-blue-400/30 focus:outline-none gap-2"
          >
            <FaPhone className="text-lg" />
            Call Now
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
