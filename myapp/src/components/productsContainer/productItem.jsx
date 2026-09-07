import { Link, useNavigate } from "react-router";
import styles from "./productItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const ProductItem = ({ product }) => {
  const { brand, category, id, price, rating, title, description, thumbnail } =
    product;

  const navigate = useNavigate();
  const { addToCart, isInCart, deleteFromCart } = useContext(CartContext);

  const inCart = isInCart(id);

  const isLoggedIn = localStorage.getItem("auth-user");

  const onAddtoCart = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      addToCart(product);
    } else {
      navigate("/login");
    }
  };
  const onRemoveFromCart = (e) => {
    e.preventDefault();
    deleteFromCart(id);
  };
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
          {!inCart && (
            <button onClick={onAddtoCart} className={styles.cartBtn}>
              Add to Cart
            </button>
          )}
          {inCart && (
            <button onClick={onRemoveFromCart} className={styles.removeCartBtn}>
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
