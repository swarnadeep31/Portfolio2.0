import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">There are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className=" shadow-md shadow-orange-600 hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/html.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/css.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/github.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">GITHUB</p>
          </div>
          <div className=" shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/javascript.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">JS</p>
          </div>
          <div className=" shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/nextjs.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">NEXTJS</p>
          </div>
          <div className=" shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/node.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">NODE</p>
          </div>
          <div className=" shadow-md shadow-blue-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <Image
            src="/tailwind.png"
            height={200}
            width={200}
            className=" w-20 mx-auto"
            />
            <p className="mt-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
