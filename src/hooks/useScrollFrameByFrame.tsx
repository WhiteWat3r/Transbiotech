import { useEffect, useState, useRef } from "react";

export const useScrollFrameByFrame = (
  frames: string[],
  isDesktop: boolean,
): { currentFrame: string; elementRef: React.RefObject<HTMLDivElement> } => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  const changeFrame = (direction: number) => {
    setCurrentFrameIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;
      if (nextIndex < 0) return 0;
      if (nextIndex >= frames.length) return frames.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          if (event.deltaY > 0) {
            changeFrame(1);
          } else if (event.deltaY < 0) {
            changeFrame(-1);
          }
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (elementRef.current) {
        const touchMove = event.touches[0].clientY - touchStartRef.current;

        if (touchMove > 100) {
          changeFrame(-1);
          touchStartRef.current = event.touches[0].clientY;
        } else if (touchMove < -100) {
          changeFrame(1);
          touchStartRef.current = event.touches[0].clientY;
        }
      }
    };

    if (isDesktop) {
      window.addEventListener("wheel", handleWheel);
    } else {
      elementRef.current?.addEventListener("touchstart", handleTouchStart);
      elementRef.current?.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (isDesktop) {
        window.removeEventListener("wheel", handleWheel);
      } else {
        elementRef.current?.removeEventListener("touchstart", handleTouchStart);
        elementRef.current?.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [frames, isDesktop]);

  return {
    currentFrame: frames[currentFrameIndex],
    elementRef,
  };
};
