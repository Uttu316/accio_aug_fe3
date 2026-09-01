import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/productsContainer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <h1 className={styles.title}>Latest Product</h1>
      <ProductsContainer />
      <Footer />
    </div>
  );
};
export default ProductsPage;
