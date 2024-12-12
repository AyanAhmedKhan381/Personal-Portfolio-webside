import React from "react";
import SectionHeading from "../../components/Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import CheckMark from "../../components/Helper/CheckMark";
import Image from "next/image";
import "./about.css"; // Assuming you create a CSS file for these styles

const About = () => {
  return (
    <div className="about-container">
      <div className="section-heading">
        <SectionHeading>About Me</SectionHeading>
      </div>

      {/* main div Right and Left Content */}
      <div className="about-content">
        {/* Text Content */}
        <div className="about-text" data-aos="fade-left" data-aos-anchor-placement="top-center">
          {/* subTitle */}
          <h1 className="about-title text-bg">{aboutInfo.title}</h1>

          {/* description */}
          <p className="about-description">{aboutInfo.discription}</p>

          <CheckMark text={"Frontend Development"} Bg_Blue={true} />
          <CheckMark text={"Backend Development"} Bg_Orange={true} />
          <CheckMark text={"Full Stack Web Development"} Bg_Green={true} />
        </div>

        {/* stats Content */}
        <div className="about-stats" data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150">
          {/* 1 stats */}
          <div className="stat-item">
            <Image src={"/images2/customer.png"} alt={"image"} height={80} width={80} className="stat-image" />
            <p className="stat-number">{aboutInfo.client}</p>
            <p className="stat-description">Satisfied Customers</p>
          </div>

          {/* 2 stats */}
          <div className="stat-item">
            <Image src={"/images2/experience.png"} alt={"image"} height={80} width={80} className="stat-image" />
            <p className="stat-number">{aboutInfo.experience}</p>
            <p className="stat-description">Years Experience</p>
          </div>

          {/* 3 stats */}
          <div className="stat-item">
            <Image src={"/images2/completed.png"} alt={"image"} height={80} width={80} className="stat-image" />
            <p className="stat-number">{aboutInfo.project}</p>
            <p className="stat-description">Completed Projects</p>
          </div>

          {/* 4 stats */}
          <div className="stat-item">
            <Image src={"/images2/rocket.png"} alt={"image"} height={80} width={80} className="stat-image" />
            <p className="stat-number">{aboutInfo.client}</p>
            <p className="stat-description">Website launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
