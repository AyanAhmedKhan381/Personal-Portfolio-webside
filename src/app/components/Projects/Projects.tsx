import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";
import "./Projects.css"; // Import the custom CSS file

const Projects = () => {
  return (
    <div className="projects-section">
      <SectionHeading>My Projects</SectionHeading>

      <div className="projects-container">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="project-card"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt={"image"}
                  width={300}
                  height={200}
                  className="project-image"
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
