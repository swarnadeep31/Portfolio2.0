"use client";
// import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,

      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className=" flex justify-between items-center w-full bg-black px-4 text-white fixed">
      <div>
        <h1 className=" text-5xl font-signature mt-4">Swarna</h1>
      </div>
      <ul className="md:flex hidden">
        {Links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-800 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>
      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={link} smooth duration={300} onClick={() => setNav(!nav)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
