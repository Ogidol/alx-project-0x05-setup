import Image from "next/image";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ prop: PropertyProps }> = ({ prop }) => (
  <div className="rounded-lg shadow overflow-hidden">
    <div className="relative h-48">
      <Image src={prop.image} alt={prop.name} fill className="object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-bold">{prop.name}</h3>
      <p className="text-sm">
        {prop.address.city}, {prop.address.country}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold">${prop.price}</span>
        <span className="text-sm">{prop.rating} ★</span>
      </div>
    </div>
  </div>
);
export default PropertyCard;
