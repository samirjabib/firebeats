import Title from "@/design-system/typography/title/title";
import { Activity } from "lucide-react";
import { Button } from "../button/button";

const NewLetter = () => {
  return (
    <div className="bg-gradient-to-r from-[#f77f00] to-[#d62828] py-12 ">
      <div className="grid grid-cols-2 wrapper wrapper-mobile items-center justify-center gap-x-8">
        <div className="flex flex-row items-center justify-center ">
          <Activity color="white" size={80} className="" />
          <Title as="h2" size={"sectionTitle"} className="">
            Stay connected
          </Title>
          <div>
            <p className="max-w-lg">
              Receive notifications about new kits drops, promotions, discounts
              and more
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <input
            className="rounded-md w-full max-w-md shadow-lg text-black py-2 px-4"
            placeholder="Ingresa tu E-mail"
          />
          <Button variant={"secondary"}>Suscribirme</Button>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
