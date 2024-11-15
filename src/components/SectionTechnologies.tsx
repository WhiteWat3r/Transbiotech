import React from "react";

import techLogoFirst from "../assets/technologies/tech-logo-first.svg";
import techLogoSecond from "../assets/technologies/tech-logo-second.svg";
import techLogoThird from "../assets/technologies/tech-logo-third.svg";
import techLogoFourth from "../assets/technologies/tech-logo-fourth.svg";

const technologies = [
  {
    id: 1,
    title: "Перфузионные технологии",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#6A78C1",
    logo: techLogoFirst,
  },
  {
    id: 2,
    title: "Кардио хирургия",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#90882B",
    logo: techLogoSecond,
  },
  {
    id: 3,
    title: "Аритмология",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#E04918",
    logo: techLogoThird,
  },
  {
    id: 4,
    title: "Скорая помощь",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#EA7A92",
    logo: techLogoFourth,
  },
];

export const SectionTechnologies = () => {
  return (
    <div className="relative w-full min-h-[750px] flex px-[20px] flex-col">
      <h2 className="text-[#565656] geologica-text font-medium text-[32px] leading-[22px] mt-[115px] mb-[40px]">
        технологии
      </h2>

      <ul className="bg-[#dddddd] w-full p-10 pr-[30px] rounded-[45px] flex flex-col gap-[30px]">
        {technologies.map((tech) => (
          <li key={tech.id}>
            <div className="flex justify-between mb-[10px]">
              <h3
                className="geologica-text text-[27px] leading-[27px] font-light mt-[10px] tracking-[-0.5px] max-w-[210px]"
                style={{ color: tech.color }}
              >
                {tech.title}
              </h3>
              <img
                src={tech.logo}
                alt={tech.title}
                className="w-[42px] h-[42px]"
              />
            </div>
            <ul className="flex gap-[5px]">
              {tech.keys.map((key, index) => (
                <li
                  key={index}
                  className={`flex justify-center items-center h-[15px] rounded-[25px] px-[5px] text-[10px] 
                  leading-[10px] font-semibold border-[0.5px] tracking-[-0.5px]`}
                  style={{ borderColor: tech.color, color: tech.color }}
                >
                  {key}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
