import React from "react";

export const ContactItem = ({
  title,
  text,
  sx,
}: {
  title: string;
  text: string;
  sx?: string;
}) => {
  return (
    <li className="flex flex-col gap-[10px] desktop:gap-[15px]">
      <h3 className="mob-head-4 text-grey-2 desktop:head-5">{title}</h3>
      <p className={`mob-text-3 whitespace-pre-wrap text-black-default desktop:text-3 ${sx}`}>
        {text}
      </p>
    </li>
  );
};
