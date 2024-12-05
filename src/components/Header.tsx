import fullLogo from "../assets/logos/full-logo.svg";
import logo from "../assets/logos/logo.svg";

import { menuItems } from "./MobileHeader";
import { HeaderMenuPopover } from "./HeaderMenuPopover";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
// устанавливать src картинки через useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      setIsScrolled((prev) => {
        if (scrollY > 50 && !prev) return true;
        if (scrollY <= 50 && prev) return false;
        return prev;
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 flex items-center justify-between px-[42px] pt-[25px] transition-all duration-1000 ease-out w-full max-w-[1440px] mx-auto`}
      style={{
        width: isScrolled ? headerWidth : "100%",
      }}
    >
      <Link
        className={`relative ml-[20px] flex items-center rounded-[42px] pl-[18px] pr-[14px] transition-all duration-500 ${
          isScrolled
            ? "h-[50px] animate-appearBorder"
            : "animate-disappearBorder border-none"
        }`}
        to="/"
      >
        <img
          src={isScrolled ? logo : fullLogo}
          alt="Transbiotech"
          className={`pointer mt-[2px] h-[24px] transition-all duration-500`}
        />
      </Link>

      <nav
        className={`whitespace-nowrap rounded-[42px] px-[38px] py-[12px] transition-all duration-500 ${
          isScrolled ? "animate-appearBorder" : "animate-disappearBorder"
        }`}
      >
        <ul className="flex h-[22px] gap-[37px]">
          {menuItems.map((item) => (
            <HeaderMenuPopover chapter={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
