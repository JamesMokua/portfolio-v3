"use client";
import React, { useState, useEffect } from "react";
import Arrow from "../../public/images/arrow-right.svg";
import Atom from "../../public/images/one.webp";
import Folder from "../../public/images/folder.svg";
import Linkedin from "../../public/images/linkedin.svg";
import UpArrow from "../../public/images/arrow-link.svg";
import Email from "../../public/images/email.svg";
import UX from "../../public/images/ux.svg";
import UI from "../../public/images/pen.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-[2rem]">
      <div className="text-[#7D8487] text-[65px]  mt-6  sm:text-center font-bold hover:cursor-pointer sm:text-[140px]">
        <span className="inline-block leading-[90px] sm-leading[260px]">
          Featured Work
        </span>
      </div>
      <div className="flex flex-col gap-5 text-white ">
        <div className="w-full flex flex-col sm:flex sm:flex-row gap-5">
          <div className="sm:text-2xl sm:w-1/4 sm:h-[50vh] bg-[#1A1A1C] rounded-2xl hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            <div className=" flex flex-col justify-center px-10 py-10 ">
              <Image
                src={Folder}
                width={70}
                height={70}
                alt="folder"
                className="pb-5"
              />
              <div className=" flex flex-row justify-between items-center ">
                <h1 className="text-4xl font-bold leading-loose ">
                  My Projects
                </h1>
                <div className="pl-5 pt-20  ">
                  <Image src={Arrow} width={40} height={40} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:text-2xl  sm:w-[22.2vw] sm:h-[50vh] bg-[#1A1A1C]  rounded-2xl flex flex-col justify-center items-center pt-20 hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625]  ">
            <Image src={Linkedin} width={65} height={65} alt="linkedin" />
            <div className="flex flex-row justify-end items-end pt-3 w-9/12 ">
              <Image src={UpArrow} width={40} height={40} alt="arrow-up" />
            </div>
          </div>
          <div className="sm:text-2xl sm:w-1/4 sm:h-[50vh] bg-[#1A1A1C] rounded-2xl hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            <div className=" flex flex-col justify-center px-10 py-10 ">
              <Image
                src={Folder}
                width={70}
                height={70}
                alt="folder"
                className="pb-5"
              />
              <div className=" flex flex-row justify-between items-center ">
                <h1 className="text-4xl font-bold leading-loose ">
                  My Projects
                </h1>
                <div className="pl-5 pt-20  ">
                  <Image src={Arrow} width={40} height={40} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:text-2xl  sm:w-[22.2vw] sm:h-[50vh] bg-[#1A1A1C]  rounded-2xl flex flex-col justify-center items-center pt-20 hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625]  ">
            <Image src={Linkedin} width={65} height={65} alt="linkedin" />
            <div className="flex flex-row justify-end items-end pt-3 w-9/12 ">
              <Image src={UpArrow} width={40} height={40} alt="arrow-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-4 justify-center items-center font-bold text-white py-20">
        <div className="hover:cursor-pointer">
          <Image src={Linkedin} width={35} height={35} alt="linkedin" />
        </div>
        <div className="pl-5 hover:cursor-pointer">
          <Image src={Email} width={35} height={35} alt="email" />
        </div>
      </div>
    </div>
  );
}
