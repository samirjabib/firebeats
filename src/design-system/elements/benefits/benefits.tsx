import Title from "@/design-system/typography/title/title";
import { BadgeCheck, DownloadCloud, Zap } from "lucide-react";

const Benefits = () => {
  return (
    <div className="bg-white/10 py-12">
      <div className="flex flex-row justify-around items-center wrapper wrapper-mobile ">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Zap size={70} color="#D16014" />
          <Title as="h4" size={"textTitle"}>
            Formato WAV
          </Title>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <DownloadCloud size={70} color="#D16014" />
          <Title as="h4" size={"textTitle"}>
            Acceso Instantaneo
          </Title>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <BadgeCheck size={70} color="#D16014" />
          <Title as="h4" size={"textTitle"}>
            Work in All DAWs
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
