import heroImage from "../../../assets/images/hero.png"
import { PropertyCard } from "../PropertyCard";

export default function PortifolioSection() {
    const properties = [
        { img: heroImage, title: "Casa Bella Vita", location: "Cascavel, PR" },
        { img: heroImage, title: "Casa Bella Vita", location: "Cascavel, PR" },
        { img: heroImage, title: "Casa Bella Vita", location: "Cascavel, PR" },
    ];

    return (
        <section className=" bg-[#F7F3F1] py-12">
            <div className=" container flex flex-col gap-2">
                <h3 className="font-family-primary text-h2 font-bold">Destaques do Portifólio</h3>
                <p className="font-family-primary text-body text-[#474741]">Nossa contruções mais emblemáticas</p>
                <div className="flex overflow-x-auto gap-4 snap-x pt-6">
                    {properties.map((property, index) => (
                        <div key={index} className="shrink-0 w-[70%] snap-start">
                            <PropertyCard img={property.img} title={property.title} location={property.location} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}