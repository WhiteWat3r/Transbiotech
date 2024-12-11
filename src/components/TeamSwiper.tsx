import person1 from "../assets/doctors/1.png";
import person2 from "../assets/doctors/2.png";
import person3 from "../assets/doctors/3.png";
import person4 from "../assets/doctors/4.png";
import person5 from "../assets/doctors/5.png";
import person6 from "../assets/doctors/6.png";
import person7 from "../assets/doctors/7.png";
import person8 from "../assets/doctors/8.png";
import person9 from "../assets/doctors/9.png";
import person10 from "../assets/doctors/10.png";
import person11 from "../assets/doctors/11.png";
import person12 from "../assets/doctors/12.png";
import person13 from "../assets/doctors/13.png";
import person14 from "../assets/doctors/14.png";
import person15 from "../assets/doctors/15.png";
import person16 from "../assets/doctors/16.png";
import person17 from "../assets/doctors/17.png";
import person18 from "../assets/doctors/18.png";
import person19 from "../assets/doctors/19.png";
import person20 from "../assets/doctors/20.png";
import person21 from "../assets/doctors/21.png";
import person22 from "../assets/doctors/22.png";
import person23 from "../assets/doctors/23.png";
import person24 from "../assets/doctors/24.png";
import person25 from "../assets/doctors/25.png";
import person26 from "../assets/doctors/26.png";
import person27 from "../assets/doctors/27.png";
import person28 from "../assets/doctors/28.png";
import person29 from "../assets/doctors/29.png";
import person30 from "../assets/doctors/30.png";
import useIsMobile from "../hooks/usIsMobile";
import { memo, useEffect, useRef, useState } from "react";

