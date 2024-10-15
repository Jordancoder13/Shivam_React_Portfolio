import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("Home"); // Tracks the currently active item

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
                  className={`hover:scale-105 duration-200 cursor-pointer ${
                    activeNav === text
                      ? "text-red-700 border-b-[2px] border-red-700"
                      : "hover:border-b-[2px] hover:border-red-700"
                  }`}
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-red-700"
                    onClick={() => setActiveNav(text)} // Update the active item on click
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
          <>
            {/* Close icon positioned in the top-right corner */}
            <div className="fixed top-4 right-4 z-50 md:hidden">
              <IoCloseSharp
                size={24}
                className="cursor-pointer text-white"
                onClick={() => setMenu(false)}
              />
            </div>

            {/* The actual glass menu */}
            <div className="fixed inset-0 z-40 backdrop-blur-md  border- rounded-md h-[300px] w-[280px] ml-[150px] sm:ml-[400px] sm:w-[350px]">
              <ul className="flex flex-col h-full items-center justify-center space-y-3 text-xl">
                {navItems.map(({ id, text }) => (
                  <li
                    className={`hover:scale-105 duration-200 font-semibold cursor-pointer ${
                      activeNav === text
                        ? "text-red-700 border-b-[2px] border-red-700"
                        : "hover:border-b-[2px] hover:border-red-700"
                    }`}
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="hover:text-red-700"
                      onClick={() => {
                        setMenu(false); // Close the menu when a link is clicked
                        setActiveNav(text); // Update the active item on click
                      }}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Navbar;
