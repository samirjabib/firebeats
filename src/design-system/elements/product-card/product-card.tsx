import Image from "next/image"
import dummieImage from '../../../../public/product/mock-image.png'
import Link from "next/link"
import Title from "@/design-system/typography/title/title"

const ProductCard = () => {
  return (
    <Link className="cursor-pointer" href='/'>
      <div className="relative">
        <p className="absolute right-8 top-8 bg-green-500 px-3 text-xs py-1 rounded-full shadow-2xl">New</p>
        <Image src={dummieImage} alt="dummie-image" className="" />
      </div>
      <div className="flex flex-col text-center justify-center">
        <Title as="h3" size={"textTitle"}>Atlanta Pack Premium</Title>
        <div className="flex flex-row items-center justify-center gap-x-2">
          <div className="inline-block relative text-white/60">
            <p>$260.00</p>
            <div className="flex-grow  h-0.5 absolute w-full top-[50%] bg-[#D16014]"></div>
          </div>
          <p className="font-bold">$57.00</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard