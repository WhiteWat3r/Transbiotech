import { SectionMain } from "@/components/home/SectionMain";
import { SectionService } from "@/components/common-sections/SectionService";
import { SectionTechnologies } from "@/components/common-sections/SectionTechnologies";
import { SectionPromo } from "@/components/home/SectionPromo";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { OurTeamSection } from "@/components/home/OurTeamSection";

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
