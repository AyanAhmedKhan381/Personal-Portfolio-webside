import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaCheck } from "react-icons/fa";
import CheckMark from "../Helper/CheckMark";
import Image from "next/image";
import './About.css'

const About = () => {
  return (
    <div className="about-section">
  <SectionHeading>About Me</SectionHeading>

  <div className="main-container main-container-lg">
    <div className="text-content">
      <h1 className="lg">{aboutInfo.title}</h1>
      <p>{aboutInfo.discription}</p>
      <CheckMark text={"Frontend Development"} Bg_Blue={true} />
      <CheckMark text={"Backend Development"} Bg_Orange={true} />
      <CheckMark text={"Full Stack Web Development"} Bg_Green={true} />
    </div>

    <div className="stats-container">
      <div className="stats-item">
        <Image
          src="/images2/customer.png"
          alt="Satisfied Customers"
          height={80}
          width={80}
        />
        <p className="title">{aboutInfo.client}</p>
        <p className="subtitle">Satisfied Customers</p>
      </div>

      <div className="stats-item">
        <Image
          src="/images2/experience.png"
          alt="Years Experience"
          height={80}
          width={80}
        />
        <p className="title">{aboutInfo.experience}</p>
        <p className="subtitle">Years Experience</p>
      </div>

      <div className="stats-item">
        <Image
          src="/images2/completed.png"
          alt="Completed Projects"
          height={80}
          width={80}
        />
        <p className="title">{aboutInfo.project}</p>
        <p className="subtitle">Completed Projects</p>
      </div>

      <div className="stats-item">
        <Image
          src="/images2/rocket.png"
          alt="Website Launched"
          height={80}
          width={80}
        />
        <p className="title">{aboutInfo.client}</p>
        <p className="subtitle">Website Launched</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
