import { useEffect, useState } from "react";

export const useSectionSizeFromImageHeight = (
  imgRef: React.MutableRefObject<HTMLImageElement | null>,
  isDesktop: boolean,
) => {
  const [sectionHeight, setSectionHeight] = useState<number | null>();

  const updateSectionHeight = () => {
    if (isDesktop && imgRef.current) {
      setSectionHeight(imgRef.current.offsetHeight);
    } else {
      setSectionHeight(null);
    }
  };

  const handleImageLoad = () => {
    updateSectionHeight();
  };

  useEffect(() => {
    updateSectionHeight();
  }, [isDesktop, imgRef.current]);

  useEffect(() => {
    updateSectionHeight();

    const handleResize = () => updateSectionHeight();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  return { sectionHeight, handleImageLoad };
};
