import ecmoMobile from "@/assets/images/home/ecmo-mobile.png";
import ecmo from "@/assets/images/home/ecmo.png";
import useBreakpoint from "@/hooks/useBreakpoint";

export const Ecmo = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div
      className={`relative z-10 flex h-[680px] w-full items-center justify-center desktop:h-auto`}
    >
      <img
        src={isDesktop ? ecmo : ecmoMobile}
        alt=""
        className={`h-full w-full object-cover desktop:h-auto`}
      />
      <p className="geologica-text desktop:head-1 absolute bottom-[202px] right-[50%] translate-x-[50%] bg-ecmo-gradient bg-clip-text text-[60px] font-semibold uppercase leading-[52px] text-transparent desktop:bottom-[10.2%] desktop:right-[6.8%] desktop:translate-x-0">
        экмо
      </p>
    </div>
  );
};
