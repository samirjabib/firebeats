import { Title } from "@/design-system";
import heroDummie from "../../../public/hero/banner.jpg";
import Image from "next/image";
const LandingHero = () => {
  return (
    <div>
      <div className="w-full h-[70vh]  flex items-center justify-center">
        <div className="relative w-full h-full">
          <video
            src="https://wavsupply.net/wp-content/uploads/2022/06/ERA-YTL.mp4"
            className="object-cover h-full w-full "
            autoPlay
            muted
            loop
          />
        </div>

      </div>
    </div>
  );
};

export default LandingHero;
