import ecmoMobile from "@/assets/bg/ecmo-mobile.png";
import ecmo from "@/assets/bg/ecmo.png";
import useBreakpoint from "@/hooks/useIsMobile";

export const Ecmo = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  return (
    <div
      className={`relative z-10 flex h-[680px] w-full items-center justify-center desktop:h-auto`}
    >
      <img
        src={isDesktop ? ecmo : ecmoMobile}
        alt=""
        className={`h-full w-full object-cover desktop:h-auto`}
      />
      <p className="text-[60px] leading-[52px] bottom-[202px] right-[50%] translate-x-[50%] desktop:translate-x-0 font-semibold geologica-text desktop:head-1 bg-ecmo-gradient 
      absolute bg-clip-text uppercase text-transparent desktop:bottom-[10.2%] desktop:right-[6.8%]">
        экмо
      </p>
    </div>
  );
};
