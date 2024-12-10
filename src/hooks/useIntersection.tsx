import { useState, useEffect, useRef } from "react";

interface UseIntersectionOptions {
  threshold: number;
}

const useIntersection = (
  ref: React.RefObject<HTMLElement>,
  options: UseIntersectionOptions = { threshold: 0.7 },
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); // Флаг для анимации
  const observer = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0); // Для отслеживания направления прокрутки

  useEffect(() => {
    const element = ref.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      // Проверяем направление прокрутки
      const isScrollingDown = window.scrollY > lastScrollY.current;

      if (entry.isIntersecting) {
        // Если элемент видим и прокрутка идет сверху вниз, проигрываем анимацию
        if (!hasAnimated && isScrollingDown) {
          setIsVisible(true);
          setHasAnimated(true); // Устанавливаем, что анимация уже была
        }
      } else {
        // Если элемент выходит из области видимости, сбрасываем видимость
        setIsVisible(false);
      }

      // Обновляем последнее значение прокрутки
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
