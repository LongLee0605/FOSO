import ProductCard from "../atoms/ProductCard";
import React, { useEffect, useRef, useState } from "react";


const ProductCarousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const itemsPerView = 5;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= products.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return products.length - 1;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (products.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [products.length]);

  const handleManualNavigation = (direction) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }

    // Restart auto-play
    if (products.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  if (products.length <= itemsPerView) {
    return (
      <div className="py-10 px-8">
        <div className="flex gap-4 justify-center">
          {products.map((product) => (
            <div key={product.id} className="flex-1 max-w-xs">
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
      <button
        onClick={() => handleManualNavigation("prev")}
        className="absolute left-2 top-[53%] transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-100 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-300 hover:shadow-xl"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
        className="absolute right-2 top-[53%] transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-100 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-300 hover:shadow-xl"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
      <div className="overflow-hidden py-10 px-8">
        <div className="flex transition-transform duration-500 ease-in-out gap-4">
          {visibleProducts.map((product, index) => (
            <div
              key={`${product.id}-${currentIndex}-${index}`}
              className="flex-shrink-0"
              style={{ width: `calc(20% - 12px)` }}
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
