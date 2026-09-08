import { useContext } from "react";
import { MdSend } from "react-icons/md";
import { ChatContext } from "../../contexts/chatContext";
import styles from "./chatFooter.module.css";

const ChatFooter = () => {
  const { input, onSendMessage, onChatInput } = useContext(ChatContext);

  return (
    <div className={styles.footer}>
      <div className={styles.inputWrap}>
        <textarea
          className={styles.textarea}
          placeholder="Write your message here..."
          value={input}
          onChange={(e) => onChatInput(e.target.value)}
          rows={1}
        />
        <button
          className={styles.sendBtn}
          onClick={onSendMessage}
          aria-label="Send message"
        >
          <MdSend />
        </button>
      </div>
      <p className={styles.hint}>
        Our team typically replies within a few minutes.
      </p>
    </div>
  );
};
export default ChatFooter;
