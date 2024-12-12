"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  service: {
    id: number;
    title: string;
    discription: string;
    icon: string;
  };
}

const ServiceCart = ({ service }: Props) => {
  return (
    <Tilt className="service-card">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1>{service.title}</h1>
      <p>{service.discription}</p>
    </Tilt>
  );
};

export default ServiceCart;
