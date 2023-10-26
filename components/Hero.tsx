"use client";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import Arrow from "../public/images/arrow-right.svg";
import Atom from "../public/images/one.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

interface LetterSpanProps {
  letter: string;
}
const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
  AOS.init();
  }, [])
  
  const text = "Software Engineer.";
  const LetterSpan: React.FC<LetterSpanProps> = ({ letter }) => (
    <span className=" tracking-wide transition-colors duration-500 ease-in-out hover:text-white">
      {letter}
    </span>
  );
  return (
    <div>
      <div className="text-[#7D8487] text-[140px] text-center font-bold hover:cursor-pointer">
        <span className="inline-block leading-[260px]">
          {text.split("").map((letter, index) => (
            <LetterSpan key={index} letter={letter} />
          ))}
        </span>
      </div>
      <div className="flex flex-col gap-5 text-white ">
        <div className="w-full  flex flex-row gap-5 ">
          <div className="text-2xl  w-6/12 h-[50vh] bg-[#1A1A1C] rounded-2xl px-10 py-20 hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            <h1 className="tracking-wide font-bold pb-10 text-5xl">
              Hey, I&apos;m Mokua 👋🏾{" "}
            </h1>
            <div className="flex flex-row">
              <p className=" font-normal" >
                I believe that great code starts with an obsession to meet user
                needs
              </p>
              <Image src={Arrow} width={40} height={40} alt="arrow" />
            </div>
          </div>
          <div
            className={` text-2xl w-6/12 h-[50vh] bg-[#343639] px-10 py-5 rounded-2xl cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ${
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
                      className="leading-10 text-4xl transition-all duration-[10000] ease-in font-bold"
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
        <div className="w-full  flex flex-row gap-5">
          <div className="text-2xl  w-1/4 h-[50vh] bg-[#1A1A1C] rounded-2xl hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            Projects
          </div>
          <div className="text-2xl  w-1/4 h-[50vh] bg-[#1A1A1C]  rounded-2xl hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625]  ">
            Connect
          </div>
          <div className="text-2xl w-2/4  h-[50vh] bg-[#1A1A1C]  rounded-2xl hover:cursor-pointer transition-colors duration-500 ease-in-out hover:bg-[#E27625] ">
            Skills
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-4 justify-center items-center font-bold text-white py-20">
        <div className="">LinkedIn</div>
        <div className="">Gmail</div>
      </div>
    </div>
  );
};

export default Hero;
