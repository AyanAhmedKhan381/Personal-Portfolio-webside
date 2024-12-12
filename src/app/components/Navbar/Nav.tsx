"use client";
import { navLinks } from "@/app/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";  // Close icon for "remove"
import styles from "./Style.css/Nav.module.css"; // Import custom CSS

// Define props type
interface Props {
  openNav: () => void;
  closeNav: () => void; // Add closeNav function to hide the menu
}

const Nav = ({ openNav, closeNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Manage state for mobile nav open/close

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      openNav();
    } else {
      closeNav();
    }
  };

  return (
    <div
      className={`${styles.navbar} ${navBg ? styles.navbarBgLight : styles.navbarBgDark}`}
    >
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Image
          src={"/logos/tx2ZivlmSiaYOLXhJYYReQ-removebg-preview.png"}
          alt={"Logo"}
          height={130}
          width={130}
          className={`${styles.logo} ${styles.logoLg}`} // Adding logo classes
        />

        {/* Nav Links */}
        <div className={styles.navLinksContainer}>
          <div className={styles.navLinksContainerLg}>
            {navLinks.map((items, i) => (
              <Link key={i} href={items.url}>
                <p className={styles.nav__link}>{items.label}</p>
              </Link>
            ))}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className={styles.button}>
              <span>Hire</span><span className="text-white">-</span><span>Me</span>
            </button>

            <HiBars3BottomRight
              onClick={toggleNav}
              className={styles.menuToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
