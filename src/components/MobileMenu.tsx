import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { Link } from "react-router-dom";
import { MobileLogo } from "./icons/MobileLogo";
import { CloseIcon } from "./icons/CloseIcon";
import { menuItems } from "../utils/constants";

export const MobileMenu = ({
  isHomePage,
  toggleMenu,
}: {
  isHomePage: boolean;
  toggleMenu: () => void;
}) => {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const handleAccordionToggle = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="flex h-full w-full flex-col overflow-y-auto bg-gainsboro p-[20px]">
        <div className="mb-[62px] flex items-center justify-between">
          <Link to="/">
            <MobileLogo />
          </Link>
          <CloseIcon onClick={toggleMenu} />
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
          {menuItems.map((item) => (
            <Accordion
              key={item.id}
              menuItem={item}
              delay={item.id * 0.1}
              isOpen={openAccordionId === item.id}
              handleCloseMenu={toggleMenu}
              onToggle={handleAccordionToggle}
              isDisabled={
                openAccordionId !== null && openAccordionId !== item.id
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
