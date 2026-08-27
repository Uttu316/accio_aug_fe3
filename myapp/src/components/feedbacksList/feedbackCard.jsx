import styles from "./feedbackCard.module.css";

const FeedbackCard = ({ feedback }) => {
  const { timestamp, username, email, phone, description, category } = feedback;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.category}>{category}</span>
        <span className={styles.timestamp}>
          {new Date(timestamp).toLocaleString()}
        </span>
      </div>
      <p className={styles.username}>{username}</p>
      <p className={styles.contact}>{email}</p>
      <p className={styles.contact}>{phone}</p>
      <p className={styles.description}>{description}</p>

      <div className={styles.actions}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
};

export default FeedbackCard;
