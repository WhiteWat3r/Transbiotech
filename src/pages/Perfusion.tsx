import { ECMOAdvantages } from "@/components/perfusion/sections/ECMOAdvantages";
import { Ecmo } from "../components/perfusion/sections/Ecmo";
import { ECMOHeartFailure } from "../components/perfusion/sections/ECMOHeartFailure";
import { ExStream } from "../components/perfusion/sections/ExStream";
import { IABPInfo } from "../components/perfusion/sections/IABPInfo";
import { PerfusionMain } from "../components/perfusion/sections/PerfusionMain";
import { PerfusionTechnologies } from "../components/perfusion/sections/PerfusionTechnologies";
import { EcmoTransplantation } from "@/components/perfusion/sections/EcmoTransplantation";
import { EcmoEndovascularSupport } from "@/components/perfusion/sections/EcmoEndovascularSupport";
import { OrganPreparation } from "@/components/perfusion/sections/OrganPreparation";
import { HeartAssistDevice } from "@/components/perfusion/sections/HeartAssistDevice";

export const Perfusion = () => {
  return (
    <>
      <PerfusionMain />
      <PerfusionTechnologies />
      <IABPInfo />
      <HeartAssistDevice />
      <Ecmo />
      <ExStream />
      <ECMOHeartFailure />
      <ECMOAdvantages />
      <EcmoTransplantation />
      <EcmoEndovascularSupport />
      <OrganPreparation />
    </>
  );
};
