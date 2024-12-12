import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// Props type
interface Props {
  showNav?: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"
          onClick={closeNav}
        ></div>
      )}

      {/* Nav Links */}
      <div
        className={`text-white ${navOpen} transform transition-transform ease-in-out duration-500 fixed justify-center 
        flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
      >
        {/* Links */}
        {navLinks.map((items, i) => (
          <Link key={i} href={items.url} onClick={closeNav}>
            <p
              className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white 
              sm:text-[30px]"
            >
              {items.label}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
