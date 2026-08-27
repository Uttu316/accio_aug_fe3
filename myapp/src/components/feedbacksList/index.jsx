import FeedbackCard from "./feedbackCard";
import styles from "./feedbacksList.module.css";

const FeedbacksList = ({ list }) => {
  const isEmpty = list.length === 0;
  return (
    <div className={styles.list}>
      {isEmpty && <p className={styles.empty}>No Feedback Available</p>}
      {!isEmpty &&
        list.map((item) => <FeedbackCard key={item.id} feedback={item} />)}
    </div>
  );
};
export default FeedbacksList;
