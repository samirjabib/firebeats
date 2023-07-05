import { Title } from "@/design-system"

const TopBanner = () => {
    return(
        <div className="bg-[#D16014] py-2.5 shadow-lg">
            <Title as="h3" size={"sectionSubtitle"} className="text-center">30% de descuento con el codigo promocional </Title>
        </div>
    )
}

export default TopBanner