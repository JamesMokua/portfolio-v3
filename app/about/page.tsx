import Image from "next/image";
import React from "react";
import Person from "../../public/images/person.jpg";
import Linkedin from "../../public/images/linkedin.svg";
import Email from "../../public/images/email.svg";

export default function About() {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center px-[2rem] sm:flex-row sm:justify-center sm:items-center sm:gap-0 ">
        <div className="sm:pr-10 ">
          <div className="text-[#7D8487] text-lg ">
            HEY THERE! <span className="text-3xl">👋🏾</span>
          </div>
          <div className="text-5xl text-white leading-[60px]  sm:w-[40vw] ">
            Software Engineer & Content Creator
          </div>
          
        </div>
        <div className="rounded-xl pt-10 pb-16">
          <Image
            src={Person}
            width={200}
            height={150}
            alt="Profile Picture"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="bg-[#1A1A1C] text-white pt-10 sm:px-[10rem]">
        <p className="px-[2rem] pb-10">
            I&apos;m Mokua, a software engineer with over 3 years of experience in 
            building web applications. I&apos;m a self-taught developer who is passionate
            about building products that solve real-world problems. I&apos;m currently
            working at <a href="https://www.andela.com/">Andela</a> as a software engineer.
            I&apos;m also a content creator who creates content on <a href="https://www.youtube.com/channel/UCeGvqZqpwZr8qZLs7xu4yfQ">YouTube</a> and <a href="https://www.instagram.com/mokua.codes/">Instagram</a> where I share my
            journey as a developer and also teach others how to code.
            
        </p>
        <p className="px-[2rem] pb-10">
            I&apos;m Mokua, a software engineer with over 3 years of experience in 
            building web applications. I&apos;m a self-taught developer who is passionate
            about building products that solve real-world problems. I&apos;m currently
            working at <a href="https://www.andela.com/">Andela</a> as a software engineer.
            I&apos;m also a content creator who creates content on <a href="https://www.youtube.com/channel/UCeGvqZqpwZr8qZLs7xu4yfQ">YouTube</a> and <a href="https://www.instagram.com/mokua.codes/">Instagram</a> where I share my
            journey as a developer and also teach others how to code.
            
        </p>
        <p className="px-[2rem] pb-10">
            I&apos;m Mokua, a software engineer with over 3 years of experience in 
            building web applications. I&apos;m a self-taught developer who is passionate
            about building products that solve real-world problems. I&apos;m currently
            working at <a href="https://www.andela.com/">Andela</a> as a software engineer.
            I&apos;m also a content creator who creates content on <a href="https://www.youtube.com/channel/UCeGvqZqpwZr8qZLs7xu4yfQ">YouTube</a> and <a href="https://www.instagram.com/mokua.codes/">Instagram</a> where I share my
            journey as a developer and also teach others how to code.
            
        </p>
        <p className="px-[2rem] pb-10">
            I&apos;m Mokua, a software engineer with over 3 years of experience in 
            building web applications. I&apos;m a self-taught developer who is passionate
            about building products that solve real-world problems. I&apos;m currently
            working at <a href="https://www.andela.com/">Andela</a> as a software engineer.
            I&apos;m also a content creator who creates content on <a href="https://www.youtube.com/channel/UCeGvqZqpwZr8qZLs7xu4yfQ">YouTube</a> and <a href="https://www.instagram.com/mokua.codes/">Instagram</a> where I share my
            journey as a developer and also teach others how to code.
            
        </p>
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
