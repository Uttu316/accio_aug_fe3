import ChatRoom from "../../components/chatRoom";
import PageContainer from "../../components/pageContainer";
import ChatProvider from "../../contexts/chatContext";
import styles from "./support.module.css";

const ChatSupportPage = () => {
  return (
    <PageContainer className={styles.page}>
      <section className={styles.wrapper}>
        <header className={styles.pageHeader}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            We're online
          </span>
          <h1 className={styles.title}>Customer Support</h1>
          <p className={styles.subtitle}>
            Chat with our support team. We usually reply within a few minutes.
          </p>
        </header>

        <ChatProvider>
          <ChatRoom />
        </ChatProvider>
      </section>
    </PageContainer>
  );
};
export default ChatSupportPage;
