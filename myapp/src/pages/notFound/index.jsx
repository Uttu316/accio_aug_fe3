import { Link } from "react-router";
import styles from "./notFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>
          Oops! The page you are looking for does not exist or may have been
          moved. Let us help you get back on track.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            Go Home
          </Link>
          <Link to="/products" className={styles.btnSecondary}>
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
