import React, { memo } from "react";
import ProductCard from "../../components/atoms/ProductCard";
import LoadingIndicator from "../../components/atoms/LoadingIndicator";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useScrollDetection } from "../../hooks/useScrollDetection";

const ProductGrid = memo(
  ({ products, itemsPerPage = 12, scrollThreshold = 200 }) => {
    const { displayedProducts, isLoading, hasMore, loadMore } =
      useInfiniteScroll(products, itemsPerPage);


    useScrollDetection(loadMore, hasMore, isLoading, scrollThreshold);

    return (
      <div className="space-y-6">

        <div
          className="grid gap-4 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4"
        >
          {displayedProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>


        <LoadingIndicator isVisible={isLoading && hasMore} />


        {!hasMore && displayedProducts.length > itemsPerPage && (
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-3 text-gray-500">
              <div className="w-8 h-px bg-gray-300"></div>
              <span className="text-sm">
                Đã hiển thị tất cả {displayedProducts.length} sản phẩm
              </span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

ProductGrid.displayName = "ProductGrid";

export default ProductGrid;
