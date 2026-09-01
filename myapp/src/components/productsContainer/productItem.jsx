import { Link } from "react-router";
import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { brand, category, id, price, rating, title, description, thumbnail } =
    product;
  return (
    <Link className={styles.cardLink} to={`/product/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={thumbnail} alt={title} />
        </div>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <span className={styles.rating}>★ {rating}</span>
        </div>
        <div className={styles.meta}>
          {brand && <span className={styles.tag}>{brand}</span>}
          <span className={styles.tag}>{category}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button className={styles.cartBtn}>Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
