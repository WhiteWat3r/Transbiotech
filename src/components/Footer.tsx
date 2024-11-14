import footerBg from "../assets/bg/footer.png";

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
  return (
    <div className="relative w-full min-h-[750px] flex flex-col px-[20px]">
      <img
        src={footerBg}
        alt="asd"
        className="w-full absolute bottom-0 left-0 z-[1]"
      />

      <div className="p-[40px] w-full bg-white rounded-t-[25px] mt-[115px] h-[635px]">
        <span className="text-[#929292] geologica-text font-semibold text-[32px] leading-[36px] mt-[60px]">
          Продлевая жизнь вместе
          <span className="text-[#6A78C1]">{` с\u00A0вами`}</span>
        </span>

        <ul className="mt-[40px] flex flex-col gap-[5px]">
          <li className="flex gap-[50px]">
            <p className="text-[14px] leading-[17px] font-medium text-[#808080] geologica-text">
              контакты
            </p>
            <div className="flex flex-col gap-[10px] text-[14px] text-[#565656]">
              <span>
                г. Санкт-Петербург, Звенигородская ул., д. 8-10, лит. Б, офис 42
              </span>
              <span className="underline">+7 (915) 291-75-19</span>
              <a
                className="underline  mb-[20px]"
                href="mailto:info@transbiotech.ru"
              >
                info@transbiotech.ru
              </a>
            </div>
          </li>
          <li className="flex gap-[50px]">
            <p className="text-[14px] leading-[17px] font-medium text-[#808080] geologica-text">
              документы
            </p>
          </li>
          <li className="flex gap-[50px]">
            <p className="text-[14px] leading-[17px] font-medium text-[#808080] geologica-text">
              новости
            </p>
          </li>
        </ul>

        <div className="flex flex-col gap-[5px] mt-[125px]">
          {requisites.map((req) => (
            <span
              key={req.id}
              className="font-semibold text-[#D9D9D9] text-[10px] leading-[12px]"
            >
              {req.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
