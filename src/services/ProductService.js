import { productsData } from "../data";

export const fetchProducts = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      data: productsData.products,
    };
    /*
    const response = await fetch('API Link');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      success: true,
      data: data.products
    };
    */
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const result = await fetchProducts();
    if (result.success) {
      const filteredProducts = result.data.filter(
        (product) => product.category === category
      );
      return {
        success: true,
        data: filteredProducts,
      };
    }
    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
};
