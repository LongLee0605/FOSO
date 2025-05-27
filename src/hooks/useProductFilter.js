import { useState, useMemo, useCallback } from "react";
import { productsData, filterOptions } from "../data";

const ORIGIN_MAP = {
  duc: "Đức",
  my: "Mỹ",
  nhat_ban: "Nhật Bản",
  han_quoc: "Hàn Quốc",
  trung_quoc: "Trung Quốc",
};

const INITIAL_FILTERS = {
  category: "all",
  priceRange: "",
  brand: "",
  year: "",
  origin: "",
};

const INITIAL_EXPANDED = {
  category: true,
  price: true,
  brand: true,
  year: true,
  origin: true,
};

const SORT_FUNCTIONS = {
  price_low: (a, b) => a.salePrice - b.salePrice,
  price_high: (a, b) => b.salePrice - a.salePrice,
  discount: (a, b) => b.discount - a.discount,
  popular: (a, b) => b.discount - a.discount,
  newest: (a, b) => b.year - a.year,
};

export const useProductFilter = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [expandedSections, setExpandedSections] = useState(INITIAL_EXPANDED);
  const [sortBy, setSortBy] = useState("default");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = productsData.products;
    let needsCopy = false;
    if (filters.category !== "all") {
      if (!needsCopy) {
        filtered = [...filtered];
        needsCopy = true;
      }
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.priceRange) {
      const priceRange = filterOptions.priceRanges.find(
        (range) => range.id === filters.priceRange
      );
      if (priceRange) {
        if (!needsCopy) {
          filtered = [...filtered];
          needsCopy = true;
        }
        filtered = filtered.filter(
          (product) =>
            product.salePrice >= priceRange.min &&
            product.salePrice <= priceRange.max
        );
      }
    }

    if (filters.brand) {
      if (!needsCopy) {
        filtered = [...filtered];
        needsCopy = true;
      }
      filtered = filtered.filter(
        (product) => product.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    if (filters.year) {
      if (!needsCopy) {
        filtered = [...filtered];
        needsCopy = true;
      }
      filtered = filtered.filter(
        (product) => product.year.toString() === filters.year
      );
    }

    if (filters.origin) {
      if (!needsCopy) {
        filtered = [...filtered];
        needsCopy = true;
      }
      filtered = filtered.filter(
        (product) => product.origin === ORIGIN_MAP[filters.origin]
      );
    }

    return filtered;
  }, [filters]);

  const sortedProducts = useMemo(() => {
    if (sortBy === "default" || !SORT_FUNCTIONS[sortBy]) {
      return filteredProducts;
    }

    return [...filteredProducts].sort(SORT_FUNCTIONS[sortBy]);
  }, [filteredProducts, sortBy]);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prev) => {
      const newValue =
        prev[filterType] === value
          ? filterType === "category"
            ? "all"
            : ""
          : value;

      if (prev[filterType] === newValue) {
        return prev;
      }

      return {
        ...prev,
        [filterType]: newValue,
      };
    });
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  const openFilterModal = useCallback(() => {
    setIsFilterModalOpen(true);
  }, []);

  const closeFilterModal = useCallback(() => {
    setIsFilterModalOpen(false);
  }, []);

  return {
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
  };
};
