import FeedbackCard from "./feedbackCard";
import styles from "./feedbacksList.module.css";

const FeedbacksList = ({ list, onEdit, onDelete }) => {
  const isEmpty = list.length === 0;
  return (
    <div className={styles.list}>
      {isEmpty && <p className={styles.empty}>No Feedback Available</p>}
      {!isEmpty &&
        list.map((item, index) => (
          <FeedbackCard
            onEdit={onEdit}
            onDelete={onDelete}
            key={item.id}
            feedback={item}
            index={index}
          />
        ))}
    </div>
  );
};
export default FeedbacksList;
