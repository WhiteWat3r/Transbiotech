import { ReactNode, useState } from "react";

import useBreakpoint from "@/hooks/useBreakpoint";

export const DeviceDescription = ({
  description,
  maxWidth,
  noTitle,
  titleColorClassName = 'grey-2',
  textColorClassName = 'text-black-default',
}: {
  description: { mainText: string; additionalText?: ReactNode };
  maxWidth?: string;
  noTitle?: boolean,
  titleColorClassName?: string,
  textColorClassName?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {breakpoint} = useBreakpoint();
  const isMobile = breakpoint === 'mobile'
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-[15px] desktop:flex-row">
      {!noTitle && (
        <span className={`mob-head-4 desktop:text-2 text-${titleColorClassName} opacity-50`}>
          описание
        </span>
      )}

      <p
        className={`mob-text-3 desktop:text-4 ml-auto w-[276px] text-${textColorClassName} ${maxWidth ? maxWidth : "desktop:w-[510px]"} `}
      >
        {description.mainText}

        {isMobile ? (
          <>
            {description.additionalText && !isExpanded && (
              <>
                {".. "}
                <span
                  className="cursor-pointer text-grey-2 underline"
                  onClick={handleToggle}
                >
                  (развернуть)
                </span>
              </>
            )}
            {description.additionalText &&
              isExpanded &&
              description.additionalText}
          </>
        ) : (
          description.additionalText && description.additionalText
        )}

        {description.additionalText && isExpanded && (
          <>
            {" "}
            <span
              className="cursor-pointer text-grey-2 underline"
              onClick={handleToggle}
            >
              (свернуть)
            </span>
          </>
        )}
      </p>
    </div>
  );
};
