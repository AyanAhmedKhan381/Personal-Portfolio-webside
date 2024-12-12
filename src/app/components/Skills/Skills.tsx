import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillData } from "@/app/Data/data";
import SkillsCard from "./SkillsCard";
import "./style.css/Skills.css"; // Import custom CSS

const Skills = () => {
  return (
    <div className="skills-section">
      <SectionHeading>My Skills</SectionHeading>

      <div className="skills-grid">
        {skillData.map((skill, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              <SkillsCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
