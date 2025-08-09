import React from "react";
import { FaGraduationCap, FaCode, FaMobile, FaRobot, FaDatabase, FaUsers, FaGithub, FaCheckCircle, FaLightbulb, FaChartLine } from "react-icons/fa";
import { SiMongodb, SiExpress,SiFastapi , SiReact, SiNodedotjs, SiPostman, SiGooglecolab, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

function About() {
  const keyCompetencies = [
    { text: "Proficient in Java Programming", icon: FaCode, color: "text-orange-500" },
    { text: "Expert in MERN Stack Development", icon: SiReact, color: "text-blue-500" },
    { text: "Skilled in Mobile App Development", icon: FaMobile, color: "text-green-500" },
    { text: "Experienced in AI Integration and GenAI Tools", icon: FaRobot, color: "text-purple-500" },
    { text: "Strong API Handling and Integration Skills", icon: FaDatabase, color: "text-yellow-500" },
    { text: "Proficient in API Testing using Postman", icon: SiPostman, color: "text-orange-400" },
    { text: "Advanced Problem-Solving Skills", icon: FaLightbulb, color: "text-yellow-400" },
    { text: "Effective Team Collaboration", icon: FaUsers, color: "text-blue-400" },
    { text: "Experienced with GitHub and GitHub Copilot", icon: FaGithub, color: "text-gray-400" },
    { text: "Knowledge of Google AI Studio", icon: SiGooglecolab, color: "text-red-500" }
  ];

  const stats = [
    { label: "Projects Completed", value: "7+", icon: FaCheckCircle, color: "text-green-500" },
    { label: "Technologies", value: "15+", icon: FaCode, color: "text-blue-500" },
    { label: "APIs Integrated", value: "50+", icon: SiFastapi, color: "text-purple-500" },
    { label: "Code Commits", value: "500+", icon: FaGithub, color: "text-gray-400" }
  ];

  const techStack = [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "React Js", icon: SiReact, color: "text-blue-500" },
    { name: "Node Js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Java", icon: FaCode, color: "text-orange-500" },
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
    { name: "App Development", icon: FaMobile, color: "text-green-500" },
    { name: "Google AI Studio", icon: SiGooglecolab, color: "text-red-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-400" }
  ];

  return (
    <div
      name="About"
      className="relative max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 text-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 space-y-8 sm:space-y-10 md:space-y-12">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-red-700 flex items-center justify-center lg:justify-start gap-3">
            <FaGraduationCap className="text-red-600" />
            About Me
          </h1>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 hover:border-red-500/50 group">
              <stat.icon className={`mx-auto text-2xl mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 hover:border-red-500/30 transition-all duration-500 group">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 text-center lg:text-left group-hover:text-gray-200 transition-colors duration-300">
              I'm <span className="text-red-500 font-semibold">Shivam Tripathi</span>, a passionate full-stack and mobile app developer who transforms innovative ideas into powerful, real-world applications. 
              With expertise in the <span className="text-blue-400 font-semibold">MERN stack</span>, I craft seamless user interfaces and robust backend systems. 
              I specialize in integrating cutting-edge <span className="text-purple-400 font-semibold">AI features</span> using tools like Google AI Studio, 
              ensuring every project is both technically sound and user-centric. My proficiency with <span className="text-green-400 font-semibold">APIs, testing frameworks</span>, 
              and modern development workflows enables me to deliver high-quality solutions efficiently.
            </p>
          </div>
        </div>

        {/* Enhanced Education Section */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-gray-900/70 transition-all duration-500 hover:border-red-500/30">
          <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 tracking-wide flex items-center gap-3">
            <FaGraduationCap className="text-red-600" />
            Education & Training
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group">
              <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-red-500" />
                Degree
              </span>
              <p className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors duration-300">Bachelor of Technology</p>
              <p className="text-gray-400 text-sm">(B.Tech)</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group">
              <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-red-500" />
                Institute
              </span>
              <p className="text-gray-200 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">Oriental Institute of Science And Technology</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group">
              <span className="block font-bold text-red-400 text-xs sm:text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaChartLine className="text-red-500" />
                Duration
              </span>
              <p className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">2021 - 2025</p>
              <p className="text-gray-400 text-sm">4 Years</p>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-gray-900/70 transition-all duration-500 hover:border-red-500/30">
          <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 tracking-wide flex items-center gap-3">
            <FaCode className="text-red-600" />
            Skills & Expertise
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {/* Tech Stack with Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3 md:gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 hover:from-gray-700/60 hover:to-gray-600/60 rounded-lg px-3 py-4 text-center border border-gray-600/50 hover:border-red-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-700/25">
                  <tech.icon className={`mx-auto text-2xl mb-2 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 block">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-gray-900/70 transition-all duration-500 hover:border-red-500/30">
          <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 tracking-wide flex items-center gap-3">
            <FaLightbulb className="text-red-600" />
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {keyCompetencies.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-3">
                  <skill.icon className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {skill.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
