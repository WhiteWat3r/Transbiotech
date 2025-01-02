import { SectionService } from "../components/common-sections/SectionService";
import { SectionTechnologies } from "../components/common-sections/SectionTechnologies";

export const Technologies = () => {
  return (
    <>
      <SectionTechnologies fromTechPage />
      <SectionService />
    </>
  );
};
