import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 bg-black text-white"
    >
      <div className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-start mx-auto mb-12">
            <h1 className="text-4xl text-red-700 font-bold relative inline-block">
              Contact Me
            </h1>
            <p className="text-lg mt-4">Below are the details to reach out to me!</p>
          </div>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
            {/* Address */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="bg-red-700 rounded-full p-4">
                  <FaMapMarkerAlt className="text-black h-10 w-10" />
                </span>
              </div>
              <h3 className="text-xl mb-2">Address</h3>
              <p>Bhopal, India</p>
            </div>

            {/* Contact Number */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="bg-red-700 rounded-full p-4">
                  <RiContactsFill className="text-black h-10 w-10" />
                </span>
              </div>
              <h3 className="text-xl mb-2">Contact Number</h3>
              <p>+91 797 *** 1448</p>
            </div>

            {/* Email Address */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="bg-red-700 rounded-full p-4">
                  <MdEmail className="text-black h-10 w-10" />
                </span>
              </div>
              <h3 className="text-xl mb-2">Email Address</h3>
              <p>shivam@gmail.com</p>
            </div>

            {/* Download Resume */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="bg-red-700 rounded-full p-4">
                  <IoMdDownload className="text-black h-10 w-10" />
                </span>
              </div>
              <h3 className="text-xl mb-2">Download Resume</h3>
              <p>resumelink</p>
            </div>
          </div>

          {/* Have a Question Section */}
          <div className="text-center mt-20">
            <h2 className="text-2xl mb-6">Have a <span className="font-bold">Question?</span></h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgBmZo6yHnpEn0bfyWXIj1KYQXxODDbK-vCQM4vuTeH3JW1A/viewform?usp=sf_link"
              className="bg-red-700 text-black py-3 px-6 rounded-full font-bold hover:bg-red-800 transition duration-200"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
