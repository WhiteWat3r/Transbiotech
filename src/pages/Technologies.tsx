import { SectionTechnologies } from "../components/SectionTechnologies";
import { SectionService } from "../components/SectionService";
import useScrollToTop from "../hooks/useScrollToTop";

export const Technologies = () => {
  useScrollToTop();
  return (
    <main>
      <SectionTechnologies fromTechPage/>
      <SectionService />
    </main>
  );
};
