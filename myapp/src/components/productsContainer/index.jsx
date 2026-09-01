import { useEffect, useState } from "react";
import ProductsFilters from "./productsFilters";
import ProductsList from "./productsList";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  const [currFilter, setFilter] = useState("all");
  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasProducts = isDone && products.length !== 0;
  const noProducts = isDone && products.length === 0;

  return (
    <div className={styles.container}>
      {isLoading && <h2 className={styles.status}>Loading Products.....</h2>}
      {noProducts && <h2 className={styles.status}>Products not available</h2>}
      {isError && <h2 className={styles.status}>Something went wrong</h2>}
      {hasProducts && (
        <div>
          <ProductsFilters currFilter={currFilter} setFilter={setFilter} />
          <ProductsList currFilter={currFilter} products={products} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
