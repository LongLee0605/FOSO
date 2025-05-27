import { useState, useEffect, useCallback } from "react";

export const useInfiniteScroll = (allProducts, itemsPerPage = 12) => {
  const [displayedCount, setDisplayedCount] = useState(itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisplayedCount(itemsPerPage);
  }, [allProducts, itemsPerPage]);

  const displayedProducts = allProducts.slice(0, displayedCount);
  const hasMore = displayedCount < allProducts.length;
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      setDisplayedCount((prev) =>
        Math.min(prev + itemsPerPage, allProducts.length)
      );
      setIsLoading(false);
    }, 300);
  }, [allProducts.length, itemsPerPage, isLoading, hasMore]);

  return {
    displayedProducts,
    isLoading,
    hasMore,
    loadMore,
  };
};
