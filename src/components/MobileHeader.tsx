import React, { useEffect, useRef, useState } from "react";
import close from "../assets/close.svg";
import { Accordion } from "./Accordion";
import { Link, useLocation } from "react-router-dom";
import { useIsScrolled } from "../hooks/useIsScrolled";
import { MobileLogo } from "./ui/MobileLogo";
import { MenuIcon } from "./ui/MenuIcon";
import { CloseIcon } from "./ui/CloseIcon";

export interface IMenuItem {
  id: number;
  title: string;
  links: { linkId: number; text: string; href: string }[];
}

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "о компании",
    links: [
      { linkId: 1, text: "документы", href: "" },
      { linkId: 2, text: `миссия\nи\u00A0ценности`, href: "" },
      { linkId: 3, text: "новости", href: "" },
    ],
  },
  {
    id: 2,
    title: "технологии",
    links: [
      { linkId: 1, text: "перфузионные технологии", href: "/perfusion" },
      { linkId: 1, text: "кардиохирургия", href: "/cardiac-surgery" },
      { linkId: 1, text: "аритмология", href: "/arrhythmology" },
      { linkId: 1, text: "скорая помощь", href: "/ems" },
    ],
  },
  {
    id: 3,
    title: "продукты",
    links: [
      { linkId: 1, text: "аппарат Ex\u2011Stream", href: "/ex-stream" },
      { linkId: 2, text: "Back\u2011Table\u00A01.0", href: "/black-table-1-0" },
    ],
  },
  {
    id: 4,
    title: "контакты",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 5,
    title: "новости",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
];

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const isScrolled = useIsScrolled();
  const pathname = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleAccordionToggle = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const isHomePage = pathname.pathname === "/";
  console.log("isHomePage", isHomePage);

  return (
    <>
      <header
        className={`bg-blur-[30px] sticky left-0 top-0 z-40 flex h-[75px] items-center justify-between px-[20px] ${isScrolled ? "bg-[#E9E9E94D] backdrop-blur-[30px]" : ""}`}
      >
        <Link to="/">
          <MobileLogo color={isHomePage ? "#6A78C1" : "white"} />
        </Link>
        <MenuIcon
          color={isHomePage ? "#929292" : "white"}
          onClick={toggleMenu}
        />
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="flex h-full w-full flex-col overflow-y-auto bg-gainsboro p-[20px]">
            <div className="mb-[62px] flex items-center justify-between">
              <Link to="/">
                <MobileLogo color={isHomePage ? "#6A78C1" : "white"} />
              </Link>
              <CloseIcon />
            </div>
            {/* <button
              onClick={toggleMenu}
              className="mb-[45px] ml-auto mt-[28px] text-right text-gray-700"
            >
              <img src={close} alt="Закрыть" />
            </button> */}

            <h2 className="geologica-text mb-[40px] text-[46px] font-semibold leading-[44px] text-grey-1">
              Меню
            </h2>

            <ul className="flex flex-col gap-[20px]">
              {menuItems.map((item, index) => (
                <Accordion
                  key={index}
                  id={item.id}
                  title={item.title}
                  items={item.links}
                  delay={index * 0.1}
                  isOpen={openAccordionId === item.id}
                  onToggle={handleAccordionToggle}
                  isDisabled={
                    openAccordionId !== null && openAccordionId !== item.id
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
