import React from 'react'
import { ArrhythmologyMain } from "@/components/arrhythmology/ArrhythmologyMain";
import { ArrhythmologyTechnologies } from "@/components/arrhythmology/ArrhythmologyTechnologies";
import { PhotoBlock } from "@/components/ui/PhotoBlock";

import peopleDesktop from "@/assets/images/arrhythmology/people-desktop.jpg"
import peopleMobile from "@/assets/images/arrhythmology/people-mobile.jpg"
import { ArrhythmologyTechnologyOfCardio } from "@/components/arrhythmology/ArrhythmologyTechnologyOfCardio";
import { ArrhythmologyRadioFrequency } from "@/components/arrhythmology/ArrhythmologyRadioFrequency";
import { ArrhythmologyDistanceMonitoring } from "@/components/arrhythmology/ArrhythmologyDistanceMonitoring";
import { ArrhythmologyHeartResearch } from "@/components/arrhythmology/ArrhythmologyHeartResearch";

export const Arrhythmology = () => {
  return (
    <>
      <ArrhythmologyMain />
      <ArrhythmologyTechnologies />
      <ArrhythmologyRadioFrequency />
      <PhotoBlock desktopPhoto={peopleDesktop} mobilePhoto={peopleMobile} />
      <ArrhythmologyHeartResearch />
      <ArrhythmologyDistanceMonitoring />
      <ArrhythmologyTechnologyOfCardio />
    </>
  )
}
