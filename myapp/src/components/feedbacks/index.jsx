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

  const onSave = (e) => {
    e.preventDefault();
    if (
      !data.email ||
      !data.description ||
      !data.phone ||
      !data.username ||
      !data.category
    )
      return;
    const feedback = {
      ...data,
      timestamp: Date.now(),
      id: parseInt(Math.random() * 1000000),
    };
    setList((curr) => [...curr, feedback]);
    setData({
      username: "",
      email: "",
      phone: "",
      category: "",
      description: "",
    });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feedback Management System</h2>
      <FeedbackForm onSave={onSave} data={data} setData={setData} />
      <FeedbacksList list={list} />
    </div>
  );
};

export default FeedBacks;
