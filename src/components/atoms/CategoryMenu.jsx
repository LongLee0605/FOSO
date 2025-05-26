import { iconBar, iconClock, iconHand, iconRefresh, iconTruck } from "../../assets/icons";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
AbstractRange;

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Về Chúng Tôi", "Bài Viết", "Catalog", "Liên Hệ"];

  const features = [
    { icon: iconClock, text: "Hỗ trợ 24/7" },
    { icon: iconHand, text: "Miễn Phí Vận Chuyển" },
    { icon: iconTruck, text: "Giao Hàng Nhanh 2h" },
    { icon: iconRefresh, text: "30 Ngày Đổi Trả" },
  ];

  return (
    <div>
      <div className="w-full max-w-pc mx-auto">
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
                {" "}
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
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-500 ease-in-out transform ${
                isOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <div className="py-2">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  Danh mục 1
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  Danh mục 2
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  Danh mục 3
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  Danh mục 4
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5">
            {categories.map((category, index) => (
              <a key={index} href="#" className="font-medium">
                {category}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={feature.icon} />
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
