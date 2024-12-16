import { useEffect, useState } from "react";

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled((prev) => {
        if (scrollY > 50 && !prev) return true;
        if (scrollY <= 50 && prev) return false;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};
