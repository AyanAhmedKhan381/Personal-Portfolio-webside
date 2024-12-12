import Image from "next/image";
import React from "react";
import "./style.css/Skills.css"; // Import custom CSS

interface Props {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
}

const SkillsCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;

  return (
    <div className="skill-card">
      <Image
        src={image}
        alt={title}
        height={80}
        width={80}
        className="skill-image"
      />
      <h1 className="skill-title">{title}</h1>
      <p className="skill-percent">{percent}</p>
    </div>
  );
};

export default SkillsCard;
