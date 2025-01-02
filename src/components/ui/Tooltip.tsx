import React from "react";
import questionMark from "@/assets/images/products/question-mark.svg";
interface TooltipProps {
  text: string;
  top: string;
  left: string;
  textTop?: string;
  textLeft?: string;
  maxWidth?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  top,
  left,
  textTop,
  textLeft,
  maxWidth,
}) => {
  return (
    <div
      className="group absolute flex items-center justify-center"
      style={{ top, left }} // Позиционирование самого тултипа
    >
      {/* Вопросительный знак */}
      <div className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-indigo group-hover:opacity-0 desktop:h-[29px] desktop:w-[29px]">
        <img src={questionMark} alt="" />
      </div>

      {/* Тултип */}
      <div
        className={`pointer-events-none absolute z-20 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100`}
        style={{
          top: textTop || "50%",
          left: textLeft || "50%",
          transform: "translate(-50%, -50%)",
        }} // Позиционирование блока текста
      >
        <p
          style={{ maxWidth }}
          className="mob-text-3 w-max max-w-xs cursor-default rounded-[50px] bg-white p-2 py-[7px] text-center text-sm text-indigo shadow-lg"
        >
          {text}
        </p>
      </div>
    </div>
  );
};
