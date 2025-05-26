import { iconFire } from "../../assets/icons";
import React from "react";

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleBuyNow = () => {
    console.log("Mua ngay:", product.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover h-[263px]"
        />
        {product.status && (
          <div className="text-sm flex items-center px-2 py-1 bg-gradient-deal rounded-full gap-1 font-semibold w-32 ml-5 mt-4">
            <img src={iconFire} alt="fire icon" />
            {product.status}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-brand-error">
              {formatPrice(product.salePrice)} đ
            </span>
          </div>

          {product.originalPrice > product.salePrice && (
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-input-disble line-through">
                {formatPrice(product.originalPrice)} đ
              </span>
              <span className="text-xs text-brand-error font-medium">
                -{product.discount}%
              </span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${
            product.inStock
              ? "bg-brand-50 hover:bg-brand-100 text-brand-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Mua ngay" : "Hết hàng"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
