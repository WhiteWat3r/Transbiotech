
import { ECMOAdvantages } from "@/components/perfusion/ECMOAdvantages";
import { EcmoEndovascularSupport } from "@/components/perfusion/EcmoEndovascularSupport";
import { EcmoTransplantation } from "@/components/perfusion/EcmoTransplantation";
import { HeartAssistDevice } from "@/components/perfusion/HeartAssistDevice";
import { OrganPreparation } from "@/components/perfusion/OrganPreparation";

import { Ecmo } from "../components/perfusion/Ecmo";
import { ECMOHeartFailure } from "../components/perfusion/ECMOHeartFailure";
import { ExStream } from "../components/perfusion/ExStream";
import { IABPInfo } from "../components/perfusion/IABPInfo";
import { PerfusionMain } from "../components/perfusion/PerfusionMain";
import { PerfusionTechnologies } from "../components/perfusion/PerfusionTechnologies";



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
