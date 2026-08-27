import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import UsersList from "./components/userList";
import Counter from "./components/counter";
import FeedBacks from "./components/feedbacks";

function App() {
  return (
    <div className="app">
      <Header />
      <UsersList />
      <Counter />
      <FeedBacks />
      <Footer />
    </div>
  );
}
export default App;
