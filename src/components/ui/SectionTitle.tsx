export const SectionTitle = ({firstChapter, secondChapter}: {firstChapter: string; secondChapter: string}) => {
  return (
    <p className="geologica-text text-[36px] leading-[36px] tracking-[-0.2px] text-grey-1">
     {firstChapter}{" "}
      <span className="text-black-default">{secondChapter}</span>
    </p>
  );
};
