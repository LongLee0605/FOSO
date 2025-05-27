import React, { memo, useEffect } from "react";
import { filter } from "../../assets/images";
import { filterOptions } from "../../data";
import FilterSection from "./FilterSection";
import FilterOption from "./FilterOption";
import PriceButton from "./PriceButton";

const FilterModal = memo(
  ({
    isOpen,
    onClose,
    filters,
    expandedSections,
    onFilterChange,
    onToggleSection,
    onClearFilters,
  }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 2xl:hidden">
        <div
          className="absolute inset-0 bg-secondary opacity-50"
          onClick={onClose}
        />

        <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-xl max-h-[85vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-3 text-xl font-bold text-brand-blue-500">
              <img src={filter} alt="Filter icon" className="w-6 h-6" />
              Bộ Lọc
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pb-20">
            <FilterSection
              title="Danh mục sản phẩm"
              section="category"
              isExpanded={expandedSections.category}
              onToggle={onToggleSection}
            >
              <div className="px-4 pb-4 space-y-1">
                {filterOptions.categories.map((category) => (
                  <FilterOption
                    key={category.id}
                    item={category}
                    isSelected={filters.category === category.id}
                    onClick={() => onFilterChange("category", category.id)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Khoảng giá"
              section="price"
              isExpanded={expandedSections.price}
              onToggle={onToggleSection}
            >
              <div className="px-4 pb-4 space-y-3">
                {filterOptions.priceRanges.map((range) => (
                  <PriceButton
                    key={range.id}
                    range={range}
                    isSelected={filters.priceRange === range.id}
                    onClick={() => onFilterChange("priceRange", range.id)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Thương hiệu"
              section="brand"
              isExpanded={expandedSections.brand}
              onToggle={onToggleSection}
            >
              <div className="px-4 pb-4 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filterOptions.brands.map((brand) => (
                  <FilterOption
                    key={brand.id}
                    item={brand}
                    isSelected={filters.brand === brand.id}
                    onClick={() => onFilterChange("brand", brand.id)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Năm sản xuất"
              section="year"
              isExpanded={expandedSections.year}
              onToggle={onToggleSection}
            >
              <div className="px-4 pb-4 space-y-1">
                {filterOptions.years.map((year) => (
                  <FilterOption
                    key={year.id}
                    item={year}
                    isSelected={filters.year === year.id}
                    onClick={() => onFilterChange("year", year.id)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Xuất xứ"
              section="origin"
              isExpanded={expandedSections.origin}
              onToggle={onToggleSection}
            >
              <div className="px-4 pb-4 space-y-1">
                {filterOptions.origins.map((origin) => (
                  <FilterOption
                    key={origin.id}
                    item={origin}
                    isSelected={filters.origin === origin.id}
                    onClick={() => onFilterChange("origin", origin.id)}
                    showCount={true}
                  />
                ))}
              </div>
            </FilterSection>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex gap-3 shadow-lg">
            <button
              onClick={onClearFilters}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Xóa bộ lọc
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-brand-blue-500 text-white rounded-lg font-medium hover:bg-brand-blue-600 transition-colors"
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    );
  }
);

FilterModal.displayName = "FilterModal";

export default FilterModal;
