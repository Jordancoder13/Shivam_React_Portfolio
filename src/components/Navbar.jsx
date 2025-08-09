import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaCode, FaRocket } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 1,
      text: "Home",
      icon: "🏠"
    },
    {
      id: 2,
      text: "About",
      icon: "👨‍💻"
    },
    {
      id: 3,
      text: "Project's",
      icon: "💼"
    },
    {
      id: 4,
      text: "Experience",
      icon: "⚡"
    },
    {
      id: 5,
      text: "Contact",
      icon: "📞"
    },
  ];

  return (
    <>
      <div
        id="nav"
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-18 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-red-900/20 border-b border-red-700/20' 
            : 'bg-black/80 backdrop-blur-sm'
        } text-white`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <FaRocket className="text-red-500 text-xl animate-pulse" />
              <div>
                <h1 className="font-bold text-xl cursor-pointer group">
                  <span className="group-hover:text-red-400 transition-colors duration-300">Shiv</span>
                  <span className="text-red-600 text-2xl">am</span>
                </h1>
                <p className="text-xs text-gray-400 font-medium">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-1">
              {navItems.map(({ id, text, icon }) => (
                <li key={id} className="group">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="px-4 py-2 mx-1 rounded-lg cursor-pointer text-gray-300 hover:text-white transition-all duration-300 hover:bg-red-700/20 hover:shadow-lg hover:shadow-red-700/25 flex items-center gap-2 font-medium group-hover:scale-105"
                  >
                    <span className="group-hover:animate-bounce">{icon}</span>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="p-2 rounded-lg hover:bg-red-700/20 transition-all duration-300 hover:scale-110"
              >
                {menu ? (
                  <IoCloseSharp className="text-2xl text-red-500" />
                ) : (
                  <AiOutlineMenu className="text-2xl hover:text-red-500 transition-colors duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="md:hidden">
            <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-red-700/20 shadow-2xl shadow-red-900/20">
              <ul className="flex flex-col py-4 space-y-2 px-4">
                {navItems.map(({ id, text, icon }) => (
                  <li key={id} className="group">
                    <Link
                      onClick={() => setMenu(false)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-gray-300 hover:text-white transition-all duration-300 hover:bg-red-700/20 hover:shadow-lg hover:shadow-red-700/25 group-hover:translate-x-2 font-medium"
                    >
                      <span className="text-lg group-hover:animate-bounce">{icon}</span>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
