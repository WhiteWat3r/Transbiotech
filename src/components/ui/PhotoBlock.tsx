import ecmoMobile from "@/assets/images/home/ecmo-mobile.png";
import ecmo from "@/assets/images/home/ecmo.png";
import useBreakpoint from "@/hooks/useBreakpoint";

export const PhotoBlock = ({desktopPhoto,
                             mobilePhoto,
                             className} : {desktopPhoto: string, mobilePhoto: string, className?: string}) => {
  const { isDesktop } = useBreakpoint();

  return (
    <div
      className={`relative z-10 flex h-[800px] w-full items-center justify-center desktop:h-auto ${className}`}
    >
      <img
        src={isDesktop ? desktopPhoto : mobilePhoto}
        alt=""
        className={`h-full w-full object-cover desktop:h-auto`}
      />
    </div>
  );
};
