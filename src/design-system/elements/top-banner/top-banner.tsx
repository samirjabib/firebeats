import { Title } from "@/design-system";

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#f77f00] to-[#d62828] py-2.5 shadow-lg ">
      <Title as="h3" size={"sectionSubtitle"} className="text-center">
        30% de descuento con el codigo promocional{" "}
      </Title>
    </div>
  );
};

export default TopBanner;
