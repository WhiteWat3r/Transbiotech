import transbiotechMobile from "@/assets/perfusion/transbiotech-mobile-bg.svg";
import transbiotech from "@/assets/perfusion/transbiotech.svg";


import energoArmMobile from "@/assets/logos/energo-arm-mobile.svg";
import energoArm from "@/assets/logos/energo-arm.svg";

import useBreakpoint from "@/hooks/useIsMobile";
import { BiosoftLogo } from "@/components/icons/BiosoftLogo";
import { TransbiotechLogo } from "@/components/icons/TransbiotechLogo";
import { EnergoArmLogo } from "@/components/icons/EnergoArmLogo";

const companies = [
  {
    id: 1,
    img: <TransbiotechLogo />,
    alt: "transbiotech",
  },
  { id: 2, img: <BiosoftLogo />,  alt: "biosoft" },
  { id: 3, img: <EnergoArmLogo />, alt: "energoArm" },
];

export const LogosList = ({ logos }: { logos?: string[] }) => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint !== "mobile";

  return (
    <ul className="mb-[26px] mt-[15px] gap-[13px] flex desktop:mt-[27px] justify-start desktop:gap-[19px] desktop:mb-[38px]">
      {(logos
        ? companies.filter((company) => logos.includes(company.alt))
        : companies.slice(0, 2)
      ).map((company) => (
        <li key={company.id}>
{company.img}
        </li>
      ))}
    </ul>
  );
};
