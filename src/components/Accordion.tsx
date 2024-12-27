import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import arrowBottom from "../assets/arrows/arrow-botom.svg";
import { IMenuItem } from "../utils/types";

export const Accordion = ({
  menuItem,
  delay,
  isOpen,
  onToggle,
  isDisabled,
  handleCloseMenu,
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
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
    handleCloseMenu();
  };

  return (
    <li
      className={`translate-x-[-50px] animate-slideIn opacity-0 ${
        isDisabled ? "opacity-50" : ""
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <button
        onClick={
          menuItem.links.length > 0
            ? toggleAccordion
            : () => handleNavigate(menuItem.href)
        }
        className={`geologica-text flex w-full items-center justify-between border-b-2 border-[#929292] pb-[5px] text-[36px] font-medium leading-[36px] text-grey-2 ${
          isDisabled ? "cursor-not-allowed" : ""
        }`}
        style={{
          opacity: isDisabled ? 0.3 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
        disabled={isDisabled}
      >
        {menuItem.title}
        {menuItem.links.length > 0 && (
          <img
            src={arrowBottom}
            alt="Подробнее"
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
            className="transition-transform duration-300 ease-in-out"
          />
        )}
      </button>

      {menuItem.links.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
          ref={contentRef}
          style={{
            transformOrigin: "top",
            height: isOpen ? `${height}px` : "0",
          }}
        >
          <ul className="mt-5 flex flex-col space-y-[10px] pl-[30px]">
            {menuItem.links.map((item) => (
              <li
                key={item.linkId}
                className="geologica-text text-[27px] font-normal leading-[27px] text-grey-2"
              >
                <Link
                  to={item.href ? item.href : "/"}
                  onClick={handleCloseMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
