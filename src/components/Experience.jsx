import React, { useState } from "react";
import { FaBriefcase, FaCalendar, FaBuilding, FaTrophy, FaChevronDown, FaChevronUp, FaCode, FaMobile, FaRobot, FaTools, FaServer, FaLaptopCode } from "react-icons/fa";
import { SiReact, SiJavascript, SiGooglecolab, SiPostman, SiGithub } from "react-icons/si";

function Experience() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Software Developer Trainee",
      company: "Logicsyner Innovations Private Limited",
      year: "2025",
      duration: "6 months",
      type: "Full-Time",
      location: "Remote",
      description: "Worked on full-stack development of AI-powered platforms, combining frontend engineering, mobile app development, and AI integration to deliver high-impact educational tools.",
      companyLogo: "🚀",
      achievements: [
        {
          title: "Collegites AI – Web & Mobile App Development",
          desc: "Independently developed the entire frontend of the Collegites AI web platform and also built the complete mobile app version from scratch. Ensured responsive, clean UI/UX using React.js for web and React Native for mobile.",
          icon: FaMobile,
          color: "text-blue-500",
          tech: ["React.js", "React Native", "UI/UX"]
        },
        {
          title: "Custom Video Editor (Non-AI)",
          desc: "Created a feature-rich slide-based video editor using React.js, Canvas, and Fabric.js, allowing users to add text, transitions, and backgrounds with real-time preview and drag-and-drop editing.",
          icon: FaCode,
          color: "text-purple-500",
          tech: ["React.js", "Canvas", "Fabric.js"]
        },
        {
          title: "AI-Powered Assessment Generator (Fully Built by Me)",
          desc: "Designed and developed a fully functional AI-based assessment generator that creates quizzes/tests using content input. Managed everything from UI/UX to API integration with GenAI models.",
          icon: FaRobot,
          color: "text-green-500",
          tech: ["AI Integration", "API", "GenAI"]
        },
        {
          title: "AI Tools Integration & API Handling",
          desc: "Integrated AI capabilities using Google AI Studio, and implemented robust API handling, including data fetching, error management, and smooth frontend-backend communication.",
          icon: SiGooglecolab,
          color: "text-red-500",
          tech: ["Google AI Studio", "API Integration"]
        },
        {
          title: "API Testing & Debugging",
          desc: "Used Postman for extensive testing and debugging of AI and custom APIs to ensure seamless user experience and system reliability.",
          icon: SiPostman,
          color: "text-orange-500",
          tech: ["Postman", "API Testing", "Debugging"]
        },
        {
          title: "Development Workflow & Tools",
          desc: "Utilized GitHub for version control and GitHub Copilot for code assistance and productivity. Followed clean coding standards and collaborative development practices.",
          icon: SiGithub,
          color: "text-gray-400",
          tech: ["GitHub", "Version Control", "Collaboration"]
        }
      ]
    },
    {
      id: 2,
      title: "Frontend Development Intern",
      company: "Wyreflow Technologies",
      year: "2024",
      duration: "3 months",
      type: "Internship",
      location: "Remote",
      description: "Gained invaluable hands-on experience in modern web development technologies and collaborative software development practices.",
      companyLogo: "💻",
      achievements: [
        {
          title: "Hands-On Development Experience",
          desc: "Worked extensively with modern frontend technologies, gaining practical experience in building responsive, user-friendly web applications.",
          icon: FaLaptopCode,
          color: "text-blue-400",
          tech: ["Frontend", "Web Development", "Responsive Design"]
        },
        {
          title: "Team Collaboration",
          desc: "Collaborated with senior developers and design teams to implement features and solve complex technical challenges in a professional environment.",
          icon: FaTools,
          color: "text-yellow-500",
          tech: ["Team Work", "Problem Solving", "Professional Skills"]
        },
        {
          title: "Modern Tech Stack",
          desc: "Gained proficiency in industry-standard tools and frameworks, learning best practices for clean, maintainable code development.",
          icon: FaServer,
          color: "text-green-400",
          tech: ["Modern Frameworks", "Best Practices", "Clean Code"]
        }
      ]
    }
  ];

  const toggleExpansion = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const getTypeColor = (type) => {
    switch(type) {
      case "Full-Time": return "bg-green-500";
      case "Internship": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div
      name="Experience"
      className="relative max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 text-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
        {/* Header Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-red-700 flex items-center justify-center lg:justify-start gap-3">
            <FaBriefcase className="text-red-600" />
            Professional Experience
          </h1>
          <p className="text-gray-300 text-lg mb-8">My journey in software development and the impact I've made</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-500 ${
                expandedExperience === exp.id ? 'shadow-2xl shadow-red-700/20' : 'hover:shadow-xl hover:shadow-red-700/10'
              }`}
            >
              {/* Experience Header */}
              <div 
                className="p-6 md:p-8 cursor-pointer hover:bg-gray-800/30 transition-all duration-300"
                onClick={() => toggleExpansion(exp.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Company Logo/Icon */}
                    <div className="text-4xl bg-gray-800/50 p-3 rounded-lg border border-gray-600/50">
                      {exp.companyLogo}
                    </div>
                    
                    {/* Experience Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-red-500">{exp.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full text-white font-semibold ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <FaBuilding className="text-gray-400" />
                        <h4 className="text-lg font-semibold text-gray-200">{exp.company}</h4>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendar />
                          <span>{exp.year} • {exp.duration}</span>
                        </div>
                        <span>📍 {exp.location}</span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Button */}
                  <div className="ml-4">
                    {expandedExperience === exp.id ? (
                      <FaChevronUp className="text-red-500 text-xl" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-xl hover:text-red-500 transition-colors duration-200" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content - Achievements */}
              {expandedExperience === exp.id && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-700/50">
                  <div className="pt-6">
                    <div className="flex items-center gap-2 mb-6">
                      <FaTrophy className="text-yellow-500" />
                      <h4 className="text-lg font-bold text-yellow-500">Key Achievements & Projects</h4>
                    </div>
                    
                    <div className="grid gap-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-lg p-5 hover:border-red-500/50 transition-all duration-300 hover:bg-gray-800/60 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-gray-700/50 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                              <achievement.icon className="text-xl" />
                            </div>
                            
                            <div className="flex-1">
                              <h5 className="font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                                {achievement.title}
                              </h5>
                              <p className="text-gray-300 text-sm leading-relaxed mb-3 group-hover:text-gray-200 transition-colors duration-300">
                                {achievement.desc}
                              </p>
                              
                              {/* Technology Tags */}
                              <div className="flex flex-wrap gap-2">
                                {achievement.tech.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-red-500/50 transition-colors duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-br from-red-900/20 via-gray-900/60 to-red-800/20 border border-red-700/30 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 backdrop-blur-md overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-700/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-600/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-700/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            {/* Header with decorative elements */}
            <div className="text-center mb-6 sm:mb-7">
              <div className="inline-flex items-center space-x-3 mb-3">
                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-red-700"></div>
                <div className="text-2xl">✨</div>
                <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-red-700"></div>
              </div>
              <h2 className="text-red-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide mb-2">
                Mission Statement
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full mx-auto"></div>
            </div>
            
            {/* Mission content */}
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-700/40 backdrop-blur-sm">
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-700/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-600/20 rounded-full blur-sm"></div>
              
              <blockquote className="relative text-center">
                {/* Enhanced quote marks */}
                <div className="absolute -top-3 -left-3 text-4xl sm:text-5xl text-red-700/20 font-serif leading-none">"</div>
                <div className="absolute -bottom-3 -right-3 text-4xl sm:text-5xl text-red-700/20 font-serif leading-none rotate-180">"</div>
                
                {/* Mission text with enhanced styling */}
                <div className="relative px-5 sm:px-7 py-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
                    My mission is to build impactful, user-friendly web and mobile applications by combining 
                    <span className="text-red-400 font-semibold"> full-stack development skills </span>
                    with practical AI integration. I aim to create real-world solutions using tools like React, Node.js, GitHub Copilot, Postman, and Google AI Studio. I'm driven by a passion for learning, a love for 
                    <span className="text-red-400 font-semibold"> clean and efficient code</span>, and a desire to bring smart, modern tech into everyday use. I continuously strive to grow as a developer by taking on new challenges and turning ideas into 
                    <span className="text-red-400 font-semibold"> meaningful digital experiences</span>.
                  </p>
                </div>
                
                {/* Signature line */}
                <div className="mt-5 flex items-center justify-center space-x-3">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-red-700 rounded-full"></div>
                  <div className="text-red-400 font-bold text-sm">ST</div>
                  <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-red-700 rounded-full"></div>
                </div>
              </blockquote>
              
              {/* Bottom decorative element */}
              <div className="mt-5 flex justify-center">
                <div className="flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
