import React, { memo } from "react";
import { filter } from "../../assets/images";
import { filterOptions } from "../../data";
import FilterSection from "./FilterSection";
import FilterOption from "./FilterOption";
import PriceButton from "./PriceButton";

const FilterSidebar = memo(
  ({ filters, expandedSections, onFilterChange, onToggleSection }) => {
    return (
      <div className="max-w-80 w-full flex-shrink-0">
        <div className="bg-white sticky top-6 py-3 rounded-lg shadow-sm border border-gray-100">
          <div className="p-3 flex items-center text-2xl font-bold text-brand-blue-500 gap-3 border-b-[1px] border-[#919EAB33]">
            <img src={filter} alt="Filter icon" /> Bộ Lọc
          </div>

          {/* Categories */}
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

          {/* Price Range */}
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

          {/* Brands */}
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

          {/* Years */}
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

          {/* Origins */}
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
      </div>
    );
  }
);

FilterSidebar.displayName = "FilterSidebar";

export default FilterSidebar;
