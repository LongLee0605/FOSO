import React, { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const SortButtons = ({ sortBy, setSortBy }) => {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const sortOptions = [
    { id: "relevant", label: "Liên quan", value: "default" },
    { id: "bestseller", label: "Bán chạy", value: "popular" },
    { id: "newest", label: "Mới nhất", value: "newest" },
    { id: "featured", label: "Nổi bật", value: "discount" },
  ];

  const priceOptions = [
    { id: "price_low", label: "Giá: Thấp → Cao", value: "price_low" },
    { id: "price_high", label: "Giá: Cao → Thấp", value: "price_high" },
  ];

  const isPriceActive = sortBy === "price_low" || sortBy === "price_high";

  // Hàm để lấy label hiện tại của price button
  const getCurrentPriceLabel = () => {
    const currentPrice = priceOptions.find((option) => option.value === sortBy);
    return currentPrice ? currentPrice.label : "Giá: Thấp → Cao";
  };

  return (
    <div className="flex items-center space-x-6">
      <span className="text-gray-700 font-medium whitespace-nowrap">
        Sắp xếp theo
      </span>

      <div className="flex items-center space-x-4">
        {sortOptions.map((option) => (
          <div key={option.id} className="relative">
            <button
              onClick={() => setSortBy(option.value)}
              className={`
                relative px-4 py-3 text-sm font-bold rounded-lg  
                transition-all duration-200 overflow-hidden shadow-sm
                ${
                  sortBy === option.value
                    ? " text-brand-blue-500 border-blue-200 border-2"
                    : "  border-gray-200 hover:border-blue-200 hover:text-blue-600"
                }
              `}
            >
              {option.label}
              {sortBy === option.value && (
                <>
                  <div className="absolute -top-9 -right-6 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-blue-500 rotate-45"></div>
                  <FaCheck
                    className="absolute text-white top-1 right-1"
                    size={8}
                  />
                </>
              )}
            </button>
          </div>
        ))}
        <div className="relative">
          <button
            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
            className={`
              flex items-center space-x-2 px-6 py-2 text-sm font-medium 
              transition-colors duration-200
              ${isPriceActive ? "text-blue-600" : "text-gray-600"}
            `}
          >
            <span>{getCurrentPriceLabel()}</span>
            <FaChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                showPriceDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {showPriceDropdown && (
            <div className="absolute top-full left-0 mt-2 w-full min-w-max bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="py-2">
                {priceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowPriceDropdown(false);
                    }}
                    className={`
                      block w-full text-left px-4 py-2 text-sm transition-colors duration-200
                      ${
                        sortBy === option.value
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortButtons;
