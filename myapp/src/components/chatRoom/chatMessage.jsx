import styles from "./chatMessage.module.css";

const formatTimestamp = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  const time = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  if (isToday) return time;

  const day = date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
  return `${day}, ${time}`;
};

const ChatMessage = ({ chatInfo }) => {
  const { message, timestamp, sender } = chatInfo;
  let user = localStorage.getItem("auth-user");
  user = user ? JSON.parse(user) : null;

  const { firstName } = user || {};

  const isBot = sender !== "me";
  const name = isBot ? "Support" : firstName || "You";

  return (
    <div className={`${styles.row} ${isBot ? styles.botRow : styles.meRow}`}>
      <div className={styles.avatar}>
        <img
          src={
            isBot
              ? "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png"
              : "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_5.png"
          }
          alt={`${name} avatar`}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.name}>{name}</span>
          <span className={styles.time}>{formatTimestamp(timestamp)}</span>
        </div>
        <div
          className={`${styles.bubble} ${isBot ? styles.botBubble : styles.meBubble}`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
