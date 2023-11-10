import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Pojects
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>
        <div className="grid  sm:flex-cols-2 md:flex-cols-3 gap-8 px-15 sm:px-0">
          <div className=" shadow-md shadow-gray-600 rounded-lg w-64 h-52">
            <Image
              width={500}
              height={500}
              src="/Youtube.png"
              alt="p1"
              className="rounded-md duration-300 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
          <div className=" shadow-md shadow-gray-600 rounded-lg w-48 h-68 ">
            <Image
              width={200}
              height={200}
              src="/Weather.png"
              alt="p1"
              className="rounded-md duration-300 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
