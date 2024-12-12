import Image from "next/image";
import Link from "next/link";
import React from "react";
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <Image
          src="/logos/Y6QoH-XJQDOhqYF73-potQ-removebg-preview.png"
          alt="Code with Ayan Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Horizontal Line */}
      <div className="footer-horizontal-line"></div>

      {/* Navigation Links Section */}
      <div className="footer-nav">
        <div>
          <Link href="/" className="footer-nav-item">
            Home
          </Link>
        </div>
        <div>
          <Link href="#services" className="footer-nav-item">
            Services
          </Link>
        </div>
        <div>
          <Link href="/projects" className="footer-nav-item">
            Projects
          </Link>
        </div>
        <div>
          <Link href="#reviews" className="footer-nav-item">
            Reviews
          </Link>
        </div>
        <div>
          <Link href="/contact" className="footer-nav-item">
            Contact
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="footer-copyright">
        © 2024 All Rights Reserved by Code with Ayan
      </p>
    </div>
  );
};

export default Footer;
