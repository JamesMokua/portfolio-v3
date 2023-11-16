"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-[2rem] sm:flex sm:justify-between sm:py-8 text-white ">
      <div>
        <Link href="/" className="hidden sm:text-lg hover:cursor-pointer">
          JM
        </Link>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-between items-end gap-2 text-5xl pr-8 pt-5 sm:hidden  "
      >
        {isOpen ? <AiOutlineClose /> : <HiOutlineBars3BottomRight />}
      </div>
      <div
        className={`flex flex-col items-center justify-evenly z-auto hover:cursor-pointer sm:flex-row  md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto
       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-in-out ${
         isOpen ? "h-screen " : "hidden"
       }`}
      >
        <Link
          href="/"
          className="text-3xl  sm:pr-9 sm:text-base font-extralight text-gray-400 
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
      
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-3xl sm:pr-9 text-gray-400
           sm:text-base font-extralight transition-colors
            duration-500 ease-in-out hover:text-white hover:cursor-pointer"
       
        >
          About
        </Link>
        <Link
          href="/work"
          className="text-3xl sm:pr-9 sm:text-base font-extralight text-gray-400 
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
        
        >
          Work
        </Link>

        <Link
          href="/JAMES MOKUA SOFTWARE ENGINEER RESUME.pdf "
          className="text-3xl sm:pr-9  text-gray-400  sm:text-base font-extralight
           transition-colors duration-500 ease-in-out hover:text-white hover:cursor-pointer"
          target="_blank"
  
        >
          Resume
        </Link>
    
        <Link href="/contact" >
          <Button
            className=" text-lg text-black bg-white sm:text-base sm:font-semibold  sm:rounded-2xl
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
