import { SectionService } from "@/components/common-sections/SectionService";
import { SectionTechnologies } from "@/components/common-sections/SectionTechnologies";
import { AboutUsSection } from "@/components/home/AboutUsSection";
import { OurTeamSection } from "@/components/home/OurTeamSection";
import { SectionMain } from "@/components/home/SectionMain";
import { SectionPromo } from "@/components/home/SectionPromo";

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
