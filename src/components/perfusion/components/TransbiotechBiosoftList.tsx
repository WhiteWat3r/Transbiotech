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
    img: transbiotech,
    alt: "transbiotech",
  },
  { id: 2, img: biosoft,  alt: "biosoft" },
  { id: 3, img: energoArm, alt: "energoArm" },
];

export const TransbiotechBiosoftList = ({ logos }: { logos?: string[] }) => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint !== "mobile";

  return (
    <ul className="mb-[26px] mt-[15px] gap-[13px] flex desktop:mt-[27px] justify-start desktop:gap-[19px] desktop:mb-[38px]">
      {(logos
        ? companies.filter((company) => logos.includes(company.alt))
        : companies.slice(0, 2)
      ).map((company) => (
        <li key={company.id}>
          <img
          className="desktop:h-[39px]"
            src={company.img}
            alt={company.alt}
          />
        </li>
      ))}
    </ul>
  );
};
