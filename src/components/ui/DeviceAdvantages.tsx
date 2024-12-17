export const DeviceAdvantages = ({ advantages, marginLeft=true }: { advantages: string[]; marginLeft?: boolean }) => {
  return (
    <li className="flex flex-col gap-[15px]">
      <span className="mob-head-4 max-w-[141px] text-grey-2 opacity-50">
        преимущества методики
      </span>
      <ul className={`mob-text-3 ${marginLeft ? "ml-auto" : "ml-0"} flex w-[276px] flex-col gap-[14px] uppercase text-black-default`}>
        {advantages.map((advantage, index) => (
          <li
            key={index}
            className="mob-head-5 text-indigo relative"
          >
            {advantage}
            <span className={`block h-[1px] ${marginLeft ? 'w-full' : 'w-[150%]'} bg-indigo mt-[1px]`}></span>
          </li>
        ))}
      </ul>
    </li>
  );
};
