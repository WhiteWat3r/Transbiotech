import { ContactItem } from "@/components/contacts/ContactItem";

import contactsImg from "@/assets/images/contacts/contacts.png";
import contactsImgDesk from "@/assets/images/contacts/contacts-desk.png";
import useBreakpoint from "@/hooks/useBreakpoint";

const contacts = [
  {
    title: "адрес",
    id: 1,
    text: "г. Санкт-Петербург, Звенигородская ул., д. 8-10, лит. Б, офис 42",
  },
  {
    title: "телефон",
    id: 2,
    text: "+7 (915) 291-75-19",
    sx: "underline",
  },
  {
    title: "реквизиты",
    id: 3,
    text: "ИНН 7811536910\nКПП 783801001\nОГРН 1127847628809\nООО «ТрансБиоТек»",
  },
  {
    title: "e-mail",
    id: 4,
    text: "info@transbiotech.ru",
  },
];

export const Contacts = () => {
  const { isDesktop } = useBreakpoint();
  return (
    <div className="mt-[6px] desktop:mt-[40px]">
      <div className="mx-auto mb-[45px] flex w-full max-w-[1200px] flex-col gap-[25px] px-[20px] desktop:mb-[40px] desktop:gap-[38px] desktop:px-[80px]">
        <h2 className="mob-head-2 desktop:head-2 text-grey-1">контакты</h2>
        <div className="flex flex-col gap-[25px] desktop:flex-row desktop:gap-[82px]">
          <p className="geologica-text whitespace-pre-wrap text-[18px] font-semibold leading-[100%] text-black-default desktop:min-w-[360px] desktop:text-[24px] desktop:tracking-[-0.4px]">{`Располагаемся в Петербурге.\nРаботаем по всей России.`}</p>
          <ul className="grid w-full grid-cols-2 gap-x-[20px] gap-y-[25px] desktop:gap-x-[110px] desktop:gap-y-[46px]">
            {contacts.map((contact) => (
              <ContactItem
                title={contact.title}
                text={contact.text}
                sx={contact.sx}
              />
            ))}
          </ul>
        </div>
      </div>
      <img
        src={isDesktop ? contactsImgDesk : contactsImg}
        alt=""
        className="mx-auto w-full max-w-[1200px] object-cover 1440:rounded-xl"
      />
    </div>
  );
};
