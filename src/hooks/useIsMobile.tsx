import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 1040) return "tablet";
    return "desktop";
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("mobile");
      else if (width < 1040) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
