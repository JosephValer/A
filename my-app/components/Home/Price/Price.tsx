import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import PriceCard from "./PriceCard";
import { priceData } from "./PriceData";

const Price = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading Heading="Elige el plan que mejor se adapta a tu equipo" subHeading="Sin complicaciones, paga solo por lo que usas." />
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {priceData.map((p, i) => (
          <div key={i}>
            <PriceCard type={p.type} price={p.price} features={p.features} recommended={p.Recommended} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;