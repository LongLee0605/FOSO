import React, { memo } from "react";

const EmptyState = memo(({ onClearFilters }) => (
  <div className="text-center py-12">
    <div className="mb-4">
      <svg
        className="mx-auto h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H6a1 1 0 00-1 1v1M4 13v-2a1 1 0 011-1h2m0 0V9a1 1 0 011-1h4a1 1 0 011 1v1m0 0h2"
        />
      </svg>
    </div>
    <h3 className="text-lg font-medium mb-2">Không tìm thấy sản phẩm</h3>
    <p className="mb-4">Thử thay đổi bộ lọc để xem thêm sản phẩm</p>
    <button
      onClick={onClearFilters}
      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
    >
      Xóa tất cả bộ lọc
    </button>
  </div>
));

EmptyState.displayName = "EmptyState";

export default EmptyState;
