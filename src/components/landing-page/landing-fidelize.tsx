import { Button, Title } from "@/design-system";
import Video from "../shared/video";

const LandingFidalize = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col wrapper wrapper-mobile gap-y-12">
        <div className="grid grid-cols-2 justify-center ">
          <Video
            path="https://wavsupply.net/wp-content/uploads/2021/12/MT2_Twitter_30sec_1280x720.mp4"
            controls
            className="shadow-lg"
          />
          <div className="max-w-lg mx-auto">
            <Title as="h2" size={"sectionTitle"}>
              Real sounds from top producers.
            </Title>
            <p className="text-white/80 mb-12">
              Our kits have been used in countless records, created and used by
              Grammy nominated, Billboard award winning & multi-platinum music
              producers.
            </p>
            <Button className="text-lg py-6 px-12">Ver Packs</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center">
          <div className="max-w-lg ">
            <Title as="h2" size={"sectionTitle"}>
              Professional mixes.
            </Title>
            <p className="text-white/80 mb-12">
              Mix templates for your DAW of choice, and professional mixing
              services from Internet Money engineers.
            </p>
            <Button className="text-lg py-6 px-12">Ver Packs</Button>
          </div>
          <Video
            path="https://wavsupply.net/wp-content/uploads/2021/12/MT2_Twitter_30sec_1280x720.mp4"
            controls
            className="shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingFidalize;
