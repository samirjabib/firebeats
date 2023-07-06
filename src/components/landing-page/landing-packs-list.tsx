import { ProductCard, Title } from "@/design-system"

const LandingPacksBeats = () => {
    return (
        <div className="wrapper-mobile wrapper py-20">
            <div>
                <Title as="h4" size={"sectionSubtitle"} className="uppercase text-center text-white/60">Productos</Title>
                <Title as="h2" size={"sectionTitle"} className="uppercase text-center">New Beats Packs</Title>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
                {Array.from({ length: 5 }).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>

    )
}

export default LandingPacksBeats