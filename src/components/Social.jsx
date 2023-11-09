import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Social = () => {
  

  return (
    <div className=" hidden lg:flex  flex-col top-[35%] left-0 fixed">
      <ul className="w-40">
      <Link
            href="https://www.linkedin.com/in/swarnadeep-roy-a8122622a/"
            className="flex justify-between items-center hover:ml-[-10px] ml-[-100px] hover:rounded-md duration-300  w-full h-10 px-4 bg-gray-500 text-white rounded-tr-md"
          >
            Linkedin<FaLinkedin size={30}/>
          </Link>;
          <Link
            href="https://www.instagram.com/swarnadeeproy57/"
            className="flex justify-between items-center hover:ml-[-10px] ml-[-100px] hover:rounded-md duration-300  w-full h-10 px-4 bg-gray-500 text-white rounded-tr-md"
          >
            Instagram<FaInstagram size={30}/>
          </Link>;
          <Link
            href="https://github.com/swarnadeep31"
            className="flex justify-between items-center hover:ml-[-10px] ml-[-100px] hover:rounded-md duration-300  w-full h-10 px-4 bg-gray-500 text-white rounded-tr-md"
          >
            Github<FaGithub size={30}/>
          </Link>;
          <Link
            href="https://mail.google.com/mail/u/1/#inbox"
            className="flex justify-between items-center hover:ml-[-10px] ml-[-100px] hover:rounded-md duration-300  w-full h-10 px-4 bg-gray-500 text-white rounded-tr-md"
          >
            Mail< HiOutlineMail size={30}/>
          </Link>;
      </ul>
    </div>
  );
};

export default Social;
