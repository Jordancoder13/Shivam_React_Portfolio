import React from "react";
import java from "/java.png";
import python from "/python.webp";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 bg-black text-white"
    >
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-red-700">
            Portfolio
          </h1>
          <span className="text-lg sm:text-xl md:text-2xl text-gray-300 underline font-semibold">
            Featured Technologies
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 cursor-pointer hover:scale-105 hover:border-red-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-700/20"
              key={id}
            >
              <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-gray-800/50 rounded-full border-2 border-gray-600 hover:border-red-700/50 transition-colors duration-300">
                  <img
                    src={logo}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                    alt={name}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Professional experience with {name} development and implementation.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                    Projects
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
