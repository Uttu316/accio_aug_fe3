import ChatFooter from "./chatFooter";
import ChatList from "./chatList";
import ChatFaqs from "./chatFaqs";
import styles from "./chatRoom.module.css";

const ChatRoom = () => {
  return (
    <div className={styles.room}>
      <div className={styles.roomHeader}>
        <div className={styles.agent}>
          <div className={styles.agentAvatar}>
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png"
              alt="Support agent"
            />
            <span className={styles.statusDot} />
          </div>
          <div>
            <p className={styles.agentName}>Support Team</p>
            <p className={styles.agentStatus}>Active now</p>
          </div>
        </div>
      </div>

      <ChatList />
      <ChatFooter />
      <ChatFaqs />
    </div>
  );
};
export default ChatRoom;
