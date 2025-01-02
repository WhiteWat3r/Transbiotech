import bgThird from "@/assets/images/home/bg-third.png";
import { MoreButton } from "@/components/ui/MoreButton";

export const SectionService = () => {

  console.log('перерисовалась секция сервиса');
  
  return (
    <div className="h-[750px] desktop:h-[800px] desktop:bg-[#dddddd]">
      <div className="relative mx-auto flex h-[750px] w-full max-w-[1440px] flex-col desktop:h-[800px] desktop:flex-row">
        <img
          src={bgThird}
          alt="Сервис"
          className="max-h-[450px] object-cover desktop:h-full desktop:max-h-full desktop:w-[50%]"
        />

        <div className="flex flex-col px-[20px] pr-[80px] desktop:w-[50%] desktop:justify-center desktop:px-[45px] desktop:pr-[45px]">
          <p className="geologica-text mb-[15px] mt-[40px] text-[27px] leading-[27px] tracking-tighter text-[#929292] desktop:text-[56px] desktop:leading-[57px]">
            {"Отдельное направление нашей\u00A0работы\u00A0—"}
            <span className="block text-grey-1">сервис.</span>
          </p>

          <p className="mb-[25px] text-[14px] leading-[17px] text-grey-1 desktop:mb-[35px] desktop:text-[22px] desktop:leading-[22px]">
            Мы предоставляем сервисное
            <span className="block font-semibold">
              обслуживание ко всей поставляемой нами продукции.
            </span>
          </p>
          <MoreButton />
        </div>
      </div>
    </div>
  );
};
