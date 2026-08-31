import "./practice.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import UsersList from "../../components/userList";
import Counter from "../../components/counter";
import FeedBacks from "../../components/feedbacks";
import Banner from "../../components/banner";

function PracticePage() {
  return (
    <div className="app">
      <Header />
      <UsersList />
      <Counter />
      <FeedBacks />
      <Banner />
      <Footer />
    </div>
  );
}
export default PracticePage;
