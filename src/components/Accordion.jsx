import React from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-lg">
          {/* Accordion Header */}
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700 bg-gray-100 rounded-lg"
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? <Minus /> : <Plus />}</span>
          </button>

          {/* Accordion Content */}

          <div
            className={`transition-all duration-300 overflow-auto  ${
              activeIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 text-gray-600 bg-gray-100 rounded-lg">
              <img src={item.img} alt=""  className="rounded-lg mb-2 w-full max-w-[400px] mx-auto"/>
              <p className="text-sm rounded-lg">{item.mainDesc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
