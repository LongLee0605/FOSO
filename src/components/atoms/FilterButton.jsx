import React, { memo } from "react";
import { filter } from "../../assets/images";

const FilterButton = memo(({ onClick, activeFiltersCount = 0 }) => {
  return (
    <button
      onClick={onClick}
      className="2xl:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 relative"
    >
      <img src={filter} alt="Filter" className="w-5 h-5" />
      <span className="font-medium">Bộ lọc</span>
      {activeFiltersCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {activeFiltersCount}
        </span>
      )}
    </button>
  );
});

FilterButton.displayName = "FilterButton";

export default FilterButton;
