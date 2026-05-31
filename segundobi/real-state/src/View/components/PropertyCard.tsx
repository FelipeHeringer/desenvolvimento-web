import { Location } from "../../assets/Icons"

interface PropertyProps {
    img: string,
    title: string,
    location: string
}

export function PropertyCard({ img, title, location }: PropertyProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="relative h-[220px] md:h-[340px]">
                <img src={img}
                    className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-lg" />
            </div>
            <h4 className="font-family-primary font-bold text-body">{title}</h4>
            <span className="flex items-center gap-1">
                <Location />
                <p className="font-family-primary text-sm-customm text-[#474741]">
                    {location}
                </p>
            </span>
        </div>
    )
}