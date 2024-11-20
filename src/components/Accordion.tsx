import { useEffect, useRef, useState } from "react";
import arrowBottom from "../assets/arrows/arrow-botom.svg";

export const Accordion = ({
    id,
    title,
    items,
    delay,
    isOpen,
    onToggle,
    isDisabled,
  }: {
    id: number;
    title: string;
    items: { linkId: number; text: string; href: string }[];
    delay: number;
    isOpen: boolean;
    onToggle: (id: number) => void;
    isDisabled: boolean;
  }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState(0);
  
    const toggleAccordion = () => {
      if (!isDisabled) {
        onToggle(id);
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
          className={`w-full font-medium text-grey-2 text-[32px] geologica-text leading-[38px] flex justify-between 
            items-center border-b-2 border-[#929292] pb-[5px] ${
              isDisabled ? "cursor-not-allowed" : ""
            }`}
          style={{
            opacity: isDisabled ? 0.3 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
          disabled={isDisabled}
        >
          {title}
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
          <ul className="pl-[30px] mt-2 space-y-[10px] flex flex-col">
            {items.map((item) => (
              <li
                key={item.linkId}
                className="text-grey-2 text-[18px] leading-[22px] geologica-text font-medium"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };
  