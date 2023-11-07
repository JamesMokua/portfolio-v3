"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Arrow from "../public/images/arrow-right.svg";
import Atom from "../public/images/one.webp";
import Folder from "../public/images/folder.svg";
import Linkedin from "../public/images/linkedin.svg";
import UpArrow from "../public/images/arrow-link.svg";
import Email from "../public/images/email.svg";
import UX from "../public/images/ux.svg";
import UI from "../public/images/pen.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

interface LetterSpanProps {
  letter: string;
}
const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const text = "Software Engineer.";
  const LetterSpan: React.FC<LetterSpanProps> = ({ letter }) => (
    <span className=" tracking-wide transition-colors duration-500 ease-in-out hover:text-white">
      {letter}
    </span>
  );
  return (
    <div>
      <div className="text-[#7D8487] text-[80px]  text-center font-bold hover:cursor-pointer sm:text-[140px]">
        <span className="inline-block leading-[90px] sm-leading[260px]">
          {text.split("").map((letter, index) => (
            <LetterSpan key={index} letter={letter} />
          ))}
        </span>
      </div>
      <div className="flex flex-col gap-5 text-white ">
        <div className="w-full flex flex-col sm:flex sm:flex-row gap-5 ">
          <div className="sm:text-2xl  sm:w-6/12 sm:h-[50vh] bg-[#1A1A1C] rounded-2xl px-10 py-20 hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            <h1 className="tracking-wide font-bold pb-10 text-5xl">
              Hey, I&apos;m Mokua 👋🏾{" "}
            </h1>
            <div className="flex flex-row">
              <p className=" font-normal">
                I believe that great code starts with an obsession to meet user
                needs
              </p>
              <Image src={Arrow} width={40} height={40} alt="arrow" />
            </div>
          </div>
          <div
            className={` sm:text-2xl sm:w-6/12 sm:h-[50vh] bg-[#343639] px-10 py-5 rounded-2xl cursor-pointer
             transition-colors duration-500 ease-in-out hover:bg-[#E27625] ${
               isHovered ? "hovered" : ""
             }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-col">
              {" "}
              {isHovered ? (
                <div className="py-8 ">
                  <h2
                    className="font-thin text-lg "
                    data-aos="slide-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    FEATURED WORK
                  </h2>
                  <div className="flex flex-row justify-between">
                    <div
                      className="leading-10 text-4xl transition-all duration-1000 ease-in font-bold"
                      data-aos="slide-down"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      View my Case Studies
                    </div>
                    <div
                      data-aos="slide-down"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <Image src={Arrow} width={40} height={40} alt="arrow" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={Atom} width={600} height={600} alt="atom" />
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-thin text-lg ">FEATURED WORK</h2>
                  <div className="flex flex-row justify-between">
                    <h1 className="leading-10 text-4xl font-bold">
                      Case Studies
                    </h1>
                    <Image src={Arrow} width={40} height={40} alt="arrow" />
                  </div>
                  <div className="flex justify-center mb-0 ">
                    <Image src={Atom} width={600} height={600} alt="atom" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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
          <div
            className="sm:text-2xl sm:w-2/4  sm:h-[50vh] bg-[#1A1A1C]  rounded-2xl px-10 py-10 flex flex-col justify-start hover:cursor-pointer
           transition-colors duration-500 ease-in-out hover:bg-[#E27625]"
          >
            <h2 className="font-normal text-lg">What I Do</h2>
            <div className="flex flex-row ">
              <div className="pr-10">
                <h2 className="text-2xl font-bold leading-loose w-5 ">
                  Software Development
                </h2>
                <Image src={UX} width={100} height={100} alt="Software" />
              </div>
              <div className="pl-10">
                <h2 className="text-2xl font-bold leading-loose w-5 ">
                  UI Design
                </h2>
                <Image src={UI} width={100} height={100} alt="UI" />
              </div>
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
};

export default Hero;
