import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8 text-white">
      <div>
        <Link href="/" className="text-lg hover:cursor-pointer">
          JM
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="pr-9 font-extralight text-gray-400 text-base
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          Work
        </Link>
        <Link
          href="/"
          className="pr-9 text-gray-400
           text-base font-extralight transition-colors
            duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/"
          className="pr-9  text-gray-400  text-base font-extralight
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          Resume
        </Link>
        <Link
          href="/"
          className="pr-9  text-gray-400  text-base font-extralight
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        >
          More
        </Link>
        <Link href="/">
          <Button
            className=" text-black bg-white text-base font-semibold  rounded-2xl
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
