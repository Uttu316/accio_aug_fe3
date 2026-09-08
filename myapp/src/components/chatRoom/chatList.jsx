import { useContext } from "react";
import { MdChatBubbleOutline, MdErrorOutline } from "react-icons/md";
import ChatMessage from "./chatMessage";
import { ChatContext } from "../../contexts/chatContext";
import styles from "./chatList.module.css";

const ChatList = () => {
  const { chats, status, listRef } = useContext(ChatContext);
  const isEmpty = chats.length === 0;
  const isLoading = status === "loading";
  const isError = status === "error";

  return (
    <div className={styles.list} ref={listRef}>
      {isEmpty && !isLoading && !isError && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <MdChatBubbleOutline />
          </div>
          <p className={styles.emptyTitle}>No messages yet</p>
          <p className={styles.emptyText}>
            Please let us know your query below and we'll help you out.
          </p>
        </div>
      )}

      {!isEmpty &&
        chats.map((item) => <ChatMessage chatInfo={item} key={item.id} />)}

      {isLoading && (
        <div className={styles.botStatusRow}>
          <div className={styles.avatar}>
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png"
              alt="Support avatar"
            />
          </div>
          <div className={styles.typingBubble} aria-label="Support is typing">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      )}

      {isError && (
        <div className={styles.botStatusRow}>
          <div className={styles.avatar}>
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_3.png"
              alt="Support avatar"
            />
          </div>
          <div className={styles.errorBubble}>
            <MdErrorOutline className={styles.errorIcon} />
            <span>
              Something went wrong while reaching support. Please try sending
              your message again.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
