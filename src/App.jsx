import Layout from "./components/layouts/Layout";
import FeauturesProduct from "./components/molecules/FeauturesProduct";
import ProductFilter from "./components/atoms/ProductFilter";
import AddressBanner from "./components/atoms/AddressBanner";

function App() {
  return (
    <Layout>
      <FeauturesProduct />
      <ProductFilter />
      <AddressBanner />
    </Layout>
  );
}

export default App;
