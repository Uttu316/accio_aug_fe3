import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/productsContainer";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <h1>Latest Product</h1>
      <ProductsContainer />
      <Footer />
    </div>
  );
};
export default ProductsPage;
