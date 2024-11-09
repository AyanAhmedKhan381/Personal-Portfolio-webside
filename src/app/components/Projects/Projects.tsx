import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>

      <div
        className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-12 items-center "
      >
        {projectData.map((project, i) => {
          return (
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${ i * 150}`}

              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt={"image"}
                  width={300}
                  height={200}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
