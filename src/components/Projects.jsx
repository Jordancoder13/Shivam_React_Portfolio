import React from "react";
import gif from "./img/Proj_1.jpg";
import emply from "./img/Proj_2.jpg";
import tata from "./img/proj_3.jpg";
import starbucks from "./img/proj_4.jpg";
import tesla from "./img/proj_5.jpg";
import portflio from "./img/proj-6.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      image: gif,
      name: "Gif Search App",
      paragraph:"Developed a dynamic GIF Search App using Next.js and the GIPHY API, allowing users to search and view GIFs with real-time results. This project enhanced my skills in API integration and server-side rendering, with a focus on responsive design.",
      links:"https://github.com/Jordancoder13/my-gif-app",
      visit:"https://my-gif-app.vercel.app/",
      video:"https://youtu.be/-GVzHLbF-CQ",
    },
    {
      id: 2,
      image:portflio,
      name: "Portflio HTML Css",
      paragraph:"Built a personal portfolio website using HTML, CSS, and JavaScript to showcase projects like a GIF Search App and Tata Neu/Starbucks clones. The site is fully responsive, optimized, and highlights both front-end and back-end development skills.",
      links:"https://github.com/Jordancoder13/Shivam_Portfolio",
      visit:"https://shivamsportfolio-eta.vercel.app/#",
      video:"https://www.youtube.com/shorts/4CK2x9Qrefw?feature=share",
    },
    {
      id: 3,
      image: emply,
      name: "Employee management system",
      paragraph:"Built a web-based system for managing employee records, attendance, and performance, with a responsive, user-friendly interface. This project strengthened my full-stack development and database management skills.",
      links:"https://github.com/Jordancoder13/Employee_management_system",
      video:"https://www.youtube.com/shorts/voOo68JqyQk?feature=share",
    },
    {
      id: 4,
      image: tata,
      name: "Tata Neu Clone",
      paragraph:"The Tata Neu website clone is a front-end project built with React.js, focusing on replicating the site's design and core features. It delivers a user-friendly interface, showcasing modern web development techniques.",
      links:"https://github.com/Jordancoder13/Tata_Neu_Clone",
      video:"https://www.youtube.com/shorts/hARZcksOw78?feature=share",
    },
    {
      id: 5,
      image: starbucks,
      name: "Starbucks Clone",
      paragraph:"The Starbucks clone is a responsive front-end project built with React.js, replicating the design and functionality of the original website. It delivers a seamless user experience, showcasing clean UI components and dynamic interaction.",
      links:"https://github.com/Jordancoder13/Starbucks_Clone",
      video:"https://www.youtube.com/shorts/tTd8hJOyrYQ?feature=share",
    },
    {
      id: 6,
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
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-red-700">Project's</h1>
        {/* <span className=" underline font-semibold text ">Featured Projects</span> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-0 px-[40px] ">
          {cardItem.map(({ id, image, name, paragraph,links,visit,video}) => (
            
            <div
              className="md:w-[400px] md:h-[460px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
             {id === 1 || id === 2 ? (
            <a href={visit} target="_blank" >
              
              <img
                src={image}
                className="md:w-[400px] md:h-[200px] p-1 sm:w-[600px] sm:h-[300px] "
                alt=""
              />
            </a>    
            ) : <a href={links} target="_blank" >
              
              <img
                src={image}
                className="md:w-[400px] md:h-[200px] p-1 sm:w-[600px] sm:h-[300px]  "
                alt=""
              />
            </a> }
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-red-700">{name}</div>
                <p className="px-2 text-white">
                 {paragraph}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
              <a href={video} target="_blank" >

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
              </a>
                <a href={links} target="_blank" >

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                </a>
                {id === 1 || id === 2 ? (
                  <a href={visit} target="_blank">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Visit
                    </button>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
