import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaCheck } from "react-icons/fa";
import CheckMark from "../Helper/CheckMark";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709] ">
      <SectionHeading>About Me</SectionHeading>

      {/* main div Right and Left Content */}
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Cointent */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          {/* subTitle */}
          <h1
            className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold
           text-gray-200"
          >
            {aboutInfo.title}
          </h1>

          {/* description */}
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.discription}
          </p>

          <CheckMark text={"Frontend Development"} Bg_Blue={true} />
          <CheckMark text={"Backend Development"} Bg_Orange={true} />
          <CheckMark text={"Full Stack Web Development"} Bg_Green={true} />
        </div>

        {/* stats Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto "
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150">
            
          {/* 1 stats */}
          <div>
            <Image
              src={"/images2/customer.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Customers
            </p>
          </div>

          {/* 2 stats */}
          <div>
            <Image
              src={"/images2/experience.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>

          {/* 3 stats */}
          <div>
            <Image
              src={"/images2/completed.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Projects
            </p>
          </div>

          {/* 4 stats */}
          <div>
            <Image
              src={"/images2/rocket.png"}
              alt={"image"}
              height={80}
              width={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Webside launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
