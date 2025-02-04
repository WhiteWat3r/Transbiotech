import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";


import { useIsScrolled } from "@/hooks/useIsScrolled";
import { menuItems } from "@/utils/constants";

import { HeaderMenuPopover } from "./HeaderMenuPopover";
import { FullLogo } from "../../ui/icons/FullLogo";
import { MobileLogo } from "../../ui/icons/MobileLogo";


export const Header = () => {
  const isScrolled = useIsScrolled();

  const [headerWidth, setHeaderWidth] = useState("100%");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = useLocation();
  const isPerfPage = pathname.pathname === "/perfusion";
  const [currentLogo, setCurrentLogo] = useState<JSX.Element | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    if (isAnimating) return;

    const logo = isScrolled ? (
      <MobileLogo width="26" height="24" />
    ) : (
      <FullLogo color={!isPerfPage ? "#6A78C1" : "#DDDDDD"} />
    );
    const timing = isScrolled ? 0 : 300;

    const timeoutId = setTimeout(() => {
      setCurrentLogo(logo);
    }, timing);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isScrolled, isPerfPage, isAnimating]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 mx-auto flex w-full max-w-[1200px] items-center justify-between px-[42px] pt-[25px] transition-all duration-1000 ease-out`}
      style={{
        width: isScrolled ? headerWidth : "100%",
      }}
    >
      <Link
        // onAnimationStart={startAnimation}
        // onAnimationEnd={handleAnimationEnd}
        className={`relative ml-[20px] flex items-center rounded-[42px] pl-[18px] pr-[14px] transition-all duration-500 ${
          isScrolled
            ? "animate-changeLogo"
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
