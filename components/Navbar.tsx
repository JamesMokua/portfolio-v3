import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" sm:flex sm:justify-between sm:py-8 text-white">
      <div>
        <Link href="/" className="sm:text-lg hover:cursor-pointer">
          JM
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:items-center">
        <Link
          href="/"
          className="sm:pr-9 font-extralight text-gray-400 text-base
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          Work
        </Link>
        <Link
          href="/"
          className="sm:pr-9 text-gray-400
           text-base font-extralight transition-colors
            duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/"
          className="sm:pr-9  text-gray-400  text-base font-extralight
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          Resume
        </Link>
        <Link
          href="/"
          className="sm:pr-9  text-gray-400  text-base font-extralight
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          More
        </Link>
        <Link href="/">
          <Button
            className=" text-black bg-white text-base sm:font-semibold  sm:rounded-2xl
           transition-all duration-500 ease-in-out  hover:cursor-pointer  hover:bg-[#E27625] "
          >
            Get In Touch
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
