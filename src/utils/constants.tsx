import { IAdvantage, IMenuItem } from "./types";

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: "о компании",
    href: "/",
    links: [
      // { linkId: 1, text: "документы", href: "" },
      // { linkId: 2, text: `миссия\nи\u00A0ценности`, href: "" },
      // { linkId: 3, text: "новости", href: "" },
    ],
  },
  {
    id: 2,
    title: "технологии",
    href: "/technologies",
    links: [
      { linkId: 1, text: "все технологии", href: "/technologies" },
      { linkId: 2, text: "перфузионные технологии", href: "/perfusion" },
      { linkId: 3, text: "кардиохирургия", href: "/cardiac-surgery" },
      { linkId: 4, text: "аритмология", href: "/arrhythmology" },
      { linkId: 5, text: "скорая помощь", href: "/ems" },
    ],
  },
  {
    id: 3,
    title: "продукты",
    href: "/products",
    links: [
      { linkId: 1, text: "все продукты", href: "/products" },
      // { linkId: 2, text: "аппарат Ex\u2011Stream", href: "/in-progress" },
      // { linkId: 3, text: "Back\u2011Table\u00A01.0", href: "/in-progress" },
    ],
  },
  {
    id: 4,
    title: "контакты",
    href: "/contacts",
    links: [
      // { linkId: 1, text: "контакты", href: "/contacts" }
    ],
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

export const cardiacSurgeryCards = [
  { id: 1, type: "normal", title: "CPB", text: "Искусственное кровообращение" },
  { id: 2, type: "normal", title: "CABG", text: "Аортокоронарное шунтирование" },
  { id: 3, type: "normal", title: "Vascular Protheses ", text: "Протезирование сосудов" },
  { id: 4, type: "normal", title: "Протезирование клапанов сердца", text: "" },
];

export const arrhythmologyCards = [
  { id: 1, type: "normal", title: "Технология радиочастотной абляции", mobileTitle: "Технология радиочастотной абляции" },
  { id: 2, type: "normal", title: "Электрофизиологичес-кое исследование сердца", mobileTitle: "Электрофизиологическое исследование сердца" },
  { id: 3, type: "normal", title: "Технология дистанционного мониторинга", mobileTitle: "Технология дистанционного мониторинга" },
  { id: 4, type: "normal", title: "Технология кардиостимуляции", mobileTitle: "Технология кардиостимуляции" },
];

export const emsCards = [
  { id: 1, type: "normal", title: "Технология механической компрессии сердца", mobileTitle: "Технология механической компрессии сердца" },
  { id: 2, type: "normal", title: "Организация рабочего пространства врача", mobileTitle: "Организация рабочего пространства врача" },
];

export const mainSectionButtons = [
  { id: 1, text: "Инфо" },
  { id: 2, text: "Технологии" },
  { id: 3, text: "Сопровождение" },
];

export const exStreamAdvantages = [
  {
    id: 1,
    title: "Удобство и\u00A0простота эксплуатации",
    text: (
      <>
        Не требующая специального обучения.{" "}
        <span className="text-indigo">
          {" "}
          Встроенная система подсказок и сигнализации,{" "}
        </span>{" "}
        наличие автоматических режимов управления, возможность использования
        расходных материалов любых производителей.
      </>
    ),
  },
  {
    id: 2,
    title: "Автономная система электропитания",
    text: (
      <>
        С расширенным ресурсом{" "}
        <span className="text-indigo">не менее 5 часов </span>
        непрерывной работы всех систем от встроенного аккумулятора.
      </>
    ),
  },
  {
    id: 3,
    title: "Конкурентная цена",
    text: (
      <>
        По сравнению с моделями <span className="text-indigo">зарубежных </span>
        производителей.
      </>
    ),
  },
  {
    id: 4,
    title: "Технология беспроводного обмена данными",
    text: (
      <>
        Передача данных с аппарата на дополнительный монитор{" "}
        <span className="text-indigo">в режиме реального времени.</span>
      </>
    ),
  },
  {
    id: 5,
    title: "Защищенные патентами решения",
    text: (
      <>
        В области медицинской технологии, конструкции и информационного
        обеспечения.{" "}
        <span className="text-indigo">
          Все патенты выданы Федеральной службой по интеллектуальной
          собственности РФ.
        </span>
      </>
    ),
  },
  {
    id: 99,
  },
  {
    id: 6,
    title: "Надежность",
    text: (
      <>
        За счет{" "}
        <span className="text-indigo">
          аппаратно-программного резервирования{" "}
        </span>
        основных функций и встроенной системы самодиагностики в режиме реального
        времени.
      </>
    ),
  },
  {
    id: 7,
    title: "Простота обслуживания",
    text: (
      <>
        Техническое обслуживание не требуется. Диагностика работы аппарата и
        ремонт занимают <span className="text-indigo">несколько часов.</span>
      </>
    ),
  },
];

export const backTableAdvantages: IAdvantage[] = [
  {
    id: 1,
    title: "Оптимальная высота и удобная рабочая зона",
  },
  {
    id: 2,
    title: "Защищенные патентами решения",
  },
  {
    id: 3,
    title: "Съемная чаша охлаждается льдом",
  },
  {
    id: 4,
    title: "Разграничение стерильной и нестерильной зон",
  },
  {
    id: 5,
    title: "Стол для проведения перфузии органа",
  },
  {
    id: 6,
    title: "Слив избытка жидкости ",
  },
  {
    id: 7,
    title: "img",
  },
];