const preloadImages = (imageSources: string[]) => {
  imageSources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

interface IPerson {
  id: number;
  photo: string;
  name: string;
  specialization: string;
}

const persons: IPerson[] = [
  { id: 1, photo: person1, name: "1", specialization: "1" },
  { id: 2, photo: person2, name: "2", specialization: "2" },
  { id: 3, photo: person3, name: "3", specialization: "3" },
  { id: 4, photo: person4, name: "4", specialization: "4" },
  { id: 5, photo: person5, name: "5", specialization: "5" },
  { id: 6, photo: person6, name: "6", specialization: "6" },
  { id: 7, photo: person7, name: "7", specialization: "7" },
  { id: 8, photo: person8, name: "8", specialization: "8" },
  // { id: 9, photo: person9, name: "Доктор И", specialization: "Офтальмолог" },
  // { id: 10, photo: person10, name: "Доктор К", specialization: "ЛОР" },
  // { id: 11, photo: person11, name: "Доктор Л", specialization: "Кардиолог" },
  // { id: 12, photo: person12, name: "Доктор М", specialization: "Гинеколог" },
  // { id: 13, photo: person13, name: "Доктор Н", specialization: "Терапевт" },
  // { id: 14, photo: person14, name: "Доктор О", specialization: "Кардиолог" },
  // { id: 15, photo: person15, name: "Доктор П", specialization: "Уролог" },
  // { id: 16, photo: person16, name: "Доктор Р", specialization: "Пульмонолог" },
  // { id: 17, photo: person17, name: "Доктор С", specialization: "Хирург" },
  // { id: 18, photo: person18, name: "Доктор Т", specialization: "Терапевт" },
  // { id: 19, photo: person19, name: "Доктор У", specialization: "Эндокринолог" },
  // { id: 20, photo: person20, name: "Доктор Ф", specialization: "Невролог" },
  // { id: 21, photo: person21, name: "Доктор Х", specialization: "Педиатр" },
  // { id: 22, photo: person22, name: "Доктор Ц", specialization: "фывфыв" },
  // { id: 23, photo: person23, name: "Доктор Ч", specialization: "Офтальмолог" },
  // { id: 24, photo: person24, name: "Доктор Ш", specialization: "Стоматолог" },
  // { id: 25, photo: person25, name: "Доктор Щ", specialization: "Кардиолог" },
  // { id: 26, photo: person26, name: "Доктор Ы", specialization: "ЛОР" },
  // { id: 27, photo: person27, name: "Доктор Э", specialization: "Гинеколог" },
  // { id: 28, photo: person28, name: "Доктор Ю", specialization: "Терапевт" },
  // { id: 29, photo: person29, name: "Доктор Я", specialization: "Хирург" },
  // { id: 30, photo: person30, name: "Доктор Z", specialization: "Ортопед" },
];

const ANIMATION_INTERVAL =3000;

export const TeamSwiper = () => {
  const breakpoint = useIsMobile();
  const isMobile = breakpoint === "mobile";

  const visibleCount = isMobile ? 6 : 18;
  const [visibleDoctors, setVisibleDoctors] = useState(
    persons.slice(0, visibleCount),
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [doctorInfo, setDoctorInfo] = useState<IPerson>();
  // const [isBlockVisible, setIsBlockVisible] = useState(false);

  useEffect(() => {
    const images = persons.map((person) => person.photo);
    preloadImages(images);
  }, []);

  useEffect(() => {
    const changeDoctor = () => {
      if (activeIndex !== null) {
        // setIsBlockVisible(false);
        const updatedDoctors = [...visibleDoctors];
        const remainingDoctors = persons.filter(
          (doctor) => !visibleDoctors.some((v) => v.id === doctor.id),
        );
        const newDoctor =
          remainingDoctors[Math.floor(Math.random() * remainingDoctors.length)];

        updatedDoctors[activeIndex] = newDoctor;

        const availableIndexes = visibleDoctors
          .map((_, index) => index)
          .filter((index) => index !== activeIndex);
        const nextIndex =
          availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

        const oldDoc = updatedDoctors[nextIndex];
        setTimeout(() => {
          setDoctorInfo(oldDoc);
        }, 100); // на милисекунду видно инфу по старому врачу

        setTimeout(() => {
          setActiveIndex(nextIndex);

          // setIsBlockVisible(true);
        }, 0);

        setTimeout(() => {
          setVisibleDoctors(updatedDoctors);

          // setIsBlockVisible(true);
        }, 0);
      } else {
        setActiveIndex(0);
        setDoctorInfo(persons[0]);

        // setIsBlockVisible(true);
      }
    };

    const interval = setInterval(changeDoctor, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, [activeIndex, persons, visibleDoctors]);




  return (
    <div className="grid grid-cols-2 gap-[15px] desktop:grid-cols-6 desktop:gap-[20px]">
      {visibleDoctors.map((person, index) => (
        <div key={index} className="flex justify-center">
          <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-[25px]">
            <DoctorInfo
              activeIndex={activeIndex}
              index={index}
              // doctorInfo={doctorInfo}
              person={doctorInfo}
            />

            <img
              src={person.photo}
              className="h-full w-full rounded-[20px] object-cover"
              alt={`Врач ${person.id}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const DoctorInfo = memo(
  ({
    activeIndex,
    // doctorInfo,
    index,
    person,
  }: {
    activeIndex: number | null;
    // doctorInfo: IPerson | undefined;
    index: number;
    person: IPerson | undefined;
  }) => {
    // console.log('person + doctorInfo', person, doctorInfo);

    return (
      <div
        className={`absolute inset-0 flex h-full flex-col gap-[6px] rounded-[20px] bg-indigo p-3 text-white transition-opacity ease-in-out ${
          activeIndex === index
            ? "opacity-100 delay-[0] duration-[900ms]"
            : "opacity-0 delay-[0] duration-[100ms]"
        }`}
      >
        {person && (
          <>
            <p className="geologica-text mt-auto text-[24px] font-medium leading-[24px] tracking-tighter">
              {person.name}
            </p>
            <p className="text-[15px] font-normal lowercase leading-[18px] tracking-tighter">
              {person.specialization}
            </p>
          </>
        )}
      </div>
    );
  },
);
