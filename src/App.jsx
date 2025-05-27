import AddressBanner from "./components/atoms/AddressBanner";
import ProductFilter from "./components/atoms/ProductFilter";
import Layout from "./components/layouts/Layout";
import FeaturesProduct from "./components/molecules/FeaturesProduct"; // Sửa lỗi chính tả

function App() {
  return (
    <>
      <Layout>
        <FeaturesProduct />
        <ProductFilter />
        <AddressBanner />
      </Layout>
    </>
  );
}

export default App;
