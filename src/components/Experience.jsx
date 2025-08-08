import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "Logicsyner Innovations Private Limited",
      year: "2025",
      description: "Worked on full-stack development of AI-powered platforms, combining frontend engineering, mobile app development, and AI integration to deliver high-impact educational tools.",
      achievements: [
        {
          title: "Collegites AI – Web & Mobile App Development",
          desc: "Independently developed the entire frontend of the Collegites AI web platform and also built the complete mobile app version from scratch. Ensured responsive, clean UI/UX using React.js for web and React Native for mobile.",
          icon: "📱"
        },
        {
          title: "Custom Video Editor (Non-AI)",
          desc: "Created a feature-rich slide-based video editor using React.js, Canvas, and Fabric.js, allowing users to add text, transitions, and backgrounds with real-time preview and drag-and-drop editing.",
          icon: "🎬"
        },
        {
          title: "AI-Powered Assessment Generator (Fully Built by Me)",
          desc: "Designed and developed a fully functional AI-based assessment generator that creates quizzes/tests using content input. Managed everything from UI/UX to API integration with GenAI models.",
          icon: "🧠"
        },
        {
          title: "AI Tools Integration & API Handling",
          desc: "Integrated AI capabilities using Google AI Studio, and implemented robust API handling, including data fetching, error management, and smooth frontend-backend communication.",
          icon: "🤖"
        },
        {
          title: "API Testing & Debugging",
          desc: "Used Postman for extensive testing and debugging of AI and custom APIs to ensure seamless user experience and system reliability.",
          icon: "🧪"
        },
        {
          title: "Development Workflow & Tools",
          desc: "Utilized GitHub for version control and GitHub Copilot for code assistance and productivity. Followed clean coding standards and collaborative development practices.",
          icon: "🧰"
        }
      ]
    },
    {
      title: "Frontend Development Intern",
      company: "Wyreflow Technologies",
      year: "2024",
      description: "Gained invaluable hands-on experience in modern web development technologies and collaborative software development practices.",
      achievements: [
        {
          title: "Hands-On Development Experience",
          desc: "Developed responsive and user-friendly web interfaces using React.js, HTML5, CSS3, and modern JavaScript (ES6+).",
          icon: "💻"
        },
        {
          title: "Team Collaboration & Mentorship",
          desc: "Collaborated effectively with senior developers and cross-functional teams. Participated in code reviews and agile development processes.",
          icon: "🤝"
        },
        {
          title: "Technical Skill Enhancement",
          desc: "Enhanced technical expertise through real-world project implementation and adopting industry best practices.",
          icon: "🚀"
        }
      ]
    }
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 sm:py-20 md:py-24 text-white"
    >
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-red-700 text-center lg:text-left">
          Professional Experience
        </h1>
        
        <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-red-700/20 rounded-xl p-3 sm:p-4 md:p-6 lg:p-7 backdrop-blur-md hover:border-red-700/40 transition-all duration-500 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/5 via-transparent to-red-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-700/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="space-y-4">
              {experiences.map((experience, expIndex) => (
                <div key={expIndex} className="relative">
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl p-4 sm:p-5 border border-gray-700/30 hover:border-red-700/40 transition-all duration-300 group/exp">
                    <div className="absolute -top-1 -right-1 w-16 h-16 bg-red-700/10 rounded-full blur-xl group-hover/exp:bg-red-700/20 transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover/exp:from-red-100 group-hover/exp:to-white transition-all duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-red-400 font-semibold flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            <span>{experience.company}</span>
                          </p>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <div className="inline-flex items-center bg-gradient-to-r from-red-700/30 to-red-600/20 text-red-200 px-3 py-1 rounded-full text-xs font-bold border border-red-700/40 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                            {experience.year}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-gray-700/20 to-gray-600/10 rounded-lg p-3 border-l-4 border-red-500/50">
                          <p className="text-xs sm:text-sm md:text-base text-gray-300 italic font-medium leading-relaxed">
                            "{experience.description}"
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {experience.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="group/card bg-gradient-to-br from-gray-700/15 to-gray-800/10 rounded-lg p-3 sm:p-4 border border-gray-600/20 hover:border-red-700/30 hover:shadow-lg hover:shadow-red-700/10 transition-all duration-300">
                              <div className="flex items-start space-x-3">
                                <div className="text-lg opacity-70 group-hover/card:opacity-100 transition-opacity duration-300">
                                  {achievement.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-red-400 text-xs sm:text-sm mb-1 group-hover/card:text-red-300 transition-colors duration-300">
                                    {achievement.title}
                                  </h4>
                                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover/card:text-gray-200 transition-colors duration-300">
                                    {achievement.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
        </div>
           {/* Mission Statement Section */}
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
