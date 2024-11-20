import footerBg from "../assets/bg/footer.png";
import footerLogo from "../assets/logos/footer-logo.svg";
import footerDesktopBg from "../assets/bg/footer-desktop.png";
import useIsMobile from "../hooks/usIsMobile";

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
  const breakpoint = useIsMobile();

  return (
    <footer className="relative flex h-screen w-full flex-col justify-center px-[20px] desktop:pl-[80px] desktop:pr-0">
      <img
        src={breakpoint === "mobile" ? footerBg : footerDesktopBg}
        alt="asd"
        className="absolute left-[50%] z-20 translate-x-[-50%] object-contain desktop:bottom-0"
      />

      <div className="relative mt-[115px] h-[635px] w-full rounded-t-[25px] bg-white p-[40px] pb-[25px] desktop:mt-[30px] desktop:h-auto desktop:rounded-l-[45px] desktop:rounded-tr-[0] desktop:pl-[29.5vw]">
        <div className="geologica-text desktop:text-grey-1 relative z-30 mt-[60px] text-[32px] font-semibold leading-[36px] text-[#929292] desktop:font-medium desktop:mt-[3vh] desktop:text-[72px] desktop:leading-[60px]">
          {`Продлевая жизнь ${breakpoint === "desktop" ? "В" : "в"}месте`}
          <span className="text-indigo">{` с\u00A0вами`}</span>
        </div>

        <ul className="relative z-30 mt-[40px] flex flex-col gap-[5px] desktop:mt-[11vh] desktop:gap-[20px]">
          <li className="flex gap-[50px] desktop:gap-[65px]">
            <p className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2 desktop:text-[24px] desktop:leading-[29px]">
              контакты
            </p>
            <div className="text-grey-1 flex flex-col gap-[10px] text-[14px] desktop:max-w-[258px] desktop:gap-[15px] desktop:text-[18px] desktop:leading-[22px]">
              <span>
                г. Санкт-Петербург, Звенигородская ул., д. 8-10, лит. Б, офис 42
              </span>
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
          </li>
          <li className="flex gap-[50px] desktop:gap-[65px]">
            <p className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2 desktop:text-[24px] desktop:leading-[29px]">
              документы
            </p>
          </li>
          {/* <li className="flex gap-[50px]">
            <p className="geologica-text text-[14px] font-medium leading-[17px] text-grey-2">
              новости
            </p>
          </li> */}
        </ul>

        <ul className="relative z-30 mt-[125px] flex flex-col gap-[5px] desktop:ml-[35vw] desktop:mt-[0.5px] desktop:gap-0">
          {requisites.map((req) => (
            <li
              key={req.id}
              className="text-[10px] font-semibold leading-[12px] text-[#D9D9D9] desktop:text-[15px] desktop:leading-[18px]"
            >
              {req.text}
            </li>
          ))}
        </ul>

        {breakpoint === "desktop" && (
          <img
            src={footerLogo}
            alt={"Transbiotech"}
            className="absolute bottom-[83px] left-[89px] z-30"
          />
        )}
      </div>
    </footer>
  );
};
