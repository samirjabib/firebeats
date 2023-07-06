import Title from "@/design-system/typography/title/title";
import { Activity } from "lucide-react";

const NewLetter = () => {
  return (
    <div className="bg-gradient-to-r from-[#f77f00] to-[#d62828] py-28">
      <div className="flex flex-col items-center justify-center">
        <Activity color="white" size={80} className="relative mb-8" />
        <Title as="h2" size={"sectionTitle"} className="mb-6">
          Stay connected
        </Title>
        <p className="mb-12 max-w-lg text-center">
          Receive notifications about new kits drops, promotions, discounts and
          more,Receive notifications about new kits drops, promotions, discounts
          and more.
        </p>
        <input
          className="rounded-md px-4 py-4 w-full max-w-lg shadow-lg text-black"
          placeholder="Ingresa tu E-mail"
        />
      </div>
    </div>
  );
};

export default NewLetter;
