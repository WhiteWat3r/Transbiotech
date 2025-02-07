import { ReactNode } from "react";

import { DeviceAdvantages } from "./DeviceAdvantages";
import { DeviceDescription } from "./DeviceDescription";

export const DeviceInfo = ({
                             advantages,
                             description,
                             descriptionMarginClass,
                             maxWidth,
                             rowAdvantages,
                             colorClassName,
                             listClassName
                           }: {
  advantages?: string[];
  description?: { mainText: string; additionalText?: ReactNode };
  descriptionMarginClass?: string;
  maxWidth?: string
  rowAdvantages?: boolean,
  colorClassName?: string,
  listClassName?: string,
}) => {
  return (
    <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
      {description && <DeviceDescription descriptionMarginClass={descriptionMarginClass} maxWidth={maxWidth} description={description} />}

      {advantages && (
        <DeviceAdvantages colorClassName={colorClassName} listClassName={listClassName} advantages={advantages}
                          rowAdvantages={rowAdvantages} />
      )}
    </div>
  );
};
