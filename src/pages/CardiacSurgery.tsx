import React from "react";

import { CardiacSurgeryCABG } from "@/components/cardiac-surgery/CardiacSurgeryCABG";
import { CardiacSurgeryCPB } from "@/components/cardiac-surgery/CardiacSurgeryCPB";
import { CardiacSurgeryMain } from "@/components/cardiac-surgery/CardiacSurgeryMain";
import { CardiacSurgeryProtezHeart } from "@/components/cardiac-surgery/CardiacSurgeryProtezHeart";
import { CardiacSurgeryTechnologies } from "@/components/cardiac-surgery/CardiacSurgeryTechnologies";
import { CardiacSurgeryVascularProtheses } from "@/components/cardiac-surgery/CardiacSurgeryVascularProtheses";
import { PhotoBlock } from "@/components/ui/PhotoBlock";

import doctorDesktopImage from "../assets/images/cardio-surgery/doctor-image-desktop.jpg"
import doctorMobileImage from "../assets/images/cardio-surgery/doctor-image-mobile.jpg"

export const CardiacSurgery = () => {
  return (
    <>
      <CardiacSurgeryMain />
      <CardiacSurgeryTechnologies />
      <CardiacSurgeryCPB />
      <CardiacSurgeryCABG />
      <CardiacSurgeryVascularProtheses />
      <PhotoBlock desktopPhoto={doctorDesktopImage} mobilePhoto={doctorMobileImage} />
      <CardiacSurgeryProtezHeart />
    </>
  );
};
