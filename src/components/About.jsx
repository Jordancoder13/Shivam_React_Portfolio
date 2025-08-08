import React from "react";

function About() {
  const keyCompetencies = [
    "Proficient in Java Programming",
    "Expert in MERN Stack Development",
    "Skilled in Mobile App Development",
    "Experienced in AI Integration and GenAI Tools",
    "Strong API Handling and Integration Skills",
    "Proficient in API Testing using Postman",
    "Advanced Problem-Solving Skills",
    "Effective Team Collaboration",
    "Experienced with GitHub and GitHub Copilot for Version Control",
    "Knowledge of Google AI Studio for AI Feature Implementation"
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 text-white"
    >
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-red-700 text-center lg:text-left">
          About
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 text-center lg:text-left">
            I’m Shivam Tripathi, a full-stack and mobile app developer who loves turning ideas into real, working apps. I work with the MERN stack, build clean UIs, and enjoy adding smart features using AI tools like Google AI Studio. I’m comfortable handling APIs, testing with Postman, and coding efficiently with GitHub and Copilot. I like building things that are both useful and user-friendly.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 tracking-wide">
            Education & Training
          </h2>
          <div className="space-y-4 text-sm sm:text-base md:text-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-700/50 hover:border-red-700/30 transition-all duration-300">
                <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Degree</span>
                <p className="text-gray-200 font-medium">Bachelor of Technology</p>
                <p className="text-gray-300 text-xs sm:text-sm">(B.Tech)</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-700/50 hover:border-red-700/30 transition-all duration-300">
                <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Institute</span>
                <p className="text-gray-200 font-medium leading-relaxed">Oriental Institute of Science And Technology</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-3 sm:p-4 md:p-5 border border-gray-700/50 hover:border-red-700/30 transition-all duration-300">
                <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-2">Duration</span>
                <p className="text-gray-200 font-medium">2021 - 2025</p>
                <p className="text-gray-300 text-xs sm:text-sm">4 Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 tracking-wide">
            Skills & Expertise
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {['MongoDB', 'Express', 'React Js', 'Node Js', 'Java', 'HTML', 'CSS', 'JavaScript', 'GitHub','App Development','Google AI Studio', 'Postman'].map((skill, index) => (
                <div key={index} className="group bg-gradient-to-br from-red-700/20 to-red-600/10 hover:from-red-700/30 hover:to-red-600/20 rounded-lg px-2 py-2 sm:py-3 text-center border border-red-700/20 hover:border-red-700/40 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-700/25">
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-200 transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/30">
              <h3 className="text-red-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">Key Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {keyCompetencies.map((competency, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0 group-hover:bg-red-500 transition-colors duration-300"></div>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {competency}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
}

export default About;
