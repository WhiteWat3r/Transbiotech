import fullLogo from "../assets/logos/full-logo.svg";
import logo from "../assets/logos/logo.svg";

import { menuItems } from "./MobileHeader";
import { HeaderMenuPopover } from "./HeaderMenuPopover";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerWidth, setHeaderWidth] = useState("100%");
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateHeaderWidth = () => {
      const logoWidth = 82;
      const menuWidth = 671;
      const totalWidth = logoWidth + menuWidth;

      setHeaderWidth(`${totalWidth + 86}px`);
    };

    calculateHeaderWidth();
    window.addEventListener("resize", calculateHeaderWidth);
    return () => window.removeEventListener("resize", calculateHeaderWidth);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 flex items-center px-[42px]  transition-all ease-out duration-1000 z-20 justify-between mx-auto pt-[65px]`}
      style={{
        width: isScrolled ? headerWidth : "100%",
      }}
    >
      <a
        className={`pr-[14px] rounded-[42px] transition-all duration-500 relative pl-[18px] ml-[20px] flex items-center ${
          isScrolled
            ? "animate-appearBorder h-[50px]"
            : "animate-disappearBorder border-none"
        }`}
        href="#"
      >
        <img
          src={isScrolled ? logo : fullLogo}
          alt="Transbiotech"
          className={`transition-all duration-500 pointer h-[23px]`}
        />
      </a>

      <nav
        className={`transition-all duration-500 rounded-[42px] whitespace-nowrap py-[12px] px-[38px]  ${
          isScrolled
            ? "animate-appearBorder"
            : "animate-disappearBorder"
        }`}
      >
        <ul className="flex gap-[37px] h-[22px]">
          {menuItems.map((item) => (
            <HeaderMenuPopover chapter={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
