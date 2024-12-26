import React from "react";
import { ProductSlider } from "./ProductSlider";
import { DeviceDescription } from "../ui/DeviceDescription";
import tube from "@/assets/perfusion/perfusion-4.png";

const exStreamDeviceDescription = {
  mainText: `Ex-Stream применяется в отделениях многопрофильных лечебных учреждений, в том числе в отделениях реанимации\nи интенсивной терапии, скорой медицинской помощи, кардиохирургии, рентген-эндовас-кулярной хирургии, сосудистой хирургии, медицины катастроф, военной медицины.`,
  additionalText: (
    <>
      <br />
      <br />
      {`Аппарат также может применяться службами донорства органов и тканей человека, координационными центрами 
        органного донорства, отделениями реанимации\nи интенсивной терапии лечебных учреждений, оказывающих нейрохирургическую и неврологическую помощь, 
        в региональных сосудистых центрах, в отделениях и центрах трансплантации.`}
    </>
  ),
};

export const ExStreamWhereUsed = () => {
  return (
    <div className="relative w-full desktop:mt-[190px] max-w-[1440px] mx-auto">
      <img
        src={tube}
        alt="ЭКМО при внезапной сердечной смерти"
        className="w-[75%] absolute left-[-95px] top-[370px] desktop:left-[-95px] desktop:top-[240px] desktop:h-[484px] desktop:w-[564px]"
      />
      <div className="mb-[102px] flex w-full flex-col px-[20px] desktop:flex-row-reverse desktop:gap-[72px] desktop:px-[80px]">
        <ProductSlider type={"ex-stream"} />

        <div className="flex flex-col desktop:min-w-[438px]">
          <p className="mob-head-3 mb-[18px] mt-[31px] desktop:head-4 desktop:mb-[25px] desktop:mt-[86px]">
            где используется продукт?
          </p>

          <DeviceDescription
            maxWidth="w-full"
            noTitle
            description={exStreamDeviceDescription}
          />
        </div>
      </div>
    </div>
  );
};
