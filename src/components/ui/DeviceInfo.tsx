import { ReactNode } from "react";

import { DeviceAdvantages } from "./DeviceAdvantages";
import { DeviceDescription } from "./DeviceDescription";

export const DeviceInfo = ({
  advantages,
  description,
  marginLeft,
}: {
  advantages?: string[];
  description?: { mainText: string; additionalText?: ReactNode };
  marginLeft?: boolean;
}) => {
  return (
    <ul className="flex flex-col gap-[25px] z-20">
      {description && <DeviceDescription description={description} />}

      {advantages && (
        <DeviceAdvantages marginLeft={marginLeft} advantages={advantages} />
      )}
    </ul>
  );
};
