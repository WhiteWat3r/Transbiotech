import transbiotechMobile from "@/assets/perfusion/transbiotech-mobile-bg.svg";
import transbiotech from "@/assets/perfusion/transbiotech.svg";

import biosoftMobile from "@/assets/perfusion/biosoft-mobile.svg";
import biosoft from "@/assets/perfusion/biosoft.svg";

import energoArmMobile from "@/assets/logos/energo-arm-mobile.svg";
import energoArm from "@/assets/logos/energo-arm.svg";

import useBreakpoint from "@/hooks/usIsMobile";

const companies = [
  {
    id: 1,
    descImg: transbiotech,
    mobileImg: transbiotechMobile,
    alt: "transbiotech",
  },
  { id: 2, descImg: biosoft, mobileImg: biosoftMobile, alt: "biosoft" },
  { id: 3, descImg: energoArm, mobileImg: energoArmMobile, alt: "energoArm" },
];

export const TransbiotechBiosoftList = ({ logos }: { logos?: string[] }) => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint !== "mobile";

  return (
    <ul className="mb-[26px] mt-[15px] flex gap-[13px]">
      {(logos ? companies.filter(company => logos.includes(company.alt)) : companies.slice(0,2)).map((company) => (
        <li key={company.id}>
          <img
            src={isDesktop ? company.descImg : company.mobileImg}
            alt={company.alt}
          />
        </li>
      ))}
    </ul>
  );
};
