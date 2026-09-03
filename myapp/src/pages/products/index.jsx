import Footer from "../../components/footer";
import Header from "../../components/header";
import PageContainer from "../../components/pageContainer";
import ProductsContainer from "../../components/productsContainer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <PageContainer className={styles.page}>
      <h1 className={styles.title}>Latest Product</h1>
      <ProductsContainer />
    </PageContainer>
  );
};
export default ProductsPage;
