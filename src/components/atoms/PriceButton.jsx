import React, { memo } from "react";

const PriceButton = memo(({ range, isSelected, onClick }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className={`w-full text-center px-4 py-3 rounded-lg border-2 transition-all duration-200 relative font-medium text-sm ${
        isSelected
          ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm"
          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
      }`}
    >
      {range.name}
      {range.tag && (
        <span className="absolute -top-2 -right-1 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md transform rotate-12">
          {range.tag}
        </span>
      )}
    </button>
  </div>
));

PriceButton.displayName = "PriceButton";

export default PriceButton;
