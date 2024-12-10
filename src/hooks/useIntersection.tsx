import { useState, useEffect, useRef } from "react";

interface UseIntersectionOptions {
  threshold: number;
}

const useIntersection = (
  ref: React.RefObject<HTMLElement>,
  options: UseIntersectionOptions = { threshold: 0.7 },
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      const isScrollingDown = window.scrollY > lastScrollY.current;

      if (entry.isIntersecting) {
        if (!hasAnimated && isScrollingDown) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      } else {
        if (!isScrollingDown) {
          setIsVisible(false);
          setHasAnimated(false);
        }
      }

      lastScrollY.current = window.scrollY;
    };

    if (element) {
      observer.current = new IntersectionObserver(handleIntersection, options);
      observer.current.observe(element);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, options, hasAnimated]);

  return { isVisible, hasAnimated };
};

export default useIntersection;
