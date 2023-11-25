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
import {expertise} from '../../components/data/expertise'

export default function Work() {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
 
  const sortedExpertise = [...expertise].sort((a, b) => b.id - a.id);
  return (
    <div >
      <div className="text-[#7D8487] text-[65px]  mt-6  sm:text-center font-bold hover:cursor-pointer sm:text-[140px]">
        <span className="text-center inline-block leading-[90px] sm-leading[260px]">
          Featured Work
        </span>
      </div>
   
          <div className=" grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2  sm:grid-flow-row px-10
            gap-5 text-white  ">
            {sortedExpertise.map((item) => (
              <div
                key={item.id}
                className={` bg-[#1A1A1C] rounded-2xl 
                hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625]
                 sm:w-full `}
              >
                <Link href={`/work/${item.id}`}>
                  <h1 className="text-white text-2xl font-bold  text-center pt-5 ">
                    {item.title}
                  </h1>
                  <p className="h-[8rem] text-center pt-5">
                    {item.desc}
                  </p>
                  <p className="text-lg font-thin text-center pt-5">
                    {item.techStack}
                  </p>
                  <div className="pl-5 pt-20 pb-20  ">
                    <div>Learn more</div>
                    <Image src={Arrow} width={40} height={40} alt="arrow" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
     

      <div className="w-full flex flex-row gap-4 justify-center items-center font-bold text-white py-20">
      <div className="hover:cursor-pointer">
          <Link href="https://www.linkedin.com/in/jamesmokua/" target="_blank">
            <Image src={Linkedin} width={35} height={35} alt="linkedin" />
          </Link>
        </div>
        <div className="pl-5 hover:cursor-pointer">
          <Link href="mailto:jamieedgar02@gmail.com">
            <Image src={Email} width={35} height={35} alt="email" />
          </Link>
        </div>
      </div>
    </div>
  );
}
