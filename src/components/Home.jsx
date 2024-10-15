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
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 bg-black text-white "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span><br/>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1> <span className="text- text-2xl">Hello!</span> <br/> <br/> I'm <span className="text-red-700 text-4xl">Shivam <br/>Tripathi</span></h1>

              
              {/* <span >Developer</span> */}
            </div>
                          <ReactTyped
                className=" font-bold flex space-x-1 text-2xl md:text-4xl"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            
            {/* <br /> */}
             {/* <div className="flex flex-col items-center md:flex-row justify-between border:[2px] space-y-6 md:space-y-20 ">
              
            </div> */}
            {/* <p className="text-sm md:text-md text-justify text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p> */}
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Jordancoder13/" target="_blank">
                      <FaGithub className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/the_name_is.shivam/?igsh=MTZnMm40a3RlZzR3OA%3D%3D" target="_blank">
                      <FaLinkedin className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@CodeDiariesandAI" target="_blank">
                      <IoLogoYoutube className="text-2xl  md:text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-110 md:ml-80 md:mt-0 mt-0 order-1 border- pl-8 relative-left-0 border- sm:pl-[150px]">
  <img
    src={pic}
    className="w-[400px] h-[650px] sm:w-[400px] sm:h-[650px] md:w-[550px] md:h-[670px] blend-screen" 
    alt=""
  />
</div>

        </div>
      </div>
    </>
  );
}

export default Home;
