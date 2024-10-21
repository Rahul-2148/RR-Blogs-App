import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile?.user);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        a proficient full stack developer with a robust skill set spanning both
        front-end and back-end technologies. With a passion for building
        dynamic, responsive, and user-friendly web applications.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
        Front-End: Adopted in modern JavaScript frameworks and libraries such as
        React.js, Vite and Angular. Skilled in HTML5, CSS, Tailwind CSS, Bootstrap and responsive
        design principles to create intuitive and visually appealing interfaces.
        Back-End: Proficient in server-side technologies including Node.js,
        Express.js. Experienced with database management using SQL
        and NoSQL databases like MySQL, and MongoDB. 
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully developed and deployed numerous full-stack applications,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions within tight deadlines. Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <span>
        Rahul Raj is a passionate full-stack developer who is dedicated to leveraging his expertise to contribute to
        innovative projects and drive technological advancements. Whether
        working on front-end interfaces or back-end logic, he is passionate
        about delivering exceptional digital solutions that meet user needs and
        exceed client expectations.
      </span>
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
      Beyond coding and programming, I enjoy immersing myself in various activities that fuel my creativity and passion. I'm an avid player of Free Fire and love the thrill of competitive gaming. I also enjoy playing cricket, which keeps me active and energized.
      <br />
      <br />
      In addition to gaming and sports, I love creating YouTube videos, where I share my ideas and experiences with the world. Traveling is another passion of mine, as it allows me to explore new places, cultures, and perspectives, constantly inspiring me in my personal and professional life.
      
      </p>
    </div>
  );
}

export default About;