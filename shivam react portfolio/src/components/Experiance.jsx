import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-red-700">Experiance</h1>
        <div className="bg-gray-800 text-white p-6 md:p-10">
      <h2 className="text-4xl font-bold mb-4">2024-Present</h2>
      <h3 className="text-3xl font-bold mb-2">Frontend Intern</h3>
      <p className="mb-4">During my internship at Wyreflow Technologies</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Hands-On Experience:</strong> Gained practical experience in
          developing responsive and user-friendly web interfaces using
          React.js, HTML, CSS, and JavaScript.
        </li>
        <li>
          <strong>Collaborative Development:</strong> Worked closely with senior
          developers to enhance project features and address technical
          challenges, contributing to a collaborative team environment.
        </li>
        <li>
          <strong>Skill Enhancement:</strong> Developed and refined technical
          skills through involvement in various project tasks, improving
          overall proficiency in front-end development.
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Experiance;
