import { useContext } from "react";
import { Link } from "react-router";
import PageContainer from "../../components/pageContainer";
import { CartContext } from "../../contexts/cartContext";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart, cartSize, cartTotal, increaseCount, decreaseCount, clearCart } =
    useContext(CartContext);

  const isEmpty = cart.length === 0;

  return (
    <PageContainer className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={styles.pageTitle}>Cart</h1>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className={styles.layout}>
            <section className={styles.list}>
              {cart.map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                  onIncrease={() => increaseCount(item.id)}
                  onDecrease={() => decreaseCount(item.id)}
                />
              ))}
            </section>

            <CartSummary
              cartSize={cartSize}
              cartTotal={cartTotal}
              onClear={clearCart}
            />
          </div>
        )}
      </div>
    </PageContainer>
  );
};

const CartCard = ({ item, onIncrease, onDecrease }) => {
  const { title, description, price, brand, thumbnail, cartCount } = item;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={thumbnail} alt={title} />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.cardTitle}>{title}</h3>
          {brand && <span className={styles.brand}>{brand}</span>}
        </div>
        <p className={styles.cardDesc}>{description}</p>

        <div className={styles.cardFooter}>
          <span className={styles.price}>${price}</span>

          <div className={styles.counter}>
            <button
              className={styles.counterBtn}
              onClick={onDecrease}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className={styles.count}>{cartCount}</span>
            <button
              className={styles.counterBtn}
              onClick={onIncrease}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const CartSummary = ({ cartSize, cartTotal, onClear }) => {
  const shipping = cartTotal > 500 || cartTotal === 0 ? 0 : 25;
  const tax = +(cartTotal * 0.05).toFixed(2);
  const grandTotal = +(cartTotal + shipping + tax).toFixed(2);

  return (
    <aside className={styles.summary}>
      <h2 className={styles.summaryTitle}>Order Summary</h2>

      <div className={styles.summaryRow}>
        <span>Items</span>
        <span>{cartSize}</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Subtotal</span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div className={styles.summaryRow}>
        <span>Tax (5%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span>Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <button className={styles.payBtn}>Pay Now</button>
      <button className={styles.clearBtn} onClick={onClear}>
        Clear Cart
      </button>
    </aside>
  );
};

const EmptyCart = () => (
  <div className={styles.empty}>
    <div className={styles.emptyIcon}>🛒</div>
    <h2 className={styles.emptyTitle}>Your cart is empty</h2>
    <p className={styles.emptyText}>
      Looks like you haven&apos;t added anything yet.
    </p>
    <Link to="/products" className={styles.emptyBtn}>
      Browse Products
    </Link>
  </div>
);

export default CartPage;
