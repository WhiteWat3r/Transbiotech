import ecmoMobile from "@/assets/bg/ecmo-mobile.png";
import ecmo from "@/assets/bg/ecmo.png";
import useBreakpoint from "@/hooks/usIsMobile";

export const Ecmo = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  return (
    <div
      className={`relative z-10 flex h-[750px] w-full items-center justify-center desktop:h-screen`}
    >
      <img
        src={isDesktop ? ecmo : ecmoMobile}
        alt=""
        className={`h-full w-full object-cover`}
      />
    </div>
  );
};
