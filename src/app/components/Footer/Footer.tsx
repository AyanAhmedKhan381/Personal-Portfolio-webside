import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      {/* Logo Section */}
      <div className="mb-4">
        <Image
          src="/logos/Y6QoH-XJQDOhqYF73-potQ-removebg-preview.png"
          alt="Code with Ayan Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Horizontal Line */}
      <div className="w-full h-[1px] bg-gray-500 opacity-30 mb-6" />

      {/* Navigation Links Section */}
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div><Link href="" className="hover:underline hover:text-yellow-300 duration-200 transition-all"></Link></div>
        <div><Link href="/" className="hover:underline hover:text-yellow-300 duration-200 transition-all">Home</Link></div>
        <div><Link href="#services" className="hover:underline hover:text-yellow-300 duration-200 transition-all">Services</Link></div>
        <div><Link href="/projects" className="hover:underline hover:text-yellow-300 duration-200 transition-all">Projects</Link></div>
        <div><Link href="#reviews" className="hover:underline hover:text-yellow-300 duration-200 transition-all">Reviews</Link></div>
        <div><Link href="/contact" className="hover:underline hover:text-yellow-300 duration-200 transition-all">Contact</Link></div>
      </div>

      {/* Copyright Section */}
      <p className="text-white text-opacity-60 mt-6 text-center items-center justify-center">
        © 2024 All Rights Reserved by Code with Ayan
      </p>
    </div>
  );
};

export default Footer;
