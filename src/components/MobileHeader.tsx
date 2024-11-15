import React, { useEffect, useRef, useState } from "react";
import menuButton from "../assets/menu.svg";
import logo from "../assets/logos/mobile-logo.svg";
import close from "../assets/close.svg";
import { Accordion } from "./Accordion";

export interface IMenuItem {
  id: number;
  title: string;
  links: { linkId: number; text: string; href: string }[];
}

export const menuItems:IMenuItem[] = [
  {
    id: 1,
    title: "о компании",
    links: [
      { linkId: 1, text: "документы", href: "" },
      { linkId: 2, text: "миссия и ценности", href: "" },
      { linkId: 3, text: "новости", href: "" },
    ],
  },
  {
    id: 2,
    title: "технологии",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 3,
    title: "продукты",
    links: [{ linkId: 1, text: "документы", href: "" }],
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleAccordionToggle = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <>
      <header className="px-[20px] pt-[40px] flex justify-between sticky top-0 left-0 z-20">
        <img src={logo} alt="Transbiotech" />
        <img
          src={menuButton}
          alt="Меню"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-30 flex justify-center items-center">
          <div className="flex flex-col bg-[#DDDDDD] w-full max-w-md h-full overflow-y-auto p-[20px]">
            <button
              onClick={toggleMenu}
              className="text-right text-gray-700 ml-auto mt-[28px] mb-[45px]"
            >
              <img src={close} alt="Закрыть" />
            </button>

            <h2 className="geologica-text text-[46px] leading-[44px] text-[#565656] font-semibold mb-[40px]">
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
