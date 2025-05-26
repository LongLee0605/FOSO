import EmptyState from "../../components/atoms/EmptyState";
import FeaturesCard from "../../components/atoms/FeaturesCard";
import FilterSidebar from "../../components/atoms/FilterSidebar";
import ProductGrid from "../../components/atoms/ProductGrid";
import SortButtons from "../../components/atoms/SortButtons";
import { useProductFilter } from "../../hooks/useProductFilter";
import React from "react";

const ProductFilter = () => {
  const {
    filters,
    expandedSections,
    sortBy,
    sortedProducts,
    handleFilterChange,
    toggleSection,
    clearFilters,
    setSortBy,
  } = useProductFilter();

  return (
    <div className="w-full max-w-pc mx-auto py-10">
      <div className="flex gap-6">
        <FilterSidebar
          filters={filters}
          expandedSections={expandedSections}
          onFilterChange={handleFilterChange}
          onToggleSection={toggleSection}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between h-16 mb-6">
            <h1 className="text-xl font-semibold">Danh sách sản phẩm</h1>
            <SortButtons sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {sortedProducts.length > 0 ? (
            <ProductGrid products={sortedProducts} />
          ) : (
            <EmptyState onClearFilters={clearFilters} />
          )}
        </div>
      </div>
      <FeaturesCard />
    </div>
  );
};

export default ProductFilter;
