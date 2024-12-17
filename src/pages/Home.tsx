import { AboutUsSection } from "../components/AboutUsSection";
import { OurTeamSection } from "../components/OurTeamSection";
import { SectionMain } from "../components/SectionMain";
import { SectionPromo } from "../components/SectionPromo";
import { SectionService } from "../components/sections/SectionService";
import { SectionTechnologies } from "../components/sections/SectionTechnologies";

export const Home = () => {
  return (
    <>
      <SectionMain />
      <SectionPromo />
      <SectionTechnologies />
      <SectionService />
      <AboutUsSection />
      <OurTeamSection />
    </>
  );
};
