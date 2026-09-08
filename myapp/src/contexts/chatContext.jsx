import { createContext, useRef, useState } from "react";

export const ChatContext = createContext();

const AI_KEY = "API_KEY";
const ChatProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const [chats, setChats] = useState([]);
  const [status, setStatus] = useState("");

  const listRef = useRef();

  const onChatInput = (value) => {
    setInput(value);
  };

  const onSendMessage = () => {
    const newMessage = {
      message: input,
      timestamp: Date.now(),
      id: parseInt(Math.random() * 1000000),
      sender: "me",
    };
    setChats((curr) => [...curr, newMessage]);
    sendAI(input);
    setInput("");
    setTimeout(() => {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }, 50);
  };

  const addAIChat = (AImessage) => {
    const newMessage = {
      message: AImessage,
      timestamp: Date.now(),
      id: parseInt(Math.random() * 1000000),
      sender: "bot",
    };
    setChats((curr) => [...curr, newMessage]);
    setTimeout(() => {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }, 50);
  };
  const sendAI = async (input) => {
    try {
      setStatus("loading");
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "x-goog-api-key": AI_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gemini-3.8-flash",
            input: input,
          }),
        },
      );
      const data = await res.json();
      if (res.status >= 200 && res.status < 400) {
        setStatus("");
        const messageResponse = data.steps[1].content[0].text;
        addAIChat(messageResponse);
        return;
      }
      throw res;
    } catch (e) {
      setStatus("error");
    }
  };
  return (
    <ChatContext
      value={{ listRef, status, chats, input, onSendMessage, onChatInput }}
    >
      {children}
    </ChatContext>
  );
};
export default ChatProvider;
