import { BiosoftLogo } from "@/components/ui/icons/BiosoftLogo";
import { EnergoArmLogo } from "@/components/ui/icons/EnergoArmLogo";
import { TransbiotechLogo } from "@/components/ui/icons/TransbiotechLogo";
import useBreakpoint from "@/hooks/useBreakpoint";

const companies = [
  {
    id: 1,
    img: <TransbiotechLogo />,
    alt: "transbiotech",
  },
  { id: 2, img: <BiosoftLogo />, alt: "biosoft" },
  { id: 3, img: <EnergoArmLogo />, alt: "energoArm" },
];

export const LogosList = ({ logos }: { logos?: string[] }) => {
  const { isDesktop } = useBreakpoint();

  return (
    <ul className="mb-[26px] mt-[15px] flex justify-start gap-[13px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px]">
      {(logos
        ? companies.filter((company) => logos.includes(company.alt))
        : companies.slice(0, 2)
      ).map((company) => (
        <li key={company.id}>{company.img}</li>
      ))}
    </ul>
  );
};
