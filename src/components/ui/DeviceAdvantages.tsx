export const DeviceAdvantages = ({
  advantages,
  marginLeft = true,
  rowAdvantages,
}: {
  advantages: string[];
  marginLeft?: boolean;
  rowAdvantages?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-[15px] desktop:flex-row">
      <span className="mob-head-4 desktop:text-2 max-w-[170px] text-grey-2 opacity-50">
        преимущества методики
      </span>
      <ul
        className={`mob-text-3 ${marginLeft ? "ml-auto" : "ml-0"} flex w-[276px] ${rowAdvantages ? "flex-row desktop:w-[775px] desktop:gap-[20px]" : "flex-col desktop:w-[510px] desktop:gap-[40px]"} gap-[14px] uppercase text-black-default`}
      >
        {advantages.map((advantage, index) => (
          <li
            key={index}
            className={`mob-head-5 desktop:text-3 relative text-indigo`}
          >
            <p
              className={`${rowAdvantages ? "max-w-[245px]" : ""} ${rowAdvantages && index === 1 ? "tracking-[-0.8px]" : " "}`}
            >
              {advantage}
            </p>
            <span
              className={`block h-[1px] ${marginLeft ? "w-full" : "w-[150%]"} mt-[1px] bg-indigo desktop:mt-[5px]`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
