import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillData } from "@/app/Data/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>My Skills</SectionHeading>

      <div
        className="pt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      xl:grid-cols-5 gap-4 items-center "
      >
        {skillData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              {/* Skills Cart */}
              <SkillsCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
