const Overlay = () => {
  //REMBEMBER PUT ABSOLUTE IN THE COMPONENT FATHER.
  return (
    <>
      <div className="bg-red absolute top-0 z-10 h-10 w-full bg-gradient-to-b from-black md:h-40" />
      <div className="bg-red absolute bottom-0 z-10 h-10 w-full bg-gradient-to-t from-black md:h-40" />
      <div className="bg-red absolute left-0 z-10 h-full bg-gradient-to-r from-black md:w-60" />
      <div className="bg-red absolute right-0 z-10 h-full bg-gradient-to-l from-black md:w-60" />
      <div className="absolute z-10 h-full w-full bg-gradient-radial from-black/20 to-black"></div>
    </>
  );
};

export default Overlay;
