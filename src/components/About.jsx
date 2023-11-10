import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hey there! I'm Swarnadeep, and I turn caffeine and code into
          beautifully functional websites. I've always been passionate about the
          perfect blend of design and functionality, which drove me into the
          world of web development. Since diving into this realm, I've had the
          pleasure of working with startups, agencies, and big corporates,
          translating their ideas and requirements into digital solutions
        </p>
      </div>
    </div>
  );
};

export default About;
