import { ReactNode } from "react";

import { DeviceAdvantages } from "./DeviceAdvantages";
import { DeviceDescription } from "./DeviceDescription";

export const DeviceInfo = ({
  advantages,
  description,
  marginLeft,
  maxWidth,
  rowAdvantages
}: {
  advantages?: string[];
  description?: { mainText: string; additionalText?: ReactNode };
  marginLeft?: boolean;
  maxWidth?: string
  rowAdvantages?: boolean
}) => {
  return (
    <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
      {description && <DeviceDescription maxWidth={maxWidth} description={description} />}

      {advantages && (
        <DeviceAdvantages marginLeft={marginLeft} advantages={advantages} rowAdvantages={rowAdvantages}/>
      )}
    </div>
  );
};
