import React from "react";

import { CardiacSurgeryMain } from "@/components/cardiac-surgery/CardiacSurgeryMain";
import { CardiacSurgeryTechnologies } from "@/components/cardiac-surgery/CardiacSurgeryTechnologies";

export const CardiacSurgery = () => {
  return (
    <>
      <CardiacSurgeryMain />
      <CardiacSurgeryTechnologies />
    </>
  );
};
