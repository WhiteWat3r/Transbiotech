import { createPopper } from "@popperjs/core";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IMenuItem } from "../utils/types";

export const HeaderMenuPopover = ({
  chapter,
  isScrolled,
  isPerfPage
}: {
  chapter: IMenuItem;
  isScrolled: boolean;
  isPerfPage: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

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
        className={`geologica-text text-[18px] font-medium leading-[21.6px] tracking-tighter ${!isPerfPage || isScrolled ? "text-grey-2" : "text-gainsboro"} transition-colors duration-300 hover:text-black-default`}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => chapter.id === 2 && navigate("/technologies")}
      >
        {chapter.title}
      </button>

      {chapter.id < 3 && (
        <div
          ref={popoverRef}
          className={`absolute z-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} pt-[10px]`}
          style={
            {
              // borderImageSource:
              //   "linear-gradient(133.59deg, #FFFFFF -1.64%, rgba(255, 255, 255, 0) 60.82%)",
              // borderImageSlice: 1,
            }
          }
          onMouseEnter={handleMouseEnter}
          role="dialog"
        >
          {/* backdrop-blur-[10px] */}

          <div className="rounded-[42px]  backdrop-blur-[10px] bg-[#F8F8F8D9]">
            <span className="absolute left-0 top-0 h-full w-full rounded-[42px] border-2 border-white  backdrop-blur-[10px]" />

            <ul
              className={`relative z-10 flex flex-col gap-[20px] rounded-[42px] px-[44px] py-[25px]`}
            >
              {chapter.links.map((link) => (
                <li key={link.linkId} className="">
                  <Link
                    to={link.href}
                    className="geologica-text max-w-[100px] whitespace-pre-wrap text-wrap break-words text-[18px] leading-[20px] text-grey-2 transition-colors duration-300 hover:text-black-default"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};
