import React, { ReactNode, useState } from "react";
import { DeviceAdvantages } from "./DeviceAdvantages";
import { DeviceDescription } from "./DeviceDescription";

export const DeviceInfo = ({
  advantages,
  description,
}: {
  advantages?: string[];
  description?: { mainText: string; additionalText: ReactNode };
}) => {
  return (
    <ul className="flex flex-col gap-[25px] z-20">
      {description && <DeviceDescription description={description} />}

      {advantages && <DeviceAdvantages advantages={advantages} />}
    </ul>
  );
};
