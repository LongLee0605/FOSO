import React, { memo } from "react";
import { IoIosArrowUp } from "react-icons/io";

const FilterSection = memo(
  ({ title, section, isExpanded, onToggle, children }) => (
    <div className="border-b-[1px] border-[#919EAB33] last:border-b-0">
      <button
        onClick={() => onToggle(section)}
        className="flex items-center justify-between w-full font-semibold text-xl p-3 hover:bg-gray-50 transition-colors duration-200"
      >
        {title}
        <IoIosArrowUp
          className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
);

FilterSection.displayName = "FilterSection";

export default FilterSection;
