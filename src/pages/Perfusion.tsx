import React from "react";
import { PerfusionMain } from "../components/perfusion/PerfusionMain";
import { PerfusionTechnologies } from "../components/perfusion/PerfusionTechnologies";
import { IABPInfo } from "../components/perfusion/IABPInfo";
import { HeartAssistDevice } from "../components/perfusion/HeartAssistDevice";

export const Perfusion = () => {
  return (
    <>
      <PerfusionMain />
      <PerfusionTechnologies />
      <IABPInfo />
      <HeartAssistDevice />
    </>
  );
};
