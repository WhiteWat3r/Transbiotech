import useBreakpoint from "@/hooks/useBreakpoint";

import { FullLogo } from "./FullLogo";



export const TransbiotechLogo = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="rounded-[40px] bg-indigo px-[10.25px] py-[5.12px] desktop:px-[16px] desktop:py-[8px]">
      <FullLogo
        color="white"
        width={isDesktop ? "157" : "100"}
        height={isDesktop ? "23" : "14.75"}
      />
    </div>
  );
};
