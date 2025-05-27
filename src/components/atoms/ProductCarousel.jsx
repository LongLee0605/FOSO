import ProductCard from "../atoms/ProductCard";
import React, { useEffect, useRef, useState } from "react";

const ProductCarousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width < 440) setItemsPerView(1);
      else if (width < 520) setItemsPerView(2);
      else if (width < 640) setItemsPerView(2);
      else if (width < 768) setItemsPerView(2);
      else if (width < 1024) setItemsPerView(3);
      else if (width < 1280) setItemsPerView(4);
      else if (width < 1536) setItemsPerView(5);
      else setItemsPerView(5);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? products.length - 1 : newIndex;
    });
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  useEffect(() => {
    if (products.length > itemsPerView) {
      intervalRef.current = setInterval(nextSlide, 5000);
      return () => clearInterval(intervalRef.current);
    }
  }, [products.length, itemsPerView]);

  const handleManualNavigation = (direction) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    direction === "next" ? nextSlide() : prevSlide();

    if (products.length > itemsPerView) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  const getItemWidth = () => {
    const padding =
      itemsPerView === 1
        ? 0
        : itemsPerView === 2
        ? 8
        : itemsPerView === 3
        ? 12
        : itemsPerView === 4
        ? 14
        : 16;

    return `calc(${100 / itemsPerView}% - ${padding}px)`;
  };

  if (products.length <= itemsPerView) {
    return (
      <div className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div
          className={`
          grid justify-center gap-3 sm:gap-4
          ${itemsPerView === 1 ? "grid-cols-1" : ""}
          ${itemsPerView === 2 ? "grid-cols-2" : ""}
          ${itemsPerView === 3 ? "grid-cols-3" : ""}
          ${itemsPerView === 4 ? "grid-cols-4" : ""}
          ${itemsPerView === 5 ? "grid-cols-5" : ""}
        `}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full max-w-xs mx-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < itemsPerView; i++) {
      const productIndex = (currentIndex + i) % products.length;
      visibleProducts.push({
        ...products[productIndex],
        displayIndex: i,
      });
    }
    return visibleProducts;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="relative">
      {itemsPerView > 1 && (
        <>
          <button
            onClick={() => handleManualNavigation("prev")}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 
              w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-100 shadow-lg 
              flex items-center justify-center transition-all duration-200 
              hover:bg-gray-300 hover:shadow-xl"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => handleManualNavigation("next")}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 
              w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-100 shadow-lg 
              flex items-center justify-center transition-all duration-200 
              hover:bg-gray-300 hover:shadow-xl"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <div className="overflow-hidden py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4">
          {visibleProducts.map((product, index) => (
            <div
              key={`${product.id}-${currentIndex}-${index}`}
              className="flex-shrink-0"
              style={{ width: getItemWidth() }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
