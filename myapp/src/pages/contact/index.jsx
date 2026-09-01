import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a question about an order, a product or just want to say hello?
          Our team would love to hear from you and typically replies within 24
          hours.
        </p>
      </section>

      <section className={styles.layout}>
        <div className={styles.infoPanel}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div>
              <p className={styles.infoLabel}>Visit Us</p>
              <p className={styles.infoValue}>
                221 Market Street, Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>✉️</div>
            <div>
              <p className={styles.infoLabel}>Email Us</p>
              <p className={styles.infoValue}>support@myapp.com</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📞</div>
            <div>
              <p className={styles.infoLabel}>Call Us</p>
              <p className={styles.infoValue}>+1 (800) 555-0199</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🕐</div>
            <div>
              <p className={styles.infoLabel}>Working Hours</p>
              <p className={styles.infoValue}>
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat - Sun: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              className={styles.input}
              id="subject"
              type="text"
              placeholder="How can we help?"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Write your message here..."
            />
          </div>
          <button className={styles.submitBtn} type="button">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};
export default ContactPage;
