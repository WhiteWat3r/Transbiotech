export const DeviceAdvantages = ({ advantages }: { advantages: string[] }) => {
  return (
    <li className="flex flex-col gap-[15px]">
      <span className="mob-head-4 max-w-[141px] text-grey-2 opacity-50">
        преимущества методики
      </span>
      <ul className="mob-text-3 ml-auto flex w-[276px] flex-col gap-[14px] uppercase text-black-default">
        {advantages.map((advantage, index) => (
          <li
            key={index}
            className="mob-head-5 border-b border-indigo text-indigo"
          >
            {advantage}
          </li>
        ))}
      </ul>
    </li>
  );
};
