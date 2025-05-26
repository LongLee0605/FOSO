import React, { memo } from "react";
import FilterCheckbox from "./FilterCheckbox";

const FilterOption = memo(({ item, isSelected, onClick, showCount = true }) => (
  <label
    className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 group"
    onClick={onClick}
  >
    <FilterCheckbox isSelected={isSelected} />
    <span className="ml-3 text-sm flex-1 font-medium">{item.name}</span>
    {showCount && (
      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
        ({item.count})
      </span>
    )}
  </label>
));

FilterOption.displayName = "FilterOption";

export default FilterOption;
