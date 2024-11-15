import medic1 from "../assets/doctors/1.png";
import medic2 from "../assets/doctors/2.png";
import medic3 from "../assets/doctors/3.png";
import medic4 from "../assets/doctors/4.png";
import medic5 from "../assets/doctors/5.png";
import medic6 from "../assets/doctors/6.png";
import arrowLeft from "../assets/arrows/arrow-left.svg";
import arrowRight from "../assets/arrows/arrow-right.svg";




const team = [
  { id: 1, photo: medic1 },
  {
    id: 2,
    photo: medic2,
  },
  {
    id: 3,
    photo: medic3,
  },
  {
    id: 4,
    photo: medic4,
  },
  {
    id: 5,
    photo: medic5,
  },
  {
    id: 6,
    photo: medic6,
  },
];

export const OurTeamSection = () => {
  return (
    <div className="relative w-full min-h-[750px] flex flex-col px-[20px]">
      <h2 className="text-[#565656] geologica-text font-medium text-[32px] leading-[22px] mt-[60px] mb-[20px]">
        команда
      </h2>

      <div className="text-[#929292] text-[14px] leading-[17px] self-end max-w-[217px] mb-[42px]">
        <p className="mb-[20px]">
          Transbiotech — это дружная команда единомышленников.
        </p>
        <p className="mb-[2px]">Нас всех объединяют единые </p>
        <span className="rounded-[30px] border-[1px] border-[#6A78C1] px-[8px]">{`цели\u00A0и\u00A0ценности`}</span>
      </div>

      <ul className="w-full flex flex-wrap gap-[20px] justify-between">
        {team.map((item) => (
          <li key={item.id} className="w-[150px] h-[160px]">
            <img src={item.photo} alt="" />
          </li>
        ))}
      </ul>

      <div className="flex gap-[18px] justify-center mt-[20px] pb-[22px]">
        <button><img src={arrowLeft} alt={'Назад'} /></button>
        <button><img src={arrowRight} alt={'Вперед'} /></button>
      </div>
    </div>
  );
};
