import { useEffect, useState, useRef } from "react";

export const useScrollFrameBySteps = (
  frames: string[],
): { currentFrame: string; elementRef: React.RefObject<HTMLUListElement> } => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const elementRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // если не видно
        if (rect.bottom < 0 || rect.top > windowHeight) {
          return;
        }
        console.log("пошел процесс");

        const blockHeight = 500; //тест высота
        const visibleStart = Math.max(0, windowHeight - rect.bottom); // начало видимой области
        const visibleEnd = Math.min(windowHeight, windowHeight - rect.top); // конец видимой области
        const visibleHeight = visibleEnd - visibleStart; // высота видимой части блока

        // 3 кадра - 3 части блока
        const stepHeight = blockHeight / frames.length;

        const scrolledHeight = Math.min(visibleHeight, blockHeight); // сколько  прокручено
        const newFrameIndex = Math.floor(scrolledHeight / stepHeight);

        if (newFrameIndex !== currentFrameIndex) {
          setCurrentFrameIndex(Math.min(newFrameIndex, frames.length - 1));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [frames, currentFrameIndex]);

  return {
    currentFrame: frames[currentFrameIndex],
    elementRef,
  };
};
