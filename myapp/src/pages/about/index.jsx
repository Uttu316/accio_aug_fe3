import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <h1 className={styles.title}>About My App</h1>
        <p className={styles.subtitle}>
          We are on a mission to make quality shopping accessible to everyone.
          Since 2018, we have connected millions of customers with the products
          they love at prices they can trust.
        </p>
      </section>

      <div className={styles.bannerWrap}>
        <img
          className={styles.banner}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
          alt="Our team at work"
        />
      </div>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>2M+</span>
          <span className={styles.statLabel}>Happy Customers</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>50K+</span>
          <span className={styles.statLabel}>Products Listed</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>120+</span>
          <span className={styles.statLabel}>Countries Served</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>4.9★</span>
          <span className={styles.statLabel}>Average Rating</span>
        </div>
      </section>

      <section className={styles.story}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.paragraph}>
          What started as a small team with a big idea has grown into a global
          marketplace trusted by shoppers around the world. We believe that
          great products should be easy to find, fairly priced and delivered
          with care.
        </p>
        <p className={styles.paragraph}>
          Every day we work with thousands of trusted sellers and brands to
          bring you a curated selection of goods, from everyday essentials to
          the latest innovations. Our commitment to quality and customer
          satisfaction sits at the heart of everything we do.
        </p>
      </section>

      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>What We Stand For</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌱</div>
            <h3 className={styles.valueTitle}>Sustainability</h3>
            <p className={styles.valueText}>
              We partner with eco conscious brands and use recyclable packaging
              to reduce our footprint on the planet.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3 className={styles.valueTitle}>Trust & Integrity</h3>
            <p className={styles.valueText}>
              Honest pricing, verified reviews and transparent policies keep our
              community coming back with confidence.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <h3 className={styles.valueTitle}>Innovation</h3>
            <p className={styles.valueText}>
              We continuously improve our platform to make discovering and
              buying products faster and smarter.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default AboutPage;
