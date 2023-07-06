import Title from "@/design-system/typography/title/title";
import Link from "next/link";

const LogoFireBeats = () => {
  return (
    <Link className="cursor-pointer" href="/">
      <div className="flex flex-row items-center gap-x-2 justify-center">
        <Title
          as="h2"
          size={"sectionTitle"}
          className="uppercase font-extrabold"
        >
          Fire<span className="text-[#D16014]">Beats</span>
        </Title>
      </div>
    </Link>
  );
};

export default LogoFireBeats;
