import Overlay from "../shared/overlay";

const LandingHero = () => {
  return (
    <div>
      <div className="w-full h-[70vh]  flex items-center justify-center relative">
        <Overlay />
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
