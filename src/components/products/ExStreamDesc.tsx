import { useHighlightedText } from "@/hooks/useScrollHighlight";

export const ExStreamDesc = () => {
  const textContent = `Аппарат Ex-Stream – современный высокотехнологичный медицинский аппарат, разработанный\nи произведенный в России`;
  const { highlightedText, elementRef } = useHighlightedText({ textContent });

  return (
    <div className="w-full px-[20px] py-[80px]">
      <p
        ref={elementRef}
        className="mob-head-3 desktop:head-4 flex flex-wrap text-grey-2 desktop:my-[85px] desktop:max-w-[895px]"
      >
        {highlightedText}
      </p>
    </div>
  );
};
