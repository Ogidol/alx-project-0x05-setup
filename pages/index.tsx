import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, PropertyProps } from "../constants/index"; // adjust path if needed

const HomePage: React.FC = () => {
  const filters = ["Luxury Villa", "Self Checkin", "Beachfront"]; // add all your filters here
  const [active, setActive] = useState<string | null>(null);

  // Filter properties by active category
  const shownProperties = active
    ? PROPERTYLISTINGSAMPLE.filter((p: PropertyProps) =>
        p.category.includes(active)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* Hero Section */}
      <section
        className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="bg-black/40 p-6 rounded">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="text-white/90">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Buttons (Pills) */}
      <div className="flex space-x-4 p-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter === active ? null : filter)}
            className={`px-4 py-2 rounded-full border ${
              active === filter ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {shownProperties.map((property) => (
          <div key={property.name} className="border rounded shadow p-4">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="font-bold mt-2">{property.name}</h2>
            <p>Price: ${property.price}</p>
            <p>Rating: {property.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
