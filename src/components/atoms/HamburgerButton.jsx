import React, { memo } from "react";

const HamburgerButton = memo(({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
});

HamburgerButton.displayName = "HamburgerButton";

export default HamburgerButton;
