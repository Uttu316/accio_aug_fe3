import { useNavigate } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./home.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>New Season 2026</span>
          <h1 className={styles.heroTitle}>
            Shop Smarter, Live Better Every Day
          </h1>
          <p className={styles.heroText}>
            Discover thousands of handpicked products across electronics,
            fashion, beauty and home essentials. Fast delivery, secure checkout
            and prices you will love.
          </p>
          <div className={styles.actions}>
            <button
              onClick={() => navigate("/products")}
              className={styles.btnPrimary}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
            alt="Modern retail storefront"
          />
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚚</div>
          <h3 className={styles.featureTitle}>Free Fast Shipping</h3>
          <p className={styles.featureText}>
            Enjoy free delivery on all orders above $50, shipped and delivered
            within 2 to 4 business days.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🔒</div>
          <h3 className={styles.featureTitle}>Secure Payments</h3>
          <p className={styles.featureText}>
            Your transactions are protected with bank grade encryption and
            trusted payment gateways.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>↩️</div>
          <h3 className={styles.featureTitle}>Easy Returns</h3>
          <p className={styles.featureText}>
            Changed your mind? Return any item within 30 days for a full, no
            questions asked refund.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>💬</div>
          <h3 className={styles.featureTitle}>24/7 Support</h3>
          <p className={styles.featureText}>
            Our friendly support team is available around the clock to help with
            any questions.
          </p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImage}
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500&q=80"
              alt="Electronics"
            />
            <p className={styles.categoryName}>Electronics</p>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImage}
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80"
              alt="Fashion"
            />
            <p className={styles.categoryName}>Fashion</p>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImage}
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
              alt="Beauty"
            />
            <p className={styles.categoryName}>Beauty</p>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImage}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
              alt="Home & Living"
            />
            <p className={styles.categoryName}>Home & Living</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default HomePage;
