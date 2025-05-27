import { banner } from "../../assets/images";
import ProductCarousel from "../atoms/ProductCarousel";
import { fetchProducts } from "../../services/ProductService";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeaturesProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const result = await fetchProducts();

      if (result.success) {
        setProducts(result.data);
        setError(null);
      } else {
        setError(result.error);
      }

      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-600 text-lg">Lỗi: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-pc w-full mx-auto ">
      <div className="pt-4 pb-6 2xl:px-0 px-4">
        <div className="flex items-center gap-3">
          <p className="text-sm font-normal text-input-disble">Trang chủ</p>
          <MdKeyboardArrowRight />
          <a className="text-sm font-semibold text-brand-blue-700" href="#">
            Sản phẩm
          </a>
        </div>
      </div>
      <div>
        <img src={banner} />
      </div>
      <div className="bg-brand-blue-600">
        <ProductCarousel products={products} title="Sản phẩm nổi bật" />
      </div>
    </div>
  );
};

export default FeaturesProduct;
