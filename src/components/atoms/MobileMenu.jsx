import React, { memo } from "react";
import Logo from "./Logo";
import { iconUserCircle } from "../../assets/icons";
import SearchBar from "./SearchBar";

const MobileMenu = memo(({ isOpen, onClose }) => {
  const categories = ["Về Chúng Tôi", "Bài Viết", "Catalog", "Liên Hệ"];
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-text-primary opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-4 ">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div>
                <Logo />
              </div>
              <div>
                <div className="flex items-center gap-2 hover:bg-brand-50 rounded-full px-2 py-1">
                  <div className="w-9 h-9">
                    <img src={iconUserCircle} />
                  </div>
                  <div className="font-medium whitespace-nowrap">Tài khoản</div>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto border-t border-b border-gray-100">
          <ul className="flex flex-col gap-4 px-3 py-10">
            {categories.map((category, index) => (
              <li key={index}>
                {" "}
                <a
                  href="#"
                  className="font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
