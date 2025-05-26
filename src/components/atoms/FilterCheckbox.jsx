import React, { memo } from "react";
import { FaCheck } from "react-icons/fa";

const FilterCheckbox = memo(({ isSelected }) => (
  <div
    className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
      isSelected
        ? "bg-blue-600 border-blue-600"
        : "bg-white border-gray-300 group-hover:border-blue-400"
    }`}
  >
    {isSelected && <FaCheck className="w-3 h-3 text-white ml-[0.3px]" />}
  </div>
));

FilterCheckbox.displayName = "FilterCheckbox";

export default FilterCheckbox;
