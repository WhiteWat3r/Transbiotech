export const MoreButton = ({
  type = "filled",
  onClick,
}: {
  type?: "filled" | "ghost ";
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex max-w-[93px] items-center justify-center rounded-[45px] ${type === "filled" ? "bg-indigo" : "bg-white"} mob-button h-[27px] w-[97px] transition-all duration-500 hover:bg-indigo hover:text-white desktop:h-[38px] desktop:w-[141px] desktop:max-w-[141px] desktop:bg-[white] desktop:text-[18px] desktop:leading-[22px] desktop:text-black-default desktop:hover:translate-y-[-10px]`}
    >
      подробнее
    </button>
  );
};
