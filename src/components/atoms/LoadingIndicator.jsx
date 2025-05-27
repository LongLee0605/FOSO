import React, { memo } from "react";

const LoadingIndicator = memo(({ isVisible, className = "" }) => {
  if (!isVisible) return null;

  return (
    <div className={`flex justify-center items-center py-8 ${className}`}>
      <div className="flex items-center gap-3 text-gray-500">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-brand-blue-500 rounded-full animate-spin"></div>
        <span className="text-sm">Đang tải thêm sản phẩm...</span>
      </div>
    </div>
  );
});

LoadingIndicator.displayName = "LoadingIndicator";

export default LoadingIndicator;
