import { useEffect, useState, useRef } from "react";

interface UseHighlightedTextParams {
  textContent: string;
  offset?: number;
  highlightClass?: string;
  defaultClass?: string;
  wordStyle?: React.CSSProperties;
}

export const useHighlightedText = ({
  textContent,
  offset = 0.15,
  highlightClass = "text-black-default",
  defaultClass = "text-grey-2",
  wordStyle = { marginRight: "5px" },
}: UseHighlightedTextParams): {
  highlightedText: JSX.Element[];
  elementRef: React.RefObject<HTMLParagraphElement>;
} => {
  const [highlightWordIndex, setHighlightWordIndex] = useState(0);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const scrollHandlerRef = useRef<() => void>();

  useEffect(() => {
    scrollHandlerRef.current = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (
          rect.top >= windowHeight * (0.5 - offset) &&
          rect.top <= windowHeight * (0.5 + offset)
        ) {
          const visibleProgress =
            1 -
            (rect.top - windowHeight * (0.5 - offset)) /
              (windowHeight * offset * 2);
          const totalWords = textContent.split(" ").length;
          const newIndex = Math.min(
            totalWords,
            Math.floor(visibleProgress * totalWords),
          );
          setHighlightWordIndex(newIndex);
        } else if (rect.top > windowHeight * (0.5 + offset)) {
          setHighlightWordIndex(0);
        } else if (rect.top < windowHeight * (0.5 - offset)) {
          setHighlightWordIndex(textContent.split(" ").length);
        }
      }
    };
  }, [textContent, offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollHandlerRef.current) scrollHandlerRef.current();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wordsArray = textContent.split(" ");

  const highlightedText = wordsArray.map((word, wordIndex) => {
    const isHighlighted = wordIndex < highlightWordIndex;
    return (
      <span
        key={wordIndex}
        className={isHighlighted ? highlightClass : defaultClass}
        style={wordStyle}
      >
        {word}
      </span>
    );
  });

  return { highlightedText, elementRef };
};
