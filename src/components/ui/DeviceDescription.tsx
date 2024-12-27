import useBreakpoint from "@/hooks/useBreakpoint";
import { ReactNode, useState } from "react";

export const DeviceDescription = ({
  description,
  maxWidth,
  noTitle,
}: {
  description: { mainText: string; additionalText?: ReactNode };
  maxWidth?: string;
  noTitle?: boolean;
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
        <span className="mob-head-4 desktop:text-2 text-grey-2 opacity-50">
          описание
        </span>
      )}

      <p
        className={`mob-text-3 desktop:text-4 ml-auto w-[276px] text-black-default ${maxWidth ? maxWidth : "desktop:w-[510px]"} `}
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
