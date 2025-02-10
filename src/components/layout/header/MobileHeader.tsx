import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


import { useIsScrolled } from "@/hooks/useIsScrolled";

import { MenuIcon } from "../../ui/icons/MenuIcon";
import { MobileLogo } from "../../ui/icons/MobileLogo";
import { MobileMenu } from "../MobileMenu";


export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useIsScrolled();
  const pathname = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const isPerfPage = pathname.pathname === "/perfusion" || pathname.pathname === "/cardiac-surgery" || pathname.pathname === "/arrhythmology";


  return (
    <>
      <header
        className={`bg-blur-[30px] sticky left-0 top-0 z-40 flex h-[75px] items-center justify-between px-[20px] ${isScrolled ? "bg-[#E9E9E94D] backdrop-blur-[30px]" : ""}`}
      >
        <Link to="/">
          <MobileLogo color={!isPerfPage ? "#6A78C1" : "white"} />
        </Link>
        <MenuIcon
          color={!isPerfPage ? "#929292" : "white"}
          onClick={toggleMenu}
        />
      </header>
      {isMenuOpen && (
        <MobileMenu isPerfPage={isPerfPage} toggleMenu={toggleMenu} />
      )}
    </>
  );
};
