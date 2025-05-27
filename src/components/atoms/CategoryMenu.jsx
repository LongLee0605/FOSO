import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  iconBar,
  iconClock,
  iconHand,
  iconRefresh,
  iconTruck,
} from "../../assets/icons";
import { filterOptions, productsData } from "../../data";

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("bo_loc_dau");

  const categories = ["Về Chúng Tôi", "Bài Viết", "Catalog", "Liên Hệ"];

  const features = [
    { icon: iconClock, text: "Hỗ trợ 24/7" },
    { icon: iconHand, text: "Miễn Phí Vận Chuyển" },
    { icon: iconTruck, text: "Giao Hàng Nhanh 2h" },
    { icon: iconRefresh, text: "30 Ngày Đổi Trả" },
  ];

  // Lấy hình ảnh đại diện cho từng category từ data
  const getCategoryImage = (categoryId) => {
    const categoryProducts = productsData.products.filter(
      (product) => product.category === categoryId
    );
    return categoryProducts.length > 0 ? categoryProducts[0].image : null;
  };

  // Mapping categories với hình ảnh thực từ data
  const categoryMapping = {
    bo_loc_dau: {
      name: "Bộ Lọc Dầu",
      image: getCategoryImage("bo_loc_dau"),
    },
    loc_gio_dong_co: {
      name: "Bộ Lọc Không Khí",
      image: getCategoryImage("loc_gio_dong_co"),
    },
    loc_nhien_lieu: {
      name: "Bộ Lọc Nhiên Liệu",
      image: getCategoryImage("loc_nhien_lieu"),
    },
    chua_phan_loai: {
      name: "Bộ Lọc Trong Cabin",
      image: getCategoryImage("chua_phan_loai"),
    },
  };

  // Lấy 6 sản phẩm liên quan cho phần trên (3x2 grid)
  const getRelatedProducts = (categoryId) => {
    return productsData.products
      .filter((product) => product.category === categoryId)
      .slice(0, 6);
  };

  // Lấy 5 sản phẩm bán chạy cho phần dưới
  const getBestSellingProducts = (categoryId) => {
    return productsData.products
      .filter((product) => product.category === categoryId)
      .slice(0, 5);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  // Lấy category info từ filterOptions
  const getCategoryInfo = (categoryId) => {
    return filterOptions.categories.find((cat) => cat.id === categoryId);
  };

  return (
    <div>
      <div className="w-full max-w-pc mx-auto 2xl:px-0 px-4">
        <div className="flex items-center justify-between pb-2">
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="bg-brand-button-header text-white px-4 py-6 rounded-lg flex items-center gap-2 transition-all duration-300">
              <div>
                <img src={iconBar} className="w-5 h-5" />
              </div>
              <div className="flex items-center">
                <div className="pr-8 text-base font-bold leading-0">
                  Danh Mục Sản Phẩm
                </div>
                <span
                  className={`transform transition-all duration-500 ease-in-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown size={18} />
                </span>
              </div>
            </button>

            {/* Mega Menu Dropdown */}
            <div
              className={`absolute top-full left-0 mt-1 bg-[#F4F6F8] border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-500 ease-in-out transform ${
                isOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
              style={{ width: "1400px" }}
            >
              <div className="flex">
                <div className="w-72 bg-[#F4F6F8] rounded-l-lg">
                  <div className="py-2">
                    {Object.entries(categoryMapping).map(
                      ([categoryId, categoryInfo]) => {
                        const categoryData = getCategoryInfo(categoryId);
                        return (
                          <div
                            key={categoryId}
                            className={`px-4 py-3 cursor-pointer transition-all flex items-center gap-3 ${
                              activeCategory === categoryId
                                ? "bg-[#F4F6F8] text-brand-blue-700 font-semibold border-l-4"
                                : " bg-white"
                            }`}
                            onMouseEnter={() => setActiveCategory(categoryId)}
                          >
                            <div className="w-8 h-8 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                              {categoryInfo.image ? (
                                <img
                                  src={categoryInfo.image}
                                  alt={categoryInfo.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                  <span className="text-xs text-gray-500">
                                    No img
                                  </span>
                                </div>
                              )}
                            </div>
                            <span className="font-medium flex-1">
                              {categoryInfo.name}
                            </span>
                            <svg
                              className="w-4 h-4 text-gray-400"
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
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Products Content */}
                <div className="flex-1 p-6">
                  {/* Related Products Section - Flex ngang giống UI */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-6">
                      {getRelatedProducts(activeCategory).map(
                        (product, index) => (
                          <div
                            key={product.id}
                            className="group cursor-pointer flex items-center gap-2 p-2 rounded-lg bg-white shadow-xs"
                          >
                            {/* Hình ảnh bên trái */}
                            <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 p-1">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            {/* Tên sản phẩm bên phải */}
                            <p className=" font-medium flex-1 line-clamp-1">
                              {product.name}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="border-t border-gray-200 mb-6"></div>

                  {/* Best Selling Products Section */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Sản Phẩm Bán Chạy
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                      Xem tất cả
                      <svg
                        className="w-4 h-4"
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
                  </div>

                  {/* Products Grid - 5 sản phẩm theo hàng ngang */}
                  <div className="grid grid-cols-5 gap-3">
                    {getBestSellingProducts(activeCategory).map((product) => (
                      <div
                        key={product.id}
                        className="group shadow-sm bg-white border border-gray-100 rounded-lg p-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        {/* Product Image */}
                        <div className="aspect-square bg-gray-50 rounded-lg mb-2 overflow-hidden p-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="">
                          <h4 className="font-semibold mb-1 line-clamp-2">
                            {product.name}
                          </h4>

                          {/* Price */}
                          <div className="space-y-1">
                            <div className="text-brand-error font-bold text-xl">
                              {formatPrice(product.salePrice)} đ
                            </div>
                            {product.originalPrice > product.salePrice && (
                              <div className="text-sm text-input-disble line-through">
                                {formatPrice(product.originalPrice)} đ
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={feature.icon} alt={feature.text} />
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
