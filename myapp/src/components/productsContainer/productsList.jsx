import ProductItem from "./productItem";
import styles from "./productsList.module.css";

const ProductsList = ({ products, currFilter }) => {
  let visibleProducts =
    currFilter === "all"
      ? products
      : products.filter((i) => i.category === currFilter);
  return (
    <div className={styles.list}>
      {visibleProducts.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
