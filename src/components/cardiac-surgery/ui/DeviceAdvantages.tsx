import { useRef } from "react";

import useIntersection from "@/hooks/useIntersection";

export const DeviceAdvantages = ({
  advantages,
  listClassName,
  rowAdvantages,
  colorClassName = 'indigo',
}: {
  advantages: string[];
  listClassName?: string;
  rowAdvantages?: boolean;
  colorClassName?: string
}) => {
  const sectionRef = useRef(null);

  const { isVisible } = useIntersection(sectionRef, {
    threshold: 1,
  });

  return (
    <div ref={sectionRef} className="flex flex-col gap-[15px] desktop:flex-row">
      <span className="mob-head-4 desktop:text-2 max-w-[170px] text-grey-2 opacity-50">
        преимущества методики
      </span>
      <ul
        className={`mob-text-3 ${listClassName} flex w-[276px] ${rowAdvantages ? "flex-row desktop:w-[775px] desktop:gap-[20px]" : "flex-col desktop:w-[510px] desktop:gap-[20px]"} gap-[14px] uppercase text-black-default`}
      >
        {advantages.map((advantage, index) => (
          <li
            key={index}
            className={`mob-head-5 desktop:text-3 relative text-${colorClassName}`}
          >
            <p
              className={`${isVisible ? "animate-advantages-show" : "opacity-0" } transition-all ${rowAdvantages ? "max-w-[245px]" : ""} ${rowAdvantages && index === 1 ? "tracking-[-0.8px]" : " "}`}
              dangerouslySetInnerHTML={{__html: advantage}}
            />
            <span
              className={`block h-[1px] transition-all duration-800 ${isVisible ? "opacity-100" : "opacity-0"} w-full"} mt-[1px] bg-${colorClassName} desktop:mt-[5px]`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
