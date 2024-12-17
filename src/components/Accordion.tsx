import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import arrowBottom from "../assets/arrows/arrow-botom.svg";
import { IMenuItem } from "../utils/types";

export const Accordion = ({
  menuItem,
    delay,
    isOpen,
    onToggle,
    isDisabled,
    handleCloseMenu
  }: {
    menuItem: IMenuItem;
    delay: number;
    isOpen: boolean;
    onToggle: (id: number) => void;
    isDisabled: boolean;
    handleCloseMenu: () => void;
  }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);
  
    const toggleAccordion = () => {
      if (!isDisabled) {
        onToggle(menuItem.id);
      }
    };
  
    useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [isOpen]);
  
    return (
      <li
        className={`opacity-0 translate-x-[-50px] animate-slideIn ${
          isDisabled ? "opacity-50" : ""
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <button
          onClick={toggleAccordion}
          className={`w-full font-medium text-grey-2 text-[36px] geologica-text leading-[36px] flex justify-between 
            items-center border-b-2 border-[#929292] pb-[5px] ${
              isDisabled ? "cursor-not-allowed" : ""
            }`}
          style={{
            opacity: isDisabled ? 0.3 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          disabled={isDisabled}
        >
          {menuItem.title}
          <img
            src={arrowBottom}
            alt="Подробнее"
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
            className="transition-transform duration-300 ease-in-out"
          />
        </button>
  
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          ref={contentRef}
          style={{
            transformOrigin: "top",
            height: isOpen ? `${height}px` : "0",
          }}
        >
          <ul className="pl-[30px] mt-5 space-y-[10px] flex flex-col">
            {menuItem.links.map((item) => (
              <li
                key={item.linkId}
                className="text-grey-2 text-[27px] leading-[27px] geologica-text font-normal"
              >
                <Link to={item.href ? item.href : '/'} onClick={handleCloseMenu}>
                {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };
  