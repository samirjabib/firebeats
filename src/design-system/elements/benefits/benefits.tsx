import Title from "@/design-system/typography/title/title";
import { BadgeCheck, DownloadCloud, Zap } from "lucide-react";

const Benefits = () => {
  return (
    <div className="bg-gradient-to-r from-[#f77f00] to-[#d62828] py-12 shadow-lg">
      <div className="flex flex-row justify-around items-center wrapper wrapper-mobile ">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Zap size={50} color="white" />
          <Title as="h4" size={"textTitle"}>
            Formato WAV
          </Title>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <DownloadCloud size={50} color="white" />
          <Title as="h4" size={"textTitle"}>
            Acceso Instantaneo
          </Title>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <BadgeCheck size={50} color="white" />
          <Title as="h4" size={"textTitle"}>
            Work in All DAWs
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
