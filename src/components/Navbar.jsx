import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Project's",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div
        id="nav"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-18 shadow-md fixed top-0 left-0 right-0 z-50 bg-black text-white"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <h1 className="font-semibold text-xl cursor-pointer">
              Shiv<span className="text-red-600 text-2xl">am</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-red-700 border-b-[2px] border-red-700"
                    className="hover:text-red-700 hover:border-b-[2px] hover:border-red-700 pb-1 transition-all duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

           {/* mobile menu icon */}
           <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} className="hidden"/> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenu(false)}
            ></div>
            
            {/* Menu Container */}
            <div className="relative flex justify-center items-center min-h-screen p-4">
              <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl w-full max-w-sm mx-auto shadow-2xl">
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <IoCloseSharp
                    size={28}
                    className="cursor-pointer text-white hover:text-red-700 transition-colors duration-200"
                    onClick={() => setMenu(false)}
                  />
                </div>
                
                {/* Navigation Items */}
                <div className="px-6 pb-8">
                  <ul className="space-y-6">
                    {navItems.map(({ id, text }) => (
                      <li key={id}>
                        <Link
                          to={text}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          spy={true}
                          activeClass="text-red-700 bg-red-700/20 border border-red-700/50"
                          className="block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-white hover:text-red-700 hover:bg-red-700/10"
                          onClick={() => setMenu(false)}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;
