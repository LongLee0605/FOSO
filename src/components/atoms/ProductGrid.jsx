import React, { memo } from "react";
import ProductCard from "../../components/atoms/ProductCard";

const ProductGrid = memo(({ products }) => (
  <div className="grid grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
));

ProductGrid.displayName = "ProductGrid";

export default ProductGrid;
