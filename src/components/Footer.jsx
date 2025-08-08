import React from "react";
import {
  FaGithub ,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-6 sm:py-8 md:py-10">
      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 text-white">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="https://github.com/Jordancoder13/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaGithub 
                size={20} 
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 hover:text-red-700 transition-all duration-300 group-hover:scale-110" 
              />
            </a>
            <a 
              href="https://x.com/i/flow/login?redirect_after_login=%2Fshivamtrip17216" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaTwitter 
                size={20} 
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 hover:text-red-700 transition-all duration-300 group-hover:scale-110" 
              />
            </a>
            <a 
              href="https://www.instagram.com/the_name_is.shivam/?igsh=MTZnMm40a3RlZzR3OA%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram 
                size={20} 
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 hover:text-red-700 transition-all duration-300 group-hover:scale-110" 
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/shivam-tripathi-625b78256/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedinIn 
                size={20} 
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 hover:text-red-700 transition-all duration-300 group-hover:scale-110" 
              />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs border-t border-gray-700"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              &copy; 2024 This template is made with ❤️ by{" "}
              <span className="text-red-700 font-semibold">Shivam Tripathi</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
