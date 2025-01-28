import footerDesktopBg from "@/assets/images/home/footer-desktop.png";
import footerBg from "@/assets/images/home/footer.png";
import footerLogo from "@/assets/images/logos/footer-logo.svg";
import useBreakpoint from "@/hooks/useBreakpoint";

const requisites = [
  {
    id: 1,
    text: "ИНН 7811536910 КПП 783801001",
  },
  {
    id: 2,
    text: "ОГРН 1127847628809",
  },
  {
    id: 3,
    text: "ООО «ТрансБиоТек»",
  },
];

export const Footer = () => {
  const { breakpoint, isDesktop } = useBreakpoint();

  return (
    <footer className="relative flex h-[700px] w-full flex-col justify-center overflow-hidden px-[20px] desktop:h-[770px] desktop:justify-end desktop:pr-0">
      <img
        src={breakpoint === 'mobile' ? footerBg : footerDesktopBg }
        alt="asd"
        className="absolute bottom-0 left-[50%] z-20 translate-x-[-50%] object-contain desktop:bottom-auto desktop:top-[50px] 1440:top-[-200px] desktop:left-[unset] desktop:translate-x-0 desktop:right-0 desktop:max-w-[1200px]"
      />

      <div className={"desktop:pl-[80px] desktop:bg-white desktop:rounded-t-none desktop:rounded-tl-[45px] flex flex-col"}>
        <div
          className="bg-white desktop:rounded-0 mt-[80px] flex h-[620px] w-full flex-col rounded-[25px] p-[40px] pb-[25px] desktop:mx-auto relative desktop:mt-[30px] desktop:h-[600px] desktop:p-[80px] desktop:pl-[354px] desktop:max-w-[1200px] desktop:ml-auto">
          <div
            className="geologica-text relative z-30 text-[32px] font-semibold leading-[36px] text-[#929292] desktop:text-[72px] desktop:font-medium desktop:leading-[72px] desktop:text-grey-1">
            {`Продлевая жизнь`}
            <p className="">
              {`вместе `}
              <span className="text-indigo">{`с\u00A0вами`}</span>
            </p>
          </div>

          <ul className="relative z-30 mt-[40px] flex flex-col gap-[5px] desktop:mt-[80px] desktop:gap-[40px]">
            <li className="flex gap-[50px] desktop:gap-[63px]">
              <p
                className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2 desktop:text-[24px] desktop:leading-[29px]">
                контакты
              </p>
              <div
                className="flex flex-col gap-[10px] text-[14px] text-grey-1 desktop:mt-1 desktop:max-w-[444px] desktop:flex-row desktop:gap-[15px] desktop:text-[18px] desktop:leading-[22px]">
              <span>
                г. Санкт-Петербург, Звенигородская ул., д. 8-10, лит. Б, офис 42
              </span>
                <div className="flex flex-col gap-[10px] desktop:gap-[25px]">
                <span className="underline desktop:no-underline">
                  +7 (915) 291-75-19
                </span>

                  <a
                    className="mb-[20px] underline"
                    href="mailto:info@transbiotech.ru"
                  >
                    info@transbiotech.ru
                  </a>
                </div>
              </div>
            </li>
            <li className="flex gap-[50px] desktop:gap-[63px]">
              <p
                className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2 desktop:text-[24px] desktop:leading-[29px]">
                документы
              </p>
            </li>
            {/* <li className="flex gap-[50px]">
            <p className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2">
              новости
            </p>
          </li> */}
          </ul>

          <ul className="relative z-30 mt-auto flex flex-col gap-[5px] desktop:mt-[20px] desktop:gap-0">
            {requisites.map((req) => (
              <li
                key={req.id}
                className="text-[10px] font-semibold uppercase leading-[12px] text-[#D9D9D9] desktop:text-[15px] desktop:leading-[18px]"
              >
                {req.text}
              </li>
            ))}
          </ul>

          {isDesktop && (
            <img
              src={footerLogo}
              alt={"Transbiotech"}
              className="absolute bottom-[56px] left-[86px] z-30"
            />
          )}
        </div>
      </div>

    </footer>
  );
};
