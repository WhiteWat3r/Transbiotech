export const MoreButton = ({type = 'filled'} : {type?: 'filled' | 'ghost '}) => {
  return (
    <button className={`flex max-w-[93px] items-center justify-center rounded-[45px] ${type === 'filled' ? 'bg-indigo' : 'bg-white'}
           mob-button transition-all duration-500 w-[97px] h-[27px] desktop:w-[141px]
          hover:bg-indigo hover:text-white desktop:h-[38px] desktop:max-w-[141px] desktop:bg-[white] desktop:text-[18px] 
          desktop:leading-[22px] desktop:text-black-default desktop:hover:translate-y-[-10px]`}>
      подробнее
    </button>
  );
};
