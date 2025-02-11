import React from 'react'
import { EMSMain } from "@/components/ems/EMSMain";
import { EMSTechnologies } from "@/components/ems/EMSTechnologies";
import { PhotoBlock } from "@/components/ui/PhotoBlock";
import car from "@/assets/images/ems/car.jpg"
import { EMSCompression } from "@/components/ems/EMSCompression";
import { EMSWorkspace } from "@/components/ems/EMSWorkspace";
import { EMSProducts } from "@/components/ems/EMSProducts";
import ParallaxVideo from "@/components/ui/ParallaxVideo";

export const EmergencyMedicalServices = () => {
  return (
    <>
      <EMSMain />
      <EMSTechnologies />
      <EMSCompression />
      <EMSWorkspace />
      <ParallaxVideo videoSrc={"/video.mp4"} />
      <EMSProducts />
    </>
  )
}
