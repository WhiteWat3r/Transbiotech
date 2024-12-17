import { ReactNode, useState } from "react";

export const DeviceDescription = ({
  description,
}: {
  description: { mainText: string; additionalText?: ReactNode };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <li className="flex flex-col gap-[15px]">
      <span className="mob-head-4 text-grey-2 opacity-50">описание</span>
      <p className="mob-text-3 ml-auto w-[276px] text-black-default">
        {description.mainText}
        {description.additionalText && !isExpanded && (
          <>
            {".. "}
            <span className="text-grey-2 underline" onClick={handleToggle}>
              (развернуть)
            </span>
          </>
        )}
        {description.additionalText && isExpanded && description.additionalText}
      </p>
    </li>
  );
};
