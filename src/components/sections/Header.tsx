
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import fullLogo from "@/assets/logos/full-logo.svg";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { menuItems } from "@/utils/constants";
import { HeaderMenuPopover } from "../HeaderMenuPopover";
import { FullLogo } from "../icons/FullLogo";
import { MobileLogo } from "../icons/MobileLogo";

export const Header = () => {
  const isScrolled = useIsScrolled();
  const [headerWidth, setHeaderWidth] = useState("100%");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = useLocation();
  const isPerfPage = pathname.pathname === "/perfusion" ;
  const [currentLogo, setCurrentLogo] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const calculateHeaderWidth = () => {
      const logoWidth = 82;
      const menuWidth = 563;
      const totalWidth = logoWidth + menuWidth;

      setHeaderWidth(`${totalWidth + 86}px`);
    };

    calculateHeaderWidth();
    window.addEventListener("resize", calculateHeaderWidth);
    return () => window.removeEventListener("resize", calculateHeaderWidth);
  }, [isScrolled]);
  // устанавливать src картинки через useEffect

  useEffect(() => {
    const logo = isScrolled ? (
      <MobileLogo width="26" height="24" />
    ) : (
      <FullLogo color={!isPerfPage ? "#6A78C1" : "#DDDDDD"} />
    );

    // const timer = setTimeout(() => {
      setCurrentLogo(logo);
    // }, 100);

    // return () => clearTimeout(timer);
  }, [isScrolled, isPerfPage]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 mx-auto flex w-full max-w-[1440px] items-center justify-between px-[42px] pt-[25px] transition-all duration-1000 ease-out`}
      style={{
        width: isScrolled ? headerWidth : "100%",
      }}
    >
      <Link
        className={`relative ml-[20px] flex items-center rounded-[42px] pl-[18px] pr-[14px] transition-all duration-500 ${
          isScrolled
            ? "h-[50px] border-2 border-white bg-[#F8F8F8D9] transition-all duration-500 backdrop-blur-[10px]"
            : "animate-disappearBorder border-none border-transparent"
        }`}
        to="/"
      >
        {/* <img
          src={isScrolled ? logo : fullLogo}
          alt="Transbiotech"
          className={`pointer mt-[2px] h-[24px] transition-all duration-500`}
        /> */}
        {currentLogo}
      </Link>

      <nav
        className={`relative whitespace-nowrap rounded-[42px] px-[38px] py-[12px] transition-all duration-500 ${
          isScrolled ? "animate-appearBorder" : "animate-disappearBorder"
        }`}
      >
        {/* <span className="absolute w-full h-full rounded-[42px] top-0 left-0 backdrop-blur-[5px] bg-[#F8F8F8D9]" /> */}
        <ul className="flex h-[22px] gap-[37px]">
          {menuItems.map((item) => (
            <HeaderMenuPopover
              chapter={item}
              key={item.id}
              isScrolled={isScrolled}
              isPerfPage={isPerfPage}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
