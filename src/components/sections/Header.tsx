import fullLogo from "../../assets/logos/full-logo.svg";
import logo from "../../assets/logos/logo.svg";

import { menuItems } from "../MobileHeader";
import { HeaderMenuPopover } from "../HeaderMenuPopover";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useIsScrolled } from "../../hooks/useIsScrolled";

export const Header = () => {
  const isScrolled = useIsScrolled()
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
        className={`whitespace-nowrap rounded-[42px] relative px-[38px] py-[12px] transition-all duration-500 ${
          isScrolled ? "animate-appearBorder" : "animate-disappearBorder"
        }`}
      >
        {/* <span className="absolute w-full h-full rounded-[42px] top-0 left-0 backdrop-blur-[5px] bg-[#F8F8F8D9]" /> */}
        <ul className="flex h-[22px] gap-[37px]">
          {menuItems.map((item) => (
            <HeaderMenuPopover chapter={item} key={item.id} isScrolled={isScrolled}/>
          ))}
        </ul>
      </nav>
    </header>
  );
};
