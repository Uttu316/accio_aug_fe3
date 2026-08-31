import styles from "./feedbackForm.module.css";

const FeedbackForm = ({ data, onUpdate, editIndex, setData, onSave }) => {
  const onInput = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const isEditing = editIndex !== null;
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="username">Username</label>
        <input
          value={data.username}
          onChange={onInput}
          type="text"
          id="username"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input value={data.email} onChange={onInput} type="email" id="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input value={data.phone} onChange={onInput} type="tel" id="phone" />
      </div>
      <div className={styles.field}>
        <label htmlFor="category">Category</label>
        <select value={data.category} onChange={onInput} id="category">
          <option selected disabled>
            Select category
          </option>
          <option>Bug</option>
          <option>Payment</option>
          <option>Login</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="description">Description</label>
        <textarea
          value={data.description}
          onChange={onInput}
          id="description"
        ></textarea>
      </div>
      {!isEditing && (
        <button className={styles.saveBtn} onClick={onSave}>
          Save
        </button>
      )}
      {isEditing && (
        <button className={styles.saveBtn} onClick={onUpdate}>
          Update
        </button>
      )}
    </form>
  );
};
export default FeedbackForm;
