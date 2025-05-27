import React, { useState } from "react";

const PriceDropdown = ({ 
  title, 
  priceRanges, 
  selectedValue, 
  onSelect, 
  placeholder 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedRange = priceRanges.find(range => range.id === selectedValue);

  const formatPrice = (price) => {
    if (price === Infinity) return "∞";
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  const getPriceDisplay = (range) => {
    if (range.max === Infinity) {
      return `Trên ${formatPrice(range.min)} đ`;
    }
    if (range.min === 0) {
      return `Dưới ${formatPrice(range.max)} đ`;
    }
    return `${formatPrice(range.min)} đ - ${formatPrice(range.max)} đ`;
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500"
      >
        <span className={selectedRange ? "text-gray-900" : "text-gray-500"}>
          {selectedRange ? selectedRange.name : placeholder}
        </span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <div className="py-1">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => {
                  onSelect(range.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                  selectedValue === range.id 
                    ? "bg-brand-blue-50 text-brand-blue-600" 
                    : "text-gray-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{range.name}</span>
                  {range.tagColor && (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                      Hot
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {getPriceDisplay(range)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
