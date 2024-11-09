import Image from "next/image";
import React from "react";

// defint props type
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
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={image}
        alt={title}
        height={80}
        width={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600] ">
        {title}
      </h1>
      <p className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">{percent}</p>
    </div>
  );
};

export default SkillsCard;
