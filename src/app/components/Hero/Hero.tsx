import { BasicInfo } from "@/app/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="grid grid-lg">
          {/* Text Content */}
          <div className="text-content">
            <h1>{`I am ${BasicInfo.name}`}</h1>
            <h1>{BasicInfo.position}</h1>
            <p>{BasicInfo.discription}</p>
            <button className="button">
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>

          {/* Image Content */}
          <div className="image-content image-content-lg">
            <Image
              src={BasicInfo.profilePic}
              alt={BasicInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
