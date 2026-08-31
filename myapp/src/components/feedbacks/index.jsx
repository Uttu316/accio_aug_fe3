import { useState } from "react";
import FeedbackForm from "../feedbackForm";
import FeedbacksList from "../feedbacksList";
import styles from "./feedbacks.module.css";

const FeedBacks = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    category: "",
    description: "",
  });

  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const validationChecks = (e) => {
    e.preventDefault();
    if (
      !data.email ||
      !data.description ||
      !data.phone ||
      !data.username ||
      !data.category
    )
      return false;
    return true;
  };

  const resetform = () => {
    setData({
      username: "",
      email: "",
      phone: "",
      category: "",
      description: "",
    });
  };

  const onSave = (e) => {
    if (!validationChecks(e)) return;
    const feedback = {
      ...data,
      timestamp: Date.now(),
      id: parseInt(Math.random() * 1000000),
    };
    setList((curr) => [...curr, feedback]);
    resetform();
  };

  const onDelete = (id) => {
    let remainingItems = list.filter((i) => i.id !== id);
    setList(remainingItems);
  };

  const onEdit = (feedback, index) => {
    setEditIndex(index);
    setData(feedback);
  };

  const onUpdate = (e) => {
    if (!validationChecks(e)) return;

    setList((curr) => {
      let editItem = curr[editIndex];
      curr[editIndex] = { ...editItem, ...data };
      return curr;
    });

    setEditIndex(null);
    resetform();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feedback Management System</h2>
      <FeedbackForm
        editIndex={editIndex}
        onSave={onSave}
        data={data}
        setData={setData}
        onUpdate={onUpdate}
      />
      <FeedbacksList list={list} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default FeedBacks;
