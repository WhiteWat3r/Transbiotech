import React, { useEffect, useRef, useState } from "react";
import menuButton from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import arrowBottom from "../assets/arrows/arrow-botom.svg";

const menuItems = [
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
    id: 1,
    title: "технологии",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 1,
    title: "продукты",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 1,
    title: "контакты",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 1,
    title: "новости",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <>
      <header className="px-[20px] py-[40px] flex justify-between sticky top-0 left-0 z-20">
        <img src={logo} alt="Логотип" />
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
                  title={item.title}
                  items={item.links}
                  delay={index * 0.1}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const Accordion = ({
  title,
  items,
  delay,
}: {
  title: string;
  items: { linkId: number; text: string; href: string }[];
  delay: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <li
      className="opacity-0 translate-x-[-50px] animate-slideIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <button
        onClick={toggleAccordion}
        className="w-full font-medium text-[#808080] text-[32px] geologica-text leading-[38px] flex justify-between 
          items-center border-b-2 border-[#929292] pb-[5px]"
      >
        {title}
        <img
          src={arrowBottom}
          alt="Подробнее"
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          className="transition-transform duration-500 ease-in-out"
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
        ref={contentRef}
        style={{
          transformOrigin: "top",
          height: isOpen ? `${height}px` : "0",
        }}
      >
        <ul className="pl-4 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item.linkId} className="text-gray-700">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
