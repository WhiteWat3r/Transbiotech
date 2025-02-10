import React from 'react'
import { EMSMain } from "@/components/ems/EMSMain";
import { EMSTechnologies } from "@/components/ems/EMSTechnologies";
import { PhotoBlock } from "@/components/ui/PhotoBlock";
import car from "@/assets/images/ems/car.jpg"
import { EMSCompression } from "@/components/ems/EMSCompression";
import { EMSWorkspace } from "@/components/ems/EMSWorkspace";
import { EMSProducts } from "@/components/ems/EMSProducts";

export const EmergencyMedicalServices = () => {
  return (
    <>
      <EMSMain />
      <EMSTechnologies />
      <EMSCompression />
      <EMSWorkspace />
      <PhotoBlock desktopPhoto={car} mobilePhoto={car} />
      <EMSProducts />
    </>
  )
}
