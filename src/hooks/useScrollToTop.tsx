import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500); // Задержка для завершения анимации

    return () => clearTimeout(timeout);
  }, [pathname]);
};

export default useScrollToTop;
