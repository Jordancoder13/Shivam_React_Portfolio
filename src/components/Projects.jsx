import React from "react";
import gif from "./img/Proj_1.jpg";
import emply from "./img/Proj_2.jpg";
import tata from "./img/proj_3.jpg";
import starbucks from "./img/proj_4.jpg";
import tesla from "./img/proj_5.jpg";
import portflio from "./img/proj-6.png";
import collegitesAi from "./img/collegites.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      image: collegitesAi,
      name: "Collegites AI",
      paragraph:"Collegites AI is an all-in-one platform that offers AI-powered video generation, image creation, research paper writing, and smart assessment generation. Designed with a clean, user-friendly interface for web and mobile, it makes learning, content creation, and research faster and smarter.",
      visit:"https://app.collegites.tech",
      video:"https://www.youtube.com/watch?v=tSeNvMCUoD0",
    },
    {
      id: 2,
      image: gif,
      name: "Gif Search App",
      paragraph:"Developed a dynamic GIF Search App using Next.js and the GIPHY API, allowing users to search and view GIFs with real-time results. This project enhanced my skills in API integration and server-side rendering, with a focus on responsive design.",
      links:"https://github.com/Jordancoder13/my-gif-app",
      visit:"https://my-gif-app.vercel.app/",
      video:"https://youtu.be/-GVzHLbF-CQ",
    },
    {
      id: 3,
      image:portflio,
      name: "Portflio HTML Css",
      paragraph:"Built a personal portfolio website using HTML, CSS, and JavaScript to showcase projects like a GIF Search App and Tata Neu/Starbucks clones. The site is fully responsive, optimized, and highlights both front-end and back-end development skills.",
      links:"https://github.com/Jordancoder13/Shivam_Portfolio",
      visit:"https://shivamsportfolio-eta.vercel.app/#",
      video:"https://www.youtube.com/shorts/4CK2x9Qrefw?feature=share",
    },
    {
      id: 4,
      image: emply,
      name: "Employee management system",
      paragraph:"Built a web-based system for managing employee records, attendance, and performance, with a responsive, user-friendly interface. This project strengthened my full-stack development and database management skills.",
      links:"https://github.com/Jordancoder13/Employee_management_system",
      video:"https://www.youtube.com/shorts/voOo68JqyQk?feature=share",
    },
    {
      id: 5,
      image: tata,
      name: "Tata Neu Clone",
      paragraph:"The Tata Neu website clone is a front-end project built with React.js, focusing on replicating the site's design and core features. It delivers a user-friendly interface, showcasing modern web development techniques.",
      links:"https://github.com/Jordancoder13/Tata_Neu_Clone",
      video:"https://www.youtube.com/shorts/hARZcksOw78?feature=share",
    },
    {
      id: 6,
      image: starbucks,
      name: "Starbucks Clone",
      paragraph:"The Starbucks clone is a responsive front-end project built with React.js, replicating the design and functionality of the original website. It delivers a seamless user experience, showcasing clean UI components and dynamic interaction.",
      links:"https://github.com/Jordancoder13/Starbucks_Clone",
      video:"https://www.youtube.com/shorts/tTd8hJOyrYQ?feature=share",
    },
    {
      id: 7,
      image:tesla,
      name: "Tesla Clone",
      paragraph:"The Tesla website clone is a front-end project built using HTML, CSS, and JavaScript, replicating the sleek design and interactive elements of the original site. It delivers a user experience, showcasing smooth animations and modern web styling.",
      links:"https://github.com/Jordancoder13/Tesla_clone",
      video:"https://youtu.be/7VpA2gsMpI4",
    },
  ];
  return (
    <div
      name="Project's"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20"
    >
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-red-700 text-center lg:text-left">
          Project's
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cardItem.map(({ id, image, name, paragraph, links, visit, video }) => (
            <div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-red-700/20 hover:border-red-700/50 max-w-xs mx-auto"
              key={id}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                {id === 1 || id === 2 || id === 3 ? (
                  <a href={visit} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image}
                      className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={name}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">View Live</span>
                    </div>
                  </a>
                ) : (
                  <a href={links} target="_blank" rel="noopener noreferrer">
                    <img
                      src={image}
                      className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                      alt={name}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">View Code</span>
                    </div>
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 md:p-5 space-y-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 hover:text-red-600 transition-colors duration-200">
                  {name}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {paragraph}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <a 
                    href={video} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[70px]"
                  >
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-2 sm:px-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                      Video
                    </button>
                  </a>
                  
                  {(id !== 1) && (
                    <a 
                      href={links} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[70px]"
                    >
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-2 sm:px-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                        Source
                      </button>
                    </a>
                  )}
                  
                  {(id === 1 || id === 2 || id === 3) && (
                    <a 
                      href={visit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[70px]"
                    >
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-2 sm:px-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                        Visit
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
