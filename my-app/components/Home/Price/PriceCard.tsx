import React from "react";
import { BiCheck } from "react-icons/bi";

type Props = {
    type: string;
    price: string;
    features?: string[];
    buttonText?: string;
    recommended?: boolean;
};

const PriceCard = ({ price, type, features = [], buttonText = "Seleccionar Plan", recommended = false }: Props) => {
  return (
    <div className="text-left mx-auto card-bg p-8 rounded-xl shadow-xl border hover:shadow-2xl transition-shadow duration-300 relative">
      {recommended && (
        <div className="absolute top-4 right-4 bg-green-700 dark:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Recomendado
        </div>
      )}

      <h1 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{type}</h1>

      <div className="mt-3">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">${price}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300"> / month</span>
      </div>

      <div className="mt-12">
        {features.map((f, idx) => (
          <div key={idx} className="flex items-start mb-4 space-x-3">
            <BiCheck className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{f}</span>
          </div>
        ))}
      </div>
          <div className="mt-8 text-center">
            <button className="w-full py-3 bg-[#243c5a] dark:bg-gray-100 text-white rounded-full hover:bg-blue-300 hover:text-white transition-all duration-300 cursor-pointer">{buttonText}</button>
        </div>
    </div>
  );
};

export default PriceCard;
