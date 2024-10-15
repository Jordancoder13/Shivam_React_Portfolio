import React from "react";
import {
  FaGithub ,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-white" >
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/Jordancoder13/" target="_blank">
             <FaGithub  size={24}/>
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fshivamtrip17216" target="_blank">
              <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/the_name_is.shivam/?igsh=MTZnMm40a3RlZzR3OA%3D%3D" target="_blank">
             <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shivam-tripathi-625b78256/" target="_blank">
             <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8  pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; This template is made ❤️ by Shivam Tripathi.
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
