import React from "react";
import device from "@/assets/products/ex-stream-device.png";
import shadow from "@/assets/products/shadow.png";
import text from "@/assets/products/ex-stream-text.svg";
import { DeviceDescription } from "../ui/DeviceDescription";
import { ProductSlider } from "./ProductSlider";

const exStreamDeviceDescription = {
  mainText: `Ex-Stream применяется в отделениях многопрофильных лечебных учреждений, в том числе в отделениях реанимации\nи интенсивной терапии, скорой медицинской помощи, кардиохирургии, рентген-эндовас-кулярной хирургии, сосудистой хирургии, медицины катастроф, военной медицины.`,
  additionalText: (
    <>
      <br />
      <br />
      {`Аппарат также может применяться службами донорства органов и тканей человека, координационными центрами 
      органного донорства, отделениями реанимации\nи интенсивной терапии лечебных учреждений, оказывающих нейрохирургическую и неврологическую помощь, 
      в региональных сосудистых центрах, в отделениях и центрах трансплантации`}
    </>
  ),
};

export const ExStreamDevice = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] ">
      <div className="relative mt-[86px] h-[475px] w-full">
        <img
          src={device}
          alt=""
          className="absolute right-0 top-0 z-20 w-[375px]"
        />
        <img
          src={shadow}
          alt=""
          className="absolute right-0 top-[33px] z-10 h-[409px] w-[130px]"
        />
        <img src={text} alt="" />
      </div>

      <div className="mt-[40px] w-full px-[20px] mb-[102px]">
        <h2 className="mob-head-2 mb-[15px] whitespace-pre-wrap text-grey-2">{`аппарат\nEx-Stream`}</h2>

        <p className="mob-text-3 mb-[80px] text-grey-2">{`Аппарат предназначен для организации искусственного кровообращения для повышения эффективности оказания помощи\nв реаниматологии, трансплантологии, онкологии, кардиологии.`}</p>
        <ProductSlider type={'ex-stream'} />
        <p className="mob-head-3 mb-[18px] mt-[31px]">
          где используется продукт?
        </p>
        <DeviceDescription
          maxWidth="w-full"
          noTitle
          description={exStreamDeviceDescription}
        />
      </div>
    </div>
  );
};
