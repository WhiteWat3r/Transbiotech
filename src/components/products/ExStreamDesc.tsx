import { useHighlightedText } from "@/hooks/useScrollHighlight";

export const ExStreamDesc = () => {
  const textContent = `Аппарат Ex-Stream – современный высокотехнологичный медицинский аппарат, разработанный и\u00A0произведенный в России`;
  const { highlightedText, elementRef } = useHighlightedText({ textContent });

  return (
    <div className="mx-auto w-full max-w-[1200px] px-[20px] pt-[80px] desktop:px-[80px]">
      <p
        ref={elementRef}
        className="mob-head-3 desktop:head-4 flex max-w-[500px] flex-wrap text-grey-2 desktop:my-[85px] desktop:max-w-[895px]"
      >
        {highlightedText}
      </p>
    </div>
  );
};
