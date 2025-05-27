import EmptyState from "../../components/atoms/EmptyState";
import FeaturesCard from "../../components/atoms/FeaturesCard";
import FilterSidebar from "../../components/atoms/FilterSidebar";
import FilterButton from "../../components/atoms/FilterButton";
import FilterModal from "../../components/atoms/FilterModal";
import ProductGrid from "../../components/atoms/ProductGrid";
import SortButtons from "../../components/atoms/SortButtons";
import { useProductFilter } from "../../hooks/useProductFilter";
import React, { useMemo } from "react";

const ProductFilter = () => {
  const {
    filters,
    expandedSections,
    sortBy,
    sortedProducts,
    isFilterModalOpen,
    handleFilterChange,
    toggleSection,
    clearFilters,
    setSortBy,
    openFilterModal,
    closeFilterModal,
  } = useProductFilter();

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.category !== "all") count++;
    if (filters.priceRange) count++;
    if (filters.brand) count++;
    if (filters.year) count++;
    if (filters.origin) count++;
    return count;
  }, [filters]);

  return (
    <div className="w-full max-w-pc mx-auto py-10 2xl:px-0 px-4">
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
            <div className="flex items-center gap-3">
              <FilterButton
                onClick={openFilterModal}
                activeFiltersCount={activeFiltersCount}
              />
              <div className="2xl:block hidden">
                <SortButtons sortBy={sortBy} setSortBy={setSortBy} />
              </div>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <ProductGrid
              products={sortedProducts}
              itemsPerPage={12}
              scrollThreshold={200}
            />
          ) : (
            <EmptyState onClearFilters={clearFilters} />
          )}
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
        filters={filters}
        expandedSections={expandedSections}
        onFilterChange={handleFilterChange}
        onToggleSection={toggleSection}
        onClearFilters={clearFilters}
      />

      <FeaturesCard />
    </div>
  );
};

export default ProductFilter;
