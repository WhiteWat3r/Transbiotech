import { SectionService } from "../components/sections/SectionService";
import { SectionTechnologies } from "../components/sections/SectionTechnologies";

export const Technologies = () => {
  return (
    <>
      <SectionTechnologies fromTechPage />
      <SectionService />
    </>
  );
};
