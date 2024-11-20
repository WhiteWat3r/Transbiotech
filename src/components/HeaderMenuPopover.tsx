import { createPopper } from "@popperjs/core";
import React, { useEffect, useRef, useState } from "react";
import { IMenuItem } from "./MobileHeader";

export const HeaderMenuPopover = ({ chapter }: { chapter: IMenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (buttonRef.current && popoverRef.current) {
      createPopper(buttonRef.current, popoverRef.current, {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
        ],
      });
    }
  }, [isOpen]);

  const showPopover = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsOpen(true);
  };

  const hidePopover = () => {
    timeoutId.current = setTimeout(() => setIsOpen(false), 100);
  };

  const handleMouseEnter = () => {
    showPopover();
  };

  const handleMouseLeave = () => {
    hidePopover();
  };

  return (
    <li className="relative" onMouseLeave={handleMouseLeave}>
      <button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        className="text-grey-2 text-[18px] leading-[21.6px] geologica-text font-medium hover:text-black-default transition-colors 
          duration-300 tracking-tighter"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {chapter.title}
      </button>

      <div
        ref={popoverRef}
        className={`absolute z-50 transition-opacity duration-300 ease-in-out
              ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          bg-[#F8F8F8D9] rounded-[42px] py-[25px] px-[44px] backdrop-blur-[10px]`}
        style={{
          borderImageSource:
            "linear-gradient(133.59deg, #FFFFFF -1.64%, rgba(255, 255, 255, 0) 60.82%)",
          borderImageSlice: 1,
        }}
        onMouseEnter={handleMouseEnter}
        role="dialog"
      >
        <ul className="flex flex-col gap-[20px]">
          {chapter.links.map((link) => (
            <li key={link.linkId}>
              <a
                href={link.href}
                className="text-grey-2 text-[18px] leading-[2px] geologica-text
                 hover:text-black-default transition-colors duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
