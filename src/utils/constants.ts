import { IMenuItem } from "./types";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "о компании",
    links: [
      { linkId: 1, text: "документы", href: "" },
      { linkId: 2, text: `миссия\nи\u00A0ценности`, href: "" },
      { linkId: 3, text: "новости", href: "" },
    ],
  },
  {
    id: 2,
    title: "технологии",
    links: [
      { linkId: 1, text: "перфузионные технологии", href: "/perfusion" },
      // {
      //   linkId: 2,
      //   text: "Просмотр страницы технологии (тест)",
      //   href: "/technologies",
      // },
      // { linkId: 1, text: "кардиохирургия", href: "/cardiac-surgery" },
      // { linkId: 1, text: "аритмология", href: "/arrhythmology" },
      // { linkId: 1, text: "скорая помощь", href: "/ems" },
    ],
  },
  {
    id: 3,
    title: "продукты",
    links: [
      // { linkId: 1, text: "аппарат Ex\u2011Stream", href: "/ex-stream" },
      // { linkId: 2, text: "Back\u2011Table\u00A01.0", href: "/black-table-1-0" },
    ],
  },
  {
    id: 4,
    title: "контакты",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
  {
    id: 5,
    title: "новости",
    links: [{ linkId: 1, text: "документы", href: "" }],
  },
];

export const directionInfoButtons = [
  {
    id: 1,
    text: "Инфо",
    color: "#6A78C1",
  },
  {
    id: 2,
    text: "Технологии",
    color: "#90882B",
  },
  {
    id: 3,
    text: "Сопровождение",
    color: "#E04918",
  },
];

export const perfusionCards = [
  { id: 1, text: "Внутриаорталь-ная баллонная контрпульсация" },
  { id: 2, text: "Искусственный желудочек сердца" },
  { id: 3, text: "ЭКМО в лечении сердечно-легочной недостаточности" },
  { id: 4, text: "ЭКМО при\u00A0внезапной сердечной смерти" },
  { id: 5, text: "ЭКМО в трансплантации органов" },
  { id: 6, text: "ЭКМО-поддержка эндоваскулярных вмешательств" },
  { id: 7, text: "Подготовка органов к трансплантации" },
  { id: 8, text: "Изолированная перфузия\u00A0лёгкого" },
];

export const mainSectionButtons = [
  { id: 1, text: "Инфо" },
  { id: 2, text: "Продукция" },
  { id: 3, text: "Сопровождение" },
];
