export const SectionTitle = ({firstChapter, secondChapter, className}: {firstChapter: string; secondChapter?: string, className?: string}) => {
  return (
    <p className={`geologica-text text-[36px] leading-[36px] font-medium tracking-[-0.2px] text-grey-1 desktop:head-2 ${className}`}>
     {firstChapter}{" "}
      {secondChapter && <span className="text-black-default desktop:block">{secondChapter}</span>}
    </p>
  );
};
