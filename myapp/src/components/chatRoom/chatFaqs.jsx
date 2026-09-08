import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import styles from "./chatFaqs.module.css";

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express options are available at checkout and typically arrive within 1-2 business days.",
  },
  {
    q: "What is your return policy?",
    a: "You can return most items within 30 days of delivery for a full refund, provided they are unused and in original packaging.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive an email with a tracking link. You can also view tracking details in your account under Orders.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. Approved refunds are processed to your original payment method within 5-7 business days after we receive the returned item.",
  },
];

const ChatFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((curr) => (curr === index ? null : index));
  };

  return (
    <div className={styles.faqs}>
      <h3 className={styles.heading}>Frequently Asked Questions</h3>
      <div className={styles.accordion}>
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            >
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
              >
                <span>{faq.q}</span>
                <MdExpandMore
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                />
              </button>
              <div
                className={styles.answerWrap}
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ChatFaqs;
