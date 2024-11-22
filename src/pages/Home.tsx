import React from "react";
import { SectionMain } from "../components/SectionMain";
import { SectionPromo } from "../components/SectionPromo";
import { SectionTechnologies } from "../components/SectionTechnologies";
import { SectionService } from "../components/SectionService";
import { AboutUsSection } from "../components/AboutUsSection";
import { OurTeamSection } from "../components/OurTeamSection";
import useScrollToTop from "../hooks/useScrollToTop";

export const Home = () => {
  useScrollToTop();
  return (
    <main>
      <SectionMain />
      <SectionPromo />
      <SectionTechnologies />
      <SectionService />
      <AboutUsSection />
      <OurTeamSection />
    </main>
  );
};
